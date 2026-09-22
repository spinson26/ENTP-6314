# Bottom-Up Market Size — $1,000/year Founder Valuation App

**Prepared:** September 22, 2026
**Method:** Population → behavioral gates → adoption → revenue. Every population figure comes from a named government, university or industry-association source. **No top-down percentages of any market total appear anywhere in this model.**

---

## Why the funnel starts where it does

A founder buys a valuation-and-investor-matching product **when they are trying to raise**. So the population is not "startups" — it's **companies attempting an outside raise in a given year**. Three independent counts bracket that number:

| Measure | US figure | What it counts | Source |
|---|---|---|---|
| Initial Form D filings | **34,553** (2025 YTD); 32,554 (2024) | Companies that *completed* a private raise under a Reg D exemption — a legal filing, so a hard floor | [SEC Reg D statistics](https://www.sec.gov/data-research/statistics-data-visualizations/regulation-d-offerings/regulation-d-offerings-number-offerings-capital-raised) |
| Ventures receiving angel funding | **54,735** (2023) | Companies funded by angels, including raises that never file | [UNH Center for Venture Research](https://scholars.unh.edu/cgi/viewcontent.cgi?article=1041&context=cvr) |
| US VC deals closed | **16,709** (2025) | Institutional rounds — mostly a subset of the above | [PitchBook-NVCA Venture Monitor](https://www.inc.com/brian-contreras/venture-capital-rebound-ai-pitchbook-nvca/91284645) |

**Companies that successfully raise outside equity in a year: ~55,000.** I use the angel figure as the broad measure because it captures non-institutional raises, which is this product's segment.

---

## The funnel (base case)

| Step | Filter | Multiplier | Population | Source / basis |
|---|---|---|---|---|
| 1 | US companies completing an outside raise, per year | — | **54,735** | [UNH CVR](https://scholars.unh.edu/cgi/viewcontent.cgi?article=1041&context=cvr) |
| 2 | Companies **attempting** a raise per company that succeeds | **×3** | **164,205** | `[UNVERIFIED — see A2]` |
| 3 | Attempting founders who look for *software* rather than only an accountant, lawyer or warm intro | **×40%** | **65,682** | `[UNVERIFIED — see A3]` |
| 4 | Of those, the share who reach a product like this in a given year (US, English, online-first) | **×90%** | **59,114** | `[UNVERIFIED — see A4]` |

### **Serviceable market (SAM) = ~59,000 US founders per year**

Defined as: *founders actively attempting to raise outside capital this year who would consider buying software to price their company and target investors.*

---

## Three cases

The funnel is held constant; only **adoption** varies, so the cases are comparable.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| SAM | 59,000 | 59,000 | 59,000 |
| **Adoption (% of SAM)** | **1.0%** | **3.0%** | **7.0%** |
| **Paying customers** | **590** | **1,770** | **4,130** |
| Price | $1,000/yr | $1,000/yr | $1,000/yr |
| **Gross revenue (ARR)** | **$590,000** | **$1.77M** | **$4.13M** |
| Less payment processing (~3%, web checkout) | −$17,700 | −$53,100 | −$123,900 |
| **Net revenue** | **$572,300** | **$1.72M** | **$4.01M** |
| Assumed renewal rate | 20% | 35% | 55% |
| **New customers needed each year to hold that base** | **~472** | **~1,151** | **~1,859** |

### The structural problem this model exposes

**Fundraising is episodic. Diets are chronic.** A founder raises, closes (or gives up), and stops needing the product. At a 35% renewal rate, holding 1,770 customers requires acquiring **~1,150 new paying founders every year, forever.** Revenue is real but replacement-heavy, and customer acquisition cost is the number that decides the business — not the algorithm.

**This is the argument for the "continuous valuation" wedge from Section 3.** A product that answers *"what am I worth today"* every month — not once per raise — is the only version of this that renews. That feature is not a nice-to-have; it is the business model.

---

## Why those adoption rates are defensible

Anchored on how many US companies demonstrably pay for valuation-adjacent software each year.

| Comparable | Observed scale | Implied check on our numbers |
|---|---|---|
| **Carta 409A valuations** | **16,000+/year** from one vendor ([Carta](https://carta.com/equity-management/cap-table/409a-valuations/)) | Base case (1,770) = **~11% of Carta's annual 409A volume**. Plausible for a years-3-to-5 outcome. |
| **Eqvista 409A + cap table** | $990/yr pre-revenue tier ([pricing](https://www.eqvista.com/pricing/)) | Proves founders will pay ~$1,000/yr for a valuation-adjacent subscription — the exact price point modeled. |
| **Foundersuite** | 110 Capterra reviews; $745–$1,609/yr ([pricing](https://foundersuite.com/pricing)) | A founder-facing fundraising tool at this price sustains a business `[UNVERIFIED — customer count not disclosed]`. |
| **Equidam** | 15 lifetime Trustpilot reviews, 2 in the past year ([Trustpilot](https://www.trustpilot.com/review/equidam.com)) | **The cautionary anchor.** The closest existing competitor shows very little usage. If Equidam's actual paying base is in the hundreds, the conservative case is the realistic one. |
| **Crunchbase Pro** | $588/yr, 4M+ company profiles | An incumbent already sells ranked investor matching below our price. |

**Read across:** 1,770 paying founders is ~3% of the attempting pool and ~11% of one vendor's annual 409A volume. Conservative (590) is "a small, real business." Optimistic (4,130) is "the category leader for founder-facing valuation" — a position **currently vacant**, since Equidam's usage looks thin.

---

## Independent cross-check: the non-institutional founder

A separate population, different source, same method.

| Step | Filter | Multiplier | Remaining |
|---|---|---|---|
| 1 | *Shark Tank* applications per year — founders publicly valuing their business who are overwhelmingly **not** VC-track | — | **40,000** ([Shark Tank Blog](https://www.sharktankblog.com/shark-tank-statistics/)) |
| 2 | Adoption at 3% | | **1,200 customers** |
| | **Revenue at $1,000/yr** | | **$1.2M** |

This single, entirely separate segment supports **~68% of the base case on its own** — and it is a segment Section 3 showed no competitor serves (Carta caps its free tier at $1M raised; PitchBook starts at $15,000).

---

## Every assumption, stated

| # | Assumption | Value | Source / basis | Type | If it's wrong |
|---|---|---|---|---|---|
| A1 | Companies completing an outside raise, per year | 54,735 | UNH Center for Venture Research, 2023 | **Verified** (survey-based industry estimate) | Using SEC Form D initial filings (34,553) instead cuts SAM to ~37,000 and every case by **37%** |
| A2 | Attempt-to-success multiplier | **×3** | No survey found. Reported pre-seed funnel is ~100 first meetings → 6–8 checks, implying many attempts per success | `[UNVERIFIED]` | ×2 → SAM 39,000 (cases −33%); ×4 → SAM 79,000 (cases +33%). **Most sensitive structural input.** |
| A3 | Share of attempting founders who will buy software at all | 40% | Section 1 showed the true incumbent is spreadsheets, warm intros and advisors | `[UNVERIFIED]` | At 25%, base case falls to ~1,100 customers / $1.1M |
| A4 | US/online reachable share | 90% | Product is US-focused and online-only | `[UNVERIFIED — reasonable]` | Immaterial |
| A5 | Adoption of SAM | 1% / 3% / 7% | Calibrated against Carta's 16,000 409As/yr and Eqvista's $990 price point | `[UNVERIFIED]` | See sensitivity table |
| A6 | Price | $1,000/yr flat, no tiers | Your input. Sits between Crunchbase ($588), Foundersuite ($745–$1,609), Eqvista 409A ($990) and Equidam 409A ($1,990) | **Verified as a live market price band** | A $49/mo plan ($588/yr) would raise conversion but cut ARPU 41% |
| A7 | Renewal rate | 20% / 35% / 55% | Fundraising is episodic; no published renewal benchmark for this category | `[UNVERIFIED]` | The single biggest driver of whether this is a business. At 20% renewal the base case needs ~1,400 new customers/yr |
| A8 | Payment processing | ~3% | Web checkout (Stripe-class), not app-store billing | **Verified as standard** | Selling through iOS would cost 15–30%, i.e. 5–10× more |
| A9 | No B2B revenue modeled | $0 | Accelerators, angel groups, universities and SBDCs could buy seats in bulk | **Deliberate omission** | Unmodeled upside; also the most plausible fix for A7's churn problem |
| A10 | Segments are not additive | — | Shark Tank applicants overlap the attempting pool; the cross-check is a **check**, not an addition | **Stated to prevent double-counting** | Adding them would overstate the model |
| A11 | Every customer pays full price | 100% | No trials, discounts or partial-year customers modeled | **Simplification** | Collected revenue typically runs 10–20% below gross billings |

---

## Sensitivity

**Adoption (SAM held at 59,000):**

| Adoption → | 1.0% | 2.0% | 3.0% | 5.0% | 7.0% |
|---|---|---|---|---|---|
| Customers | 590 | 1,180 | 1,770 | 2,950 | 4,130 |
| **Gross ARR** | $590k | $1.18M | **$1.77M** | $2.95M | $4.13M |

**The attempt multiplier (A2), at 3% adoption:**

| Multiplier → | ×2 | ×3 (base) | ×4 |
|---|---|---|---|
| SAM | 39,000 | 59,000 | 79,000 |
| Customers | 1,170 | **1,770** | 2,370 |
| Gross ARR | $1.17M | **$1.77M** | $2.37M |

**Population source (at 3% adoption, ×3 multiplier):**

| Base population → | SEC Form D (34,553) — strict | UNH angel (54,735) — base |
|---|---|---|
| SAM | 37,300 | 59,000 |
| Gross ARR | $1.12M | **$1.77M** |

**Recommendation for an investor conversation:** present the **Form D version ($1.12M base)** as the floor and the angel version as the base. Form D is a legal filing — nobody can argue with the count — and volunteering the stricter number first buys credibility for everything after it.

---

## What this model says about the price

$1,000/yr is defensible against the category:

| Product | Annual price |
|---|---|
| Crunchbase Pro | $588 |
| Foundersuite Silver | $745 |
| Eqvista 409A + cap table (pre-revenue) | $990 |
| **This app** | **$1,000** |
| Foundersuite Platinum | $1,609 |
| Equidam 409A | $1,990 |
| PitchBook single seat | ~$15,000–$20,000 |

**But note what $990 buys at Eqvista: a safe-harbor-compliant 409A *plus* a cap table.** At the same price, this product must deliver something a compliance valuation cannot — the negotiation number, continuously updated, plus ranked investor targeting. **That is the whole justification for the price, and it is exactly the gap Section 3 found empty.**

Against the human alternative from Section 2 — a fundraising consultant at 3–8% of a $2M raise ($60k–$160k), or a fractional CFO at $3,500–$7,500/month — **$1,000/yr is roughly 1–3% of the human cost.** That is the comparison to lead with.

---

## What this model does *not* claim

- No share of any "$X billion market." No such number is used.
- No credit for the 5.67M annual business applications or the 1.7M high-propensity applications. Most will never seek outside equity; counting them would be the top-down move this brief forbids.
- No B2B, API, data-licensing or transaction-fee revenue.
- No international expansion.

## Flags

| Item | Status |
|---|---|
| Attempt multiplier (A2) | `[UNVERIFIED]` — the load-bearing assumption. Worth a primary survey before pitching. |
| Software-purchase propensity (A3) | `[UNVERIFIED]` — no data found on what share of raising founders buy any tool. |
| Renewal rate (A7) | `[UNVERIFIED]` — no published benchmark for episodic fundraising software. |
| Adoption rates (A5) | `[UNVERIFIED]` — reasoned from Carta's 409A volume and Eqvista pricing, not measured. |
| Angel data vintage | ⚠️ UNH CVR figures are **2023**, the latest published. |
| Form D vs angel overlap | ⚠️ The two counts overlap and are never added here. |
| Equidam paying customers | ❌ Not disclosed. Its 15-review base is the strongest available signal and it is weak. |
| Foundersuite / Crunchbase customer counts | ❌ Not disclosed by either company. |
| Shark Tank applicant count | ⚠️ From a fan-run statistics site, not ABC. Widely repeated, never officially confirmed. |
