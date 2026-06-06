import { list, put, del } from '@vercel/blob';
import { isAuthed, readBody } from './_auth.js';

const BLOB_PATH = 'knitting/progress.json';

async function getProgress() {
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  if (blobs.length === 0) return {};
  const resp = await fetch(blobs[0].url, {
    headers: { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
  });
  if (!resp.ok) return {};
  return await resp.json();
}

async function saveProgress(data) {
  // Delete existing blob then re-put to guarantee overwrite
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  if (blobs.length > 0) await del(blobs[0].url);
  await put(BLOB_PATH, JSON.stringify(data), {
    access: 'private',
    addRandomSuffix: false,
  });
}

export default async function handler(req, res) {
  if (!isAuthed(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

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
