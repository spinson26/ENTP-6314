# Moat Ranking: HushPlate

**Prepared:** October 16, 2026
**Sources:** [strategy/spec-audit.md](spec-audit.md), `prd-1.md` (15:27 version) and [research/competitors.md](../research/competitors.md).
**A note on sources:** spec-audit.md audits the *original* prd.md, not prd-1.md. The current audit is [spec-audit-1.md](spec-audit-1.md). The kind of business is the same in both: a consumer diet, recipe and grocery-ordering app for a broad category of eaters. Where the two PRDs differ, prd-1.md is taken as current and the difference is noted.

A moat needs a **benefit** (it makes us money) and a **barrier** (it stops a competitor copying the benefit). Both tables judge the barrier.

---

## TABLE 1: HOW MUCH IT MATTERS

Ranked by what happens to this business if we never get the power. 1 is the power whose absence would most easily let a competitor take our customers.

| Rank | Power | Why, for this business | Supporting line |
|---|---|---|---|
| **1** | **Switching costs** | Every feature HushPlate promises already exists somewhere in the category, so without a cost to leaving, a user can move to a rival the day it matches us. In consumer diet apps, the thing users fight hardest to keep is their accumulated data. | competitors.md, Mealime: "No export; hand-copy or lose it." Plan to Eat: "List is trapped in the app." Flags table: MyFitnessPal's App Store listing describes "personalized meal plans, integrated grocery delivery." |
| **2** | **Brand** | This is a consumer health app that holds health statistics and routes grocery payments. When features are near-identical, users default to the name they already trust, and the category's biggest complaint is about trust, not software. | competitors.md: MyFitnessPal is "the default first app" with "4.7★ (2.4M)" ratings; "39% of all complaints in Section 2 were about money, not software." |
| **3** | **Process power** | Apps in this category lose users to bad execution: plans that make no sense, exclusions that don't hold, wrong nutrition numbers. A rival that does the same job reliably takes the users we disappoint. | competitors.md: Eat This Much "Nonsensical/repetitive generated plans (39%)"; MacroFactor "Database/import accuracy (42%)"; MealPrepPro "ignores stated exclusions"; "An exclusion that actually holds ... is a small feature with outsized trust value." |
| **4** | **Network effects** | The core product is single-player: one person's goals, recipes, cart and audit. Another user joining doesn't change whether my weekly plan or grocery order works, so lacking network effects wouldn't by itself push users to a rival. | prd-1.md's only cross-user mechanism is "weekly recommendations to all users" from "popular choices for top 10% of users." spec-audit.md, section 4, read the original PRD as "neither." |
| **5** | **Scale economies** | Software here costs little per extra user. The costly inputs (AI agent orders, recipe and nutrition data) are bought per use by everyone, and small, unfunded rivals already survive at low prices. Scale helps a bigger rival give more away free, but it isn't how users get taken. | competitors.md: Plan to Eat, "Independently owned, no investors," "$5.95/mo"; MacroFactor "no outside funding found [UNVERIFIED]"; Samsung Food "large free tier." |
| **6** | **Cornered resource** | **Irrelevant to this business.** The inputs are commodity: stores, ordering platforms, recipes and nutrition data are open to anyone. The one exclusive tie in the category, Albertsons owning Mealime, turned into the reason users left. HushPlate's own spec commits to "agnostic" stores and agents, the opposite of exclusivity. | spec-audit.md, section 5: grocery stores, delivery and recipe content are each marked "Yes," a competitor could buy them. competitors.md: "Being retailer-neutral ... is a position no well-funded competitor can copy, because their owners bought them for the lock-in." prd-1.md: "The grocery stores the app depends upon are agnostic." |

---

## TABLE 2: COULD WE BUILD IT

Ranked by whether we could plausibly start building the barrier in the next twelve months, at our current size, with what prd-1.md already commits us to.

### Available to start now

| Rank | Power | What prd-1.md already commits to | Why it ranks here |
|---|---|---|---|
| **1** | **Switching costs** | Health statistics, pantry, workout plan, daily audit history and recommendations are all kept: "All data about a user is maintained for the user until the user terminates services." "Users cannot delete app data before ending services." Per-user learning: "aggregating the days data from day to day for each user." Export is a PDF User Health Report. | The barrier starts building with each user's first day of use, at any size. A PDF report goes to a doctor; it isn't something a rival app can import, so the history and personal learning stay behind. |
| **2** | **Network effects** | "As more people join, the app will improve by providing updates regarding popular choices for top 10% of users on the app, providing weekly recommendations to all users." | The mechanism is fully specified and can launch in year one. The barrier stays thin at small size: the top 10% of a small user base is a handful of people, and ties are broken alphabetically. It ranks second because nothing stops us from starting it, not because it will be strong. |
| **3** | **Cornered resource** | Nothing exclusive. Stores and agents are "agnostic." The doctor's "contact information will be provided later." The AI agent "will read" CheapFoodMap, with no agreement described. | Size and history don't block it, but the spec does. It commits to agnostic providers and describes no exclusive deal, so nothing in the current plan builds toward exclusivity. Given Table 1, this matters little. |

### NOT AVAILABLE TO US YET

| Rank | Power | Why not | What would have to change |
|---|---|---|---|
| **4** | **Process power** | Needs years of operating history: a refined way of producing plans, carts and exclusions that rivals can't copy even when they can see it. We have no operating history, and the PRD names no source for the inputs it would refine (recipe, nutrition, restaurant and calories-burned data). | The data sources have to be chosen. Then the product needs a long run of real use, with the daily audit's corrections ("the user can change food amounts, or workout details") showing where plans fail, until the working method is measurably better than rivals'. |
| **5** | **Brand** | Needs a reputation we haven't earned. Users would have to pay more for HushPlate than for an identical product, and keep paying after advertising stops. Incumbents have it: MyFitnessPal "4.7★ (2.4M)." We have a landing page. | A track record with real users: years of reliable plans and orders, and a visible record on the trust issues competitors.md names ("A plain price, an easy cancel, no ads mid-log, and export-on-demand"). |
| **6** | **Scale economies** | Needs scale we don't have, and the cost structure resists it. Each order goes through a bought AI agent ("Payment and address data will be taken by the AI agent that this app connects to via an API"), so per-order costs don't fall much as we grow. | A user base large enough to negotiate volume terms with agents, stores or data providers. That needs those providers to be chosen first, and enough users to give us bargaining weight. |

---

## THE GAP

**Brand** ranks 2nd for how much it matters and 5th for whether we could build it.

This is a consumer health app in a category where the features are copyable and the dependencies are for sale. That leaves two things that decide where a user goes: which name they trust enough to try, and what they'd lose by leaving. The second, switching costs, is the one barrier we can build now, but it only protects users we already have and have kept long enough to build up history. It does nothing to win the first download, which is where brand works, and brand is out of reach for years. So for the foreseeable future, getting customers is unprotected. Any user we attract is equally reachable by MyFitnessPal, which already bundles "personalized meal plans, integrated grocery delivery" under a name with 2.4M ratings. The switching cost the spec builds also pulls against the brand we lack. Data that can't be deleted "before ending services" and leaves only as a PDF runs against the trust signals competitors.md found users asking for ("an easy cancel," "export-on-demand"). The one barrier we can build now works against the one we most need and can't yet build.
