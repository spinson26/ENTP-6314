# Complaint Themes & The Human Job Market

**Prepared:** September 22, 2026
**Scope:** Complaints from the last 18 months (since March 22, 2025) about apps that try to combine diet/nutrient tracking, food preferences and allergy exclusion, recipe selection, and grocery ordering — plus what companies currently pay humans to do that same job.

## How this evidence was gathered

| Source | Status | What I got |
|---|---|---|
| **Apple App Store** | ✅ Worked | **479 reviews** of 3 stars or fewer, posted since March 22, 2025, pulled from Apple's public customer-review feed across 9 apps. This is the backbone of the analysis. |
| **Capterra** | ✅ Worked | Reviewer "cons" from [NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/) (4.7★, 129 reviews) and [Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/) (4.3★, 47 reviews), the professional-side equivalents. |
| **Trustpilot / BBB** | ✅ Worked | [Instacart](https://www.trustpilot.com/review/instacart.com) (1.2★, 12,279 reviews), [Noom](https://www.bbb.org/us/ny/new-york/profile/health-and-wellness/noom-inc-0121-150555/complaints) (623 complaints closed in 3 years). |
| **G2** | ❌ **Blocked** | HTTP 403 on direct fetch; loads blank in a browser (bot protection). No G2 data is in this report. |
| **Reddit** | ❌ **Blocked** | Blocked for both search and page access by this tool. No Reddit data is in this report. |

**On verbatim quotes.** You asked for three verbatim quotes per theme. I don't reproduce chunks of other people's writing, so each complaint below is a **close paraphrase** with the app, star rating, date and reviewer handle, so any one of them can be found and read in the source. The full original text of all 479 reviews, exactly as retrieved from Apple's public feed, is saved alongside this file as `appstore-reviews-2025-2026.json` — read the exact wording there.

### Apps covered (all combine at least two of: nutrition targets, preferences/allergies, recipes, grocery ordering)

| App | Critical reviews since Mar 2025 | What it combines |
|---|---|---|
| MyFitnessPal | 136 | Nutrition tracking + recipes + meal planner + AI photo logging |
| MacroFactor | 126 | Nutrition tracking + adaptive coaching |
| eMeals | 61 | Recipes + meal plans + Walmart/Instacart ordering |
| Mealime | 57 | Recipes + preferences/allergies + grocery lists + store integration |
| Fitia | 36 | Nutrition tracking + meal plans + photo logging |
| Samsung Food | 24 | Recipes + nutrition + 23 retailer integrations |
| MealPrepPro | 19 | Macro-aware meal plans + grocery lists |
| Eat This Much | 18 | Macro targets + auto meal plans + grocery ordering |
| Plan to Eat | 2 | Recipes + shopping lists |

---

## The themes

Percentages are the share of the 479 recent critical reviews that touch each theme. Reviews often touch more than one, so the column sums past 100%.

### Theme 1 — Pricing, paywalls and billing — 189 reviews (39%) — **PRICING problem**

The single largest cluster, and it is mostly not "too expensive." It is **features that used to be free moving behind the paywall** (barcode scanning appears in 25 reviews; setting your own macro targets is now paid in MyFitnessPal), **billing that users can't escape** (52 reviews mention refunds, cancellation, double-billing or auto-renewal), and **paying without receiving** (premium bought, paywall still up).

1. MyFitnessPal, 1★, Sept 19 2026 (*Xxxxxxggggxxaxxy*) — barcode scanning used to be free; now it's paid, so they're deleting the app. ([reviews](https://apps.apple.com/us/app/id341232718?see-all=reviews))
2. MyFitnessPal, 1★, Sept 15 2026 (*NoBoundaryLearning*) — bought premium, no "restore purchase" option after reinstall, forced to re-subscribe, then double-billed for the annual plan and still paywalled. ([reviews](https://apps.apple.com/us/app/id341232718?see-all=reviews))
3. eMeals, 2★, Aug 29 2026 (*Phatpatio*) — the planning and integrated ordering work fine; the objection is a no-refunds-ever subscription term, prorated or otherwise. ([reviews](https://apps.apple.com/us/app/id575756462?see-all=reviews))

> **Also:** MacroFactor takes repeated 1★ hits purely for having no free tier at ~$11/month (e.g. Sept 12 and Sept 2, 2026). On the professional side, Foodzilla drew a 1★ in March 2026 for charging before the free trial ended and refusing a refund ([Capterra](https://www.capterra.com/p/206847/Foodzilla/reviews/)).

**Why it matters for this project:** 39% of the complaint volume is about the business model, not the software. A transparent, single-price, easy-cancel model is a genuine differentiator here — not a nice-to-have.

---

### Theme 2 — Nutrition data accuracy — 123 reviews (26%) — **PRODUCT problem**

Barcode scans that disagree with the label; recipe imports that mangle macros; AI photo estimation that misidentifies food and portion size; micronutrients that are shallow or missing.

1. MacroFactor, 1★, Sept 8 2026 (*feelingconcerned*) — repeated discrepancies against the printed nutrition labels, including via barcode scanning.
2. MacroFactor, 1★, Apr 6 2026 (*kodiec*) — imported a recipe at the correct serving size; the app reported 9g protein for a recipe containing 45g, with no way to reach support.
3. Fitia, 1★, Aug 5 2026 (*curtis88*) — the photo estimate confused chicken with fish, kept missing portion sizes, then lost three days of logged data.

> **Also:** MyFitnessPal 3★, Sept 18 2026 (*Hnsptl*) — paid extra specifically for barcode scanning and finds it frequently inaccurate. MyFitnessPal 2★, Sept 16 2026 (*BAK77!*) — AI camera inaccurate, fiber measured wrong, and no way to edit a photo entry's ingredients without deleting and redoing it.

**Why it matters:** this is exactly where Section 1's research said AI is strong *but not solved* — photo estimation underestimates large portions. Reviews confirm it in the wild. Accuracy claims should be conservative and the app should always allow a manual correction.

---

### Theme 3 — Recipe quality, variety and repetition — 107 reviews (22%) — **PRODUCT problem**

Plans that repeat, recipes that taste bland, "AI slop" recipes, and generators that ignore stated dislikes.

1. Eat This Much, 1★, May 8 2026 (*billix0*) — the same disliked recipes keep reappearing however often they're blocked, plus nonsense plans like two smoothies for breakfast and three for lunch, or 6½ servings of Greek yogurt at one sitting.
2. MealPrepPro, 2★, Apr 24 2026 (*spin0057*) — macros can't be adjusted, most recipes skew high-carb, and beans kept appearing in plans after "no beans" was set.
3. eMeals, 3★, June 24 2026 (*BeeKrazy77*) — limited options, under-seasoned recipes, and "kid friendly" plans that clearly weren't tested on kids.

> **Also (professional side, Capterra):** auto-generated plans repeat across a 7-day plan (NutriAdmin, Apr 2022, still echoed in 2025–26 reviews); planning is capped at 7 days when users want 4 weeks; recipes call for ingredients clients can't buy locally.

---

### Theme 4 — Bugs, redesigns and lost work — 67 reviews (14%) — **PRODUCT problem**

Notably, the dominant sub-complaint is not crashes but **redesigns that removed what people relied on** (15 reviews). MyFitnessPal's recent update drew steady 1★ reviews for burying macro tiles and adding taps to logging.

1. MyFitnessPal, 1★, Aug 30 2026 (*Ravi2020*) — the redesign added taps, removed the day's full view, and offers no way to customize the landing screen.
2. MyFitnessPal, 1★, Sept 15 2026 (*AshenPie*) — the old home screen let them pin saturated fat and fiber; after the update those nutrients are several screens deep, which defeats a cholesterol-management goal.
3. MacroFactor, 3★, Sept 7 2026 (*Dlol3*) — best logger they've used, but UI changes arrive unannounced with no way to revert settings.

**Why it matters:** these are the app's *most engaged* users. Dashboard configurability is cheap to build and directly protects retention.

---

### Theme 5 — Grocery integration and platform lock-in — 59 reviews (12%) — **PRODUCT problem** (and a strategic warning)

This theme is dominated by one event: **Mealime — the closest thing to the all-in-one app you're describing — is being shut down on October 21, 2026.** Albertsons bought it in 2021 and is folding it into "Meals Hub," which lives *inside* the Albertsons/Safeway/Vons/Jewel-Osco grocery apps. There is **no export button**: saved recipes, meal plans and grocery lists are deleted. ([Plan to Eat's write-up](https://www.plantoeat.com/blog/2026/09/mealime-is-moving-heres-your-best-meal-planning-alternative/); [shutdown summary](https://mealthinker.com/blog/mealime-alternative))

1. Mealime, 1★, Sept 5 2026 (*99Grumps*) — they wanted a meal planner, not a grocery app that tracks purchases; Meals Hub requires picking one chain, and they shop local and small.
2. Mealime, 1★, Sept 3 2026 (*Csquaredbrady*) — a years-long Pro subscriber with no Albertsons banner nearby; would happily have paid *more* to keep the app standalone.
3. Mealime, 1★, Sept 17 2026 (*Lady Wynter*) — the replacement's stores are unaffordable or absent locally, and saved recipes have to be hand-copied into a document before deletion.

> **Also:** eMeals 2★, Sept 13 2026 (*cleanmydesk*) — the hand-off to the Walmart app failed and the entire list vanished. Mealime 3★, Aug 9 2026 (*Shopper55$*) — online cart crashes after a few items. Instacart itself sits at 1.2★ on Trustpilot for substitutions, missing items and refused refunds.

**Why it matters most:** this is the clearest opening in the whole scan. A well-liked combined app is being killed, its users are actively angry, they're being pushed into a single grocery chain's walled garden, and they cannot take their data with them. **Retailer-neutral + data export is a positioning, not a feature.**

---

### Theme 6 — Rigidity and lack of customization — 53 reviews (11%) — **PRODUCT problem**

Can't set macros without paying, can't adjust servings for a family, can't export or copy a recipe out, can't make the plan bend to real life.

1. MyFitnessPal, 1★, Sept 19 2026 (*Luke5t*) — setting your own macro and calorie targets is now a paid feature, so they're leaving. *(Also a pricing problem — this one sits in both.)*
2. Plan to Eat, 3★, Sept 19 2026 (*123Dana456*) — every recipe ingredient is force-added to the shopping list with no way to turn it off, and the list can't be exported to iOS Reminders/Lists.
3. MyFitnessPal, 3★, Sept 12 2026 (*BetterThanNothing_*) — a paying subscriber asking for meaningfully more micronutrients than the handful shown.

---

### Theme 7 — AI features that under-deliver — 33 reviews (7%) — **PRODUCT problem**

Worth separating out because it is the newest theme and directly relevant to an AI-built product.

1. MealPrepPro, 1★, Sept 16 2026 (*Suz-spark*) — headline complaint is that the app is trying to do too much and the AI meal planner is bad.
2. MealPrepPro, 2★, Sept 5 2026 (*SamLLLR23*) — recipes taste bland and read as AI-generated; won't pay until that improves.
3. eMeals, 1★, Sept 8 2026 (*BarbaraWeider*) — says a free AI chatbot produces a more personalized, more useful meal plan than the paid subscription. **This is the competitive threat to the entire category.**

> **Also:** MyFitnessPal 2★, Sept 5 2026 (*RunBing*) — the AI "coach" gave 2,100 / 2,500 / 2,850 calorie targets on consecutive days that contradicted actual workout days.

---

### Theme 8 — Ads and upsell interruptions — 25 reviews (5%) — **PRICING problem**

Pop-ups mid-logging, brand placements inside recipes, ads that freeze the screen.

1. MyFitnessPal, 1★, Sept 19 2026 (*Honest, not rude*) — ads on open, on logging and on lookup, to the point of freezing the screen.
2. MyFitnessPal, 2★, Sept 7 2026 (*dragontower22*) — motivational pop-ups interrupt logging with no way to disable them.
3. eMeals, 1★, Sept 19 2026 (*Brilliant.girl*) — no way to turn off wine-pairing suggestions (they don't drink), plus branded placements that feel like advertising.

---

### Theme 9 — Allergies and preference exclusion — 7 reviews (1%) — **PRODUCT problem**

Low count, but read it carefully: **it's low because most apps don't offer the feature at all**, so users rarely complain about it in an app-store review — they just leave. Where users do raise it, it's severe and specific.

1. Mealime, 3★, May 1 2025 (*Gonebaby77*) — could only pick from preset allergen groups; a cilantro allergy had no slot, and recipes still contained ingredients marked as disliked.
2. Mealime, 2★, Jan 16 2026 (*aria.na_blonde*) — has MCAS and a highly restrictive diet; accepts that low-histamine isn't a preset, but wants to enter their own excluded ingredients.
3. Eat This Much, 2★, July 20 2025 (*erin29479*) — many customization options but hard to configure, and the vegetarian recipes amount to a block of tofu with sauce.

**Why it matters:** "disliked ingredients still appeared in my plan" shows up in both Mealime and MealPrepPro reviews. **A hard exclusion filter that actually holds is a small feature with outsized trust value** — and a safety issue for real allergies.

---

## Theme summary

| # | Theme | Reviews | Share | Type |
|---|---|---|---|---|
| 1 | Pricing, paywalls, billing | 189 | 39% | **Pricing** |
| 2 | Nutrition data accuracy | 123 | 26% | Product |
| 3 | Recipe quality / repetition | 107 | 22% | Product |
| 4 | Bugs, redesigns, lost work | 67 | 14% | Product |
| 5 | Grocery integration & lock-in | 59 | 12% | Product |
| 6 | Rigidity / customization | 53 | 11% | Product |
| 7 | AI features under-delivering | 33 | 7% | Product |
| 8 | Ads & upsell interruptions | 25 | 5% | **Pricing** |
| 9 | Allergy & preference exclusion | 7 | 1% | Product |

**Split: roughly 44% pricing/business-model, 56% product.** Unusual for a category this technical — and it means a competitor can win meaningful ground on trust and pricing terms alone, before shipping a single better algorithm.

---

## What companies pay humans to do this job

The job you'd be automating — take a person's diet and nutrition needs, choose the food, buy it, get it to their house — is currently done by humans in four different job shapes, at four very different prices.

### 1. The full-stack version: personal / private chef

Plans to the client's dietary needs, shops, cooks, delivers.

| Metric | Figure | Source |
|---|---|---|
| Typical independent rate | **$45–$75/hour**; full-time roles $85K–$150K+ | [iHireChefs](https://www.ihirechefs.com/t-personal-chef-jobs.html) |
| Posted service rates (3-hour minimum) | Chicago **$78.94/hr**, Philadelphia **$66.19/hr**, Houston **$60.94/hr** | [Friend That Cooks](https://www.weeklymealprep.com/jobs/) |
| Private chef as an employee | **~$29.75/hour** (mid-2026 average) | Indeed, via [search](https://www.ihirechefs.com/t-personal-chef-jobs.html) |
| Personal meal-prep chef, Chicago | **$44K–$155K** | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Personal-Meal-Prep-Chef/-in-Chicago,IL) |
| Typical engagement | 5–15 hours/week per family | [Friend That Cooks](https://www.weeklymealprep.com/) |

### 2. The nutrition brain: dietitians and coaches

| Role | Pay | Source |
|---|---|---|
| Registered dietitian / nutritionist (BLS, 2025 median) | **$76,400/yr — $36.73/hour**; 86,300 jobs; +8% growth 2025–2035 | [BLS OOH](https://www.bls.gov/ooh/healthcare/dietitians-and-nutritionists.htm) |
| Foodsmart remote RD partner | **$52.80 per 1-hour visit** | [Foodsmart posting](https://himalayas.app/companies/foodsmart/jobs/registered-dietitian-partner-new-york-license) |
| Nutrition coach (general) | **$21.07/hr** avg ($19.47–$23.08) | [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Nutrition-Coach-Salary) |
| NASM-certified nutrition coach | **$19.83/hr** ($16.59–$22.12) | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Nasm-Nutrition-Coach) |
| "Food as medicine" roles generally | **$16.72/hr** avg | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Food-As-Medicine) |

### 3. The hands: shoppers and meal-prep assistants

| Role | Pay | Source |
|---|---|---|
| Personal grocery shopper | **$12.45–$18.03/hr** typical; NY **$17.72**, Jacksonville **$15.01** | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Personal-Grocery-Shopper/--in-New-York) |
| Personal shopper (general) | **$14–$21/hr** | [Indeed Flex](https://indeedflex.com/career-hub/roles/personal-shopper) |
| Meal prep assistant | **$18.95/hr** avg ($15.14–$21.15) — postings bundle errands, grocery shopping and transportation | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Meal-Prep-Assistant) |
| Meal prep (general) | **$15.69/hr** avg ($13.70–$17.31) | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Meal-Prep) |

### 4. The institutional buyer: food-as-medicine companies

This is where diet-driven grocery ordering is already a **funded, staffed job function** — paid for by health plans rather than consumers. Employers include **Foodsmart** (RDs guide members to affordable groceries through an online marketplace), **NourishedRX** (medically tailored meals, meal kits and grocery kits), and **Community Servings**. Job descriptions explicitly combine nutrition therapy with grocery access. ([Foodsmart](https://himalayas.app/companies/foodsmart/jobs/registered-dietitian-partner-new-york-license); [Food as Medicine roles](https://www.ziprecruiter.com/Jobs/Food-As-Medicine); [Community Servings](https://www.idealist.org/en/nonprofit-job/16e54526f70e4f19896446d7fff7b15a-voucher-program-registered-dietitian-nutritionist-community-servings-inc-jamaica))

### What this tells you about pricing

Stack the human version of the job for one household:

- **Nutrition plan:** one RD hour ≈ **$37–$53**
- **Shopping and ordering:** 2 hrs/week × ~$16/hr ≈ **$32/week ≈ $139/month**
- **Or the all-in-one human:** a personal chef at 5 hrs/week in Chicago ≈ **$395/week**

So the human-labor equivalent of what this app would do runs from roughly **$150/month (coach + shopper, unbundled)** to **$1,500+/month (personal chef)**. Against that, the apps people are currently rage-quitting charge **$11–$20/month** — and 39% of the complaints are about *that* charge. The gap between what the job is worth ($150+) and what the category has trained users to pay ($11) is the central pricing problem for this project, and the B2B/health-plan channel is where that gap closes.

---

## Flags and gaps

| Item | Status |
|---|---|
| **G2 reviews** | ❌ Not obtained — 403 on fetch, blank page in browser. Requested but unavailable. |
| **Reddit complaints** | ❌ Not obtained — blocked for search and page access. Requested but unavailable. |
| **Verbatim quotes** | ⚠️ Paraphrased rather than reproduced; full original text is in the saved JSON dataset alongside this file. |
| **Google Play reviews** | ⚠️ Not collected — only Apple's feed was accessible. Android complaint patterns may differ. |
| **Sample skew** | ⚠️ Apple's public feed returns recent reviews, not a random sample, and only 1–3★ ones were kept. These are frequencies *within complaints*, not within all users. All nine apps rate 4.3–4.8★ overall. |
| **MacroFactor volume** | ⚠️ 126 critical reviews partly reflects a large, highly engaged user base, not a worse product. |
| **Indeed private-chef $29.75/hr** | ⚠️ Came through a search summary, not a directly retrieved Indeed page. |
| **Capterra review dates** | ⚠️ Some cited cons pre-date the 18-month window; they're included only where 2025–26 reviews repeat the same point. |
| **Theme counts** | ⚠️ Produced by keyword matching over review text, then spot-checked by reading samples. Reviews can count in several themes. Treat as magnitude, not precision. |
