# Complaint Themes & What Humans Are Paid to Compile Voter Information

**Prepared:** September 22, 2026
**Scope:** Complaints from the last 18 months (since March 22, 2025) about apps offering the feature set you described — election reminders, early-voting dates, plain-English ballot information, candidate positions, and commentary on political ads — plus what companies and governments pay humans to do that work.

> **Access note.** Reddit and G2 remain blocked to this tool. Capterra lists election-*administration* software sold to county governments, not voter-facing apps, so it has no relevant reviews. Everything below comes from the Apple App Store review feed. Complaints are paraphrased with app, rating, date and reviewer handle; the originals are in [appstore-reviews-18mo.json](appstore-reviews-18mo.json) for direct quoting.

---

## The headline: there is almost no complaint base, because there is almost no usage

Filtering 12 voter-facing apps to reviews of 3★ or fewer posted since March 22, 2025 produced **32 reviews in total**:

| App | Critical reviews in window |
|---|---|
| Politik App | 11 |
| GoVoteTN (TN Secretary of State) | 7 |
| Resistbot | 7 |
| Civics for Life | 4 |
| ActiVote | 2 |
| We Vote Ballot Guide | 1 |
| GeauxVote (LA SoS), Votemate (AI Ballot Assistant), Voto, Amplify, InfoVote | **0 in window** |

**Thirty-two complaints across every voter-information app I could find is not a market with unhappy users — it is a market with almost no users.** Votemate, an AI ballot assistant, has 12 lifetime ratings. GeauxVote's complaints all predate the window.

**So I added a deliberate analog:** **Ground News**, whose entire premise is showing you political bias and what's "accurate vs inaccurate" — the closest shipping product to your "truthful critique" feature. It produced **119 critical reviews in the same 18 months**. Its complaint pattern is the best available forecast of what happens when an app promises neutral political judgment, and it is not encouraging.

---

## Panel A — Voter information apps (n=32)

### Theme A1 — Wrong representative / wrong ballot — 9 of 32 (28%) — **PRODUCT problem**

The defining failure, and it traces directly to the April 2025 shutdown of Google's Civic Information Representatives API (Section 1).

