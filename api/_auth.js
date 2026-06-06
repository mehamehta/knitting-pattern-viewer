import crypto from 'crypto';

export function getSessionToken() {
  const password = process.env.AUTH_PASSWORD || '';
  return crypto.createHash('sha256').update(password + 'knitting_salt_2024').digest('hex');
}

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  for (const part of cookieHeader.split(';')) {
    const [key, ...vals] = part.trim().split('=');
    if (key) cookies[key.trim()] = vals.join('=').trim();
  }
  return cookies;
}

export function isAuthed(req) {
  const cookies = parseCookies(req.headers.cookie || '');
  return cookies.knitting_session === getSessionToken();
}

export function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(data)); } catch { resolve({}); }
    });
    req.on('error', reject);
  });
}
