import { getSessionToken, readBody } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = await readBody(req);

  if (!body.password || body.password !== process.env.AUTH_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = getSessionToken();
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  res.setHeader('Set-Cookie',
    `knitting_session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
  );
  return res.json({ ok: true });
}
