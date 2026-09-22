# Competitor Teardown — 9 Apps

**Prepared:** September 22, 2026
**Method:** Prices taken from each company's own pricing page where one exists and is readable; otherwise from the app's App Store listing, which shows in-app purchase prices directly from Apple. Complaints come from the 479 critical App Store reviews (≤3★, since March 22, 2025) collected in [appstore-reviews-2025-2026.json](appstore-reviews-2025-2026.json).

**Two standing caveats:**
- **Complaints are paraphrased, not quoted.** I don't reproduce other people's writing verbatim. Each one carries the app, star rating, date and reviewer handle so you can find the original — the exact text of all 479 is in the JSON file above, ready to quote in your coursework.
- **Anything I inferred rather than read is tagged `[UNVERIFIED]`.**

---

## Master comparison table

| App | Price (from source) | Three core features | Target customer | Funding / ownership | Top 3 complaints |
|---|---|---|---|---|---|
| **MyFitnessPal** | Premium **$19.99/mo** or **$79.99/yr**, 7-day trial; free tier exists — [pricing page](https://www.myfitnesspal.com/premium) | 1. Food logging w/ barcode + voice 2. Custom macro goals 3. Recipes, meal planner, AI photo logging | Mass-market calorie counters; the default first app | Under Armour bought for **$475M (2015)**, sold to **Francisco Partners for $345M (Dec 2020)** — $215M at close + up to $130M earnout ([Francisco Partners](https://www.franciscopartners.com/media/francisco-partners-announces-acquisition-of-myfitnesspal-from-under-armour), [Under Armour 8-K](https://www.sec.gov/Archives/edgar/data/1336917/000133691720000081/ua-20201218.htm)) | Paywalling of formerly-free basics (40%); redesign removed what users relied on (40%); barcode/AI data inaccuracy (36%) |
| **MacroFactor** | **$11.99/mo**, **$47.99/6mo**, **$71.99/yr**, **$89.99/yr** bundle w/ Workouts; 7-day trial; **no free tier** — [App Store](https://apps.apple.com/us/app/id1553503471), [Workouts price page](https://macrofactor.com/workouts/price/) | 1. Adaptive metabolism algorithm 2. Verified food database + barcode 3. Weekly coached macro adjustments | Serious lifters, macro-literate users | **Stronger By Science Technologies LLC**; no outside funding found `[UNVERIFIED]` | Database/import accuracy (42%); paywall with no free tier (33%); unannounced UI changes (11%) |
| **eMeals** | From **$4.99/mo on 12-month**; **$37.50/3mo**; 14-day trial; App Store IAPs $37.49–$99.99 — [emeals.com](https://emeals.com/), [App Store](https://apps.apple.com/us/app/id575756462) | 1. 15 diet-specific weekly plans 2. Auto grocery list 3. Ordering via Walmart, Kroger, Instacart, Shipt, AmazonFresh, Albertsons, Safeway, H-E-B | Busy families who want dinner solved | **eMeals, Inc.** (Birmingham AL / Atlanta); no funding raised per Crunchbase `[UNVERIFIED — secondary source]` | Subscription terms / no refunds (52%); grocery hand-off failures (38%); bland, limited recipes (34%) |
| **Mealime** | **Shutting down Oct 21, 2026.** Pro subscribers will not be charged again; data deleted at closure — [closing notice](https://www.mealime.com/closing) | 1. 200+ allergy/dislike personalization options 2. Auto-sorted grocery lists 3. 30-minute recipes | Weeknight cooks with dietary restrictions | Acquired by **Albertsons Companies (2021)**, terms undisclosed; folded into "Meals Hub" inside Albertsons/Safeway/Vons/Jewel-Osco apps ([Businesswire](https://www.businesswire.com/news/home/20211214005922/en/)) | Shutdown + forced move into a grocery chain's app (58% of its recent reviews); no recipe export, data deleted; replacement stores not local |
| **Fitia** | **$19.99/mo**, $23.99/3mo, $35.99/6mo, **$53.99–$59.99/yr**, $89.99/yr family — [App Store](https://apps.apple.com/us/app/id1448277011) | 1. Photo/voice/text calorie logging 2. Auto meal plans 3. Auto grocery list + AI coach | Spanish-speaking + US budget-conscious trackers | **Nutrition Technologies**, Lima, Peru; **Y Combinator**, $125K seed (2021); ~$3.5M revenue 2024 `[UNVERIFIED — Latka/Tracxn secondary]` | Trial→charge surprises and refusal of refunds (36%); photo estimates wrong (19%); data loss/crashes (17%) |
| **Samsung Food** | **$6.99/mo** or **$59.99/yr** (Samsung Food+); large free tier — [App Store](https://apps.apple.com/us/app/id1133637674) | 1. 240k+ recipes, save from any site 2. Meal planning + nutrition scores 3. 23 retailer integrations across 4 regions | Recipe collectors in the Samsung appliance ecosystem | **Samsung** — acquired Whisk (2019), rebranded Samsung Food (Aug 2023); entity Foodient Ltd ([9to5Google](https://9to5google.com/2023/08/30/whisk-samsung-food-app-rebrand/)) | Recipe/collection management gaps (54%); iOS bugs and lost accounts (33%); ads and upsell (29%) |
| **MealPrepPro** | IAPs **$9.99 / $29.99 / $59.99 / $229.99**; 7-day trial — [App Store](https://apps.apple.com/us/app/id1249805978). Tier labels aren't stated; $229.99 is likely lifetime `[UNVERIFIED]` | 1. Macro-aware plans, 15+ diet types 2. Aisle-sorted grocery lists 3. Multi-user household plans | Gym-goers who batch-cook | **Nibble Apps Ltd**; indie, no funding found `[UNVERIFIED]` | Price vs. AI-generated value (58%); bland/AI-tasting recipes (37%); can't set macros; ignores stated exclusions |
| **Eat This Much** | IAPs **$8.99–$14.99/mo**, **$47.99–$84.99/yr**; free tier exists `[UNVERIFIED — site is JS-only and unreadable to this tool]` — [App Store](https://apps.apple.com/us/app/id981637806) | 1. Auto-generates plans to hit macro targets 2. Grocery lists + US/Canada delivery integration 3. Pantry + budget inputs | Macro-target dieters who don't want to log | **Eat This Much Inc.**, founder Louis DeMenthon; no funding data found `[UNVERIFIED]` | Nonsensical/repetitive generated plans (39%); advertised budget & pantry features not working (22%); refund requests (33%) |
| **Plan to Eat** | **$5.95/mo** or **$49/yr**, 14-day trial, no card required — [plantoeat.com](https://www.plantoeat.com/) | 1. Recipe clipper from any site 2. Planning calendar 3. Auto shopping list | Home cooks who own their recipes | **Independently owned, no investors**; founded by Clint & Lisa Bounds, Loveland CO ([about](https://www.plantoeat.com/about/story/)) | Shopping list can't be exported or filtered; free-to-paid transition cost users recipes; *(only 2 recent critical reviews — smallest complaint base here)* |

**App Store standing (for context):** Fitia 4.9★ (22k) · MacroFactor 4.8★ (22k) · Samsung Food 4.8★ (6.4k) · MyFitnessPal 4.7★ (2.4M) · Eat This Much 4.7★ (22k) · MealPrepPro 4.7★ (12k) · eMeals 4.6★ (53k) · Plan to Eat 4.84★ (6.1k). All of these are well-liked apps; what follows is the complaint layer underneath.

---

## Per-competitor detail: the three most common complaints

### MyFitnessPal — *the incumbent that's monetizing its own history*
1. **Formerly-free features moved behind the paywall** — 1★, Sept 19 2026 (*Xxxxxxggggxxaxxy*): barcode scanning used to be free, now it's paid, deleting the app. 1★, Sept 19 2026 (*Luke5t*): setting your own macros is now paid. ([reviews](https://apps.apple.com/us/app/id341232718?see-all=reviews))
2. **The redesign hid what people used** — 1★, Sept 15 2026 (*AshenPie*): the old screen let them pin saturated fat and fiber for cholesterol management; now those are several screens deep. 1★, Aug 30 2026 (*Ravi2020*): more taps, no dashboard customization.
3. **Accuracy and AI quality** — 3★, Sept 18 2026 (*Hnsptl*): paid extra for barcode scanning, frequently inaccurate. 2★, Sept 16 2026 (*BAK77!*): AI camera inaccurate, fiber wrong, photo entries can't be edited without redoing them.

### MacroFactor — *the best algorithm, the weakest data trust*
1. **Nutrition data disagrees with the label** — 1★, Sept 8 2026 (*feelingconcerned*): repeated discrepancies vs. package labels, including via barcode.
2. **Recipe import mangles macros** — 1★, Apr 6 2026 (*kodiec*): a 45g-protein recipe imported as 9g, with no way to reach support.
3. **No free tier at all** — 1★, Sept 12 2026 (*Mrbaconcakes*) and 1★, Sept 2 2026 (*Crazydick65341*): a long onboarding questionnaire ending in a hard ~$11.99/month wall.

### eMeals — *the best grocery integration, the worst subscription terms*
1. **No refunds, ever** — 2★, Aug 29 2026 (*Phatpatio*): planning and ordering work; the objection is a blanket no-refund policy. 1★, Aug 5 2026 (*Sarah-Beee*): charged after cancelling, refund refused.
2. **The grocery hand-off breaks** — 2★, Sept 13 2026 (*cleanmydesk*): items didn't appear in the Walmart app and the whole list vanished on return.
3. **Bland recipes and in-app commerce** — 3★, June 24 2026 (*BeeKrazy77*): limited, under-seasoned, "kid friendly" untested on kids. 1★, Sept 19 2026 (*Brilliant.girl*): wine-pairing suggestions that can't be turned off, plus brand placements.

### Mealime — *the closest thing to this project, being switched off*
1. **Being folded into a grocery chain** — 1★, Sept 5 2026 (*99Grumps*): wanted a meal planner, not a chain's app tracking purchases; Meals Hub makes you pick one chain.
2. **Loyal payers would have paid more to keep it** — 1★, Sept 3 2026 (*Csquaredbrady*): years-long Pro subscriber, no Albertsons banner nearby, would gladly have paid more for it standalone.
3. **No export; hand-copy or lose it** — 1★, Sept 17 2026 (*Lady Wynter*): copying saved recipes into a document before deletion.

> **Conflict worth noting:** Mealime's own [closing notice](https://www.mealime.com/closing) states Meals Hub works regardless of store proximity, while multiple reviewers in FL and elsewhere report they cannot use it without a nearby banner store. I could not resolve which is right without an Albertsons account. `[UNVERIFIED]`

### Fitia — *cheapest per-feature, most aggressive funnel*
1. **Trial-to-charge surprises** — 1★, Aug 26 2026 (*S brawl*): expected a 3-day trial, was charged $95, Apple refund refused.
2. **Photo estimation misses** — 1★, Aug 5 2026 (*curtis88*): confused chicken with fish, missed portion sizes, then deleted three days of entries.
3. **Free version is effectively a demo** — 1★, Sept 18 2026 (*Hajdjajcenckamanfkanxmckanv*, in Spanish): the app is useless unless you pay for Plus.

### Samsung Food — *the widest retailer coverage, the thinnest polish*
1. **Recipe/collection management gaps** — 2★, July 10 2026 (*2567 warrior princess*): can save 1,000+ recipes free, but can't delete or reorganize plan boxes properly.
2. **Platform bugs and lost accounts** — 1★, May 21 2026 (*Cschumer*): glitchy since the Whisk→Samsung Food change, won't load. 1★, Feb 24 2026 (*Phailbot*): account reported as never existing.
3. **The headline feature doesn't rank correctly** — 3★, Feb 1 2026 (*Indecho*): subscribed specifically for "use up your ingredients" recipe search; results come back effectively random.

### MealPrepPro — *the AI-slop problem in one app*
1. **Paying for what a free chatbot does** — 1★, July 15 2026 (*Chocokity1*): won't pay $9.99/month for AI-generated plans when ChatGPT or Gemini do it free.
2. **Recipes taste bad** — 1★, July 30 2026 (*Ospreyvision*): two meals cooked during the trial, one the worst they'd ever made. 2★, Sept 5 2026 (*SamLLLR23*): bland and obviously AI-written.
3. **Ignores the targets and exclusions you set** — 2★, Aug 30 2026 (*PatriciaVal*): asked about macros at onboarding then offers no macro setting. 2★, Apr 24 2026 (*spin0057*): "no beans" set, beans still appeared.

### Eat This Much — *right idea, unreliable execution*
1. **Generated plans defy common sense** — 1★, May 8 2026 (*billix0*): blocked recipes keep returning; two smoothies for breakfast, three for lunch; 6½ servings of yogurt in one sitting. 2★, June 28 2026 (*helloimarealist*): a lettuce-and-lemon wrap as dinner.
2. **Advertised features that don't work** — 3★, June 8 2026 (*AshleyNichol96*): pantry items no longer affect the plan. 1★, Apr 5 2026 (*InMarlton NJ*): can't find the advertised budget function, and quantities came out wrong.
3. **Cost of the resulting groceries** — 3★, May 26 2026 (*ConnorRealll*): even the "cheapest" generated plan produces an expensive shop; wants a hard budget setting.

### Plan to Eat — *small, liked, and deliberately narrow*
1. **List is trapped in the app** — 3★, Sept 19 2026 (*123Dana456*): no export to iOS Lists/Reminders, and every ingredient is force-added with no way to turn it off.
2. **Paywall transition cost people their recipes** — 1★, July 9 2026 (*MWDUIFLE*): was free until it wasn't; lost recipes as a result.
3. **No third complaint of substance** — only 2 critical reviews since March 2025, the lowest in this set. Read that as a satisfied niche, not as proof of quality `[UNVERIFIED]`.

---

## What does nobody serve well?

Nine apps, and the category still splits cleanly into two halves that don't touch: **apps that know your nutrition but can't buy food** (MyFitnessPal, MacroFactor, Fitia) and **apps that buy food but barely know your nutrition** (eMeals, Mealime, Plan to Eat, Samsung Food). The gaps live in between.

**1. Micronutrients → cart. Nobody closes this loop.**
MacroFactor tracks micronutrients but sells nothing; eMeals orders from eight retailers but plans by diet *label* ("keto," "heart healthy"), not by nutrient gap. **No app in this set says "you're short on potassium and vitamin D this week, here are three recipes that fix it, here's the cart."** That is the whole thesis of this project and it is genuinely unoccupied.

**2. Hard allergy and intolerance exclusion.**
Every app offers preset allergen checkboxes. None reliably handles *your* list. Mealime — the best of them at 200+ options — still had no slot for a cilantro allergy or a low-histamine diet, and users of both Mealime and MealPrepPro report disliked ingredients appearing in plans anyway. **An exclusion that actually holds, and is visibly verified at cart-build time, is a small feature with outsized trust value — and a safety issue for real allergies.**

**3. Retailer neutrality and data portability.**
Mealime's death is the proof: the one app that combined preferences, recipes and grocery lists well was bought by a grocery chain and is being switched off, with no export, pushing users into one chain's walled garden. Samsung Food has the same structural risk (an appliance maker's funnel). **Being retailer-neutral and letting people leave with their data is a position no well-funded competitor can copy, because their owners bought them for the lock-in.**

**4. GLP-1 users.**
31M US adults are currently on a GLP-1 (Section 1). **Not one of these nine apps is designed for suppressed appetite** — where the problem inverts from "eat less" to "hit protein and micronutrient adequacy on 1,200 calories." Reviews don't even mention it. `[UNVERIFIED — absence in reviews is weak evidence of absence in product; I did not audit each app's full feature list for GLP-1 modes]`

**5. Budget as a real constraint.**
Eat This Much advertises budget planning and users can't find it working; another calls the cheapest generated plan expensive to shop. eMeals markets savings but doesn't price a cart before you commit. **Nobody shows the actual dollar total of the week's plan before you buy, or re-plans to hit a number.**

**6. The household, not the individual.**
Every app plans for one eater. MyFitnessPal reviewers ask for per-person portions and half-servings for children; MealPrepPro's multi-user support is the exception and is thin. **One plan, one cart, different people's targets and dislikes — unsolved.**

**7. Pantry-aware planning that works.**
Two apps advertise it (Eat This Much's pantry, Samsung Food's "use up your ingredients") and reviewers of both say it doesn't function. **Waste reduction is a promised-but-undelivered feature category-wide.**

**8. Trust as a product feature.**
39% of all complaints in Section 2 were about money, not software: paywalls on formerly-free basics, refunds refused, cancellation friction, ads interrupting logging. **A plain price, an easy cancel, no ads mid-log, and export-on-demand would be differentiating in this category — which is a damning thing to be able to say.**

### The sharpest wedge

Combining 1, 2, 3 and 4: **a retailer-neutral app that plans to nutrient targets (not diet labels), enforces personal exclusions strictly, prices the cart before you buy, and is built for people eating less than they used to.** Mealime's users are looking for a new home *right now* — before October 21, 2026 — and the replacement being offered to them is a grocery chain's app. That is the most time-sensitive opening this research has found.

---

## Flags

| Item | Status |
|---|---|
| Mealime Pro's former price | ❌ Not verified — the pricing page is gone post-shutdown-notice. |
| MyFitnessPal "Premium+" tier | ⚠️ **Corrected in Section 5:** `/premium/plus` returns 404, but Apple's App Store listing names **Premium Plus** and describes "personalized meal plans, integrated grocery delivery." So MyFitnessPal does ship the full combined bundle; the retailer list remains unverified. |
| MealPrepPro tier names | ⚠️ App Store shows four prices without labels; the $229.99 being lifetime is `[UNVERIFIED]`. |
| Eat This Much free tier & pricing page | ⚠️ Their site requires JavaScript this tool can't run; prices come from the App Store instead. |
| Funding for MacroFactor, MealPrepPro, Eat This Much, eMeals | ⚠️ "No funding found" ≠ "no funding." Crunchbase/PitchBook pages are paywalled to this tool. |
| Fitia revenue (~$3.5M, 2024) | ⚠️ Secondary source (Latka), self-reported. |
| G2 / Capterra / Reddit for these nine | ❌ G2 and Reddit blocked; Capterra lists professional software, not these consumer apps. |
| Complaint percentages | ⚠️ Keyword matching over review text, spot-checked by reading. Magnitudes, not precision. Plan to Eat's base (n=2) is too small to generalize. |
