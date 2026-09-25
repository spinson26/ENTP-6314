// Pull recent negative Steam reviews for sports-management games.
const fs = require('fs');
const APPS = {
  'Madden NFL 26': 3230400,
  'Football Manager 26': 3551340,
  'Out of the Park Baseball 26': 3116890,
  'NBA 2K26': 3472040,
  'Front Office Football Nine': 2633170,
  'Franchise Hockey Manager 12': 3739670,
};
const SINCE = Math.floor(new Date('2025-03-25').getTime() / 1000);

(async () => {
  const out = [];
  for (const [name, id] of Object.entries(APPS)) {
    let cursor = '*', kept = 0, scanned = 0;
    for (let page = 0; page < 6; page++) {
      const url = `https://store.steampowered.com/appreviews/${id}?json=1&filter=recent&language=english&review_type=negative&purchase_type=all&num_per_page=100&cursor=${encodeURIComponent(cursor)}`;
      let d;
      try { d = await fetch(url).then(r => r.json()); } catch (e) { break; }
      if (!d.reviews || !d.reviews.length) break;
      for (const r of d.reviews) {
        scanned++;
        if (r.timestamp_created < SINCE) continue;
        kept++;
        out.push({
          game: name,
          appid: id,
          date: new Date(r.timestamp_created * 1000).toISOString().slice(0, 10),
          hours: Math.round((r.author.playtime_forever || 0) / 60),
          text: r.review.replace(/\s+/g, ' ').trim(),
          votes_up: r.votes_up,
          url: `https://steamcommunity.com/profiles/${r.author.steamid}/recommended/${id}/`,
        });
      }
      cursor = d.cursor;
      if (!cursor) break;
    }
    console.error(`${name}: scanned ${scanned}, kept ${kept}`);
  }
  out.sort((a, b) => b.votes_up - a.votes_up);
  fs.writeFileSync('steam-reviews.json', JSON.stringify(out, null, 1));
  console.error('TOTAL', out.length);
  const RE = /franchise|negotiat|contract|trade|cap |general manager|\bGM\b|myleague|mygm|owner mode|front office/i;
  const rel = out.filter(r => RE.test(r.text));
  console.error('RELEVANT (franchise/contract/trade):', rel.length);
  fs.writeFileSync('steam-relevant.json', JSON.stringify(rel, null, 1));
})();