1. **Politik App, 3★, Jul 1 2026 (*realPlayaBoi*)** — the app only accepts a ZIP code, so it names the wrong representative, and there's no way to enter a street address to fix it. ([App Store](https://apps.apple.com/us/app/id6760079581?see-all=reviews))
2. **Politik App, 3★, May 9 2026 (*Al Sperb*)** — entered a South Dakota ZIP code and the app placed them in Montana.
3. **GoVoteTN, 3★, Jul 27 2026 (*Shirah Joy*)** — went to vote and found offices on the real ballot that weren't on the app's ballot; it used to match exactly. ([App Store](https://apps.apple.com/us/app/id911403464?see-all=reviews))

> **Also:** Politik, 1★, May 22 2026 (*KDT88888*) — knew their own representative, the app was wrong, and there was no way to report the error. Politik, 1★, May 7 2026 (*Lburage*) — same problem, no support contact.

**ZIP codes do not map to districts.** A single ZIP can span multiple congressional, legislative and school districts. This is the first thing your product must get right, and it is what the current crop is getting wrong.

---

### Theme A2 — App simply doesn't work — 8 of 32 (25%) — **PRODUCT problem**

1. **GoVoteTN, 1★, Aug 11 2026 (*abigorilla*)** — wouldn't load any information at all.
2. **GoVoteTN, 1★, Jun 7 2026 (*dgintn*)** — search returns nothing.
3. **Civics for Life, 1★, Jun 3 2026 (*Denny Catlett*)** — signs in and nothing happens; a second reviewer (3★, Mar 29 2026, *Hoosier5780*) says the app stopped opening entirely.

---

### Theme A3 — Loses your work / no persistence — 3 of 32 (9%) — **PRODUCT problem**

1. **GoVoteTN, 1★, Aug 6 2026 (*TN Voter*)** — the app promises to save your marked sample ballot; the selections were gone at the polling place, and the reviewer only got through it because they had taken screenshots.
2. **GoVoteTN, 3★, Jul 28 2026 (*bus man 1*)** — closing the app erases every selection, so you either research candidates on election day or start over.
3. **GoVoteTN, 2★, Jul 18 2026 (*lauryij*)** — can't reach the sample ballot at all; the app loops.

**This is the most actionable finding in the file.** Voters are *photographing their own screens* to carry choices into the booth. A marked ballot that survives being closed — and prints — is a small feature solving a documented, current failure.

---

### Theme A4 — Missing local coverage — 4 of 32 (13%) — **PRODUCT problem**

1. **Politik App, 3★, May 21 2026 (*Interested in GA*)** — was hoping to learn about local candidates and didn't.
2. **Politik App, 2★, May 24 2026 (*Fosterp92*)** — the app has zero local utility for 700,000+ residents of Washington, DC, not even their House delegate.
3. **We Vote Ballot Guide, 3★, May 19 2026 (*VoiceOver user.*)** — remembers an older app that offered unbiased candidate information plus a sample ballot, and finds the current one unhelpful; also a blind-accessibility user, which nothing in this category serves.

---

### Theme A5 — Privacy and data collection — 3 of 32 (9%) — **PRODUCT problem**

1. **Politik App, 1★, May 22 2026 (*NK7888*)** — the benefits didn't justify handing over a name and email; deleted.
2. **ActiVote, 1★, Jan 28 2026 (*Gap Spanner*)** — says the app assigned them a political party on its own, using leading questions with too few options; titles the review "Inaccurate, Data Collection Tool."
3. **GeauxVote, 1★, Nov 15 2025 (*Will K2*)** — expected a ZIP-code lookup, was asked for far more personal information.

**In an election product, a privacy complaint is a trust complaint**, and trust is the entire asset.

---

### Theme A6 — "Misinformation" and "AI slop" — 3 of 32 (9%) — **PRODUCT problem, strategically critical**

1. **Politik App, 2★, Jun 19 2026 (*Bobbyj16*)** — titles the review "Misinformation," says the app had incorrect information and should be taken down until it's verified.
2. **Politik App, 1★, May 8 2026 (*Aidan Luxembourg*)** — review title is simply "AI Slop."
3. **ActiVote, 3★, Mar 21 2025 (*Julia Perry*)** — the app matched their views to a senator who had already retired, i.e. stale data presented as current.

**Note the asymmetry:** in this category a single factual error doesn't produce a bug report, it produces an accusation of misinformation and a demand that the app be removed. That is a different risk profile from every other category in these dossiers.

---

## Panel B — Ground News, the "truthful critique" analog (n=119)

Ground News sells exactly what your ads-and-commentary feature proposes: bias labelling and a claim to show what is accurate. Its 18-month critical review pattern:

| Theme | Count | Share | Type |
|---|---|---|---|
| **Pricing / paywall / cancellation** | 51 | **43%** | **Pricing** |
| **Bias and trust — "you're biased too"** | 46 | **39%** | Product |
| Broken, buggy, slow | 31 | 26% | Product |
| UX and redesigns | 14 | 12% | Product |
| Data gaps / staleness | 8 | 7% | Product |

### B1 — "Why should I pay for the truth?" — **PRICING**
1. **1★, Sep 14 2026 (*LilShaq00*)** — refuses to pay for something that should be free, and asks pointedly why accurate information is behind a subscription.
2. **2★, Sep 15 2026 (*Zbkmiller*)** — likes the concept but objects to paying for the higher-value stories.
3. **1★, Sep 6 2026 (*50 year old guitar wannabe*)** — pays for the service and then hits publisher paywalls on the articles it links to.

### B2 — Both sides accuse it of bias — **PRODUCT (and unfixable by engineering)**
1. **1★, Sep 16 2026 (*JAinPA*)** — says it isn't balanced, just mainstream media rehashing how wrong conservatives are.
2. **2★, Sep 11 2026 (*Bwil2626*)** — was exactly the antidote to media bias a year ago, and in their view has drifted.
3. **1★, Sep 7 2026 (*CDRGVH1953*)** — attacks a specific factual framing (gas prices not inflation-adjusted) as proof it's no better than any other source.

### B3 — "AI slop" and advertised features that don't exist — **PRODUCT**
1. **1★, Sep 21 2026 (*lisaves*)** — calls it full of unsubstantiated AI errors.
2. **3★, Sep 15 2026 (*wetever*)** — seven months of use and the bias summary shown in the ads has never appeared.
3. **1★, Sep 14 2026 (*meh meh meh 123*)** — calls the "blind spot" selling point marketing, and notes an ad from the company with a typo in the word "left."

**What Panel B tells you:** the truthful-commentary feature is the **highest-risk** item in your proposal. It attracts accusations of bias from every direction, it invites "why am I paying for truth," and every individual judgment call becomes a review. Ground News has a full editorial apparatus and still absorbs this.

---

## Combined theme summary

| Theme | Panel | Type |
|---|---|---|
| Wrong representative / ballot mismatch | A — 28% | Product |
| App doesn't work | A — 25%, B — 26% | Product |
| Paywall on civic information | B — 43% | **Pricing** |
| Accusations of bias | B — 39% | Product |
| Missing local coverage | A — 13% | Product |
| Loses your marked ballot | A — 9% | Product |
| Privacy / data collection | A — 9% | Product |
| "Misinformation" / "AI slop" | A — 9%, B — present | Product |

**Split: the voter-app panel is ~100% product problems** (these apps are free or public). **The commentary analog is ~43% pricing.** Which means: *the information features cannot fail on accuracy, and the commentary feature cannot be sold without triggering a "pay for truth" backlash.*

---

## What companies pay humans to compile voter information

### Job A — Compiling the neutral voter guide

| Role | Pay | Source |
|---|---|---|
| **Ballotpedia — News Team Staff Researcher (remote)** | **$42,500–$44,000**, plus an $8,000/yr benefits stipend | [Ballotpedia posting via Arena](https://careers.arena.run/companies/ballotpedia-2/jobs/52194003-news-team-staff-researcher-remote) |
| Ballotpedia — Staff Writer (reported average) | **~$46,546** — about 13% below national average | [Indeed](https://www.indeed.com/cmp/Ballotpedia/salaries/Staff-Writer) |
| **BallotReady** | **$44,751** (Election Fellow) to **$156,055** (Director), estimated | [Glassdoor](https://www.glassdoor.com/Salary/BallotReady-Salaries-E2334450.htm) |
| **VOTE411 (League of Women Voters)** | **Largely unpaid.** National staff includes a VOTE411 Manager, Senior Manager and Project Coordinator; **candidate research is done by local League volunteers** | [LWV staff](https://www.lwv.org/about-us/staff); [VOTE411 toolkit](https://lwv.org/league-management/elections-tools/vote411-opportunities-participation) |

**VOTE411 covered 29,000+ races for 9M+ users in 2024 largely on volunteer labor.** That is the true cost structure you are competing against: **zero marginal wage.**

### Job B — Government voter outreach

| Role | Pay | Source |
|---|---|---|
| Voter outreach organizer (national average) | **$55,711/yr**; most $44,500–$65,000 | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Voter-Outreach-Organizer) |
| **Durham County, NC — Voter Outreach Coordinator** (posted Jul 13, 2026) | **$55,366–$65,000** | [ZipRecruiter listing](https://www.ziprecruiter.com/Jobs/Voter-Outreach-Organizer) `[secondary]` |
| Election coordinator (general) | **~$53,327/yr** | [Glassdoor](https://www.glassdoor.com/Salaries/election-coordinator-salary-SRCH_KO0,20.htm) |

### Job C — The expensive part: judging what's true

| Role | Pay | Source |
|---|---|---|
| Fact checker | **$46,700–$71,711/yr** depending on source; **$103,865 in New York** | [Comparably](https://www.comparably.com/salaries/salaries-for-fact-checker); [Glassdoor](https://www.glassdoor.com/Salaries/fact-checker-salary-SRCH_KO0,12.htm) |
| Political research analyst | **$88,469/yr**; $67,253–$117,223 typical | [Glassdoor](https://www.glassdoor.com/Salaries/political-research-analyst-salary-SRCH_KO0,26.htm) |
| **Senior opposition research (NY/SF/DC)** | **$186,000–$207,000/yr** | [Indeed](https://www.indeed.com/q-%22opposition-research%22-jobs.html) |

### What this says about the product

**The three features you proposed have wildly different labor costs:**

| Feature | Human equivalent | Cost of that labor |
|---|---|---|
| Voting dates and reminders | County outreach coordinator | ~$55,000/yr — **and already publicly funded** |
| Candidate information and plain-English ballots | Ballotpedia researcher / LWV volunteer | **$42,500/yr — or $0, because volunteers do it** |
| **Truthful critique of ads and positions** | Fact checker → political research analyst → opposition researcher | **$47,000 → $88,000 → $207,000** |

**The feature you'd most like to have is the one that costs four times as much and carries all the reputational risk.** The two cheap features are already being done by governments and volunteers for free, which is why nobody charges for them — and why Ground News's "pay for truth" backlash is the exact trap waiting on the third.

---

## Flags

| Item | Status |
|---|---|
| **G2 / Reddit** | ❌ Blocked. Requested, unavailable. |
| **Capterra** | ⚠️ Election-administration software for counties only; no voter-app reviews exist there. |
| **Sample size — Panel A** | ⚠️ **32 reviews.** Too small for statistics. Percentages are indicative only and every theme rests on 3–9 reviews. |
| **Ground News as analog** | ⚠️ A news-bias app, **not a voting app.** Included deliberately as the closest shipping analog to the "truthful critique" feature. Treat as a risk model, not competitor data. |
| **Politik App** | ⚠️ A new, small app (167 ratings). Its errors may reflect its youth rather than a category-wide limit — though they match the post-API-shutdown pattern exactly. |
| **Verbatim quotes** | ⚠️ Paraphrased; originals saved in the JSON beside this file. |
| **Durham County posting** | ⚠️ Retrieved via a job-aggregator summary, not the county's own posting. |
| **Salary figures** | ⚠️ Glassdoor/ZipRecruiter/Indeed self-reported estimates, except Ballotpedia's posted range, which is from the job posting itself. |
| **Opposition research $186k–$207k** | ⚠️ Senior roles at large organizations; not representative of routine research work. |
| **Google Play** | ❌ Not collected; Android complaint patterns may differ. |
