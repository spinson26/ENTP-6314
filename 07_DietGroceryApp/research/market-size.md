# Bottom-Up Market Size — $19.99/month Combined Diet + Grocery App

**Prepared:** September 22, 2026
**Method:** Population → behavioral gates → adoption → revenue. Every population number comes from a named government or peer-reviewed source. **No top-down percentages of category revenue are used anywhere in this model.**

---

## The funnel (base case)

| Step | Filter | Multiplier | Population remaining | Source |
|---|---|---|---|---|
| 0 | US resident population, July 1 2024 | — | **340.1M** | [Census Bureau, Vintage 2024](https://www.census.gov/library/stories/2024/12/population-estimates.html) |
| 1 | Minus population under 18 (73.1M) | — | **267.0M adults** | [Census Bureau, June 2025 release](https://www.census.gov/newsroom/press-releases/2025/older-adults-outnumber-children.html) |
| 2 | Currently **actively working** on losing weight | ×27% | **72.1M** | [Gallup, Nov 2025](https://news.gallup.com/poll/700112/half-americans-lose-weight.aspx) |
| 3 | Owns a smartphone | ×91% | **65.6M** | [Pew Research, 2025](https://www.pewresearch.org/internet/fact-sheet/mobile/) |
| 4 | Buys groceries online **at least monthly** | ×19.5% | **12.8M** | [Online grocery penetration data, 2025](https://www.grocerydive.com/news/grocery-ecommerce-online-sales-july-household-penetration/757641/) |

### **Serviceable market (SAM) = 12.8 million US adults**

Defined as: *US adults who are actively trying to manage their weight right now, own a smartphone, and already order groceries online at least once a month.* Step 4 is the strict gate — this app's core loop ends in an online grocery order, so someone who never orders online cannot use the product as designed.

---

## Three cases

Only the **adoption rate** varies. The funnel above is held constant so the cases are comparable.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| SAM | 12.8M | 12.8M | 12.8M |
| **Adoption (% of SAM, steady state)** | **0.25%** | **1.0%** | **2.5%** |
| **Paying subscribers** | **32,000** | **128,000** | **320,000** |
| Price | $19.99/mo | $19.99/mo | $19.99/mo |
| Annual value per subscriber | $239.88 | $239.88 | $239.88 |
| **Gross annual revenue (ARR)** | **$7.7M** | **$30.7M** | **$76.8M** |
| Less app-store commission (20% blended) | −$1.5M | −$6.1M | −$15.4M | 
| **Net annual revenue** | **$6.1M** | **$24.6M** | **$61.4M** |
| Assumed average paid tenure | 4 months | 7 months | 12 months |
| **Gross new subscribers needed per year to hold that base** | ~96,000 | ~219,000 | ~320,000 |

That last row is the one investors actually press on: at 7-month average tenure, standing still at 128,000 active subscribers requires acquiring roughly **219,000 new paying subscribers every year**. Churn, not demand, is the binding constraint in this category.

---

## Why those adoption rates are defensible (bottom-up comparables)

The adoption percentages are not guesses off a curve — they're calibrated against how many people actually pay for products in this exact category today.

| Comparable | Paying base | Implied share of our 12.8M SAM | Source |
|---|---|---|---|
| **WeightWatchers** | **2.8M subscribers** (end of 2025, global) | ~15% if ~70% are US `[UNVERIFIED — US split not disclosed]` | [WW Q3 2025 results](https://www.globenewswire.com/news-release/2025/11/06/3182384/0/en/WeightWatchers-Announces-Third-Quarter-2025-Results.html) |
| **MyFitnessPal** | ~**3.9M** annualized paying subs `[INFERRED: $310M revenue ÷ $79.99 annual price — mixes monthly/annual plans and is global]` | ~30% | [Business of Apps](https://www.businessofapps.com/data/myfitnesspal-statistics/); [pricing](https://www.myfitnesspal.com/premium) |
| **Noom** | ~1.5M subscribers (end of 2023) | ~12% | [Sacra](https://sacra.com/c/noom/) |
| **Mealime** | **5M+ downloads**, free + Pro | — (downloads ≠ payers) | [Mealime press](https://www.mealime.com/press) |
| Mid-tier paid apps (MacroFactor, Eat This Much) | ~22,000 US App Store ratings each | Ratings imply paid bases in the low hundreds of thousands `[UNVERIFIED — ratings-to-users ratio is an industry rule of thumb, not a measured figure]` | [App Store](https://apps.apple.com/us/app/id1553503471) |

**Read across those:** the entire category's paid bases run from tens of thousands (niche apps) to low millions (WW, MyFitnessPal). Our base case of **128,000 paying subscribers is ~4.6% of WeightWatchers' global subscriber base** and sits comfortably between the niche apps and the incumbents. Conservative (32,000) is "we became a small but real app." Optimistic (320,000) is "we became a top-five app in the category." Neither requires a new behavior to be invented.

---

## Independent cross-check: the GLP-1 wedge

A second bottom-up path, computed from a different population entirely. If it lands in the same range, the base case is more credible.

| Step | Filter | Multiplier | Remaining | Source |
|---|---|---|---|---|
| 1 | US adults currently taking a GLP-1 (12% of 267.0M) | — | **32.0M** | [KFF, Nov 2025](https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/) |
| 2 | Smartphone owner | ×91% | 29.1M | [Pew](https://www.pewresearch.org/internet/fact-sheet/mobile/) |
| 3 | Orders groceries online monthly | ×19.5% | **5.7M** | [Grocery Dive](https://www.grocerydive.com/news/grocery-ecommerce-online-sales-july-household-penetration/757641/) |
| 4 | Adoption at 1.0% | | **57,000 subs** | |
| | **ARR** | | **$13.7M gross / $10.9M net** | |

This single segment — people on appetite-suppressing medication who need protein and micronutrient adequacy, which Section 3 showed **no competitor serves** — supports about **45% of the base case on its own.** The base case does not depend on winning the general dieter market.

---

## Every assumption, stated

| # | Assumption | Value used | Source / basis | Type | If it's wrong |
|---|---|---|---|---|---|
| A1 | US adult population | 267.0M | Census 340.1M total − 73.1M under 18 | **Verified** (arithmetic on two Census figures) | ±2% at most; immaterial |
| A2 | Share actively working on weight loss *now* | 27% | Gallup, Nov 2025 | **Verified** (survey, self-report) | NHANES' 47.4% "attempted in past year" would raise SAM to **22.5M** and scale every case ×1.76 |
| A3 | Smartphone ownership | 91% | Pew, 2025 (n=5,022) | **Verified** | Negligible; near-universal |
| A4 | Orders groceries online ≥ monthly | 19.5% | 2025 US consumer data | **Verified but definitionally strict** | Using the looser "61% of households bought groceries online at least once in 2025" raises SAM to **40.0M** and cases ×3.1. I deliberately used the stricter gate |
| A5 | Steady-state adoption of SAM | 0.25% / 1.0% / 2.5% | Calibrated to WW (2.8M), MyFitnessPal (~3.9M), Noom (1.5M) paid bases | **Inferred** `[UNVERIFIED]` | This is the single most sensitive input — see sensitivity table |
| A6 | Price | $19.99/mo, no annual discount | Product decision; matches MyFitnessPal Premium monthly | **Verified as a market price point** | An annual plan at ~$150/yr would cut per-sub revenue ~37% but typically lifts tenure |
| A7 | App-store commission | 20% blended | Apple takes 30%, or 15% under the Small Business Program / after year 1 | **Inferred blend** `[UNVERIFIED]` | Web checkout could cut this to ~3%, adding ~$5M to base-case net |
| A8 | Average paid tenure | 4 / 7 / 12 months | Category churn evidence: consistent calorie tracking falls from 68% (wk 1) to 21% (wk 12); diet program dropout 57% at 6 months | **Inferred from adjacent data** `[UNVERIFIED for this product]` | Drives required gross adds, CAC and therefore whether the business works at all |
| A9 | US share of comparables' subscriber bases | ~70% | Not disclosed by WW or MyFitnessPal | **Assumption** `[UNVERIFIED]` | Only affects the calibration check, not the model |
| A10 | Every subscriber pays full price | 100% | No trials, discounts, churned-mid-month users modeled | **Simplification** `[UNVERIFIED]` | Real collected revenue typically runs 10–20% below gross billings |
| A11 | The segments don't overlap | GLP-1 cross-check treated as a subset | GLP-1 users are *inside* the 72.1M weight-management population, not additional | **Stated to prevent double-counting** | If treated as additive, the model would be overstated — don't |

---

## Sensitivity: the two numbers that move everything

| Adoption of SAM → | 0.25% | 0.5% | 1.0% | 2.0% | 2.5% |
|---|---|---|---|---|---|
| **Subscribers** | 32,000 | 64,000 | 128,000 | 256,000 | 320,000 |
| **Gross ARR** | $7.7M | $15.4M | $30.7M | $61.4M | $76.8M |
| **Net ARR (after 20% store fee)** | $6.1M | $12.3M | $24.6M | $49.1M | $61.4M |

| SAM definition → | Strict (monthly online grocery, used here) | Loose (any online grocery in a year) |
|---|---|---|
| SAM | 12.8M | 40.0M |
| Base case (1.0%) | 128,000 subs / $30.7M | 400,000 subs / $95.9M |

**I recommend defending the strict version.** An investor who finds the loose gate on their own will discount everything else you say; one who sees you chose the conservative gate deliberately will trust the rest.

---

## The price assumption is the weakest part of this model

$19.99/month is at the **top** of what this category charges:

| App | Monthly price |
|---|---|
| Plan to Eat | $5.95 |
| eMeals | ~$4.99 (annual) |
| Samsung Food | $6.99 |
| MealPrepPro | $9.99 |
| MacroFactor | $11.99 |
| **This app** | **$19.99** |
| MyFitnessPal Premium | $19.99 |
| Fitia Premium | $19.99 |

Two honest readings:

- **The bear case:** $19.99 matches the exact price point that generates 39% of all complaints in this category (Section 2), and free AI chatbots are already being cited by reviewers as a substitute for paid meal planning.
- **The bull case:** the correct comparison isn't meal-planner apps, it's the **human** stack this replaces — Section 2 put that at **$150/month minimum** (nutrition coach + grocery shopper, unbundled) up to **$1,500+/month** (personal chef). At $19.99, the app is **13% of the cheapest human alternative**. That is the pricing argument to make to an investor, and it's why the product must do the ordering, not just the planning — planning alone is worth $5.95, as the market has already priced it.

---

## What this model does *not* claim

- It doesn't claim a share of the "$135B weight loss market" or the "$217B online grocery market." Those numbers appear nowhere in the math.
- It doesn't count downloads, free users, or total addressable installs as revenue.
- It doesn't assume any B2B/health-plan revenue, which Section 2 showed is where food-as-medicine money actually sits today. **That channel is upside not modeled here** `[UNVERIFIED — no pricing or contract data gathered for it yet]`.
- It doesn't model grocery-order commissions, affiliate margin on carts, or advertising — all plausible second revenue lines, none included.

## Flags

| Item | Status |
|---|---|
| Adoption rates (A5) | `[UNVERIFIED]` — reasoned from comparables, not measured. The core judgment call in the model. |
| Tenure / churn (A8) | `[UNVERIFIED]` — borrowed from adjacent tracking and diet-program data. |
| MyFitnessPal implied subscriber count | `[INFERRED]` — revenue ÷ list price; mixes plan types and geographies. |
| US share of WW / MyFitnessPal bases | `[UNVERIFIED]` — not disclosed. |
| App-store blended fee | `[UNVERIFIED]` — depends on plan mix, tenure and Small Business Program eligibility. |
| "61% of households" vs "19.5% monthly" | ⚠️ Both figures are real but measure different things (household-ever vs. consumer-monthly). The strict one is used; the loose one is shown only in sensitivity. |
| Census adult total | ⚠️ Derived by subtracting the under-18 count from the national total — both Census figures, same vintage, but the Bureau doesn't publish the 18+ total in these two releases directly. |
