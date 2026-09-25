# Bottom-Up Market Size — $100/year Sports Negotiation App

**Prepared:** September 25, 2026
**Method:** Population → behavioral gates → adoption → revenue, for three separate customer groups. **No top-down share of any sports or gaming market total is used.**

---

## Three populations, counted separately

The product has three plausible buyers and they are not the same people. Each is sized on its own.

| Path | Who | Countable population | Source |
|---|---|---|---|
| **A — Career** | Sport management students aiming at deal-side roles | **~20,400** | Derived from degrees awarded |
| **B — Enthusiast** | PC owners of deep sports-management sims | **~305,000** | Derived from Steam review counts `[UNVERIFIED multiplier]` |
| **C — Institutional** | US programs teaching sport management | **441** | [The Sport Journal](https://thesportjournal.org/article/an-examination-of-sport-management-masters-programs-in-the-united-states/) |

### Path A funnel — the students

| Step | Filter | Multiplier | Remaining | Source |
|---|---|---|---|---|
| 1 | Sports management degrees awarded per year | — | **16,971** | [College Factual](https://www.collegefactual.com/majors/parks-recreation-fitness/health-and-physical-education/sports-management/) `[2020–21 data]` |
| 2 | Students enrolled at any one time (4-year pipeline) | ×4 | **67,884** | `[UNVERIFIED — my multiplication; no enrollment figure is published]` |
| 3 | Aiming at deal-side roles (front office, agency, cap, contracts) rather than marketing, events, facilities or coaching | ×30% | **20,365** | `[UNVERIFIED — see A3]` |

### Path B funnel — the enthusiasts

| Step | Filter | Value | Source |
|---|---|---|---|
| 1 | Steam reviews across the four deep management sims (FM26 9,273 + OOTP 26 645 + FOF9 161 + FHM12 109) | **10,188** | [Steam review API](https://store.steampowered.com/app/3551340/) |
| 2 | Owners per review (industry rule of thumb, ~30×) | ×30 | `[UNVERIFIED — a widely used heuristic, not a measurement]` |
| 3 | Implied PC owners of deep management sims | **~305,000** | Derived |

**Note what this excludes:** Madden and NBA 2K's console audiences, which are far larger but whose players buy the games for on-field play. Their PC review counts (5,078 and 13,752) are not added, because a 2K player is not evidence of demand for contract negotiation.

---

## Three cases

Adoption varies; price is held at $100/year throughout.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| **Path A — students** (SAM 20,365) | 2% = 407 | **5% = 1,018** | 12% = 2,444 |
| **Path B — enthusiasts** (SAM 305,000) | 0.5% = 1,525 | **1.5% = 4,575** | 4% = 12,200 |
| **Path C — programs** (SAM 441, at 40 seats × $100 = $4,000/program) | 2% = 9 programs | **6% = 26 programs** | 15% = 66 programs |
| **Paying individuals** | **1,932** | **5,593** | **14,644** |
| **Revenue, Paths A + B** | $193,200 | **$559,300** | $1,464,400 |
| **Revenue, Path C** | $36,000 | **$104,000** | $264,000 |
| **Gross revenue** | **$229,200** | **$663,300** | **$1.73M** |
| Less payment processing (~3%) | −$6,876 | −$19,899 | −$51,900 |
| **Net revenue** | **$222,300** | **$643,400** | **$1.68M** |

### The honest headline

**At $100/year, the base case is a ~$660,000/year business.** That is a real small business and not a venture outcome. **The constraint is not adoption — it is that the countable population is small.** Even capturing **4% of every deep-sim PC owner in America plus 12% of every deal-focused sport management student** produces $1.7M.

Compare with the other dossiers' base cases: DietGrocery $30.7M, SportsLayer $21.5M, StartupValuation $1.77M, ArtCommission $1.05M, Voting ~$650k. **This model lands at the bottom of that group.**

---

## What actually moves the number

**Price, not users.** The same base-case user count at different prices:

| Price → | $50 | $100 (base) | $200 | $400 |
|---|---|---|---|---|
| Paths A + B revenue | $279,650 | **$559,300** | $1.12M | $2.24M |

**$400/year is not absurd for a career credential** — Section 2 showed sports lawyers earning $100,626 and a single 3% NFL commission worth $150,000 on a $5M contract. But it is absurd for a game, and Section 3 showed the competing products cost **$29.99–$69.99 once**.

**The institutional licence is the lever that scales.** At $5,000 per program instead of $4,000:

| Programs adopting → | 9 | 26 | 66 | 132 (30% of all 441) |
|---|---|---|---|---|
| Revenue at $5,000 each | $45,000 | $130,000 | $330,000 | **$660,000** |

**Reaching 30% of every sport management program in the country produces the same revenue as the entire base case.** That tells you the institutional path is necessary, not optional — and that it is also capped, because there are only 441 buyers.

---

## Every assumption, stated

| # | Assumption | Value | Source / basis | Type | If it's wrong |
|---|---|---|---|---|---|
| A1 | Sports management degrees per year | 16,971 | College Factual, 2020–21 | ⚠️ **Verified but stale** (five years old; NCES blocks automated access) | Growth since 2021 would raise every Path A figure proportionally |
| A2 | 4-year enrolled pipeline | ×4 | My multiplication | `[UNVERIFIED]` | Dropouts and 2-year entrants make this soft in both directions |
| A3 | Share aiming at deal-side roles | 30% | No published breakdown of sport management career intent | `[UNVERIFIED]` | At 15%, Path A halves; at 50%, it rises 67% |
| A4 | Steam reviews → owners | ×30 | Widely used industry heuristic | `[UNVERIFIED — not a measurement]` | At ×15, Path B halves; at ×50, it rises 67%. **The single softest number here** |
| A5 | Console franchise players excluded | — | Madden/2K buyers purchase for on-field play | **Deliberate exclusion** | Including them would inflate SAM by millions on no evidence of negotiation demand |
| A6 | Adoption, Path A | 2/5/12% | No comparable product to calibrate against | `[UNVERIFIED]` | See sensitivity |
| A7 | Adoption, Path B | 0.5/1.5/4% | Ditto | `[UNVERIFIED]` | See sensitivity |
| A8 | Adoption, Path C | 2/6/15% of 441 programs | Ditto | `[UNVERIFIED]` | The most testable of the three — 441 named institutions |
| A9 | Price | $100/yr | Your input. Sits **above** every competing product's one-time price ($29.99–$69.99) and **far below** professional training | **Verified as out-of-band** | See the price table |
| A10 | Program seat count | 40 students/program | Judgment | `[UNVERIFIED]` | Drives Path C linearly |
| A11 | Payment processing ~3% | Web checkout | **Verified as standard** | App-store billing would cost 15–30% instead |
| A12 | Paths don't overlap | — | A student could also be an enthusiast | ⚠️ **Some double-counting is likely** and would reduce the totals |

---

## Sensitivity

**Path B adoption (the biggest revenue line):**

| Adoption → | 0.5% | 1% | 1.5% (base) | 3% | 4% |
|---|---|---|---|---|---|
| Subscribers | 1,525 | 3,050 | 4,575 | 9,150 | 12,200 |
| **Revenue** | $153k | $305k | **$458k** | $915k | $1.22M |

**The review multiplier (A4), at base adoption:**

| Owners per review → | ×15 | ×30 (base) | ×50 |
|---|---|---|---|
| Path B SAM | 153,000 | 305,000 | 509,000 |
| **Path B revenue** | $229k | **$458k** | $764k |

---

## What this model does *not* claim

- No share of the sports industry, the games market or the education market. No such figure appears in the math.
- No credit for the 554,298 NCAA athletes, the 68,000 D-I staff or Madden's console audience as addressable customers.
- No advertising, data-licensing or agency-recruiting revenue.
- **No revenue from the credential itself** — no evidence exists that any employer would pay for or accept it (Section 3).

## The summary an investor will hear

**At $100/year this is a ~$660,000/year business at base case, and under $1.8M even when everything goes right.** The reason is not conversion — it is that fewer than half a million Americans demonstrably care about simulated front-office deal-making, and the 441 institutions that teach the subject are the only concentrated buyer.

**Two changes would alter the answer, and both are decisions rather than research findings:** price it as professional training rather than a game ($400/yr changes the base case to ~$2.2M), or sell the institutional licence hard, where 30% of all US programs equals the entire current base case.

## Flags

| Item | Status |
|---|---|
| Degrees per year (16,971) | ⚠️ **2020–21 data.** Five years stale; NCES blocks automated access. |
| Enrolled pipeline (×4) and career-intent share (30%) | `[UNVERIFIED]` — both are my judgment, and together they set Path A. |
| Steam review multiplier (×30) | `[UNVERIFIED]` — an industry heuristic, not a measurement, and the softest number in the model. |
| Adoption rates | `[UNVERIFIED]` — **no comparable paid negotiation-practice product exists to calibrate against.** |
| Path overlap | ⚠️ A student can be an enthusiast; some double-counting is likely. |
| Seats per program (40) | `[UNVERIFIED]`. |
| Whether programs buy software at all | ❌ Not researched. 441 named institutions makes this the cheapest thing to test. |
| Whether employers accept a simulator credential | ❌ No evidence found (Section 3), and no revenue is modeled from it. |
