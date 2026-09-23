# Opportunity Scan — Voter Information & Ballot Explainer App

**Prepared:** September 22, 2026
**Analyst role:** Market research analyst
**Problem space:** Voters skip elections because they don't know when to vote or when early voting runs, don't know who the candidates are or what they stand for, can't evaluate the political ads aimed at them, and can't parse ballot propositions or amendments or what a yes/no vote actually does.

> **Access note.** Reddit and G2 block this research tool. Capterra covers election-*administration* software sold to counties, not voter-facing apps. The complaint evidence below comes from the **Apple App Store review feed** — 96 critical reviews across 11 voter-facing apps, including two Secretary of State apps. Complaints are paraphrased with app, rating, date and reviewer handle. See **Section 5** for everything unverified.

---

## 1. Who has this problem, and how many?

### 1a. The core population

| Step | Measure | US figure | Source |
|---|---|---|---|
| 1 | Citizen voting-age population (CVAP), Nov 2024 | **~236M** *(derived: 154M ÷ 65.3%)* | [Census CPS Voting Supplement](https://www.census.gov/newsroom/press-releases/2025/2024-presidential-election-voting-registration-tables.html) |
| 2 | Registered to vote | **73.6% — 174M** | [Census CPS](https://www.census.gov/newsroom/press-releases/2025/2024-presidential-election-voting-registration-tables.html) |
| 3 | Actually voted (2024 presidential) | **65.3% — 154M** | [Census CPS](https://www.census.gov/newsroom/press-releases/2025/2024-presidential-election-voting-registration-tables.html) |
| 4 | **Registered but did not vote** | **~20M** | Derived: 174M − 154M |
| 5 | Citizens who didn't vote at all | **~82M** | Derived: 236M − 154M |

**The sharpest segment is line 4: ~20 million Americans who were registered and still didn't vote in the highest-turnout election of the cycle.** They cleared the hardest administrative hurdle and then didn't show up.

### 1b. Why they didn't — and how much of it is an information problem

Census asks registered nonvoters directly. 2024 reasons:

| Reason | Share | Information-addressable? |
|---|---|---|
| Not interested / vote wouldn't matter | **19.7%** | Partly — "don't know the candidates" hides here |
| Too busy, schedule conflict | **17.8%** | **Yes** — early voting and deadline awareness |
| Didn't like the candidates or issues | **14.7%** | Partly — down-ballot alternatives are often unknown |
| Illness or disability | 12.4% | Partly — absentee options |
| Out of town | **7.4%** | **Yes** — absentee/early voting |
| **Forgot** | **4.0%** | **Yes** — reminders |
| Registration/ID problems | <2% | No |

Sources: [AEI analysis of Census data](https://www.aei.org/op-eds/why-nonvoters-dont-vote-what-new-census-data-show/); [USAFacts](https://usafacts.org/articles/why-dont-people-vote/)

**Directly addressable by timing information and reminders — "too busy" + "out of town" + "forgot" = 29.2% of 20M ≈ 5.8 million registered voters per presidential cycle.** `[The arithmetic is mine; the percentages are Census.]` Add partial credit for "not interested" and "didn't like the candidates," and the information-addressable pool plausibly reaches 8–12M `[UNVERIFIED]`.

### 1c. The local elections, where the problem is far worse

| Measure | Figure | Source |
|---|---|---|
| Big-city mayoral turnout vs presidential | **NYC 23% vs 54%; San Antonio 15% vs 58%; Charlotte 15% vs 70%; Detroit 19% vs 59%** | [BallotReady / Yankelovich Center](https://organizations.ballotready.org/research/2025-year-of-the-mayor) |
| Youth (18–34) turnout in the 30 largest cities' mayoral races | **~9%** | [Portland State via BallotReady](https://organizations.ballotready.org/research/2025-year-of-the-mayor) |
| Elected officials in the US | **580,000+** | [Ballotpedia](https://ballotpedia.org/Our_History) |
| Local election jurisdictions | **10,000+** | [U.S. Election Assistance Commission](https://www.eac.gov/voters/voter-faqs) |
| Open seats on 2025 ballots | **100,000+**, incl. 22,000+ school board, 5,000 mayoral, 1,000 judges | [BallotReady](https://organizations.ballotready.org/research/uncontested-races-in-2024) |

**Federal offices everyone recognizes — president, Congress, governors, state legislators — are under 2% of all elected officials.** The other 98% is where voters have no information, and where turnout collapses to 9–25%.

### 1d. The ballot itself is unreadable

- **2024:** the 159 statewide measures averaged a **reading level of 16 — a bachelor's degree**. ([Ballotpedia](https://ballotpedia.org/Ballot_measure_readability_scores,_2024))
- **2025:** the 30 statewide measures averaged **reading level 21 — equivalent to a doctorate, the highest since tracking began in 2017**. ([Ballotpedia News, Oct 2025](https://news.ballotpedia.org/2025/10/20/2025-statewide-ballot-measures-written-at-the-highest-reading-level-equivalent-to-a-doctorate-degree-since-ballotpedia-started-tracking-in-2017/))
- 23 states have readability laws; Rhode Island requires plain language at an eighth-grade level. **The gap between the law's intent and a doctorate-level ballot is the product opportunity.** ([Ballotpedia](https://ballotpedia.org/Readability_laws_for_ballot_measure_language))

### 1e. The candidate information simply doesn't exist

**Only 19.2% of the 28,246 candidates Ballotpedia covered in 2024 completed its Candidate Connection survey — and that was the highest response rate since 2018.** ([Ballotpedia](https://news.ballotpedia.org/2025/01/16/6541-candidates-responded-to-ballotpedias-candidate-connection-survey-in-2024/))

**Four out of five candidates have no stated positions on the largest public platform.** This is the single most important fact in this scan: the problem is not that the information is badly presented. **For most races it does not exist.**

### 1f. The counter-fact that shrinks the market

**70% of the races Ballotpedia covered in 2024 were uncontested — the highest since 2018 — and 10,000 elections had no candidate on the ballot at all.** Uncontested rates: law enforcement 78%, mayors 71%, city council 70%, treasurers/clerks/judges ~90%. ([Ballotpedia](https://ballotpedia.org/Analysis_of_uncontested_elections,_2024); [BallotReady](https://organizations.ballotready.org/research/uncontested-races-in-2024))

**In most local races there is nothing to compare, because there is only one name.** That cuts the "help me choose between candidates" use case substantially — and shifts the value toward *timing*, *ballot measures*, and *knowing the race exists at all*.

### 1g. The ad problem, sized

| Cycle | Political ad spending | Source |
|---|---|---|
| 2024 | **$10.2B** projected (AdImpact) | [Bloomberg](https://www.bloomberg.com/news/articles/2023-09-12/election-2024-advertising-spending-to-hit-record-10-2-billion) |
| 2024 online only | **$1.9B** across Meta, Google, Snap, X | [Brennan Center](https://www.brennancenter.org/our-work/analysis-opinion/online-ad-spending-2024-election-totaled-least-19-billion) |
| **2026 midterms** | **$10.8B–$11.6B projected — most expensive midterm ever** | [AdImpact](https://adimpact.com/political-projections-26); [CNBC](https://www.cnbc.com/2026/06/11/2026-elections-ad-spend-adimpact.html) |

Roughly **$11 billion of persuasion** will reach voters in this cycle, against a candidate-information base where 80% of candidates have said nothing on the record.

---

## 2. What do they use today?

| Category | Tools | Where it stops |
|---|---|---|
| **Nonpartisan voter guides** | **VOTE411** (League of Women Voters) — **9M+ users across 29,000+ races in 2024**; Ballotpedia sample ballot; BallotReady; Vote Smart | Coverage depends on local League volunteers and candidate responses; 80% of candidates don't respond ([VOTE411](https://www.lwv.org/elections/vote411)) |
| **Deadline/registration tools** | Vote.org early voting calendar, TurboVote, state SoS lookup | Dates only; nothing about who's on the ballot |
| **Official state apps** | GeauxVote (LA SoS), GoVoteTN (TN SoS), county clerk portals | **Reviewers report the app's ballot not matching the real ballot** — see Section 3 |
| **Paper and mail** | County sample ballot mailers, voter information pamphlets, the ballot itself | Arrives late, written at a graduate reading level |
| **News and nonprofit guides** | Local paper endorsements, public radio guides, Spanish-language outlets | Local news has thinned; coverage skews to top-of-ticket |
| **Social and word of mouth** | Facebook groups, Nextdoor, party slate cards, union/church guides | Partisan by construction; this is the default for down-ballot |
| **General AI chatbots** | ChatGPT, Gemini, Claude | **~half of US adults now use chatbots** ([Pew, June 2026, via CyberScoop](https://cyberscoop.com/ai-chatbots-2026-midterm-elections/)); accuracy varies (Section 4) |
| **The manual workaround** | Googling each name, opening candidate Facebook pages, screenshotting the sample ballot to take into the booth | Documented in the reviews — one reviewer photographs their marked sample ballot because the state's own app loses it |

**Structural point:** the data plumbing that powered most third-party tools was **turned off in 2025**. Google's Civic Information **Representatives API shut down April 30, 2025**; ProPublica's Congress API was archived in February 2025; OpenSecrets paywalled in April 2025. One API call used to return every elected official for any US address, from president to school board. It now returns nothing. ([Google Groups turndown notice](https://groups.google.com/g/google-civicinfo-api/c/9fwFn-dhktA); [Soapbox](https://support.picnet.net/hc/en-us/articles/25130331666459-Google-Civic-project-retiring-Representatives-API-in-April-2025); [Crawlify analysis](https://www.crawlify.ai/insights/civic-data-gap-google-civic-api-shutdown))

---

## 3. Complaints about current solutions

From 96 critical (≤3★) App Store reviews across 11 voter-facing apps. **The two most damning come from official Secretary of State apps.**

| # | Complaint (paraphrased) | App / rating / date | Source |
|---|---|---|---|
| 1 | Went to vote and found offices on the real ballot that were **not on the app's ballot**; it used to match exactly. | GoVoteTN (TN Secretary of State), 3★, Jul 27 2026 (*Shirah Joy*) | [App Store](https://apps.apple.com/us/app/id911403464?see-all=reviews) |
| 2 | On election day the app's ballot **did not match the ballot at the polls — a whole section was missing**. | GeauxVote (LA Secretary of State), 1★, May 17 2026 (*TeeBoune*) | [App Store](https://apps.apple.com/us/app/id451157430?see-all=reviews) |
| 3 | The app promises to save your marked sample ballot and doesn't — reviewer takes screenshots because the selections vanish. | GoVoteTN, 1★, Aug 6 2026 (*TN Voter*) | [App Store](https://apps.apple.com/us/app/id911403464?see-all=reviews) |
| 4 | Selections erase whenever the app is closed, forcing you to redo the whole ballot. | GoVoteTN, 3★, Jul 28 2026 (*bus man 1*) | [App Store](https://apps.apple.com/us/app/id911403464?see-all=reviews) |
| 5 | Sample ballot can't be found at all — the app sends the user in circles. | GoVoteTN, 2★, Jul 18 2026 (*lauryij*) | [App Store](https://apps.apple.com/us/app/id911403464?see-all=reviews) |
| 6 | Registered voter of decades gets "voter not found," including right before an election. | GeauxVote, 1★, Jul 2 2025 (*Mikkelsulac*) and 2★, Nov 11 2025 (*MemeGee*) | [App Store](https://apps.apple.com/us/app/id451157430?see-all=reviews) |
| 7 | The state app asks for more personal information than the user thinks is justified — they expected a ZIP code lookup. | GeauxVote, 1★, Nov 15 2025 (*Will K2*); also 1★, May 16 2026 (*NailDivaMaria*) on being asked for payment details | [App Store](https://apps.apple.com/us/app/id451157430?see-all=reviews) |
| 8 | **Wanted help with local races and the app only had national elections.** | BallotBuddy, 1★, Oct 10 2024 (*SirenSong20*) | [App Store](https://apps.apple.com/us/app/id1531196628?see-all=reviews) |
| 9 | The guide had the wrong local government info; the same reviewer found it unhelpful. | We Vote Ballot Guide, 1★, Oct 10 2024 (*SirenSong20*) | [App Store](https://apps.apple.com/us/app/id1347335726?see-all=reviews) |
| 10 | Voting-record data was flatly wrong — bills shown as failed had actually passed; party positions were reversed against congress.gov. | ReleVote, 1★, Jun 24 2022 (*Markous Lewry*) and 2★, Jan 1 2023 (*maximoose2*) | [App Store](https://apps.apple.com/us/app/id1461723373?see-all=reviews) |

**Also on the record:** an address lookup that couldn't find a downtown address in a major city and defaulted the voter to an unrelated county (We Vote, 1★, Oct 2019); a guide that sent a voter to the wrong polling place (We Vote, 2★, Mar 2020); and a 2023 GeauxVote reviewer who reported seeing **another person's voter registration information** on their absentee ballot status screen (1★, Nov 13 2023) `[single unverified user report — serious if true]`.

### Theme frequencies (n=96)

| Theme | Count | Share | Type |
|---|---|---|---|
| Missing/incomplete data — especially local races and candidates | 38 | **40%** | Product |
| App simply doesn't work — won't load, crashes, dead search | 29 | **30%** | Product |
| Privacy / excessive information demanded | 14 | 15% | Product |
| "Voter not found" / address or registration lookup failure | 13 | 14% | Product |
| **App's ballot doesn't match the real ballot** | 11 | **11%** | Product — **and disqualifying** |

**Almost none of these are pricing complaints** — most of these apps are free, publicly funded or nonprofit. **This category's failure mode is accuracy and coverage, not monetization.** That inverts the pattern found in the diet and startup-valuation categories, and it sets the bar: a voter app that is wrong once about a ballot is worse than no app.

---

## 4. Why might this be newly solvable with AI in 2026?

**(a) AI election accuracy improved sharply — and the improvement is measured.**
In early 2024, expert raters found **half of leading models' election answers inaccurate** ([AI Democracy Projects / Proof News](https://www.cbsnews.com/news/ai-chatbots-inaccurate-election-information-proof-news/)), and GroundTruthAI measured **27% wrong** ([NBC](https://www.nbcnews.com/tech/tech-news/ai-chatbots-got-questions-2024-election-wrong-27-time-study-finds-rcna155640)). In 2026 follow-up testing across Arizona, Pennsylvania and Michigan, **verifiable factual error rates for Google's AI and ChatGPT fell to 0%**, from 6.9% and 8.2% in an earlier round. ([CyberScoop](https://cyberscoop.com/ai-chatbots-2026-midterm-elections/))

**(b) But the broader picture is still not clean.** The Institute for Strategic Dialogue tested six chatbots on 15 prompts and found **29% of responses incomplete, inaccurate or outdated**, with **Spanish-language responses 16% less likely to be accurate**, and technically correct answers often failing to point voters to official sources. ([ISD](https://www.isdglobal.org/publication/chatbots-and-the-ballot-box-evaluating-accuracy-sourcing-and-language-gaps-in-ai-answers-to-election-questions/); [The Hill](https://thehill.com/policy/technology/6071757-ai-chatbots-election-info-inaccuracy/))

**(c) Voters are already doing this without being asked.**
A **June 2026 Pew survey found about half of US adults use AI chatbots, up from a third in 2024**, and the New York Times has called 2026 potentially the first US election in which voters use AI in meaningful numbers. ([CyberScoop](https://cyberscoop.com/ai-chatbots-2026-midterm-elections/); [TIME](https://time.com/article/2026/09/10/election-voting-gemini-chatgpt-claude/)) **The behavior exists; the question is whether it's served well.**

**(d) Plain-English ballot measures are the single best-fit AI task available.**
Statewide measures hit a **doctorate-level average reading level in 2025**. Summarizing dense legal text into plain language at a controlled reading level, with the original text alongside, is exactly what current models do reliably — and 23 states already have laws expressing the intent. This is the lowest-risk, highest-value feature in the entire proposal.

**(e) The data vacuum makes AI extraction the only remaining path.**
With Google's Representatives API dead (April 2025), ProPublica's Congress API archived and OpenSecrets paywalled, **there is no longer an off-the-shelf feed of "who represents this address."** Building candidate coverage now means extracting from 10,000+ jurisdictions' own websites, PDFs and filings — machine reading at scale, which is a 2024-onward capability. **The same shutdown that created the gap also removed the easy way to fill it.**

**(f) Ad transparency became technically feasible.** Meta and Google publish ad libraries, and multimodal models can now watch and transcribe video ads. Matching $11B of advertising to candidates and to fact-checks is newly possible — though see the risks below.

### Where AI does not solve this

- **Wrong is catastrophic here.** A wrong polling place or deadline can cost someone their vote. The New York Attorney General has formally warned voters against relying on AI chatbots for election information. ([NY AG](https://ag.ny.gov/press-release/2024/attorney-general-james-warns-voters-against-relying-ai-chatbots-election))
- **Missing data can't be summarized.** 80% of candidates have no positions on record. No model can generate what a candidate never said — and inventing it would be the worst possible failure in this category.
- **"Truthful commentary" about ads is an editorial judgment, not a retrieval task.** Any such feature will be read as partisan by roughly half the audience, no matter how carefully sourced `[inference]`.
- **Ballot data remains local, manual and inconsistent** across 10,000+ jurisdictions. That's a data-operations problem, not a model problem — and it is exactly what state apps are already failing at.

---

## 5. Flags and gaps

| Item | Status |
|---|---|
| **Reddit** | ❌ Blocked for search and pages. |
| **G2** | ❌ 403 / blank. |
| **Capterra** | ⚠️ Covers election-administration software sold to counties, not voter-facing apps. No relevant reviews. |
| **Verbatim quotes** | ⚠️ Paraphrased with app, rating, date and handle; originals in [appstore-reviews.json](../research/appstore-reviews.json). |
| **CVAP (~236M)** | ⚠️ Derived by dividing 154M voters by the 65.3% rate — Census publishes both, but I computed the base. |
| **"5.8M directly addressable"** | ⚠️ My arithmetic on Census percentages; treat as order-of-magnitude. |
| **8–12M information-addressable pool** | `[UNVERIFIED]` — assumes partial credit for "not interested" and "didn't like the candidates." |
| **App review dates** | ⚠️ Some cited reviews (We Vote, ReleVote, Election Tracker) date to 2019–2023 because those apps have little recent activity. The SoS app complaints are all 2025–2026. |
| **GeauxVote data-exposure report (2023)** | `[UNVERIFIED]` — one user's account, no corroboration found. Serious if accurate; do not repeat as fact. |
| **AI error rate "fell to 0%"** | ⚠️ From CyberScoop's account of follow-up tests in three states on two assistants — a narrow test, not a general claim. ISD's 29% figure is the broader and less flattering measure. |
| **Ballotpedia coverage scope** | ⚠️ Ballotpedia covers a subset of US elections; "70% uncontested" applies to its coverage universe, not to every US race. |
| **AdImpact projections** | ⚠️ Forecasts, vendor-produced; 2024's $10.2B was also a projection, and other forecasters said $15.9B. |
| **VOTE411's 9M users** | ⚠️ Organization-reported. |
