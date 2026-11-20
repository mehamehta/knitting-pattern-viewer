import { list, put, del } from '@vercel/blob';
import { isAuthed, readBody } from './_auth.js';

const BLOB_PATH = 'knitting/progress.json';

// Public URL of the progress blob, built from the store id in the read-write
// token (vercel_blob_rw_<storeId>_<secret>). Saves a list() round trip.
function directBlobUrl() {
  const storeId = (process.env.BLOB_READ_WRITE_TOKEN || '').split('_')[3];
  if (!storeId) return null;
  return `https://${storeId.toLowerCase()}.public.blob.vercel-storage.com/${BLOB_PATH}`;
}

async function findBlobUrl() {
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  return blobs.length > 0 ? blobs[0].url : null;
}

// Query string + no-store so we never get a stale CDN copy after a save
function fetchFresh(url) {
  return fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
}

async function getProgress() {
  const direct = directBlobUrl();
  if (direct) {
    const resp = await fetchFresh(direct);
    if (resp.ok) return await resp.json();
  }
  // Direct URL missing or wrong — fall back to looking the blob up
  const url = await findBlobUrl();
  if (!url) return {};
  const resp = await fetchFresh(url);
  if (!resp.ok) return {};
  return await resp.json();
}

async function deleteAndPut(url, data) {
  if (url) {
    try { await del(url); } catch { /* stale blob, proceed with put */ }
  }
  await put(BLOB_PATH, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    cacheControlMaxAge: 60,
  });
}

async function saveProgress(data) {
  const direct = directBlobUrl();
  if (direct) {
    try { return await deleteAndPut(direct, data); } catch { /* fall back to list() */ }
  }
  await deleteAndPut(await findBlobUrl(), data);
}

export default async function handler(req, res) {
  if (!isAuthed(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    try {
      const data = await getProgress();
      return res.json(data);
    } catch (e) {
      return res.json({});
    }
  }

  if (req.method === 'POST') {
    try {
      const body = await readBody(req);
      await saveProgress(body);
      return res.json({ ok: true });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
