# Redesign for Reach — Making This Novel, Gamified and Fast to Market

**Prepared:** September 25, 2026 · Section 6, written against the findings in Sections 1–5.

## Why the current framing caps out

| Finding from this dossier | Consequence |
|---|---|
| The career audience is **~20,400 deal-focused sport management students** | The base case is **$663k/yr** — the second-smallest of the six ideas compared |
| **No employer recognises a simulator credential** and no scoring rubric exists | The "prove the skill" promise has no buyer and Section 4 models zero revenue from it |
| Only **0.7% of 1,921 negative sim reviews** mention negotiation | The intensity is real; the breadth is not |
| **CICERO did this in 2022**; SYCON-Bench shows models still cave under pressure | "AI counterparty" is not novel on its own and is fragile as a headline feature |

**The fix is not a better simulator. It is a different audience and a different unit of play.**

---

## The pivot in one line

**Stop selling a career simulator to 20,400 students. Ship a free daily negotiation puzzle to the 53 million Americans who already play fantasy sports — and keep the career mode underneath it as the paid tier.**

| | Current framing | Proposed |
|---|---|---|
| Audience | Sport management students aiming at front offices | **53M US fantasy sports players**, ~40M of them fantasy football ([FSGA 2025](https://thefsga.org/new-fsga-research-highlights-industry-stability-and-next-generation-growth-in-fantasy-sports-and-sports-betting/)) |
| Unit of play | A season-long simulation | **One negotiation, five minutes, once a day** |
| Proof it works | None | **Immaculate Grid reached 200,000 daily players within six months of launch** ([Wikipedia](https://en.wikipedia.org/wiki/Immaculate_Grid)); Wordle runs at 4–12M DAU |
| Scoring | No rubric exists | **The real contract is the answer key** — see below |
| Time to market | Build a full sim | **Daily puzzle on the web in 10–12 weeks** |

---

## The novel mechanic: "The Offer"

**One real scenario a day, five offers to close it, a shareable score.**

### How a round works

1. **The setup (real, current, public).** *"You are the Bengals. Ja'Marr Chase's camp wants a new deal. You have $21.4M in effective cap space. Comparables: three receivers signed in the last 18 months."* Every number comes from Spotrac and Over The Cap, which publish contract structures and cap positions ([Spotrac, $30/yr](https://www.spotrac.com/)).
2. **You make an offer** — years, total, guaranteed, structure. Not a menu: real fields.
3. **The counterparty answers in plain language and pushes back with a reason** — "Guarantees are light against what Smith got in March; we're not signing for less at year three."
4. **Five offers maximum.** The constraint is the game, exactly as Wordle's six guesses are the game.
5. **You get a score card and a share grid** — deal closed or not, total versus par, guarantees versus par, offers used. Shareable as emoji blocks, which is how Wordle and Immaculate Grid spread without advertising.

### The one design decision that makes it work

**Put the economics in ordinary code and let the AI only talk.**

Section 5 found that models still concede under sustained pressure — the best tested is sycophantic 29% of the time, and OpenAI shipped and rolled back a sycophantic model in four days. **So the reservation value, the walk-away rule and the scoring must be deterministic.** The language model generates the argument, the objection and the tone. It never decides whether to accept.

This kills three of the four problems in Section 5 at once: no caving, no inconsistency across replays, and no hallucinated cap maths.

### The answer key nobody else has

Section 5's hardest objection was **"there is no ground truth for a good deal."** There is, for every historical negotiation: **the contract that was actually signed.**

- Use **completed deals** for scored daily puzzles: your offer is measured against what the player really got, in total value, guarantees and structure.
- Use **live, unsigned situations** for the unscored "open" mode, where the leaderboard is the crowd's median offer until the real deal lands — and then everyone gets scored retroactively. **That converts every real signing into a scoring event and a news hook.**

**No competitor has this.** Spotrac and Over The Cap hold the data but run no game; the sims invent their own contract universes, which is precisely why their trade AI can be irrational without anyone being able to prove it.

---

## The mode ladder — free to paid

| Mode | What it is | Price | Why it's here |
|---|---|---|---|
| **Daily Offer** | One scenario, five offers, share grid | **Free, no account** | The growth engine. Immaculate Grid's 200k daily players came from exactly this shape |
| **The Archive** | Every past daily, replayable | **Paid** | Wordle's own audience asked for this; it is the cheapest paid feature to build |
| **Ranked** | ELO ladder, weekly seasons, percentile against everyone who played the same scenario | **Free to play, paid for stats** | Retention without a paywall on play |
| **Head-to-head** | Two humans, one negotiation, AI referee and scoring | Paid | The thing fantasy leagues will actually use — and Section 1 noted fantasy has "no real counterparty" |
| **Franchise run** | Ten linked negotiations across an offseason under one cap | Paid | The career simulator, now a retention feature rather than the entire product |
| **Agent side** | Same scenarios from the player's side of the table | Paid | Section 3: "**Half the negotiation has no simulator at all**" |
| **Classroom** | Instructor dashboard, assigned scenarios, rubric export | **$2,500/yr per program** | The 441 named institutions from Section 4 |

---

## Step-by-step: how to build it

### Weeks 0–1 — Run the two kill tests before writing code

1. **The hold-firm test.** Write 20 scenarios where refusing is correct. Push the model hard — repeat, escalate, flatter, appeal to fairness. Count the caves. **Above ~10%, the dialogue layer needs guardrails before anything else gets built.** (Method: SYCON-Bench, published.)
2. **The par test.** Take 20 completed contracts. Build the "par" score from public data alone. Show ten of them to someone who works in the industry. **If they can't defend the pars, the game has no answer key.**

### Weeks 2–3 — Data spine

3. Ingest contracts, cap positions and transaction dates for **one league only — NFL**, because it has the hardest cap, the biggest fantasy audience (~40M) and the most public data.
4. Build the comparables engine: for any player, the N most similar recent contracts by position, age, production and market. **This is the product's actual moat, not the AI.**
5. Write the scenario generator: pick a real signing, hide the outcome, compute par, generate the cap context.

### Weeks 4–6 — The engine

6. Deterministic negotiation core: reservation value, concession schedule, walk-away threshold, deadline pressure. **No model involved.**
7. Scoring: total value, guarantees, structure and offers used versus par. One number, four components.
8. Unit-test it against 200 historical deals. **The engine should reproduce the real contract inside its accept band at least 80% of the time** `[UNVERIFIED target — set your own bar, but set one before you build]`.

### Weeks 7–8 — The voice

9. Add the language layer: the counterparty explains its position, objects with reasons drawn from the comparables, and reacts in character (agent, GM, owner). It reads the engine's state; it never sets it.
10. Adversarial pass: replay the 20 hold-firm scenarios end to end. **Ship nothing until caving is under your threshold.**

### Weeks 9–10 — The game

11. Daily scenario scheduler, five-offer limit, results screen, **emoji share grid**, streaks.
12. Web first, no login for the daily. Mobile browser must work perfectly — that is where the share links get opened.
13. Instrument: completion rate, offers used, share rate, day-2 and day-7 return.

### Weeks 11–12 — Launch surface

14. Archive and ranked modes behind a single subscription.
15. One-page classroom pilot offer for programs.
16. Ship. **Total elapsed: about three months, one developer plus data work.**

**What you are deliberately not building in v1:** on-field simulation, multiple leagues, native apps, likeness rights, video, or anything requiring a league licence.

---

## Step-by-step: how to commercialise it

### Phase 1 — Launch where the argument already happens (weeks 12–16)

1. **Time the launch to a negotiation news cycle** — franchise-tag deadline, the legal tampering window, or a holdout. The daily puzzle *is* the news commentary.
2. **Seed the sim communities**: the OOTP, Football Manager and Front Office Football forums and Discords. Section 2 shows these players care about exactly this and are loudly unhappy with the incumbents. Reddit is the biggest single channel and this research could not reach it — **you can**.
3. **Send the share grid to sports writers.** Immaculate Grid grew because sports media played it publicly and posted results.
4. **Retroactive scoring as a press hook**: when a real contract is signed, publish "12,400 players offered a median $26M/yr; the actual deal was $28.5M." **That is a story, weekly, for free.**

### Phase 2 — Convert (weeks 16–26)

5. Paywall only the **archive, ranked stats and franchise runs**. Never the daily, never the share.
6. Add head-to-head in time for fantasy draft season (August). **Fantasy leagues are pre-assembled groups of exactly this audience.**
7. Launch the agent-side mode second — it is the differentiator nobody else has, but it needs the GM side working first.

### Phase 3 — Institutions and sponsors (month 6 onward)

8. **Call ten of the 441 programs.** Offer a free semester pilot with the rubric export. Ask one question: *would you grade with this?*
9. Convert pilots to $2,500/yr licences; a 40-seat program is $62.50 per student, well under a textbook.
10. **Only then** approach sponsors. A daily sports game with a five-figure DAU is a sellable audience; below that, it isn't. `[UNVERIFIED — no CPM benchmark researched for this audience.]`

---

## Step-by-step: how to monetise it

| Stream | Price | When | Basis |
|---|---|---|---|
| **Daily game** | **Free forever** | Day 1 | Section 2's loudest theme is monetization backlash — Franchise Hockey: Pro GM's ratings collapsed after it put ads on previously free actions. **Never charge for the daily and never gate a trade behind currency** |
| **Subscription** | **$4.99/mo or $29/yr** | Week 12 | Below Spotrac's $30/yr and far below the $59.99–$69.99 sims. Section 4 showed $100/yr is out-of-band for a consumer product |
| **Classroom licence** | **$2,500/yr per program** | Month 6 | 441 named buyers; 30% adoption equals the entire consumer base case of the old model |
| **League/office packs** | **$99/yr for 12 seats** | Fantasy season | Fantasy leagues buy as groups; this is the cheapest way to sell twelve subscriptions at once |
| **Sponsorship** | CPM or fixed placement | Month 9+ | Only once DAU is five figures `[UNVERIFIED]` |
| **Never do** | Ads on core actions, pay-to-trade currency, or a subscription that removes ads you added | — | Both are documented ratings-killers in Section 2 |

### What the numbers look like under the new shape

| | Conservative | Base | Optimistic |
|---|---|---|---|
| Daily active players (Immaculate Grid hit **200,000** in six months) | 20,000 | **75,000** | 200,000 |
| Monthly actives (×3) `[UNVERIFIED multiplier]` | 60,000 | **225,000** | 600,000 |
| Paid conversion | 1.5% | **3%** | 5% |
| Subscribers | 900 | **6,750** | 30,000 |
| **Subscription revenue at $29/yr** | $26,100 | **$195,750** | $870,000 |
| Programs at $2,500/yr | 5 | **25** | 80 |
| **Classroom revenue** | $12,500 | **$62,500** | $200,000 |
| League packs at $99 | 100 | **600** | 2,500 |
| **Pack revenue** | $9,900 | **$59,400** | $247,500 |
| **Total gross** | **$48,500** | **$317,650** | **$1.32M** |

**Read this honestly: the redesign does not beat the old model on revenue at these adoption rates — it beats it on reach, speed and optionality.** The old model needed 4% of every deep-sim owner in America to reach $1.73M. This one needs a free game that spreads on its own, and it has a sponsorship and licensing path the old one didn't. **If DAU passes Immaculate Grid's 200,000, sponsorship becomes the largest line and the arithmetic changes.** `[UNVERIFIED — no sponsorship CPM researched.]`

---

## What makes this genuinely novel

1. **Real contracts as the answer key.** Nobody scores a negotiation against what actually happened. It solves the "no ground truth" objection that Section 5 raised against the original idea.
2. **Deterministic economics, AI voice.** The incumbents' trade AI is irrational (OOTP, three releases running) and LLM counterparties cave (SYCON-Bench). **Splitting the two is the design answer, and nobody in this market has shipped it.**
3. **A five-minute unit of play in a category that only sells 40-hour ones.** Every competitor is a season-long sim at $29.99–$69.99.
4. **Retroactive scoring on live deals** turns the news cycle into content, weekly, at no cost.
5. **Both sides of the table.** Section 3: no product puts you in the agent's chair.

## Flags

| Item | Status |
|---|---|
| FSGA fantasy participation (53M US) | ⚠️ Industry-association survey (Angus Reid, n≈2,052 and 3,930), self-reported. |
| Immaculate Grid's 200,000 daily players | ⚠️ **October 2023 figure**, six months after launch; current numbers not published. Used as a launch benchmark, not a forecast. |
| DAU → monthly actives (×3) and paid conversion (1.5–5%) | `[UNVERIFIED]` — standard-shaped assumptions with no comparable in this niche. |
| Sponsorship revenue | ❌ **Not researched.** No CPM, no benchmark, no evidence a sponsor would buy. Excluded from every case above. |
| Program price ($2,500/yr) and pack price ($99) | `[UNVERIFIED]` — chosen against the $100/yr ceiling in Section 4, not tested. |
| Engine accuracy target (80% inside the accept band) | `[UNVERIFIED]` — a target I am proposing, not a measured benchmark. |
| Rights and data terms | ❌ **Not researched.** Spotrac and Over The Cap publish data; whether their terms permit commercial reuse is unverified, and player names/likenesses in a commercial game may require clearance. **Get this checked before launch — it is the one item here that can stop the product.** |
| Whether programs would grade with it | ❌ Still unknown. It is step 8 of commercialisation for a reason. |
