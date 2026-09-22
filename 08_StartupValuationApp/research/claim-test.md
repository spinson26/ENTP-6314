# Testing the Claim: "Continuous Founder-Facing Valuation Is Newly Possible"

**Prepared:** September 22, 2026
**Window searched:** March 2025 – September 2026, plus historical evidence needed to test counterargument 1.

## The claim, stated precisely

> A founder-facing app that **continuously** values a startup is **newly possible**, because an AI agent can now compile the data and produce an ongoing valuation — **and this is not currently in the market.**

**Verdict up front: the "not currently in the market" half is false, and the "newly possible" half is half-true.** An automated multi-method valuation engine for founders has existed since 2013, and **a competitor shipped an AI-agent-callable version of exactly this on August 8, 2025.** What is genuinely new is narrower — and stated at the end.

---

## Part 1 — Evidence FOR

### 1a. Product launches (last 18 months)

| Date | Launch | Relevance |
|---|---|---|
| **Aug 8, 2025** | **Equidam MCP server** — "the first professional-grade valuation tool available through Anthropic's open standard for AI integration." An AI assistant installs `@equidam/mcp-server`, classifies the company from a natural-language description, and runs a five-method valuation. Equidam states it moves a valuation from **4–8 hours to 30 seconds**. | **The capability the claim describes, shipped 13 months ago** ([Equidam](https://www.equidam.com/equidam-mcp-startup-valuation-ai/)) |
| **2025** | **Crunchbase predictive intelligence** — funding predictions with **ranked investor matches** | The investor-matching half, shipped ([Crunchbase](https://about.crunchbase.com/blog/meet-the-new-crunchbase-predictive-company-intelligence)) |
| **Feb 20, 2026** | **Carta 2026 roadmap**: "moving beyond simple record-keeping to deliver a **real-time**, interconnected system of record," AI-enabled data collection, expanded valuation methodologies (OPM, public comps, DCF) | The incumbent is building continuous valuation machinery ([Carta](https://carta.com/product-updates/2026-erp-product-roadmap/)) |
| **Apr 6, 2026** | **Carta AI valuation workflow** — AI extracts portfolio-company financials and KPIs from uploaded documents and pipes them straight into the valuation engine | Automated data compilation → valuation, in production ([Carta](https://carta.com/blog/automating-valuation-workflow/)) |
| **2026** | **AI-powered 409A platforms** ($499–$2,500) described as "the fastest-growing segment," delivering a completed valuation in **3–7 business days**, with a qualified appraiser reviewing and signing | AI valuation has already commoditized the compliance number ([409a-valuation.com](https://409a-valuation.com/insights/409a-valuation-cost)) `[vendor-adjacent source]` |
| **Feb 2, 2025** | **OpenAI Deep Research** — autonomous multi-step web research with citations | The comparables-and-investor legwork ([OpenAI](https://openai.com/index/introducing-deep-research/)) |

### 1b. The one structural point that genuinely favors the claim

**Carta's AI valuation machinery is pointed at fund middle offices, not founders.** Read the April 2026 post: it is about *PE and VC teams valuing their portfolio companies* for auditors, LPs and carry — "weeks spent chasing portfolio companies for hundreds of KPIs." The GP/LP side is being automated aggressively. **The founder-facing equivalent is not what Carta is building.** ([Carta](https://carta.com/blog/automating-valuation-workflow/))

So the accurate version of the claim's second half is: *continuous valuation is being built for investors, not for founders.* That is a real, defensible gap — and a much narrower statement than "not currently in the market."

### 1c. Adoption

Section 1 established that the founder-facing tools that do exist have almost no usage: Equidam has **15 lifetime Trustpilot reviews, 2 in the past year**, despite claiming 160,000+ valuations across 90+ countries. `[The gap between those two numbers is unexplained and matters — see flags.]`

---

## Part 2 — Evidence AGAINST

### 2a. Financial reasoning is the specific thing LLMs are worst at

| Finding | Source |
|---|---|
| **Four of six leading models fabricate financial data** when source documents are incomplete; **two do so confidently, without disclosure, in an authoritative format** (2026 benchmark) | [JurisTech 2026 LLM hallucination benchmark](https://juristech.net/juristechs-2026-llm-benchmark-for-ai-hallucination-in-finance/) |
| Top models fall from **95.6% accuracy on simple lookups to near 0% on multivariate calculations**; perturbing financial statements drops predictive accuracy to chance — evidence of memorization, not reasoning | [Evaluating Financial Intelligence in LLMs (arXiv 2603.08704)](https://arxiv.org/pdf/2603.08704) |
| On the **Finance Agent Benchmark** of real financial research tasks, the best model (o3) reached **46.8%** at $3.79/query | [arXiv 2508.00828](https://arxiv.org/abs/2508.00828) |
| **FinanceBench (2023):** GPT-4-Turbo with retrieval was wrong or refused on **81%** of questions grounded in public filings | [FinanceBench](https://www.emergentmind.com/topics/financebench-dataset) |
| A 2024 study found LLMs hallucinate in **up to 41% of finance-related queries** | via [JurisTech](https://juristech.net/best-llm-tools-for-financial-analysis-2026/) `[secondary]` |

**A valuation is a multivariate calculation over incomplete documents.** That is the precise intersection of the two failure modes above.

### 2b. The comparables data is gated — I hit the walls myself

While researching this dossier: **Crunchbase's pricing page returned a Cloudflare bot challenge**, **PitchBook returned 403**, **Carta's pricing page returned 403** to a standard fetch, and **G2 has blocked every attempt across five sessions.** A continuous-valuation product needs a continuous comps feed, and the owners of that data block automated access by default and sell seats at $15,000–$20,000. **Access is a commercial negotiation, not an engineering task.**

### 2c. The legal layer on the investor-matching half

There is **no general federal "finders" exemption.** The SEC treats transaction-based compensation for sourcing investors as the hallmark of broker activity; an unregistered finder taking a success fee is usually deemed an unregistered broker, exposing both the finder and the issuer to Section 15(a) liability. The SEC's Small Business Capital Formation Advisory Committee revisited this in **July 2025** and leadership signalled interest in relief — **but nothing has been finalized.** ([DarrowEverett](https://darroweverett.com/using-an-unregistered-broker-dealer-for-capital-raising-is-a-risky-proposition/); [Nelson Mullins](https://www.nelsonmullins.com/insights/alerts/private-funds-and-investment-management-reports/all/private-funds-and-unregistered-finders-how-fund-sponsors-can-avoid-unnecessary-risk); [SEC funding portal guidance](https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/registration-funding-portals))

**Implication:** subscription pricing is fine; **success fees on introductions are not**, without registration.

### 2d. The number the app produces has no legal standing

409A safe harbor requires an independent appraiser's signed report. Even the AI-powered $499 platforms keep **a qualified appraiser reviewing and signing** ([409a-valuation.com](https://409a-valuation.com/insights/409a-valuation-cost)). A continuously recalculated number is, by construction, not that.

---

## Part 3 — Counterargument 1, argued at full strength

### **"This was already possible five years ago."**

**Thirteen years ago, in fact.**

**The valuation engine:** Equidam was founded **2012–2013** and has run an automated five-method engine — Scorecard, Checklist, two DCF variants and the VC Method, weighted by stage — since its earliest years, with results recalculating **as the founder changes inputs**. Contemporary coverage described it as letting startups "see their valuation in real-time for a fraction of the price." It now claims **160,000+ valuations across 90+ countries**. ([Equidam](https://www.equidam.com/five-startup-valuation-methods/); [Startup Daily](https://www.startupdaily.net/advice/equidams-technology-allows-startups-see-valuation-real-time-fraction-price/))

**The methods themselves are older still:** the VC Method dates to 1987, Berkus to the 1990s, Payne's Scorecard to around 2011, DCF to the 1930s. **None of this needed a model.**

**The data plumbing predates LLMs:** SEC Form D has been public, structured and bulk-downloadable for years; Crunchbase has had an API since the mid-2010s; accounting data has been available through QuickBooks, Xero and Stripe APIs for a decade.

**"Continuous" is a cron job.** Recalculating a formula nightly as new inputs arrive is 1990s engineering. Nothing about a weighted five-method valuation requires an agent — Equidam proved that with a web form.

**And an agent-callable version already exists:** Equidam's **MCP server (August 8, 2025)** lets any AI assistant run the full five-method valuation by natural-language request. If the claim is "an AI agent can compile data and value a company," that has been true and purchasable for 13 months.

**The strong form:** the market's failure was never capability. Equidam built the product, had 13 years, and has 15 lifetime Trustpilot reviews. **The binding constraint was demand, not technology** — and an AI agent does not create demand.

**Where this argument is weakest:** it treats "valuation" as the whole job. Equidam's engine requires a founder to *sit down and enter structured inputs* — revenue, projections, team scores. Nothing before 2024 could read a messy P&L PDF, a Stripe feed and a cap table and keep the number current **without the founder doing data entry**. Carta's April 2026 AI data-collection product is the first production evidence that that ingestion step is now automatable — and Carta built it because chasing companies for KPIs was consuming *weeks* of professional time.

---

## Part 4 — Counterargument 2, argued at full strength

### **"This still is not possible."**

**1. The model cannot be trusted with the arithmetic.** Four of six leading models fabricate financial figures from incomplete documents, two of them confidently and silently; accuracy collapses to near zero on multivariate calculations; the best finance agent scores 46.8%. A valuation is multivariate arithmetic over incomplete documents. **A number that is confidently wrong is worse than no number**, because the founder takes it into a negotiation.

**2. There is no comps feed you can afford.** Credible private-company comparables sit behind PitchBook ($15k–$20k/seat), Carta's proprietary data, and Crunchbase's paywall — all of which block bots by default. Without them, "continuous valuation" is a formula recomputing over stale assumptions, which is a spreadsheet with a cron job, not a product.

**3. At the stage you're targeting, valuation isn't computed — it's negotiated.** Carta's own data shows median seed pre-money **rising to record highs in 2025 while deal counts fell** — supply and demand, not fundamentals. A pre-revenue company has no cash flows to discount; its price is set by investor appetite that week. A continuously recalculated intrinsic value can be perfectly computed and still be the wrong number to walk in with.

**4. The output has no standing.** The only valuations that carry legal weight (409A) require a human appraiser's signature, which is why even AI-first providers keep one in the loop.

**5. The matching half is legally constrained.** No finders exemption exists; transaction-based compensation for investor introductions is broker activity. The business model most founders would pay most for — "get me in front of the right investor, take a cut" — is the one you cannot legally run unregistered.

**6. Nobody has shown demand.** Equidam has had the product for 13 years and left almost no usage footprint.

**Where this argument is weakest:** it attacks *autonomous, authoritative* valuation. It does not touch a narrower product — an assistive tool that shows its inputs, cites its comparables, presents a **range** rather than a number, keeps the range current as revenue and market data move, and leaves the founder to argue it. That product doesn't need 95% arithmetic reliability; it needs transparency and auditability, which are engineering choices.

---

## Part 5 — What survives

Your claim fails on the "not in the market" clause and overstates the "newly possible" one. Here is the version that survives everything above:

> **Founder-facing continuous valuation is not newly possible — it is newly *low-friction*, and it is newly *unattended*.** What changed between 2021 and 2026 is not the valuation math (13 years old) or agent access to a valuation engine (Equidam's MCP server, Aug 2025) but the **ingestion step**: a system can now read a messy P&L, a cap table PDF, a Stripe feed and a funding announcement and keep a valuation **range** current without the founder re-entering anything — which Carta proved in production in April 2026, **for investors rather than founders.** The gap is not capability; it is that everyone has pointed this machinery at the people who already pay ($15k–$20k seats, fund middle offices) and nobody has pointed it at founders. The binding constraints are comparables access, a legally clean business model that avoids transaction-based fees, and — the one nobody has solved in 13 years — demand.

### Four tests that would falsify this — run them before building

1. **The Equidam test.** Buy Equidam's $412 report and run its MCP server. If it already answers your user's question, your product is a distribution and UX play, not a capability play — price and pitch accordingly.
2. **The arithmetic test.** Feed 20 real startup P&Ls through your engine and check every intermediate number against a human analyst. Publish the error rate. Given the benchmark evidence, assume you will find fabrications.
3. **The comps test.** Before writing code, establish what comparable-transaction data you can license or derive from Form D at a cost that works at $1,000/yr. If the answer is "scrape Crunchbase," you don't have a product — you have a lawsuit and a Cloudflare block.
4. **The demand test.** Find 20 founders who will pre-pay $1,000. Equidam had 13 years to do this and its public footprint suggests it never did. **This is the test that matters most, and it doesn't require any code.**

---

## Flags

| Item | Status |
|---|---|
| Equidam "160,000+ valuations, 90+ countries" | ⚠️ Marketing claim, irreconcilable with a 15-review Trustpilot footprint. One of the two is misleading; I could not determine which. |
| Equidam MCP performance claim ("4–8 hours → 30 seconds") | ⚠️ Vendor-stated, untested by me. |
| Carta's "valuation agent" | ⚠️ Search snippets attribute a real-time "valuation agent" to Carta; the roadmap and blog I retrieved describe AI data collection and expanded methodologies for **fund** valuations. I did not find a founder-facing valuation agent. `[Treat "Carta is building this for founders" as UNVERIFIED — current evidence says GP/LP side.]` |
| AI 409A platforms ($499–$2,500, fastest-growing segment) | ⚠️ From valuation-provider marketing sites, parties with an interest in that framing. |
| "41% of finance queries hallucinate" (2024) | ⚠️ Secondary citation via a vendor benchmark write-up; original study not retrieved. |
| JurisTech 2026 benchmark | ⚠️ Vendor-run benchmark, not peer-reviewed. Directionally consistent with the arXiv findings, which are stronger evidence. |
| Securities-law summary | ⚠️ From law-firm client alerts, not primary SEC releases. **Not legal advice** — a securities lawyer must review any fee structure before launch. |
| Blocked sources | ❌ Reddit and G2 blocked throughout; Crunchbase, PitchBook and Carta pricing pages blocked to direct fetch (Carta retrieved via browser). |
| Equidam founding date | ⚠️ Sources say 2012 or 2013; both predate the claim's five-year window regardless. |
