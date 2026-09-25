# Competitor Teardown — Top 5 Products

**Prepared:** September 25, 2026
**Selection:** the five products that cover the most of the spec — simulate a deal, against a counterparty with its own interests, under real cap rules, with feedback on how you did. **No product does all four.**

**Anything inferred rather than read is tagged `[UNVERIFIED]`.** Prices come from each product's own store or pricing page. Complaints are paraphrased with date, playtime and upvotes; originals are in [steam-negative-reviews.json](steam-negative-reviews.json) and [appstore-reviews.json](appstore-reviews.json).

---

## Master comparison table

| Product | Price (source) | Three core features | Target customer | Funding / ownership | Three most common complaints |
|---|---|---|---|---|---|
| **1. Football Manager 26** | **$59.99** — [Steam store page](https://store.steampowered.com/app/3551340/) | 1. Squad, contract and transfer management across real leagues 2. Contract negotiation with agents and players 3. Full financial and salary-cap modelling by competition | Serious management-sim players; the deepest mainstream negotiation loop | **SEGA** (publisher) — acquired developer **Sports Interactive in 2006**; SEGA Sammy is publicly listed in Japan ([Game Developer](https://www.gamedeveloper.com/game-platforms/sega-europe-acquires-sports-interactive)) | Negotiations "all done by text message… a fancy spreadsheet" (Aug 23 2026, 191h, +33); **MLS salary-cap bug during contract negotiation**, GAM/TAM not recognised (Sept 13 2026); game **freezes on player negotiation pages**, 7–8 restarted saves in 71 hours (Jul 30 2026) |
| **2. Out of the Park Baseball 26** | **$49.99** — [Steam store page](https://store.steampowered.com/app/3116890/) | 1. Deepest contract/arbitration/option modelling in any sports sim 2. Full trade engine with salary retention 3. Historical leagues back to 1901 | Baseball simulation veterans (reviewers with 300–6,900 hours) | **Out of the Park Developments — 100% acquired by Com2uS (Korea) on Oct 12, 2020** ([GM Games](https://gmgames.org/2020/10/12/com2us-korea-has-acquired-100-percent-stake-of-out-of-the-park-developments-ootp-germany/)) | "**The trade AI is still terrible**" (Mar 26 2025, +9); AI trades stars **with 100% salary retention for scrap prospects** (Jan 26 2026); development effort moved to the card-collecting mode — "Perfect Team is a financial success, but creatively the biggest misstep" (May 6 2025, 6,934h, +85) |
| **3. Madden NFL 26** | **$69.99** — [Steam store page](https://store.steampowered.com/app/3230400/) | 1. Franchise mode with cap, re-signings and the draft 2. Scouting and player progression 3. On-field play as the reward loop | Mass-market NFL fans — by far the largest audience here | **Electronic Arts** — **taken private on Aug 4, 2026 in a $55B all-cash deal by PIF, Silver Lake and Affinity Partners**, the largest sponsor take-private on record ([EA](https://www.ea.com/news/ea-announces-completion-of-acquisition)) | **GM mode removed after purchase** — "They took away GM Mode... AFTER I PAID $70" (Apr 21 2026, 392h, +52); franchise menus "insanely choppy and un-intuitive" (Feb 27 2026); AI that "stops blocking mid play" (Mar 26 2026, +19) |
| **4. Front Office Football Nine** | **$29.99** — [Steam store page](https://store.steampowered.com/app/2633170/) | 1. Front-office-only: no on-field play at all 2. Contract, cap and draft-pick management 3. Deep league financial modelling | The closest existing product to "be the GM, not the coach" | **Solecismic Software** — a one-developer independent studio `[no outside funding found]` | "**You are unable to actually create your own trades**" (Dec 15 2025, +8); "feels more like an **Excel simulator** than a game" (Oct 22 2025, +18); teams give away every draft pick and cripple themselves for years (Dec 15 2025) |
| **5. Hyperbound** *(the AI-roleplay analog — practice against a counterparty, then get scored)* | **Free tier** (45 prebuilt AI roleplays, example scorecards); **Practice Enterprise and Perform Enterprise are quote-only** — [pricing page](https://www.hyperbound.ai/pricing) | 1. AI personas trained on **2M+ hours of real B2B call data** 2. Multiparty deal scenarios 3. Scorecards, analytics and real-call scoring | B2B sales teams — **not sport** | **$15M Series A, September 2025, led by Peak XV Partners** ([Hyperbound](https://www.hyperbound.ai/)) | No public review base found on G2, Capterra or the App Store. **The nearest analog with reviews, CoachCraft, drew:** "Did a poor job **on purpose**. It said I did great" (1★, Dec 11 2025); app never got past the first screen after signup (1★, Dec 5 2025) |

### Runners-up

| Product | Price | Why it matters |
|---|---|---|
| **Spotrac** | **$30/year** premium ([Spotrac](https://x.com/spotrac/status/1808139970177057182?lang=en)) `[price from the company's own post, not a pricing page]` | The contract data layer, priced. Static — no counterparty |
| **Over The Cap** | Annual flat fee, **price not published** ([OTC Premium](https://overthecap.com/premium)) | Same role for the NFL |
| **NBA 2K26** | **$69.99** ([Steam](https://store.steampowered.com/app/3472040/)) | MyGM/MyLEAGUE; negotiation behind a menu |
| **Franchise Hockey Manager 12** | **$19.99** ([Steam](https://store.steampowered.com/app/3739670/)) | Same publisher as OOTP; worst-rated trade AI in the set |
| **Second Nature** | Quote-only | **$22M Series B, Oct 2025** — the category is funded twice over |
| **Tulane International Baseball Arbitration Competition** | Free to enter | **40 law-school teams a year**, judged by MLB executives — the only judged venue that exists |

---

## Per-product notes

### 1. Football Manager 26 — the deepest negotiation loop, and it's a text box
It models agents, contract clauses, wage structures and competition-specific cap rules better than anything else on the list. And its own players say the negotiation *experience* is lifeless — "text message," "fancy spreadsheet." **The depth exists; the encounter doesn't.**

### 2. Out of the Park Baseball 26 — the best rules engine, the worst counterparty
Arbitration, options, salary retention, 40-man rosters — the mechanics are all there, which is why 1,000-hour veterans stay. **The complaint that recurs across three consecutive annual releases is that the AI on the other side of the trade doesn't behave like a rational team.** That is precisely the thing your product would have to get right.

### 3. Madden NFL 26 — the audience, not the product
By far the biggest reach, and the one that most matches the premise's criticism: negotiation is decoration between games. It also demonstrates the platform risk — **GM mode was removed from a $70 product after launch**, and the company is now privately held by a consortium with no obligation to explain roadmap decisions.

### 4. Front Office Football Nine — proof the niche is real and proof it's hard
A one-person studio built the front-office-only game with no on-field play, and it has a real, if small, audience. It also shows the failure mode: without presentation, "front office simulation" reads as a spreadsheet, and its trade system **won't let the user construct an offer at all.**

### 5. Hyperbound — the business model that works, in the wrong industry
Free tier for individuals, enterprise quotes for teams, $15M raised, AI personas trained on real call recordings, scorecards attached to outcomes. **This is the shape of a viable version of your product — it just points at sales teams rather than sport,** and it is the only product in this table with a working answer to "how do you get scored?"

---

## What does nobody serve well?

**1. Nobody lets you make an offer and hear a reasoned counter.** Front Office Football Nine literally won't let you construct a trade; Football Manager conducts negotiation by text message; Madden and 2K resolve it with a hidden check. **The core interaction your premise describes — propose, get pushed back on, revise — does not exist in a commercial product.**

**2. Nobody models leverage, only legality.** Spotrac and Over The Cap tell you whether a deal fits under the cap. The sims tell you whether a random roll passed. **Nothing models *why* the other side would say yes** — roster needs, market comparables, deadline pressure, alternatives. A MockOut reviewer asked for exactly this: use "the NFL trade charts to validate trades."

**3. Nobody scores you in a way anyone would trust.** The one AI trainer with public reviews **told a user they did great after they deliberately performed badly.** And no evidence exists that any front office or agency recognises a simulator score. `[UNVERIFIED — absence of evidence, not proof of absence.]`

**4. Nobody puts you on the agent's side of the table.** Every serious product casts you as the GM. The agent-side products are mobile idle games — Basketball Agent Manager Star's own reviewers say contract and endorsement deals "need some work." **Half the negotiation has no simulator at all.**

**5. Nobody connects practice to the credential.** The Tulane arbitration competition is the only judged venue and it takes **40 law-school teams once a year**. `[UNVERIFIED: whether employers would accept any alternative credential.]`

**6. Nobody prices for the people who need it.** The options are a $30–$70 one-time game or a quote-only enterprise sales platform. **There is no student or program tier anywhere in this market** — and Section 2 showed the mobile middle ground collapsing into ad walls and pay-to-trade.

**7. Nobody uses the real public data inside a simulation.** Spotrac, Over The Cap and the CBAs are public; the sims use invented cap environments. **Nothing lets you negotiate a real contract, at a real cap position, for a real player.**

### The sharpest wedge

**An agent-side negotiation you can actually conduct — offer, counter, reasons — against a counterparty whose position comes from real public cap and comparable data, scored on a rubric a program can grade and an employer could read.** Items 1, 2, 4 and 7 are all empty, and item 5 is where the value would have to be proven.

**The hard parts, in order:** making the counterparty's reasoning defensible (OOTP has failed at this across three releases), making the score trustworthy (the AI-trainer analog failed instantly), and getting anyone to accept the credential (no evidence anyone would).

---

## Flags

| Item | Status |
|---|---|
| **Prices** | ✅ Verified — Steam store pages are the publishers' own listings. US pricing, standard editions, at the date of this research. |
| **Spotrac's $30/year** | ⚠️ From Spotrac's own social post, not a pricing page (their site returns 403 to this tool). |
| **Over The Cap price** | ❌ Not published. |
| **SEGA / Com2uS listing status** | ⚠️ Both are publicly traded in their home markets; I did not verify tickers or current financials. `[UNVERIFIED]` |
| **Front Office Football funding** | ⚠️ No outside funding found; "one-developer studio" is inferred from the studio's own materials. `[UNVERIFIED]` |
| **Hyperbound as a competitor** | ⚠️ **It is not a sports product.** Included because it is the only funded example of the mechanic your app depends on. |
| **Hyperbound complaints** | ❌ None found — no G2, Capterra or App Store review base. The CoachCraft quotes are from a **different, much smaller** AI trainer and are a proxy. |
| **Employer recognition of simulator credentials** | ❌ No evidence found in either direction. |
| **Reddit / G2 / Capterra** | ❌ Reddit blocked; G2 and Capterra list none of these products. |
| **Console franchise modes** | ⚠️ Madden and NBA 2K complaint evidence is **PC-only**, and PC is the smaller share of both audiences. |
