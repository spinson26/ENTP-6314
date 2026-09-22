const revs = require('./reviews.json');
const THEMES = {
  grocery: /grocery|shopping list|instacart|walmart|kroger|cart|delivery|store|shop\b/i,
  allergy_pref: /allerg|gluten|dairy|vegan|vegetarian|keto|dislike|preference|exclude|picky|intoleran|restriction/i,
  recipe_quality: /recipe|meal idea|variety|repetitive|same meals|boring|bland|ingredient/i,
  nutrition_accuracy: /calorie|macro|nutrition|database|barcode|scan|protein|inaccurate|wrong (info|data|count)|micronutrient|vitamin/i,
  customization: /customi[sz]|swap|portion|serving|family size|substitut|edit|flexib|rigid|lock/i,
  pricing: /subscription|paywall|premium|\$|price|pricing|charge|refund|cancel|free version|paid|billing|trial/i,
  ads: /\bads?\b|advertis|pop.?up/i,
  bugs_ui: /bug|crash|glitch|freeze|sync|update ruined|new (version|update)|redesign|log ?in|password|slow/i,
  ai: /\bA\.?I\.?\b|artificial intelligence|chatbot|auto.?generat/i,
};
const counts = {}, samples = {};
for (const t of Object.keys(THEMES)) { counts[t] = 0; samples[t] = []; }
for (const r of revs) {
  const blob = r.title + ' ' + r.text;
  for (const [t, re] of Object.entries(THEMES)) {
    if (re.test(blob)) { counts[t]++; samples[t].push(r); }
  }
}
const total = revs.length;
console.log('TOTAL recent (<=3 star, since 2025-03-22):', total);
for (const [t, c] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`\n=== ${t}: ${c} (${Math.round(c / total * 100)}%)`);
  const byApp = {};
  samples[t].forEach(r => byApp[r.app] = (byApp[r.app] || 0) + 1);
  console.log('   apps:', JSON.stringify(byApp));
}
const want = process.argv[2];
if (want) {
  console.log('\n---- samples for', want, '----');
  samples[want].slice(0, Number(process.argv[3] || 12)).forEach(r => {
    console.log(`\n[${r.app} | ${r.rating}* | ${r.date} | ${r.author}] ${r.title}\n${r.text.slice(0, 700)}`);
  });
}
