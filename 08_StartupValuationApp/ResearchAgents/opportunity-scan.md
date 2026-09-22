# Opportunity Scan — Startup Valuation & Investor Matching App

**Prepared:** September 22, 2026
**Analyst role:** Market research analyst
**Problem space:** Founders don't know what their company is worth when raising outside capital (or pitching on *Shark Tank*), confusing emotional attachment and future potential with current financial reality — and they burn enormous time both computing a valuation and hunting for the investors who fund their industry and stage.

> **Access note.** Reddit and G2 block this research tool (Reddit refuses search and page loads; G2 returns 403 and renders blank). Complaints below come from Trustpilot, Capterra and the Apple App Store, which are reachable. Complaints are paraphrased with reviewer, rating and date so each can be found in its source. See **Section 5** for everything unverified.

---

## 1. Who has this problem, and how many are there in the US?

This market has to be built in layers, because "startup" spans someone filing an LLC and someone closing a Series B.

| Layer | Definition | US figure (per year unless noted) | Source |
|---|---|---|---|
| **L1 — Everyone forming a business** | Business applications filed | **5,671,836** in 2025 (all-time record) | [Census Business Formation Statistics](https://www.census.gov/econ/bfs/index.html) via [Commerce Institute](https://www.commerceinstitute.com/new-businesses-started-every-year/) |
| **L2 — Likely to become real employers** | High-propensity business applications | **1,708,842** in 2025 | [Census BFS](https://www.census.gov/econ/bfs/index.html) |
| **L3 — Actually hiring** | Private-sector establishment births | **~323,000 in Q3 2025 alone** (≈1.2–1.3M/yr) `[annualization is mine]` | [BLS Business Employment Dynamics](https://www.bls.gov/news.release/cewbd.htm) |
| **L4 — Raising private capital under an exemption** | Initial Form D filings | **32,554** (2024); **34,553** (2025 YTD) | [SEC Reg D statistics](https://www.sec.gov/data-research/statistics-data-visualizations/regulation-d-offerings/regulation-d-offerings-number-offerings-capital-raised) |
| **L5 — Angel-funded ventures** | Ventures receiving angel money | **54,735** (2023), from **422,350** active angels | [UNH Center for Venture Research](https://scholars.unh.edu/cgi/viewcontent.cgi?article=1041&context=cvr) |
| **L6 — Institutional VC rounds** | US VC deals closed | **16,709 deals / $339.4B** (2025) | [PitchBook-NVCA Venture Monitor via Inc.](https://www.inc.com/brian-contreras/venture-capital-rebound-ai-pitchbook-nvca/91284645) |
| **L7 — Needing a formal 409A valuation** | 409A valuations issued by Carta alone | **16,000+/yr** | [Carta](https://carta.com/equity-management/cap-table/409a-valuations/) |
| **L8 — The televised version** | *Shark Tank* applications | **40,000+/yr** | [Shark Tank Blog](https://www.sharktankblog.com/shark-tank-statistics/) |

### The defensible core market

**Companies actively raising outside equity in a given year: roughly 55,000–90,000.**

Reasoning: Form D initial filings (32,554) capture companies raising under Reg D — this is a legal filing, so it's a floor, not an estimate. Angel-funded ventures (54,735) overlap with it but include raises that never file. VC deals (16,709) are mostly a subset of Form D. Taking the angel figure as the broad measure and Form D as the strict one, **the honest range is 55k–90k companies per year that complete an outside raise.**

**Then add the ones who try and fail — which is the real market.** The reported pre-seed funnel is roughly **100 first meetings → 25 second meetings → 12 partner pitches → 6–8 checks** ([capwave.ai](https://capwave.ai/blog/blog-how-long-does-fundraising-take-2026)). Every funded company implies several that ran the same process and got nothing, and *those* founders needed the valuation answer and the investor list just as badly. **At a 1-in-4 success rate, the attempting pool is roughly 220,000–360,000 founders per year** `[UNVERIFIED — no survey found measuring attempt-to-success ratio; this multiplier is my inference]`.

**Plus 40,000+ Shark Tank applicants annually**, who are explicitly valuing their businesses on camera and are the purest expression of the stated problem.

### Evidence the problem is real, not assumed

- **Time cost is measured in months, not hours.** Founders should assume **6–8 months for a full fundraising cycle**, with 3 months as a best case; a pre-seed/seed round runs **12–16 weeks** end to end. ([capwave.ai](https://capwave.ai/blog/blog-how-long-does-fundraising-take-2026); [bfunded](https://bfunded.io/blog/how-long-does-startup-fundraising-take-a-realistic-raise-timeline))
- **It eats a third of the year for some.** A founder survey found roughly two-thirds spend **at least three days a month** on fundraising — close to two months a year — and one-third spend **five or more days a month**, about **12 weeks a year**. ([BFA Global](https://bfaglobal.com/catalyst-fund/insights/3-tips-to-help-startup-founders-decrease-time-spent-fundraising)) `[UNVERIFIED for the US — this survey covered ~60 African founders in 2021]`
- **The valuation gap is documented on television.** Academic work on *Shark Tank* negotiations finds founders who signal equity retention receive offers **further from their ask**, and the show's own data shows women ask for and receive smaller deals ($214k vs $324k), give up more equity (30% vs 26%) and end at **23% lower valuations**. ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S2352673422000038); [The Hustle](https://thehustle.co/shark-tank-data-analysis-10-seasons))
- **The market moves faster than founder intuition.** Median pre-money valuations on Carta: **seed $16M** (Q1 2025, +18% YoY; still $16M in Q3, +14% YoY) and **Series A $48M → $49.3M** across 2025 — record highs *while deal counts fell*. A founder anchoring on last year's numbers is wrong in both directions depending on sector. ([Carta Q1 2025](https://carta.com/data/state-of-private-markets-q1-2025/); [Carta Q3 2025](https://carta.com/data/state-of-private-markets-q3-2025/))
- **Capital is concentrating.** AI/ML took **65.6% of all 2025 US VC dollars ($222B of $339B)** — so "find investors interested in *my* vertical" is a harder and more valuable question for the other 34%. ([PitchBook-NVCA](https://pitchbook.com/news/reports/q4-2025-pitchbook-nvca-venture-monitor))

---

## 2. What do they use today?

| Category | What they use | Where it stops |
|---|---|---|
| **The actual incumbent: spreadsheets** | Excel/Google Sheets DCF models, comparable-company multiples, cap table tabs | Free, infinitely flexible, wrong in ways nobody checks. Even paying Carta customers report exporting the cap table to a spreadsheet to clean it up ([Trustpilot](https://www.trustpilot.com/review/carta.com)) |
| **Rule-of-thumb valuation methods** | Berkus, Scorecard, Risk Factor Summation, VC Method, Dave Berkus/Bill Payne frameworks | Designed for pre-revenue guesswork; produce a range, not a defensible number; require a comparables set the founder doesn't have |
| **Cap table + equity platforms** | Carta, Pulley, Eqvista, Capboard, Capdesk, Ledgy, AngelList | Track ownership; valuation is a paid add-on. Carta Starter is **$2,800/yr** for 50 stakeholders ([Spendflo](https://www.spendflo.com/blog/how-much-does-carta-cost-a-breakdown-of-plans-and-pricing)) |
| **409A valuation providers** | Carta (**16,000+/yr**), Eqvista, independent appraisers | Legally required for option pricing, but it is a *tax-compliance* number, deliberately lower than preferred-share price — **not the number an investor negotiates** ([Carta explainer](https://carta.com/learn/startups/equity-management/409a-valuation/)) |
| **Investor databases** | Crunchbase, PitchBook, Dealroom, CB Insights | Built and priced for investors, not founders. Crunchbase auto-upgrades reported from **$88 to $588/yr**, with 2,000-export caps and **$500/mo overages** ([Trustpilot](https://www.trustpilot.com/review/crunchbase.com)) |
| **Fundraising CRMs** | Foundersuite, Visible.vc, DocSend, Airtable/Notion templates | Track outreach; the investor list still has to come from somewhere, and reviewers report **incomplete data when searching for investors** ([Capterra](https://www.capterra.com/p/144844/Foundersuite/reviews/)) |
| **Open/free investor lists** | OpenVC, NFX Signal, AngelList/Wellfound, LinkedIn, X, accelerator alumni lists | Stale, unranked, no fit scoring; everyone is cold-emailing the same names |
| **Human workarounds** | Warm intros, accelerators (YC/Techstars), angel groups, advisors and bankers, "ask a friend who raised" | The real system. Scarce, unevenly distributed, and expensive |
| **Equity crowdfunding** | StartEngine, Wefunder, Republic | A different capital path with its own complaints — investors report illiquidity and AI-only support ([App Store](https://apps.apple.com/us/app/id1560434961?see-all=reviews)) |
| **Shark Tank prep** | Consultants, YouTube valuation calculators, "value = ask ÷ equity %" arithmetic | The show's own math is a one-line formula; the credibility of the number is what fails |

**The structural gap:** cap-table tools know your equity but not the market; investor databases know the market but not you; nothing currently prices *your* company against comparables **and** tells you who funds that profile.

---

## 3. Complaints about current solutions

Ten complaints from reachable review sites, paraphrased with source, rating and date.

| # | Complaint (paraphrased) | Rating / date | Source |
|---|---|---|---|
| 1 | Cancelled during the trial and was charged for the full year anyway. | Crunchbase, Jul 2023 | [Trustpilot — Crunchbase](https://www.trustpilot.com/review/crunchbase.com) (1.4★, 51 reviews) |
| 2 | Plan auto-upgraded from $88 to $588/yr with minimal notice. | Crunchbase, Mar 2026 | [Trustpilot](https://www.trustpilot.com/review/crunchbase.com) |
| 3 | Export capped at 2,000/month with $500/month overage fees. | Crunchbase, Dec 2025 | [Trustpilot](https://www.trustpilot.com/review/crunchbase.com) |
| 4 | Company profile carries wrong industry classification and conflates similarly named firms — the reviewer calls it defamatory. | Crunchbase, Sep 2026 | [Trustpilot](https://www.trustpilot.com/review/crunchbase.com) |
| 5 | Data quality dismissed outright — reviewer says the platform invents information. | PitchBook, Oct 2025 | [Trustpilot — PitchBook](https://www.trustpilot.com/review/pitchbook.com) (1.7★, 23 reviews, 87% one-star) |
| 6 | "Free trial before you buy" advertised, then sales reps said no trial exists. | PitchBook, Mar 2025 | [Trustpilot](https://www.trustpilot.com/review/pitchbook.com) |
| 7 | Charged ~$8,000/yr where competitors charge a few hundred. | Carta, Apr 2024 | [Trustpilot — Carta](https://www.trustpilot.com/review/carta.com) (2.1★, 18 reviews) |
| 8 | Sales claims about the 409A product described as misleading and untrue. | Carta, Jun 2023 | [Trustpilot](https://www.trustpilot.com/review/carta.com) |
| 9 | Pricing escalates rapidly with shareholder count; interface hard for non-specialists; support sluggish. | Carta, Capterra, Aug 27 2026 (4★, Freweini T.) | [Capterra — Carta](https://www.capterra.com/p/220278/Carta/reviews/) (4.2★, 65 reviews) |
| 10 | Investor search returns incomplete data; the database needs to cover more investors. | Foundersuite, Capterra, Feb 2021 (5★, Sidney N., General Partner) | [Capterra — Foundersuite](https://www.capterra.com/p/144844/Foundersuite/reviews/) (4.7★, 110 reviews) |

**Also on the record:**
- Carta's mobile app has been stuck at a Terms-of-Service loop repeatedly — 1★ reviews Sept 19, Oct 29 and Nov 15, 2025 — and one paying customer objected to an undismissable E*TRADE ad filling the home screen (1★, Feb 11 2026). ([App Store](https://apps.apple.com/us/app/id1137735263?see-all=reviews))
- Carta's cap table export described as sloppy and needing spreadsheet cleanup (Trustpilot, Jul 2022) — the incumbent's output goes *back* into Excel.
- Foundersuite reviewers: can't send email from inside the system, no cap table, "clunky and overpriced for early stage" ([Capterra](https://www.capterra.com/p/144844/Foundersuite/reviews/)).
- StartEngine investors report support answered only by AI and no way to sell shares (1★, July 2026) ([App Store](https://apps.apple.com/us/app/id1560434961?see-all=reviews)).

### What the complaints reveal

1. **Price and billing dominate** — trials that charge, auto-upgrades, overage fees, four-figure bills. Same pattern as the diet-app category, and the same opening: transparent pricing is a differentiator.
2. **Data quality is the trust problem.** Both major investor databases sit near 1.5★ on Trustpilot primarily over accuracy. An app that *matches* founders to investors inherits whatever data it's built on.
3. **These tools are priced and designed for investors, not founders.** A pre-seed founder is not the customer Crunchbase or PitchBook optimizes for, which is why the workaround is a spreadsheet and a LinkedIn search.
4. **Nobody complains about valuation accuracy — because nobody offers it.** Across every review set I could reach, there were complaints about cap tables, price and data, and essentially **none about a valuation engine being wrong**. There is no widely used founder-facing valuation product to complain about.

---

## 4. Why might this be newly solvable with AI in 2026?

**(a) Autonomous multi-step research became a product — Dec 2024 / Feb 2025.**
Gemini Deep Research launched December 2024; OpenAI's Deep Research launched **February 2, 2025**, browsing autonomously for 5–30 minutes and returning cited reports. The investor-discovery half of this problem is precisely that task: read hundreds of fund sites, portfolio pages and filings, and assemble a ranked, sourced list. ([OpenAI](https://openai.com/index/introducing-deep-research/); [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT_Deep_Research))

**(b) Predictive investor matching shipped commercially — late 2025.**
Crunchbase relaunched as a "predictive company intelligence" platform in 2025, and for companies with positive funding predictions it now returns **ranked potential investor matches** — claiming up to 95% precision on fundraising predictions and 16,000+ predictions confirmed by real events. It won a 2026 AI TechAward. ([Crunchbase](https://about.crunchbase.com/blog/meet-the-new-crunchbase-predictive-company-intelligence); [press release](https://about.crunchbase.com/press/press-releases/crunchbase-predictive-intelligence-wins-2026-ai-techawards-for-ai-in-finance)) `[Vendor-reported accuracy; no independent validation found]`
**Read this as a warning as well as a signal: the incumbent has already shipped the matching half of the idea.**

**(c) Natural-language querying of private-market data — 2025.**
PitchBook added AI natural-language search for deal screening in 2025; Crunchbase shipped an AI search assistant across its company and investor dataset. The query "who led seed rounds in industrial robotics in the Midwest in the last 18 months" no longer requires a filter-builder and a data license. `[Secondary sources only]`

**(d) The public data is free and machine-readable.**
Every Reg D raise generates a Form D with issuer, industry, offering size and related persons, published by the SEC as bulk datasets and full-text-searchable. **32,554 initial filings in 2024** is a public, structured record of who raised what — and, via related persons, who funded it. Building an investor graph no longer requires buying one. ([SEC Form D datasets](https://www.sec.gov/data-research/sec-markets-data/form-d-data-sets))

**(e) What has *not* become possible — and this is the important half.**
- **Financial reasoning is still the weak spot.** FinanceBench (2023) found GPT-4-Turbo with retrieval **wrong or refusing on 81%** of questions grounded in public filings. More recently, on the **Finance Agent Benchmark** of real financial research tasks, the best model tested (o3) reached **46.8% accuracy at $3.79 per query**. ([FinanceBench](https://www.emergentmind.com/topics/financebench-dataset); [Finance Agent Benchmark](https://arxiv.org/abs/2508.00828)) A valuation product built on today's models must show its arithmetic and cite comparables, not assert a number.
- **409A safe harbor requires an independent appraiser.** The compliance valuation is a human-signed deliverable; AI can prepare, not certify. ([Carta](https://carta.com/learn/startups/equity-management/409a-valuation/)) `[Vendor explainer, not the IRS regulation text]`
- **Valuation is a negotiation, not a calculation.** The *Shark Tank* research shows outcomes move with negotiating behavior, not just numbers. A model can tell a founder the defensible range; it cannot hold the line in the room.
- **Private comparables are still proprietary.** The transaction data that makes a comp set credible sits inside PitchBook and Carta. Free alternatives are thinner.

**The honest version of the claim:** what changed is not that a computer can now value a company — DCFs and comps are decades old — but that **assembling the inputs (comparables, recent round data, investor activity by sector and stage) went from weeks of manual work or a $20k+ data seat to an agentic research run**, and that **ranked investor matching shipped as a product in 2025**. The valuation *number* still needs to be shown, sourced and defended, because the models remain unreliable at exactly this kind of financial reasoning.

---

## 5. Flags and gaps

| Item | Status |
|---|---|
| **Reddit** | ❌ Blocked for search and page access. No Reddit complaints included. |
| **G2** | ❌ 403 on fetch, blank in browser. No G2 data included. |
| **App store reviews** | ⚠️ Partial — this is web SaaS, so app-store coverage is thin. Only Carta (9,461 ratings) and StartEngine (6,927) had meaningful volume; PitchBook Mobile returned no recent critical reviews. |
| **Verbatim quotes** | ⚠️ Paraphrased, not reproduced. Reviewer handle, rating and date are given so each can be located. |
| **Attempting-founder pool (220k–360k)** | `[UNVERIFIED]` — derived from an assumed 1-in-4 raise success rate. No survey found measuring it. |
| **BLS annualization (~1.2–1.3M births)** | `[UNVERIFIED]` — Q3 2025 was 323,000; I multiplied. Q4 2025 data exists but wasn't retrieved. |
| **Angel data vintage** | ⚠️ Center for Venture Research figures are **2023**, the latest published. 2024–25 angel counts not found. |
| **Form D vs angel overlap** | ⚠️ Unknown. The two counts cannot be added. |
| **Founder time-on-fundraising survey** | ⚠️ ~60 African founders, 2021. Directionally useful, not a US measurement. |
| **Crunchbase's 95% prediction accuracy** | ⚠️ Vendor-reported, no independent validation found. |
| **PitchBook / Crunchbase AI feature launches** | ⚠️ Secondary sources; neither vendor's own release was retrieved. |
| **Carta pricing ($2,800/yr Starter)** | ⚠️ Third-party pricing breakdown, not Carta's own page. |
| **PitchBook seat price** | ❌ Not obtained — quoted privately, no public list price. |
| **Crunchbase/PitchBook/Trustpilot review volumes** | ⚠️ Very small samples (18–51 reviews). Self-selected and skewed negative. Treat as signal of failure modes, not as satisfaction rates. |
