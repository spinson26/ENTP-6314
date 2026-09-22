# Opportunity Scan — Diet & Grocery App

**Prepared:** September 22, 2026
**Analyst role:** Market research analyst
**Problem space:** Dieters struggle to commit long term because of rigid rules, biological hunger responses, and the time cost of meal prep — while also having to juggle BMI/BMR math, energy targets, surpluses and deficits, micronutrient targets, personal food preferences and restrictions, and the final step of actually buying the food.

> **Reading note on quotes.** Reddit and G2 both block automated access from this research tool, so I could not read or verify complaints on those two sites. Everything quoted or paraphrased below comes from pages I actually retrieved (Capterra, Trustpilot, the Apple App Store, BBB). Complaints are paraphrased with the source linked rather than reproduced at length. See **Section 5 — Not verified** for the full list of gaps.

---

## 1. Who has this problem, and how many are there in the US?

### 1a. The core consumer segment

| Step | Figure | Source |
|---|---|---|
| US adults (18+), 2024–25 | ~262 million *(estimate — see Section 5)* | [Census population estimates program](https://www.census.gov/data/tables/time-series/demo/popest/2020s-national-detail.html) |
| Share of US adults who report actively attempting weight loss | **47.4%** (NHANES 2021–2023) | [NHANES 2021–2023 weight-loss-attempt analysis, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12810498/) |
| → Adults attempting weight loss | **~124 million** | 262M × 47.4% |
| Share who say they *want* to lose weight | 52% (Gallup, Nov 2025) | [Gallup: Half of Americans Want to Lose Weight](https://news.gallup.com/poll/700112/half-americans-lose-weight.aspx) |
| Share *actively working* toward it right now | 27% (Gallup, Nov 2025) → **~71 million** | [Gallup](https://news.gallup.com/poll/700112/half-americans-lose-weight.aspx) |

**Reasoning.** The two sources bracket the market. NHANES (a clinical survey, self-reported attempts over 12 months) gives the outer boundary of ~124M "tried in the past year." Gallup's "actively working on it right now" gives the tighter, more honest boundary of ~71M. A realistic serviceable base for a paid app is between those two numbers, closer to the Gallup figure.

### 1b. Sub-segments with a sharper version of the problem

| Sub-segment | US size | Why the pain is worse | Source |
|---|---|---|---|
| Adults with obesity | **40.3%** of adults ≈ **106M** | Highest medical stakes; BMR prediction error is also worst in this group | [CDC NCHS Data Brief 508](https://www.cdc.gov/nchs/products/databriefs/db508.htm) |
| Current GLP-1 users | **12%** of adults ≈ **31M** | Appetite suppressed but protein and micronutrient targets become critical; existing calorie apps do not address this | [KFF poll, Oct–Nov 2025](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/) |
| Ever taken a GLP-1 | **18%** of adults ≈ **47M** | Post-drug maintenance is an unserved market | [KFF](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/) |
| Adults below the EAR for one or more nutrients | >25% below EAR for vitamin D, vitamin C, calcium, magnesium | Micronutrient targeting is a real unmet need, not a vanity feature | [NHANES nutrient-intake analysis](https://www.sciencedirect.com/science/article/pii/S0022316622166848); [Dietary Guidelines nutrients of public health concern](https://odphp.health.gov/news/202408/new-resources-identify-where-find-key-nutrients) |

### 1c. The business (B2B) segment

| Buyer | US size | Source |
|---|---|---|
| CDR-credentialed dietetics professionals (RD/RDN/DTR) | **112,000+** (Oct 2025) | [Commission on Dietetic Registration via NutritionEd](https://www.nutritioned.org/cdr-exam/) |
| Market context — US weight-loss market | **$135B** in 2025, +6.6% forecast 2026 | [Marketdata via GlobeNewswire](https://www.globenewswire.com/news-release/2026/03/10/3253070/28124/en/U-S-Weight-Loss-Market-Status-Forecast-Report-2025-2026-GLP-1-Boom-Triggers-Major-Industry-Shift-as-Medicalized-Programs-Disrupt-the-135-Billion-Diet-Market.html) |
| Commercial programs/products slice only | **$38B** | [Marketdata 2025 report](https://www.globenewswire.com/news-release/2025/03/25/3048877/28124/en/U-S-Weight-Loss-Diet-Control-Commercial-Programs-Products-Market-Report-2025-Weight-Watchers-Noom-and-Herbalife-Navigate-New-Weight-Era.html) |
| US online grocery market (the checkout half of the problem) | **$217B** (2025), **$254B** forecast 2026 | [Market Data Forecast](https://www.marketdataforecast.com/market-reports/united-states-online-grocery-market) |

### 1d. Evidence the problem is real (not just claimed)

- **Diets are abandoned fast.** Obesity-treatment dropout was 21% at 1 month and 57% at 6 months in one cohort; another reported 21.3% at 2 months, 44.4% at 6 months, 68.5% at 12 months. ([PMC — dropout predictability](https://pmc.ncbi.nlm.nih.gov/articles/PMC3914843/); [PMC — 2/6/12-month dropout cohort](https://pmc.ncbi.nlm.nih.gov/articles/PMC9197160/))
- **Tracking is abandoned even faster.** Consistent calorie tracking in a digital weight-loss program fell from 68% of users in week 1 to 21% by week 12. ([MyFitnessPal goal-setting study, arXiv](https://arxiv.org/pdf/1904.02813))
- **Meal prep really does cost time.** Americans average ~40 minutes/day on food prep and cleanup (52 min women / 28 min men); people who regularly cook spend ~62–63 min/day. ([BLS American Time Use Survey](https://www.bls.gov/news.release/atus.nr0.htm); [USDA ERS](https://www.ers.usda.gov/data-products/charts-of-note/81929))
- **The math itself is shaky.** The Mifflin-St Jeor BMR equation — the formula nearly every calorie app uses — lands within 10% of measured resting metabolic rate for about 82% of non-obese people but only ~70% of people with obesity. ([Journal of the American Dietetic Association systematic review](https://www.jandonline.org/article/S0002-8223(05)00149-5/abstract); [RMR equation bias study](https://www.sciencedirect.com/science/article/abs/pii/S0261561413001003))
- **BMI is a weak anchor.** The AMA adopted policy in 2023 stating BMI alone is an imperfect clinical measure and should be paired with other measures such as visceral fat, body composition and waist circumference. ([AMA](https://www.ama-assn.org/press-center/ama-press-releases/ama-adopts-new-policy-clarifying-role-bmi-measure-medicine))

---

## 2. What do they use today?

| Category | Examples | What it does / where it stops |
|---|---|---|
| Calorie & macro trackers | MyFitnessPal (~$310M revenue 2025, declining 5.7% YoY; 4.7★, 2.4M ratings on the App Store), Lose It!, Cronometer | Logging only. Cronometer covers ~84 micronutrients but logging is manual with no photo recognition; Lose It! tracks calories and three macros with minimal micronutrient depth. ([Business of Apps](https://www.businessofapps.com/data/myfitnesspal-statistics/); [App Store listing](https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718); [Cronometer vs Lose It comparison](https://feastgood.com/cronometer-vs-loseit/)) |
| Behavior-change programs | Noom, WeightWatchers | Psychology and coaching; do not produce a costed grocery order. Noom has 623 BBB complaints closed in 3 years and a $62M class-action settlement over auto-renew billing. ([BBB profile](https://www.bbb.org/us/ny/new-york/profile/health-and-wellness/noom-inc-0121-150555/complaints); [Wikipedia — Noom settlement](https://en.wikipedia.org/wiki/Noom)) |
| Meal planners (consumer) | Eat This Much, Mealime, eMeals, PlateJoy *(shut down)* | Generate plans and grocery lists. Eat This Much is the one that treats macro targets as a primary input; Mealime is recipe-first and not built for structured targets. PlateJoy's shutdown left its users looking. ([Eat This Much vs Mealime](https://newyorkstreetfood.com/blog/eat-this-much-vs-mealime-which-meal-planner-wins-in-2026/); [PlateJoy shutdown](https://mealthinker.com/blog/platejoy-alternative)) |
| Pro/clinical meal-planning software | NutriAdmin (4.7★, 129 reviews), Foodzilla (4.3★, 47 reviews), Nutritics, That Clean Life | Built for dietitians to produce client plans; reviewers report repetitive auto-generated plans, 7-day-only horizons, recipe and unit-conversion errors. ([Capterra — NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/); [Capterra — Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/)) |
| Grocery checkout & delivery | Instacart (~$37.2B sales 2025), Walmart, Amazon Fresh; Instacart Developer Platform for in-app cart building | The buy step exists as an API but is rarely wired to a nutrition engine. ([Business of Apps — Instacart](https://www.businessofapps.com/data/instacart-statistics/); [Instacart Developer Platform](https://company.instacart.com/pressreleases/instacart-to-power-the-next-generation-of-interactive-food-experiences-with-introduction-of-the-instacart-developer-platform)) |
| Manual workarounds | Spreadsheets for macro math, free online BMI/BMR/TDEE calculators, paper or Notes-app grocery lists, Sunday batch-cook routines, screenshots of recipes | Free, fully customizable, zero integration. This is the true incumbent. *(Inferred from the complaint pattern — see Section 5.)* |
| The chemical shortcut | GLP-1 drugs — 12% of adults currently taking one | Increasingly the substitute for dietary self-management; 56% of users say affording them is hard. ([KFF](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/)) |

---

## 3. Complaints about current solutions (10, each with a link)

Reddit and G2 could not be accessed (Section 5). These ten come from Capterra, Trustpilot, BBB and the Apple App Store. Each is a close paraphrase of a real review, with the reviewer/date where the page showed it.

| # | Complaint (paraphrased) | Who / when | Source |
|---|---|---|---|
| 1 | Auto-generated meal plans repeat the same meals across a 7-day plan. | Barbara K., holistic nutritionist, Apr 2022 | [Capterra — NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/) |
| 2 | Planning horizon is capped at 7 days; users want to build 4-week menus. | Kristin M., owner, Jul 2022; Marie J., dietitian, Jul 2022 | [Capterra — NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/) |
| 3 | Recipes import badly or not at all, and measurements are confusing; system recipes appear to be missing ingredients. | Jessica B., health coach, Jul 2022 | [Capterra — NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/) |
| 4 | Recipe library lacks options for specific client diets and leans on ingredients clients can't find locally (e.g. persimmon). | Caitlin S., clinical nutritionist, Feb 2023; Lisa S., health coach, Aug 2026 | [Capterra — NutriAdmin](https://www.capterra.com/p/151688/Nutriadmin/reviews/), [Capterra — Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/) |
| 5 | App is glitchy and freezes; recipe measurements come out wrong and the generated shopping list is faulty. | Tash W., owner, Mar 2025 (1★) | [Capterra — Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/) |
| 6 | Cup-to-gram conversions in recipes are inaccurate, so the nutrition math downstream is wrong. | Jack P., nutritionist/fitness officer, Oct 2025 | [Capterra — Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/) |
| 7 | Grocery list includes ingredients the recipe doesn't need, so food gets wasted. | Reviewer, Jul 2021 | [Trustpilot — PlateJoy](https://www.trustpilot.com/review/platejoy.com) |
| 8 | Dietary restrictions can't be combined (e.g. low-FODMAP *and* vegetarian), and meal variety is too narrow — only a few dinner options. | Reviewers, Jun 2020 / Mar 2019 | [Trustpilot — PlateJoy](https://www.trustpilot.com/review/platejoy.com) |
| 9 | Billing traps: charged after cancelling, charged for an inactive account, no refund, support unresponsive. | PlateJoy Apr 2020; Foodzilla Mar 2026 (charged before trial ended); Noom — 623 BBB complaints closed in 3 years | [Trustpilot — PlateJoy](https://www.trustpilot.com/review/platejoy.com), [Capterra — Foodzilla](https://www.capterra.com/p/206847/Foodzilla/reviews/), [BBB — Noom](https://www.bbb.org/us/ny/new-york/profile/health-and-wellness/noom-inc-0121-150555/complaints) |
| 10 | Grocery delivery breaks the plan at the last step: unwanted substitutions, missing items, wrong prices, ~11% markups, denied refunds. Trustpilot rating 1.2★ across 12,279 reviews. | Multiple reviewers | [Trustpilot — Instacart](https://www.trustpilot.com/review/instacart.com) |

**Bonus (tracker-side):** MyFitnessPal reviewers report intrusive promotional pop-ups, updates that made the app clunkier, and unexpected subscription charges (4.3★ across 13,168 Trustpilot reviews, vs 4.7★/2.4M on the App Store). An App Store reviewer asked for fractional/per-person portions for family meals — the exact household problem a grocery-integrated planner would solve. ([Trustpilot — MyFitnessPal](https://www.trustpilot.com/review/myfitnesspal.com); [App Store](https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718))

### What the complaints add up to

Three clusters, in order of how often they appear:

1. **Rigidity** — plans that can't combine restrictions, repeat themselves, cap at 7 days, or can't be edited without breaking the calorie math.
2. **Data quality** — wrong unit conversions, missing recipe ingredients, bad grocery lists, user-submitted food entries that disagree with each other.
3. **Commercial bad faith** — hard cancellation, charges after cancelling, no refunds. This is a trust opening, not just a complaint.

---

## 4. Why might this be newly solvable with AI in 2026?

Four specific capability changes, with dates:

**(a) Vision models can read a plate well enough to cut logging effort (2024 → 2025–26).**
The abandonment data says logging burden, not lack of knowledge, kills adherence (68% → 21% consistent tracking by week 12). GPT-4o-class models reached ~88% food recognition accuracy even with heavy occlusion and ~75% food-composition accuracy; peer-reviewed evaluations in 2025 found ChatGPT and Claude estimate nutrition from meal photos at accuracy *comparable to traditional self-report* but without the user burden. The honest caveat, stated in the same research: they systematically underestimate large portions and vary on macros, so they're not yet fit for clinical precision. ([Performance Evaluation of 3 LLMs for Nutritional Content Estimation from Food Images, 2025](https://pubmed.ncbi.nlm.nih.gov/41081011/); [Benchmarking foundation model dietary estimates, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13401436/); [Comprehensive Evaluation of LMMs for Nutrition Analysis, 2025](https://arxiv.org/pdf/2507.07048))

**(b) The grocery cart became an API (March 2024 onward).**
Instacart launched the Instacart Developer Platform in March 2024, letting third-party apps build shoppable carts against ~1B products from 85,000 stores with same-day fulfillment. Launch partners included WeightWatchers and NYT Cooking. This is what turns a meal plan into a delivered order — it did not exist as public infrastructure before. ([Instacart newsroom](https://company.instacart.com/pressreleases/instacart-to-power-the-next-generation-of-interactive-food-experiences-with-introduction-of-the-instacart-developer-platform); [Digital Commerce 360, Mar 2024](https://www.digitalcommerce360.com/2024/03/27/instacart-api-idp-developer-platform/); [Instacart developer docs](https://docs.instacart.com/developer_platform_api/guide/concepts/recipe/))

**(c) Agent-driven checkout became a standard (Sept–Oct 2025).**
OpenAI and Stripe published the Agentic Commerce Protocol and shipped Instant Checkout in ChatGPT in late 2025, with Salesforce and major retailers adopting it and Instacart and DoorDash building ChatGPT apps. Buying as an *agent action* is now a supported, standardized flow rather than a scraping hack. ([Stripe newsroom](https://stripe.com/newsroom/news/stripe-openai-instant-checkout); [OpenAI](https://openai.com/index/buy-it-in-chatgpt/); [Salesforce, Oct 2025](https://www.salesforce.com/news/press-releases/2025/10/14/stripe-openai-agentic-commerce-protocol-announcement/))

**(d) Constraint-juggling in natural language is now cheap.**
The specific job — "hit ~1,800 kcal with 140g protein, cover vitamin D and potassium gaps, no shellfish, my spouse hates mushrooms, 20 minutes a night, under $120/week, and put it in a cart" — is a multi-constraint negotiation that used to require a rules engine plus a dietitian. Current multi-agent LLM systems are being published specifically for meal-level personalized nutrition management. ([Closed-Loop Multi-Agent System for Meal-Level Personalized Nutrition, 2026](https://arxiv.org/pdf/2601.04491))

**(e) The market timing argument.**
31M Americans are currently on GLP-1s and 47M have ever taken one, while 56% say the drugs are hard to afford. That creates a large, growing, poorly served group who need protein and micronutrient adequacy on suppressed appetite — and an even larger group cycling off the drugs who need maintenance eating. No incumbent app is built around this. ([KFF](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/))

### Where AI does *not* solve it
- Photo-based estimation still misjudges large portions — don't promise clinical accuracy. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/41081011/))
- BMR prediction is wrong for ~30% of people with obesity regardless of how good the AI is; the fix is adaptive recalibration from real weight-change data, not a better formula. ([JADA review](https://www.jandonline.org/article/S0002-8223(05)00149-5/abstract))
- Biological hunger is not an information problem. AI can reduce friction and rigidity; it cannot repeal appetite.
- The last mile is still Instacart's failure-prone substitution flow (1.2★, 12,279 reviews). Integrating it inherits its reputation. ([Trustpilot](https://www.trustpilot.com/review/instacart.com))

---

## 5. Not verified / flagged

| Item | Status |
|---|---|
| **Reddit complaints** | ❌ **Could not verify.** Reddit blocks this research tool for both search and direct page access. The brief asked for Reddit quotes; none are included rather than fabricated. |
| **G2 reviews** | ❌ **Could not verify.** g2.com returned HTTP 403 Forbidden. |
| **App store reviews at scale** | ⚠️ **Partial.** The Apple App Store listing for MyFitnessPal was readable (4.7★, 2.4M ratings) but only shows featured, mostly positive reviews. Google Play figures for Cronometer (4.6★, ~23k reviews) come from a third-party comparison site, not Google Play itself. |
| **US adult population (~262M)** | ⚠️ **Estimate.** Census tables were identified but the exact 18+ total was not retrieved. Treat the 124M and 71M figures as order-of-magnitude. |
| **"80% quit diets within 30 days"** | ❌ **Rejected.** Widely repeated by content-marketing sites citing "Journal of Clinical Nutrition"; the peer-reviewed dropout figures used above (21% at 1 month, 57% at 6 months) are the defensible ones. |
| **MyFitnessPal user counts** | ⚠️ **Conflicting.** Sources cite 280M users, 220M registered, 30M monthly active, and 85M monthly active. Revenue ($310M, −5.7% YoY) is the more stable figure. |
| **Manual workarounds (spreadsheets, paper lists)** | ⚠️ **Inferred, not sourced.** Consistent with complaint patterns but no survey found quantifying it. Worth a primary-research survey. |
| **Instacart active users** | ⚠️ **Conflicting.** 10M vs a projected 14.9M for 2025 depending on source and definition. |
| **Noom BBB complaint details** | ⚠️ **Partial.** The count (623 closed in 3 years) was retrieved; individual complaint text was not rendered to the tool. |

---

## Sources

- [NHANES 2021–2023 weight loss attempts (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12810498/)
- [Gallup: Half of Americans Want to Lose Weight (Nov 2025)](https://news.gallup.com/poll/700112/half-americans-lose-weight.aspx)
- [CDC NCHS Data Brief 508 — Obesity prevalence](https://www.cdc.gov/nchs/products/databriefs/db508.htm)
- [KFF GLP-1 tracking poll (Oct–Nov 2025)](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/)
- [AMA policy on BMI (2023)](https://www.ama-assn.org/press-center/ama-press-releases/ama-adopts-new-policy-clarifying-role-bmi-measure-medicine)
- [JADA systematic review of RMR equations](https://www.jandonline.org/article/S0002-8223(05)00149-5/abstract)
- [RMR equation bias and accuracy study](https://www.sciencedirect.com/science/article/abs/pii/S0261561413001003)
- [Obesity treatment dropout (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3914843/)
- [2/6/12-month dropout cohort (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9197160/)
- [MyFitnessPal goal-setting study (arXiv)](https://arxiv.org/pdf/1904.02813)
- [BLS American Time Use Survey](https://www.bls.gov/news.release/atus.nr0.htm)
- [USDA ERS meal preparation time](https://www.ers.usda.gov/data-products/charts-of-note/81929)
- [Dietary Guidelines nutrients of public health concern](https://odphp.health.gov/news/202408/new-resources-identify-where-find-key-nutrients)
- [NHANES nutrient intake sources](https://www.sciencedirect.com/science/article/pii/S0022316622166848)
- [Marketdata — US weight loss market $135B](https://www.globenewswire.com/news-release/2026/03/10/3253070/28124/en/U-S-Weight-Loss-Market-Status-Forecast-Report-2025-2026-GLP-1-Boom-Triggers-Major-Industry-Shift-as-Medicalized-Programs-Disrupt-the-135-Billion-Diet-Market.html)
- [US online grocery market size](https://www.marketdataforecast.com/market-reports/united-states-online-grocery-market)
- [Business of Apps — MyFitnessPal statistics](https://www.businessofapps.com/data/myfitnesspal-statistics/)
- [Business of Apps — Instacart statistics](https://www.businessofapps.com/data/instacart-statistics/)
- [Instacart Developer Platform announcement](https://company.instacart.com/pressreleases/instacart-to-power-the-next-generation-of-interactive-food-experiences-with-introduction-of-the-instacart-developer-platform)
- [Digital Commerce 360 — Instacart API](https://www.digitalcommerce360.com/2024/03/27/instacart-api-idp-developer-platform/)
- [Stripe — Instant Checkout & Agentic Commerce Protocol](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)
- [OpenAI — Buy it in ChatGPT](https://openai.com/index/buy-it-in-chatgpt/)
- [LLM nutrition estimation from food images (PubMed, 2025)](https://pubmed.ncbi.nlm.nih.gov/41081011/)
- [Benchmarking foundation-model dietary estimates (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13401436/)
- [LMM nutrition analysis benchmark (arXiv 2507.07048)](https://arxiv.org/pdf/2507.07048)
- [Multi-agent meal-level nutrition management (arXiv 2601.04491)](https://arxiv.org/pdf/2601.04491)
- [Capterra — NutriAdmin reviews](https://www.capterra.com/p/151688/Nutriadmin/reviews/)
- [Capterra — Foodzilla reviews](https://www.capterra.com/p/206847/Foodzilla/reviews/)
- [Trustpilot — PlateJoy](https://www.trustpilot.com/review/platejoy.com)
- [Trustpilot — MyFitnessPal](https://www.trustpilot.com/review/myfitnesspal.com)
- [Trustpilot — Instacart](https://www.trustpilot.com/review/instacart.com)
- [BBB — Noom complaints](https://www.bbb.org/us/ny/new-york/profile/health-and-wellness/noom-inc-0121-150555/complaints)
- [Apple App Store — MyFitnessPal](https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718)
- [Commission on Dietetic Registration credential numbers](https://www.nutritioned.org/cdr-exam/)
- [PlateJoy shutdown](https://mealthinker.com/blog/platejoy-alternative)
- [Cronometer vs Lose It comparison](https://feastgood.com/cronometer-vs-loseit/)
- [Eat This Much vs Mealime](https://newyorkstreetfood.com/blog/eat-this-much-vs-mealime-which-meal-planner-wins-in-2026/)
