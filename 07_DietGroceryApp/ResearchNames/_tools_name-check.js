// Screens candidate app names against: Apple App Store, Google Play, USPTO trademarks, .com/.app registries.
const fs = require('fs');
const names = process.argv[2] ? fs.readFileSync(process.argv[2], 'utf8').split(/\r?\n/).map(s => s.trim()).filter(Boolean) : [];
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function get(url, opts = {}) {
  for (let i = 0; i < 3; i++) {
    try { const r = await fetch(url, { ...opts, signal: AbortSignal.timeout(25000) }); return r; } catch (e) { await sleep(1500); }
  }
  return null;
}

async function apple(name) {
  const r = await get(`https://itunes.apple.com/search?term=${encodeURIComponent(name)}&entity=software&country=us&limit=50`);
  if (!r || !r.ok) return { err: true };
  const j = await r.json();
  const n = norm(name);
  const hits = j.results.filter(a => norm(a.trackName).startsWith(n) || norm(a.trackName.split(/[:\-–—|]/)[0]) === n);
  return { exact: hits.map(a => `${a.trackName} (${a.sellerName})`) };
}

async function play(name) {
  const r = await get(`https://play.google.com/store/search?q=${encodeURIComponent(name)}&c=apps&hl=en_US&gl=US`);
  if (!r || !r.ok) return { err: true };
  const html = await r.text();
  const n = norm(name);
  // App titles appear in aria/label spans; grab candidate strings and keep those whose normalized form starts with the name
  const ids = [...new Set([...html.matchAll(/details\?id=([A-Za-z0-9_.]+)/g)].map(m => m[1]))];
  const titles = new Set();
  if (ids.length) for (const m of html.matchAll(/>([^<>]{2,80})</g)) {
    const t = m[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim();
    if (/Android Apps on Google Play/.test(t)) continue;
    const nt = norm(t.split(/[:|–—]| - /)[0]);
    if (nt === n || norm(t).startsWith(n)) titles.add(t);
  }
  for (const id of ids) if (norm(id).includes(n)) titles.add('id:' + id);
  return { exact: [...titles].slice(0, 6) };
}

async function uspto(name) {
  const q = { query: { bool: { must: [{ bool: { should: [{ query_string: { query: `"${name}"`, default_operator: 'AND', fields: ['wordmark'] } }, { query_string: { query: norm(name), default_operator: 'AND', fields: ['wordmark'] } }] } }] } }, size: 50, _source: ['wordmark', 'alive', 'ownerName', 'internationalClass', 'goodsAndServices'] };
  const r = await get('https://tmsearch.uspto.gov/prod-stage-v1-0-0/tmsearch', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(q) });
  if (!r || !r.ok) return { err: true };
  const j = await r.json();
  const n = norm(name);
  const live = (j.hits?.hits || []).map(h => h.source).filter(s => s.alive && s.wordmark && norm(s.wordmark) === n);
  return { live: live.map(s => `${s.wordmark} [${(s.internationalClass || []).join(',')}] ${s.ownerName ? (Array.isArray(s.ownerName) ? s.ownerName[0] : s.ownerName) : ''}`.trim()) };
}

async function rdap(domain) {
  const tld = domain.split('.').pop();
  const base = tld === 'com' ? 'https://rdap.verisign.com/com/v1/domain/' : 'https://pubapi.registry.google/rdap/domain/';
  const r = await get(base + domain);
  if (!r) return '?';
  return r.status === 404 ? 'free' : r.status === 200 ? 'taken' : String(r.status);
}

module.exports = { apple, play, uspto, rdap, sleep, norm };
if (require.main === module) (async () => {
  const out = [];
  for (const name of names) {
    const n = norm(name);
    const [a, p, t, com, app, getcom] = await Promise.all([apple(name), play(name), uspto(name), rdap(n + '.com'), rdap(n + '.app'), rdap('get' + n + '.com')]);
    const row = { name, apple: a, play: p, uspto: t, com, app, getcom };
    out.push(row);
    console.log(`${name.padEnd(16)} AS:${a.err ? 'ERR' : a.exact.length} GP:${p.err ? 'ERR' : p.exact.length} TM:${t.err ? 'ERR' : t.live.length} .com:${com} .app:${app} get.com:${getcom}`);
    await sleep(400);
  }
  fs.writeFileSync(process.argv[3], JSON.stringify(out, null, 1));
})();
