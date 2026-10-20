# Moat Ranking: HushPlate

**Prepared:** October 20, 2026
**Sources:** [strategy/spec-audit-UPDATED.md](spec-audit-UPDATED.md), `prd-2.md` (18:13 version) and [research/competitors.md](../research/competitors.md).
**What changed since the October 16 ranking:** prd-2.md adds family and friend groups, a Daily Health Score that users share and compare, and a permanent "Inventory" out-of-scope item. The rank order is the same. The reasons for switching costs and network effects have changed, and THE GAP now covers the new score visibility rules.

A moat needs a **benefit** (it makes us money) and a **barrier** (it stops a competitor copying the benefit). Both tables judge the barrier.

---

## TABLE 1: HOW MUCH IT MATTERS

Ranked by what happens to this business if we never get the power. 1 is the power whose absence would most easily let a competitor take our customers.

| Rank | Power | Why, for this business | Supporting line |
|---|---|---|---|
| **1** | **Switching costs** | Every feature in prd-2.md already exists somewhere in the category, so without a cost to leaving, a user can move to a rival the day it matches us. In consumer diet apps, the thing users fight hardest to keep is their accumulated data. | competitors.md, Mealime: "No export; hand-copy or lose it." Plan to Eat: "List is trapped in the app." Flags table: MyFitnessPal's App Store listing describes "personalized meal plans, integrated grocery delivery." |
| **2** | **Brand** | This is a consumer health app that holds health statistics, routes grocery payments, and now publishes some users' scores to everyone. When features are near-identical, users default to the name they already trust, and the category's biggest complaint is about trust, not software. | competitors.md: MyFitnessPal is "the default first app" with "4.7★ (2.4M)" ratings; "39% of all complaints in Section 2 were about money, not software." |
| **3** | **Process power** | Apps in this category lose users to bad execution: plans that make no sense, exclusions that don't hold, wrong nutrition numbers. prd-2.md adds more that has to be right every day: meal-time alerts, a 50/30/20 score, and quarter-hour bedtime bands. A rival that does the same job more reliably takes the users we disappoint. | competitors.md: Eat This Much "Nonsensical/repetitive generated plans (39%)"; MacroFactor "Database/import accuracy (42%)"; MealPrepPro "ignores stated exclusions." |
| **4** | **Network effects** | The core product is still single-player: one person's goals, recipes, cart, meal times and audit. Groups and top-10% comparisons add a social layer on top, so losing them would weaken the product. A rival without them would still deliver the plan and the cart, though, so their absence isn't how users get taken. | spec-audit-UPDATED.md, section 4: groups make the product "more useful to each user as their own contacts join." prd-2.md: groups are "for accountability, where the user can share their Daily Health Score." |
| **5** | **Scale economies** | Software here costs little per extra user. The costly inputs (AI agent orders, recipe and nutrition data) are bought per use by everyone, and prd-2.md rules out holding stock, the one place volume might lower costs. Small, unfunded rivals already survive at low prices. | prd-2.md: "Permanently out of scope items: Inventory (we do not keep any inventory)." competitors.md: Plan to Eat, "Independently owned, no investors," "$5.95/mo." |
| **6** | **Cornered resource** | **Irrelevant to this business.** The inputs are commodity: stores, ordering platforms, recipes and nutrition data are open to anyone. The one exclusive tie in the category, Albertsons owning Mealime, turned into the reason users left. HushPlate's spec commits to "agnostic" stores and agents, the opposite of exclusivity. | spec-audit-UPDATED.md, section 5: grocery stores and delivery are marked "Yes," a competitor could buy them, and "prd-2.md adds no new outside provider." competitors.md: "Being retailer-neutral ... is a position no well-funded competitor can copy, because their owners bought them for the lock-in." |

---

## TABLE 2: COULD WE BUILD IT

Ranked by whether we could plausibly start building the barrier in the next twelve months, at our current size, with what prd-2.md already commits us to.

