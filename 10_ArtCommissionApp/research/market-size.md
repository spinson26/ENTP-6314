# Bottom-Up Market Size — 15% Take Rate on Completed Fine-Art Commissions

**Prepared:** September 22, 2026
**Model:** Marketplace take rate — 15% of every **completed** commission. Revenue = commissions completed × average commission value × 15%.
**Method:** Population → behavioral gates → adoption → transactions → revenue. **No top-down share of the $26.2B US art market is used anywhere.**

---

## Who the countable customer is

The obvious target is "people who want art for their walls." **That population is not countable** — nobody publishes how many US households commission original art, and Section 1 found no survey that measures it.

**One adjacent population is counted by the federal government, does this work daily, and already gets paid for it: interior designers.** Section 3 identified them as the most concentrated, highest-intent, already-paying buyer in this space.

| Step | Filter | Multiplier | Population | Source |
|---|---|---|---|---|
| 1 | **US interior designers** | — | **87,100 jobs (2024)** | [BLS Occupational Outlook Handbook](https://www.bls.gov/ooh/arts-and-Design/interior-Designers.htm) |
| 2 | Share who specify **original** art for clients (rather than prints, decor or nothing) | **×40%** | **34,840** | `[UNVERIFIED — see A2]` |

### **Serviceable market (SAM) = ~34,840 US interior designers who specify original art**

---

## Three cases

Only **adoption** varies. Commissions-per-designer and average commission value are held at base so the cases stay comparable.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| SAM | 34,840 | 34,840 | 34,840 |
| **Adoption (designers actively using the platform)** | **0.5%** | **2.0%** | **5.0%** |
| **Designers on platform** | **174** | **697** | **1,742** |
| Completed commissions per designer per year | 4 | 4 | 4 |
| **Completed commissions per year** | **696** | **2,788** | **6,968** |
| Average commission value | $2,500 | $2,500 | $2,500 |
| **GMV** | **$1.74M** | **$6.97M** | **$17.42M** |
| **Take rate** | 15% | 15% | 15% |
| **Gross revenue** | **$261,000** | **$1.05M** | **$2.61M** |
| Less payment processing (~3% of GMV) | −$52,200 | −$209,100 | −$522,600 |
| **Net revenue** | **$208,800** | **$836,900** | **$2.09M** |

---

## The completion problem, which this price model makes central

**You only get paid when a commission completes.** Section 2 showed what happens when custom creative work goes wrong: Fiverr buyers losing $600 to vetted sellers, Peggy bids voided by artists changing prices, Etsy's 1.4★ rating built on disputes.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| Assumed completion rate | 60% | 70% | 85% |
| **Commissions you must originate to get the above** | **1,160** | **3,983** | **8,198** |
| Non-completing commissions you support for $0 | 464 | 1,195 | 1,230 |

**In the base case you handle ~1,200 failed commissions a year and earn nothing on them** — while absorbing the dispute handling, the refunds and the reviews. `[Completion rate is unverified — no benchmark exists for fine-art commission completion; see A6.]`

---

## Independent cross-check: the artist side

A different population, different source, same method.

| Step | Filter | Multiplier | Remaining |
|---|---|---|---|
| 1 | People in US fine-arts occupations | — | **347,000** ([NEA](https://www.arts.gov/sites/default/files/a5-report-202412.pdf)) |
| 2 | Share who accept commissions | ×30% `[UNVERIFIED]` | 104,100 |
| 3 | Adoption | ×1.0% | 1,041 artists |
| 4 | Completed commissions per artist per year | ×3 | 3,123 |
| 5 | × $2,500 × 15% | | **$1.17M gross** |

**That lands within 12% of the base case ($1.05M) from a completely separate population.** Two independent paths converging is the strongest evidence in this model that the order of magnitude is right.

---

## Every assumption, stated

| # | Assumption | Value | Source / basis | Type | If it's wrong |
|---|---|---|---|---|---|
| A1 | US interior designers | 87,100 | BLS, 2024 | **Verified** | Stable; +3% projected growth to 2034 |
| A2 | Share specifying original art | 40% | No published figure exists | `[UNVERIFIED]` | At 20%, every case halves; at 60%, +50% |
| A3 | Adoption of SAM | 0.5% / 2% / 5% | No comparable platform discloses designer counts | `[UNVERIFIED]` | Load-bearing — see sensitivity |
| A4 | Completed commissions per designer/yr | 4 | Judgment: designers run multiple projects, not every project includes commissioned art | `[UNVERIFIED]` | At 2, revenue halves; at 8, it doubles |
| A5 | Average commission value | $2,500 | Published ranges: **$100–$10,000 overall; $300–$8,000 typical; mid-size pieces $1,000–$3,500** | **Verified as a range**; the point estimate is mine | At $1,500 base revenue is $627k; at $5,000 it's $2.09M |
| A6 | Completion rate | 60% / 70% / 85% | No benchmark found for fine-art commissions | `[UNVERIFIED]` | Determines wasted support cost, not revenue directly |
| A7 | Take rate | 15% | Benchmarked: Etsy ~10%, advisors 5–20%, Fiverr 25.5% all-in, **Saatchi Art 40%** | **Verified as a market-consistent rate** | Raising to 20% adds 33%; the risk is artist flight, not buyer resistance |
| A8 | Payment processing | ~3% of GMV | Standard card processing | **Verified as standard** | Materially lowers net, not gross |
| A9 | No subscription revenue | $0 | Pure transaction model, as specified | **Deliberate omission** | A designer SaaS seat would smooth revenue between commissions |
| A10 | No AI-generation revenue | $0 | The brief is a means, not a product | **Deliberate** | Charging for AI briefs invites the artist backlash in Section 1 |
| A11 | Consumer buyers excluded | — | Uncounted and unreachable at this price | **Stated to prevent double-counting** | Direct consumers are upside, not base |
| A12 | Designers and artists are the same transactions | — | The cross-check is a **check**, not an addition | **Stated** | Adding both would double-count the same commissions |

---

## Sensitivity

**Adoption (SAM 34,840; 4 commissions each; $2,500 each):**

| Adoption → | 0.5% | 1% | 2% (base) | 3% | 5% |
|---|---|---|---|---|---|
| Designers | 174 | 348 | 697 | 1,045 | 1,742 |
| **Gross revenue** | $261k | $522k | **$1.05M** | $1.57M | $2.61M |

**Average commission value (base adoption):**

| Value → | $1,000 | $1,500 | $2,500 (base) | $5,000 | $8,000 |
|---|---|---|---|---|---|
| GMV | $2.79M | $4.18M | **$6.97M** | $13.9M | $22.3M |
| **Gross revenue** | $418k | $627k | **$1.05M** | $2.09M | $3.35M |

**Commissions per designer per year (base adoption, $2,500):**

| Per designer → | 2 | 4 (base) | 6 | 8 |
|---|---|---|---|---|
| **Gross revenue** | $523k | **$1.05M** | $1.57M | $2.09M |

**The highest-leverage variable is average commission value, not adoption.** Moving from $2,500 to $5,000 doubles revenue with the same number of designers — which argues for targeting larger works, corporate lobbies and multi-piece projects rather than more users.

---

## Is 15% defensible?

| Channel | Take from the artwork price |
|---|---|
| Etsy | ~10% effective |
| Art advisors / consultants | 5–20% (≈10% typical) |
| **This app** | **15%** |
| Fiverr | 25.5% all-in (20% seller + 5.5% buyer) |
| **Saatchi Art** | **40%** (raised from 35% in 2026) |
| Traditional galleries | 30–50% |

**15% sits comfortably mid-market: well under galleries and Saatchi, above Etsy, below Fiverr.** The artist keeps 85% against 60% at Saatchi and 50% at a gallery — **that differential is the single most persuasive line in any pitch to the supply side**, and it is verified, not inferred.

---

## What this model does *not* claim

- No share of the $26.2B US art market. That number appears nowhere in the math.
- No credit for 347,000 artists or millions of households as addressable customers.
- No subscription, SaaS, advertising or AI-generation revenue.
- No international market.
- No claim that consumers will commission art through an app at scale — that is the unproven part, and it is excluded from the base case on purpose.

## The honest summary for an investor

**The base case is roughly $1.05M gross / $837k net per year at 2% adoption among interior designers who specify original art.** Two independent populations — designers and artists — converge on the same order of magnitude, which is the strongest thing this model has going for it.

**The weaknesses are equally clear:** A2 (40% of designers specify original art) and A4 (four commissions each) are unverified judgments that move the answer by 2–4×, and the whole model depends on a transaction that **completes** in a category where Section 2 found 14% of complaints are about deals going wrong.

**The lever that matters most is average commission value, not user count.** Doubling the average piece from $2,500 to $5,000 doubles revenue with the same user base — which points at corporate and designer-led projects, not consumer walls.

## Flags

| Item | Status |
|---|---|
| A2 — designers specifying original art (40%) | `[UNVERIFIED]` — no published figure. **Worth a 20-call survey before pitching.** |
| A3 — adoption rates | `[UNVERIFIED]` — no comparable platform discloses designer adoption. |
| A4 — commissions per designer per year | `[UNVERIFIED]` — judgment, not data. |
| A5 — $2,500 average | ⚠️ The **range** is published ($100–$10,000; typical $300–$8,000); the point estimate is my midpoint of the mid-size band. |
| A6 — completion rate | `[UNVERIFIED]` — no benchmark exists for commission completion. |
| Commission price sources | ⚠️ From artist-facing pricing guides and calculators, not a transaction dataset. |
| Saatchi Art 40% | ⚠️ Confirmed across secondary sources; Saatchi's own page is 403 to this tool. |
| Consumer-side market | ❌ Not sized — no published count of US households that commission original art. This is the largest unquantified segment and it is deliberately excluded. |
| Corporate art buyers | ❌ No population count published; excluded from the model despite being a plausible high-value segment. |
