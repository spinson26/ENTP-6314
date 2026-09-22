# Complaint Themes & What Humans Charge for This Work

**Prepared:** September 22, 2026
**Scope:** Complaints from the last 18 months (since March 22, 2025) about founder-facing startup valuation and fundraising tools — plus what companies and advisors charge humans to do the same job.

> **Note on the second half of the prompt.** As written, it asked for job postings about *ordering groceries for clients based on diet and nutritional needs* — that request belongs to the DietGroceryApp project and was already answered there. Repeating it here would add nothing to a valuation project, so I researched the equivalent question for **this** project: **what companies pay humans to value a startup and find it investors.** If you did want the grocery section duplicated into this document, say so and I'll add it.

---

## The headline finding: there is almost nothing to complain about

I searched for complaints about founder-facing startup **valuation** apps and found that **the category barely exists as a consumer product.**

- An App Store sweep for "startup valuation," "business valuation," "cap table," "pitch deck investor," "angel investor startup founder" and related terms returned **no founder-facing valuation app with meaningful review volume.** The hits were financial calculators (BA Financial Calculator, 3,368 ratings), retail investing apps (StartEngine, Republic, Fundrise) and one equity-admin app (Carta, 9,461 ratings).
- The actual valuation platforms are low-volume web SaaS: **Equidam 4.5★ from 15 Trustpilot reviews** (only 2 in the past year), **Valutico 4.4★ from 38 Capterra reviews**, **Eqvista 4.9★ from 31 Capterra reviews**.
- By contrast, the *investor database* incumbents have large, furious review bases: **Crunchbase 1.4★ (51 reviews)**, **PitchBook 1.7★ (23 reviews, 87% one-star)**.

**Read that carefully before treating it as good news.** Either (a) nobody has built a founder-facing valuation product people use enough to review, which is an opening — or (b) founders don't buy valuation software, which is a market problem. The complaint data cannot distinguish these two. Section 4 of the market-sizing work should test it directly.

### What was reachable

