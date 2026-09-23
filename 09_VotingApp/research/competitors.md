# Competitor Teardown — Top 5 Products

**Prepared:** September 22, 2026
**Selection:** The five products with the widest reach against your feature set — reminders, early-voting dates, plain-English ballot information, candidate positions, and truthful critique of ads. Ranked by documented reach, not by app-store presence.

## A finding that shapes this whole section

**None of the four major voter-information products has a consumer iOS app.** Searches for "VOTE411," "Vote.org," "TurboVote," "BallotReady" and "Ballotpedia" in the App Store return none of them — only small third-party apps. They are all **websites**.

Two consequences:
1. **There is no user-review channel for the market leaders.** Trustpilot has **zero** reviews for Vote.org and no profile for Ballotpedia. So for products 1–4 I substitute *documented criticisms* — from news coverage, officials, and the organizations' own disclosures — and label them as such. **They are not user reviews, and I have not dressed them up as any.**
2. **The mobile slot is empty.** The reach is on the web; the App Store is a wasteland of tiny apps (Section 2). `[Whether that's an opportunity or evidence that voters don't want a voting app is exactly the open question — see "What nobody serves well."]`

---

## Master comparison table

| Product | Pricing (source) | Three core features | Target customer | Funding / ownership | Three most common complaints |
|---|---|---|---|---|---|
| **1. Ballotpedia** | **Free to voters.** Revenue from donations, **Premium Research Services**, **API sales** and digital ads; no public price list — [about](https://ballotpedia.org/Ballotpedia:About) | 1. Sample-ballot lookup by address 2. Candidate profiles + Candidate Connection survey 3. Ballot-measure analysis incl. readability scoring | Voters, journalists, researchers, campaigns | **Lucy Burns Institute**, 501(c)(3). **FY2024: $8.9M revenue, $9.2M expenses, $5.2M net assets** ([philanthropy.org 990](https://philanthropy.org/990/report/208036372/lucy-burns-institute-inc)) | **Only 19.2% of candidates** completed its survey in 2024 (its best year); curates rather than reports — no ground reporting; historical donor list drew right-leaning-funding criticism ([SourceWatch](https://www.sourcewatch.org/index.php/Ballotpedia)) |
| **2. VOTE411** (League of Women Voters Ed. Fund) | **Free.** No paid tier — [VOTE411](https://www.lwv.org/elections/vote411) | 1. Address → personalized ballot 2. Identical questions to every candidate, published verbatim, with non-response flagged 3. Dates, deadlines, registration status | General voters; **9M+ users across 29,000+ races in 2024** | LWV Education Fund, 501(c)(3); **candidate research done largely by local volunteers** `[revenue figure not retrieved]` | Candidate non-response, worst at state level; **partisan asymmetry** — Republicans increasingly decline over LWV policy positions; Alabama's Secretary of State publicly called it a "data-mining sham" ([AL Reporter](https://www.alreporter.com/2024/07/30/secretary-of-state-wes-allen-claims-vote411-is-a-data-mining-sham/)) |
| **3. BallotReady** | **Not published — demo/contact sales only** — [organizations.ballotready.org](https://organizations.ballotready.org/) | 1. Civic Center platform + Officeholders API 2. Personalized multilingual, accessible ballot 3. Automated email/SMS reminders with CRM (VAN) integration | **Organizations, not voters** — campaigns, advocacy groups, universities | Private company `[funding not verified — Crunchbase/PitchBook paywalled]` | No published pricing; **voters are not the customer**; employees rate compensation **2.7/5** on Glassdoor `[employee review, not a user complaint]` |
| **4. Vote.org** | **Free.** Donation-funded — [financials](https://www.vote.org/financials/) | 1. Registration check + absentee request 2. **Early-voting calendar by state** 3. Deadline reminders by email/SMS | Unregistered and low-propensity voters | 501(c)(3). **2021 Form 990: $3.26M revenue, $4.41M expenses**; claims 72¢ of every dollar goes to programming `[2024 figures not retrieved]` | **Zero Trustpilot reviews** — no public feedback channel exists; no candidate or ballot-measure content at all; no mobile app |
| **5. Ground News** *(the only product addressing critique of political messaging)* | **Vantage $8.33/month billed annually**, free tier available — [subscribe page](https://ground.news/subscribe) | 1. Bias and factuality ratings per outlet 2. "Blindspot" coverage comparison 3. Ownership and funding transparency | News consumers who distrust media | Private company `[funding not verified]` | **119 critical App Store reviews in 18 months:** 43% pricing/paywall ("why pay for accurate information?"), 39% accusations of bias from both directions, 26% bugs ([App Store](https://apps.apple.com/us/app/id1324203419?see-all=reviews)) |

### Runners-up (where the actual user reviews live)

| Product | Reach | Why it matters |
|---|---|---|
| **TurboVote** (Democracy Works) | 300+ partner institutions, **10M+ voters registered**; partnered with Google for the 2026 midterms | The reminder infrastructure incumbent; sold to institutions, invisible to voters ([Wikipedia](https://en.wikipedia.org/wiki/TurboVote); [Democracy Works](https://www.democracy.works/turbovote)) |
| **State SoS apps** (GeauxVote, GoVoteTN) | 175 and 64 ratings; **3.78★ and 3.45★** | The only apps with authoritative ballot data — and reviewers report the ballot not matching the polls (Section 1) |
| **Politik App** | 167 ratings, 4.69★ | Newest entrant; ZIP-only lookup returns wrong representatives (Section 2) |
| **Votemate: AI Ballot Assistant** | **12 ratings** | An AI ballot assistant already exists. Nobody is using it. |

---

## Per-product notes

### 1. Ballotpedia — the deepest data, with a hole in the middle
Genuinely encyclopedic on offices, measures and results, and the only source publishing ballot-measure readability scores. But its candidate-position layer depends on candidates volunteering answers, and **four in five don't**. It curates rather than reports, so where local news has collapsed, Ballotpedia has little to curate. Its business model already includes **selling API access and research** — meaning any app built on its data is a customer, not a competitor `[pricing for that API is not published]`.

### 2. VOTE411 — the most voter-facing, and the clearest warning about neutrality
Nine million users, 29,000 races, free, powered by volunteers, with an admirable method: same questions to everyone, answers published verbatim, silence marked as silence. **And it is still accused of partisanship** — Republicans increasingly decline to participate over the League's policy positions, and a sitting Secretary of State called it a data-mining sham in 2024. **If a 100-year-old nonprofit using identical questions gets called partisan, an AI app writing "truthful critiques" of candidates will get called worse.**

### 3. BallotReady — the infrastructure play
Claims coverage of 500,000+ elected officials and sells data, APIs and mail programs to organizations. Its consumer-facing guide exists, but the money comes from campaigns and advocacy groups. **This is the most plausible data supplier for your app — and the most plausible competitor if it ever goes direct-to-voter.**

### 4. Vote.org — timing only, and the easiest feature to replicate
Registration, absentee, deadlines, early-voting calendar. It does not touch candidates or ballot measures. **Your "when to vote" feature competes with a free nonprofit that has done exactly this for a decade and has no app.**

### 5. Ground News — proof of what the critique feature costs
$8.33/month for bias ratings and coverage comparison. In 18 months it collected 119 critical reviews, **43% about paying for it and 39% accusing it of the very bias it claims to expose.** It has a full editorial apparatus and still absorbs that. Your proposed feature is strictly harder: judging *candidates*, not outlets.

---

## What does nobody serve well?

**1. Nobody joins timing to content.** Vote.org and TurboVote tell you *when*; Ballotpedia and VOTE411 tell you *who*; nothing does both in one place for one voter. The person who doesn't vote because they were "too busy" or "forgot" (22% of registered nonvoters, Section 1) is served by one set of products, and the person who doesn't vote because they "didn't like the candidates" is served by another.

**2. Nobody is on the phone.** All four majors are websites. The only mobile apps with authoritative ballot data are two state Secretary of State apps rated **3.45★ and 3.78★**, whose reviewers report the app's ballot not matching the real one. **An accurate, offline-capable, marked-ballot-in-your-pocket app does not exist.** That's the gap the screenshot-taking reviewers are working around by hand.

**3. Nobody solves the missing-candidate problem.** 80% of candidates don't answer Ballotpedia; VOTE411 publishes blanks. **This is a supply problem, not a presentation problem, and no competitor has cracked it** — which means your app inherits it. `[Scraping local news, candidate Facebook pages and filings with AI is the only path I can see, and I found no product doing it at scale — UNVERIFIED.]`

**4. Nobody critiques political advertising for voters.** $11B will be spent in this cycle (Section 1). Ground News rates *news outlets*; no product rates *candidate ads*. **This is genuinely unoccupied — and Ground News's review pattern shows exactly why: the market punishes the attempt.**

**5. Nobody serves non-English speakers well.** BallotReady advertises multilingual support; ISD found AI answers in Spanish **16% less likely to be accurate** (Section 1). Nothing in this set is built Spanish-first.

**6. Nobody serves accessibility.** A blind reviewer using VoiceOver said the current apps are unhelpful (Section 2). BallotReady claims accessibility standards; the actual apps don't deliver it.

**7. Nobody has a business model that isn't donations.** Four of five are nonprofits or foundation-funded. The one that charges ($8.33/month) is accused of monetizing truth. **That is the single most important strategic fact in this file** — the category has no proven consumer willingness to pay, which is the subject of the next section.

### The sharpest wedge

**An accurate mobile app that puts the marked sample ballot, the dates, and a plain-English explanation of each measure in one offline-capable place — built Spanish-first and accessible — and leaves candidate critique alone.** Every element of that is empty above, and it avoids the one feature (truthful critique) that the evidence says will get you accused of partisanship while people refuse to pay for it.

---

## Flags

| Item | Status |
|---|---|
| **Complaints for products 1–4** | ⚠️ **Not user reviews.** No review channel exists for these websites (Trustpilot: zero reviews for Vote.org, no Ballotpedia profile; no iOS apps). I substituted documented criticisms from news coverage, officials and the organizations' own disclosures, and labelled each. |
| **BallotReady pricing and funding** | ❌ Not published; Crunchbase/PitchBook paywalled to this tool. `[UNVERIFIED]` |
| **Ground News funding** | ❌ Not verified. |
| **Vote.org 2024 financials** | ⚠️ Only the 2021 Form 990 figures were retrievable; the 2024 impact report is a PDF I did not open. |
| **VOTE411 revenue** | ❌ Not retrieved — LWV Education Fund financials not pulled. |
| **Ballotpedia API/Premium pricing** | ❌ Not published. |
| **Glassdoor 2.7/5 for BallotReady** | ⚠️ **Employee** compensation rating, not a user complaint. Included only because no user channel exists; do not present it as customer feedback. |
| **"None of the majors has an iOS app"** | ⚠️ Based on App Store search by brand name returning no first-party app. A white-labeled or regional app could exist unsurfaced. |
| **Partisan-asymmetry claim for VOTE411** | ⚠️ From secondary reporting on candidate participation, not a measured response-rate breakdown by party. |
| **G2 / Capterra / Reddit** | ❌ Blocked or irrelevant (Capterra covers county election-administration software only). |