### Available to start now

| Rank | Power | What prd-2.md already commits to | Why it ranks here |
|---|---|---|---|
| **1** | **Switching costs** | Health statistics, pantry, workout plan, wake and bed times, daily audit history, Daily Health Score history and recommendations are all kept: "All data about a user is maintained for the user until the user terminates services." "Users cannot delete app data before ending services." Export is a PDF User Health Report. Groups: "A user can be in more than 1 family and/or friend group." | The barrier starts building on each user's first day, at any size. Leaving now costs two things. One is the user's history and score trend, which leave only as a PDF meant for a doctor, not as something a rival app can import. The other is their groups, which only exist inside HushPlate. |
| **2** | **Network effects** | Two mechanisms. "weekly recommendations to all users" built from "popular choices for top 10% of users," and family and friend groups that add people by avatar name or "by sending a friend request." | The group mechanism doesn't need a large user base. It works as soon as one family or circle of friends joins, so it can start in year one. The top-10% mechanism stays thin at small size, because the top 10% of a small user base is a handful of people. It ranks second because the group side can genuinely start now, not because it will be strong. |
| **3** | **Cornered resource** | Nothing exclusive. Stores and agents are "agnostic." The doctor's "contact information will be provided later." The AI agent "will read" CheapFoodMap, with no agreement described. | Size and history don't block it, but the spec does. It commits to agnostic providers and describes no exclusive deal, so nothing in the current plan builds toward exclusivity. Given Table 1, this matters little. |

### NOT AVAILABLE TO US YET

| Rank | Power | Why not | What would have to change |
|---|---|---|---|
| **4** | **Process power** | Needs years of operating history: a refined way of producing plans, carts, meal timings and scores that rivals can't copy even when they can see it. We have no operating history, and the PRD names no source for the inputs it would refine (recipe, nutrition, restaurant and calories-burned data). | The data sources have to be chosen. Then the product needs a long run of real use, with the daily audit's corrections ("the user can change food amounts, or workout details") showing where plans fail, until the working method is measurably better than rivals'. |
| **5** | **Brand** | Needs a reputation we haven't earned. Users would have to pay more for HushPlate than for an identical product, and keep paying after advertising stops. Incumbents have it: MyFitnessPal "4.7★ (2.4M)." We have a landing page. | A track record with real users: years of reliable plans and orders, and a visible record on the trust issues competitors.md names ("A plain price, an easy cancel, no ads mid-log, and export-on-demand"). |
| **6** | **Scale economies** | Needs scale we don't have, and the cost structure resists it. Each order goes through a bought AI agent ("Payment and address data will be taken by the AI agent that this app connects to via an API"), and the spec rules out inventory, so per-order costs don't fall much as we grow. | A user base large enough to negotiate volume terms with agents, stores or data providers. That needs those providers to be chosen first, and enough users to give us bargaining weight. |

---

## THE GAP

**Brand** ranks 2nd for how much it matters and 5th for whether we could build it.

This is a consumer health app in a category where the features are copyable and the dependencies are for sale. That leaves two things that decide where a user goes: which name they trust enough to try, and what they'd lose by leaving. prd-2.md makes the second stronger. Leaving now means leaving your score history and your family and friend groups, not just your data. But switching costs only protect users who have already joined. Groups can pull in a member's family and friends, but only after someone in that circle has picked HushPlate over a name they already know, and that first choice is where brand works. Brand is years away. Meanwhile any user we attract is equally reachable by MyFitnessPal, which already bundles "personalized meal plans, integrated grocery delivery" under a name with 2.4M ratings. prd-2.md also adds new points of friction with the trust that brand is built on. Top-10% users "cannot opt out of having their choices shown, or their Daily Health Score," and data still can't be deleted "before ending services" and leaves only as a PDF. Those run against the trust signals competitors.md found users asking for ("an easy cancel," "export-on-demand"). So the barriers we can build now work against the one we most need and can't yet build.
