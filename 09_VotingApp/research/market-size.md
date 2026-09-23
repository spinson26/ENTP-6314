# Bottom-Up Market Size — $4.99/month Voting App

**Prepared:** September 22, 2026
**Price modeled:** $4.99/month consumer subscription (your choice; the prompt left the price as a placeholder).
**Method:** Population → behavioral gates → adoption → revenue. Every population figure comes from a named government or organizational source. **No top-down percentage of any market total is used.**

---

## Who the paying customer is — and isn't

The obvious target is the 20 million registered nonvoters (Section 1). **They are the wrong customer for a paid app.** Someone who doesn't vote because they're not interested will not pay $60/year for information about voting.

The realistic paying customer is the opposite person: **a voter who already turns out and actively seeks help with down-ballot races and ballot measures.** That population is measurable, because one organization counts it.

| Step | Filter | Multiplier | Population | Source |
|---|---|---|---|---|
| 1 | US citizens who voted in Nov 2024 | — | **154M** | [Census CPS](https://www.census.gov/newsroom/press-releases/2025/2024-presidential-election-voting-registration-tables.html) |
| 2 | **Demonstrated voter-guide seekers** — people who actively went to a personalized ballot guide in 2024 | — | **9M+** (VOTE411 alone, 29,000+ races) | [League of Women Voters](https://www.lwv.org/elections/vote411) |
| 3 | Own a smartphone | ×91% | **8.19M** | [Pew Research, 2025](https://www.pewresearch.org/internet/fact-sheet/mobile/) |

### **Serviceable market (SAM) = ~8.2 million US voters per presidential cycle**

Defined as: *people who demonstrably sought out a personalized voter guide in the last presidential election and own a smartphone.* This is a **floor**, because it counts one organization's users; Ballotpedia, BallotReady and state sites add more `[their unique-user counts were not retrievable — see flags]`.

---

## Three cases — headline version

| | Conservative | Base | Optimistic |
|---|---|---|---|
| SAM | 8.2M | 8.2M | 8.2M |
| **Adoption (% who become paying subscribers)** | **0.25%** | **1.0%** | **3.0%** |
| **Paying subscribers** | **20,500** | **82,000** | **246,000** |
| Price | $4.99/mo | $4.99/mo | $4.99/mo |
| **If each paid for 12 months (ARR)** | **$1.23M** | **$4.91M** | **$14.73M** |

**Do not use that last row.** It assumes people subscribe to a voting app year-round. They don't — which is the finding that defines this business.

---

## The seasonality correction — the number that actually matters

Elections are episodic in a way diets and even fundraising are not. A voter needs this product for a few weeks before an election and then has no reason to open it for months. Big-city mayoral turnout of 15–23% against 54–70% presidential (Section 1) shows how sharply attention collapses between cycles.

**Modeled as months-paid per acquired subscriber:**

| | Conservative | Base | Optimistic |
|---|---|---|---|
| Paying subscribers acquired per election year | 20,500 | 82,000 | 246,000 |
| **Average months paid before cancelling** | **2** | **3** | **6** |
| Revenue per subscriber per cycle | $9.98 | $14.97 | $29.94 |
| **Gross revenue, election year** | **$205,000** | **$1.23M** | **$7.37M** |
| Less app-store commission (15%) | −$30,750 | −$184,000 | −$1.11M |
| **Net revenue, election year** | **$174,250** | **$1.04M** | **$6.26M** |
| **Off-year revenue** `[assumed 25% of election-year]` | **$44,000** | **$260,000** | **$1.57M** |
| **Two-year cycle average, net** | **~$109,000/yr** | **~$650,000/yr** | **~$3.9M/yr** |

### What this says

**At $4.99/month with a three-month seasonal subscription, the base case is a ~$650,000/year business averaged across the cycle** — not the $4.9M the naive ARR calculation suggests. The naive number overstates revenue by **4x** because it assumes a year-round subscriber in a product used twice a year.

**Two ways out, neither of them a price change:**
1. **Annual pricing at ~$25–$30**, which converts the seasonal user into a full-year payer at a price they'll accept `[untested]`.
2. **Institutional revenue** — universities, unions, cities, nonprofits — which is what TurboVote and BallotReady actually sell and is not modeled here.

---

## Why those adoption rates are defensible

| Comparable | Observed | Read-across |
|---|---|---|
| **VOTE411** | 9M+ users, 29,000+ races, 2024 — **free, volunteer-powered** | The demand for the *content* is proven at scale. The demand for *paying* for it is not. |
| **Ground News** | $8.33/mo; **48,038 App Store ratings**; 43% of critical reviews are about the paywall | The only consumer product charging for political information — and its loudest complaint is that it charges `[subscriber count not disclosed]` |
| **Every other major** | Ballotpedia, Vote.org, TurboVote, BallotReady: **free to voters** | You would be the only paid option in a category where the incumbents are free by mission |
| **The whole App Store voter category** | 32 critical reviews across 12 apps in 18 months; Votemate (AI ballot assistant) has **12 lifetime ratings** | Nobody has built consumer demand for a voting app at *any* price |

**Base case = 82,000 paying subscribers = 1% of proven guide-seekers.** Conservative (20,500) is "a real but small app." Optimistic (246,000) means capturing 3% of everyone who used a free voter guide and convincing them to pay — **which no one in this category has ever done.**

---

## Every assumption, stated

| # | Assumption | Value | Source / basis | Type | If it's wrong |
|---|---|---|---|---|---|
| A1 | Voters in Nov 2024 | 154M | Census CPS | **Verified** | Stable |
| A2 | Demonstrated voter-guide seekers | 9M | VOTE411's reported 2024 users | **Verified** (organization-reported) | Counting Ballotpedia and state sites could raise SAM to 15–25M `[UNVERIFIED]`, scaling every case up ~2–3× |
| A3 | Smartphone ownership | 91% | Pew, 2025 (n=5,022) | **Verified** | Immaterial |
| A4 | Adoption → paying subscriber | 0.25% / 1% / 3% | Calibrated against a category where every major product is free | `[UNVERIFIED]` | **The load-bearing assumption.** See sensitivity |
| A5 | Price | $4.99/mo, no annual plan | Your input; roughly 60% of Ground News's $8.33 | **Verified as a market price band** | An annual plan at $25–30 could raise revenue per user 70–100% |
| A6 | **Months paid per subscriber** | 2 / 3 / 6 | No published benchmark. Derived from election seasonality and the turnout collapse between cycles | `[UNVERIFIED]` | **Second load-bearing assumption.** At 12 months the base case is $4.91M; at 1 month it's $409,000 |
| A7 | Off-year revenue | 25% of election-year | Odd-year elections exist (2025 mayors, 100,000+ open seats) but attention is far lower | `[UNVERIFIED]` | Municipal-heavy positioning could lift this materially |
| A8 | App-store commission | 15% | Apple Small Business Program (<$1M/yr); rises to 30% above that | **Verified as policy** | The optimistic case crosses $1M and would pay 30%, cutting net by a further ~$1.1M |
| A9 | No institutional revenue | $0 | Universities, unions, cities, campaigns not modeled | **Deliberate omission** | This is how TurboVote and BallotReady fund themselves — the most plausible upside, and probably the real business |
| A10 | No advertising revenue | $0 | $11B in political ad spend this cycle sits adjacent | **Deliberate omission** | Taking political ad money would destroy the neutrality claim the product depends on `[judgment]` |
| A11 | Nonvoters excluded from the paying population | — | The 20M registered nonvoters are the mission target, not the revenue target | **Stated to prevent double-counting** | Counting them would inflate SAM ~3× on no evidence of willingness to pay |
| A12 | Free competitors stay free | — | Four of five majors are nonprofits | **Assumption** | If Ballotpedia or VOTE411 ships a good app, the paid case collapses |

---

## Sensitivity

**Adoption (SAM 8.2M, 3 months paid):**

| Adoption → | 0.25% | 0.5% | 1.0% | 2.0% | 3.0% |
|---|---|---|---|---|---|
| Subscribers | 20,500 | 41,000 | 82,000 | 164,000 | 246,000 |
| **Gross, election year** | $205k | $614k | **$1.23M** | $2.46M | $3.68M |

**Months paid (base 82,000 subscribers) — the assumption that decides the business:**

| Months → | 1 | 2 | 3 (base) | 6 | 12 |
|---|---|---|---|---|---|
| **Gross, election year** | $409k | $818k | **$1.23M** | $2.46M | $4.91M |

**Price (base case, 3 months):**

| Price → | $2.99 | $4.99 (base) | $8.33 | $29/yr annual plan |
|---|---|---|---|---|
| Gross, election year | $736k | **$1.23M** | $2.05M | **$2.38M** |

**Note the last column.** An annual plan at $29 — less than six months at $4.99 — produces **nearly double** the base case, because it defeats seasonality. **If you sell this, sell it by the year, priced under a monthly subscriber's instinct to cancel in November.**

---

## What this model does *not* claim

- No share of the "$11B political advertising market" or any civic-tech market total. Those numbers appear nowhere in the math.
- No credit for the 154M voters or the 236M citizens as addressable. Only demonstrated guide-seekers count.
- No institutional, grant, foundation or advertising revenue — the last of which would compromise the product's neutrality.
- No claim that nonvoters will pay. The evidence says the opposite.

## The honest summary for an investor

**At $4.99/month, the base case is roughly $1.2M gross in an election year and about $650,000/year averaged across the cycle.** That is a real small business, not a venture outcome. The constraint is not market size — 9 million people demonstrably want this content. **The constraint is that they are used to getting it free, from nonprofits, twice a year.**

**The two levers that change the answer are annual pricing and institutional contracts** — neither of which is a better algorithm.

## Flags

| Item | Status |
|---|---|
| Adoption rate (A4) | `[UNVERIFIED]` — no comparable paid voter app exists to calibrate against. |
| Months-paid (A6) | `[UNVERIFIED]` — no published benchmark for seasonal civic subscriptions; derived from turnout seasonality. |
| Off-year factor (A7) | `[UNVERIFIED]` — assumption. |
| VOTE411's 9M users | ⚠️ Organization-reported; users, not unique individuals, and one cycle only. |
| Ballotpedia / BallotReady / state-site user counts | ❌ Not retrievable. SAM is therefore a floor. |
| Ground News subscriber count | ❌ Not disclosed. Its 48,038 App Store ratings are a proxy, not a measure. |
| Apple Small Business Program eligibility | ⚠️ Applies under $1M/yr proceeds; the optimistic case would exceed it. |
| "Nobody has built consumer demand at any price" | ⚠️ Based on App Store review volumes and the absence of paid competitors — absence of evidence, and the majors have no apps at all. |