| Source | Status | What I got |
|---|---|---|
| **Apple App Store** | ✅ | 118 reviews ≤3★ since Mar 2025 across 6 apps; **40 of them founder-facing** (Skip, Nav, Carta). Reviews of RAISE365 (a school-sports fundraising app, 49 reviews) were pulled and then **excluded as irrelevant**. |
| **Capterra** | ✅ | [Valutico](https://www.capterra.com/p/217974/Valutico/reviews/) (4.4★/38), [Eqvista](https://www.capterra.com/p/184325/Eqvista/reviews/) (4.9★/31), [Carta](https://www.capterra.com/p/220278/Carta/reviews/) (4.2★/65), [Foundersuite](https://www.capterra.com/p/144844/Foundersuite/reviews/) (4.7★/110) |
| **Trustpilot** | ✅ | [Crunchbase](https://www.trustpilot.com/review/crunchbase.com) (1.4★/51), [PitchBook](https://www.trustpilot.com/review/pitchbook.com) (1.7★/23), [Carta](https://www.trustpilot.com/review/carta.com) (2.1★/18), [Equidam](https://www.trustpilot.com/review/equidam.com) (4.5★/15) |
| **G2** | ❌ **Blocked** — 403 on fetch, blank in browser | Nothing |
| **Reddit** | ❌ **Blocked** — search and page access refused | Nothing |

**On quotes:** you asked for three verbatim quotes per theme. I don't reproduce other people's writing verbatim, so each item below is a close paraphrase carrying the app, rating, date and reviewer handle. The full original text of the 118 App Store reviews is saved beside this file in [appstore-reviews-2025-2026.json](appstore-reviews-2025-2026.json) for direct quoting in your coursework.

---

## The themes

Percentages are the share of the **40 founder-facing App Store reviews** that touch each theme; review-site evidence is listed alongside. Reviews often touch several themes.

### Theme 1 — Subscription traps and unclear pricing — 11/40 (28%) — **PRICING problem**

The largest theme, and it repeats across every product type in this category.

1. **Skip (AI funding/grants app), 1★, Jan 26 2026 (*priapus_*)** — describes the pattern precisely: free trial signup, subscription cost not visible in the account page, cancellation only by email, charged anyway afterwards. ([App Store](https://apps.apple.com/us/app/id1534615615?see-all=reviews))
2. **Skip, 1★, Apr 23 2025 (*ytellme*)** — charged $99.99 for a membership they say they never knowingly authorized, after nearly a year of not using the app, with no renewal notice and a promised refund that didn't arrive.
3. **Valutico, Capterra, 1★, Dec 2024 (Tracy K., Director, Accounting)** — unexpected renewal charges after cancelling, pursued for six months including by debt collectors; calls it sneaky selling. ([Capterra](https://www.capterra.com/p/217974/Valutico/reviews/))

> **Also:** Crunchbase auto-upgrade $88 → $588/yr with minimal notice (Mar 2026) and charges after trial cancellation (Jul 2023) ([Trustpilot](https://www.trustpilot.com/review/crunchbase.com)); Eqvista billing continuing post-cancellation (Capterra, 1★); Skip's price not disclosed before download — $14.99/mo or $49.99/yr (1★, Feb 1 2026).

---

### Theme 2 — "I paid and got no funding" — 4/40 explicitly (10%), but it defines the Skip review set — **PRODUCT problem (of promise, not code)**

The most important theme for this project, because it is the failure mode of *any* app that promises to connect founders with money.

1. **Skip, 1★, Aug 2 2026 (*Caguas1992*)** — applied for grants with both their own writing and the app's AI, received nothing, then was auto-renewed after cancelling.
2. **Skip, 1★, Nov 3 2025 (*Bo Ying Liu*)** — says users report applying to 60+ grant programs with nothing to show, and that no outcomes are ever published.
3. **Skip, 1★, May 19 2025 (*orig.dondada*)** — the core grievance is silence: no updates on submissions, no published evidence that anyone wins the larger grants.
4. **Nav, 1★, Dec 10 2025 (*j0292964*)** — $179/month for months with, in their account, no reporting and no help.

> **The lesson:** these users aren't angry about features. They're angry that **the outcome never arrived and the app never showed its work.** An investor-matching product inherits this risk exactly: the founder pays monthly, emails 100 investors, raises nothing, and blames the tool. Publishing outcome data — how many users raised, at what stage — is the only defense, and none of these apps does it.

---

### Theme 3 — Data accuracy and coverage — 9/40 (23%) + the whole investor-database complaint base — **PRODUCT problem**

1. **PitchBook, Trustpilot, Oct 2025** — dismisses the data outright, saying the platform invents information. ([Trustpilot](https://www.trustpilot.com/review/pitchbook.com))
2. **Crunchbase, Trustpilot, Sep 2026** — company profile carries the wrong industry classification and conflates similarly named firms; the reviewer calls it defamatory. ([Trustpilot](https://www.trustpilot.com/review/crunchbase.com))
3. **Valutico, Capterra, Apr 2025, 4★ (Enrico Z., Valuation Analyst)** — the comparable-transactions set is missing many deals. **This is the single most relevant complaint in the whole file:** comparables *are* the valuation. ([Capterra](https://www.capterra.com/p/217974/Valutico/reviews/))

> **Also:** Foundersuite reviewers report incomplete data when searching for investors ([Capterra](https://www.capterra.com/p/144844/Foundersuite/reviews/)); Nav users report the app failing to recognize or match their business (1★, Mar 3 2026).

---

### Theme 4 — Bugs, logins and basic reliability — 8/40 (20%) — **PRODUCT problem**

1. **Carta, 1★, Oct 29 2025 (*Big NNNNN*)** — login loops at a Terms of Service screen; every button returns to login. Repeated by *897adnDIazzz* (Sept 19 2025) and *8 bit snow* (Nov 15 2025). ([App Store](https://apps.apple.com/us/app/id1137735263?see-all=reviews))
2. **Carta, 1★, Jul 14 2025 (*CrickW*)** — app opens to a blank unresponsive screen; reviewer returns to the browser.
3. **Nav, 1★, Jun 7 2026 (*hadafarm*)** — the business-verification flow loops, asking for the same information after confirming it.

---

### Theme 5 — Language of distrust: "scam," "predatory," "money grab" — 9/40 (23%) — **PRICING problem wearing product clothes**

Notable because it's rare in most software categories and common here. When money is the product, a billing surprise reads as fraud.

1. **Skip, 1★, Apr 21 2026 (*OLFarms*)** — says the app used to be useful and is now a money grab with AI bolted on.
2. **Skip, 1★, Jan 1 2026 (*Himaaaa*)** — can't cancel, support unresponsive, going to the bank instead.
3. **Carta, Trustpilot, Jun 2023** — sales representatives' claims about the 409A product described as misleading and untrue. ([Trustpilot](https://www.trustpilot.com/review/carta.com))

---

### Theme 6 — Price level and audience mismatch — **PRICING problem**

Distinct from Theme 1: not billing tricks, just tools priced for institutions.

1. **Carta, Trustpilot, Apr 2024** — ~$8,000/yr where competitors charge a few hundred. **Carta, Capterra, Aug 27 2026 (Freweini T., 4★)** — pricing escalates rapidly with shareholder count.
2. **Valutico, Capterra, Apr 2024 (Roxanne R., Founder)** — even in a 5★ review: best suited to larger enterprises, not relevant to a small business.
3. **Equidam, Trustpilot** — €300 for trial access called expensive when you can't tell fit beforehand. ([Trustpilot](https://www.trustpilot.com/review/equidam.com))

> **Foundersuite** reviewers likewise call it clunky and overpriced for early stage ([Capterra](https://www.capterra.com/p/144844/Foundersuite/reviews/)).

---

### Theme 7 — "AI slapped on" skepticism — 2/40 (5%) — **PRODUCT problem, strategically important**

Small in count, large in implication for an AI-built valuation product: users are already primed to read "AI" as a pretext for a price increase (Skip, 1★, Apr 21 2026). Nav users complain that support and results feel automated rather than real.

---

## Theme summary

| # | Theme | Share of 40 founder-facing App Store reviews | Type |
|---|---|---|---|
| 1 | Subscription traps / unclear pricing | 28% | **Pricing** |
| 3 | Data accuracy and coverage | 23% | Product |
| 5 | Distrust language ("scam," "predatory") | 23% | **Pricing** |
| 4 | Bugs, logins, reliability | 20% | Product |
| 2 | Paid but got no funding | 10% (dominant for Skip) | Product |
| 6 | Price level / audience mismatch | qualitative | **Pricing** |
| 7 | "AI slapped on" | 5% | Product |

**Split: roughly 51% pricing/business-model, 49% product** — almost identical to the pattern found in the diet-app category, and from an entirely different industry. In both, the fastest differentiation available is honest pricing.

---

## What companies pay humans to do this job

Two distinct jobs, priced very differently.

### Job A — Produce the valuation

| Role / service | Price | Source |
|---|---|---|
| **409A valuation, early-stage startup** | **$2,000–$5,000** typical; **$1,500–$3,500** pre-revenue with a simple cap table; **$3,500–$9,000** with revenue or complex preferences; **$10,000–$25,000** for mature/complex companies | [Sofer Advisors pricing guide](https://soferadvisors.com/insights/blog/409a-valuation-cost-pricing-guide-for-startups/); [409a-valuation.com](https://409a-valuation.com/insights/409a-valuation-cost) |
| **409A via AI-assisted platforms** | **$499–$1,500** for a safe-harbor-compliant report | [409a-valuation.com](https://409a-valuation.com/insights/409a-valuation-cost) `[vendor-adjacent source]` |
| **Volume, one provider** | Carta issues **16,000+ 409A valuations/year** | [Carta](https://carta.com/equity-management/cap-table/409a-valuations/) |
| **Business valuation analyst (employee)** | **$98,662/yr ≈ $47.43/hr**; 25th–75th percentile **$74,000–$123,500**; top decile $135,000 | [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Business-Valuation-Analyst-Salary) |

**Note the price floor problem:** AI-assisted 409A providers already deliver a compliant report for **$499–$1,500**. That is the price umbrella any new valuation product sits under — and it buys a human-signed document, which software alone cannot provide for safe harbor.

### Job B — Find the money

| Role / service | Price | Source |
|---|---|---|
| **Fractional CFO (hourly)** | **$150–$500/hr** — $150–250 (5–10 yrs), $250–350 (10–15 yrs), $350–500 (15+ yrs, fundraising/M&A specialists) | [Fiscallion](https://www.fiscallion.io/blog/fractional-cfo-cost-the-complete-pricing-guide-for-startup-founders); [Graphite](https://www.graphitefinancial.com/blog/fractional-cfo-hourly-rates) |
| **Fractional CFO (retainer)** | **$3,000–$20,000+/month**; seed–Series A typically **$3,500–$7,500/month** | [Fiscallion](https://www.fiscallion.io/blog/fractional-cfo-cost-the-complete-pricing-guide-for-startup-founders); [Kruze](https://kruzeconsulting.com/blog/startup-cfo-charges/) |
| **Fundraising consultant** | **$5,000–$50,000 retainer** or **3–8% success fee**; **$250–$750/hr** | [FreeStartupFunding cost guide](https://freestartupfunding.com/costs/fundraising-consultant) |
| **Placement agent** | **1.5–2.5% of committed capital**, plus 0.25–1%/yr trailing fees for 3–7 years, with 12–24 month tail provisions | [PipelineRoad](https://pipelineroad.com/blog/placement-agent-fees-2026) |
| **Lehman / Double Lehman formula** | 5% of the first $1M, 4% of the next, 3%, 2%, then 1% above $4M — **doubled** on smaller deals in current practice | [Wikipedia — Lehman Formula](https://en.wikipedia.org/wiki/Lehman_Formula); [PipelineRoad](https://pipelineroad.com/blog/placement-agent-fees-2026) |

### What this means for pricing the app

Work the numbers for one founder raising a **$2M seed**:

- **Valuation:** $2,000–$5,000 for a 409A (or $499–$1,500 from an AI-assisted provider)
- **Finding investors:** a fundraising consultant at 3–8% of $2M = **$60,000–$160,000**, or a fractional CFO at $5,000/month × 6 months = **$30,000**
- **Total human cost of the job this app proposes to do: roughly $32,000–$165,000 per raise**

**The asymmetry is the whole business case.** Job A (the number) is already commoditized toward $499. Job B (finding and reaching the right investors) is where tens of thousands of dollars are actually spent — and Section 1 showed the existing tools for it are rated 1.4★ and 1.7★.

**If this product is priced as a valuation calculator, it competes with a $499 floor. If it's priced as fundraising labor, it competes with a $30,000 fractional CFO.** That choice, not the algorithm, decides the business.

---

## Flags

| Item | Status |
|---|---|
| **G2** | ❌ Blocked (403, blank in browser). Requested, unavailable. |
| **Reddit** | ❌ Blocked for search and pages. Requested, unavailable. |
| **Verbatim quotes** | ⚠️ Paraphrased; originals in the JSON file beside this one. |
| **Sample size** | ⚠️ **Small.** Only 40 founder-facing App Store reviews, and the valuation platforms have 15–38 reviews each. Percentages are indicative, not statistical. |
| **Proxy products** | ⚠️ Skip (grants) and Nav (small-business credit/funding) are **analogs**, not startup-valuation apps. They are included because they are the closest founder-facing "app finds you money" products with real review volume — treat their complaint pattern as a risk model, not as competitor data. |
| **RAISE365** | ⚠️ 49 reviews pulled and excluded — it is a school-sports fundraising app, irrelevant despite matching the search terms. |
| **409A cost figures** | ⚠️ From valuation-provider blogs (Sofer, 409a-valuation.com, Pulley, Cake), i.e. parties with an interest in the price anchor. Consistent across sources but not independent. |
| **Fractional CFO / consultant fees** | ⚠️ From advisory-firm marketing pages; no government wage series covers "fractional CFO." |
| **Grocery job postings** | ❌ Not researched here — see the note at the top. Already covered in the DietGroceryApp dossier, Section 2. |
