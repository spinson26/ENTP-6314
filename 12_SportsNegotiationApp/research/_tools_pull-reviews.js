// Pull App Store reviews (public RSS) for combined diet+grocery apps, keep recent low-star ones.
const fs = require('fs');

const APPS = {
  'eMeals': 575756462,
  'MealPrepPro': 1249805978,
  'Samsung Food': 1133637674,
  'Plan to Eat': 1215348056,
  'MyFitnessPal': 341232718,
  'Instacart': 545540151,
};

const EXTRA_SEARCH = ['eat this much', 'mealime', 'paprika recipe manager', 'macrofactor', 'cal ai calorie', 'fitia', 'sidechef', 'yummly'];
const SINCE = new Date('2025-03-22');

async function j(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'research-script' } });
  if (!r.ok) throw new Error(url + ' -> ' + r.status);
  return r.json();
}

(async () => {
  // resolve extra app ids
  for (const term of EXTRA_SEARCH) {
    try {
      const d = await j(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=software&country=us&limit=3`);
      for (const a of d.results) {
        if (!Object.values(APPS).includes(a.trackId) && a.userRatingCount > 500) {
          APPS[a.trackName.slice(0, 28)] = a.trackId;
          break;
        }
      }
    } catch (e) { console.error('search fail', term, e.message); }
  }

  const out = [];
  for (const [name, id] of Object.entries(APPS)) {
    let kept = 0, total = 0;
    for (let page = 1; page <= 8; page++) {
      let d;
      try {
        d = await j(`https://itunes.apple.com/us/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/json`);
      } catch (e) { break; }
      const entries = (d.feed && d.feed.entry) || [];
      if (!entries.length) break;
      for (const e of entries) {
        if (!e['im:rating']) continue;
        total++;
        const rating = Number(e['im:rating'].label);
        const when = new Date(e.updated.label);
        if (rating <= 3 && when >= SINCE) {
          kept++;
          out.push({
            app: name,
            appId: id,
            rating,
            date: e.updated.label.slice(0, 10),
            title: e.title.label,
            text: e.content.label.replace(/\s+/g, ' ').trim(),
            author: e.author.name.label,
            url: `https://apps.apple.com/us/app/id${id}?see-all=reviews`,
          });
        }
      }
    }
    console.error(`${name} (${id}): scanned ${total}, kept ${kept}`);
  }
  out.sort((a, b) => b.date.localeCompare(a.date));
  fs.writeFileSync('reviews.json', JSON.stringify(out, null, 1));
  console.error('TOTAL KEPT', out.length);
})();
