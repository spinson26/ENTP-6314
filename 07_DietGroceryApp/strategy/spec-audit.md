# Spec Audit: What prd.md Commits HushPlate To

**Prepared:** October 9, 2026
**Sources:** `prd.md.txt` (its header reads `FILE: prd.md`; it is the only PRD in the project) and [research/competitors.md](../research/competitors.md).
**Method:** This is a description, not a recommendation. Quotes are from prd.md unless marked otherwise. Anything worked out rather than read is marked **[INFERRED]**.

---

## 1. THE USER

**What prd.md says:**

> USER: a dieter (someone who wants to lose weight, including a GLP-1 user)

The core user story extends this to anyone who can supply "vital Inbody Scan statistics" and anyone choosing among "Keto, Mediterranean, Paleo, Low Carb, suppressed appetite GLP-1 user, etc."

**One group or a broad category?** A broad category. The definition is one goal ("wants to lose weight") and nothing else. It sets no age, income, household, health condition, diet or way of buying groceries. The PRD itself names at least these different kinds of buyer inside it:

- **GLP-1 users.** People on a prescription drug whose appetite is suppressed. The PRD gives them their own diet type and their own input ("GLP-1 dosage").
- **People who follow a named diet.** Keto, Mediterranean, Paleo and Low Carb followers, each with different food rules.
- **InBody scan users.** People who have had a body-composition scan and know their "Muscle Mass" and "Visceral Fat." **[INFERRED]** An InBody scan is done on a machine, usually at a gym or clinic, so this is a smaller group than "dieters."
- **People who want groceries delivered.** Feature 4 puts food in a delivery cart, so the user has to be someone willing to buy groceries online.

**[INFERRED]** competitors.md shows the category split into separate customers that different companies serve: "Mass-market calorie counters" (MyFitnessPal), "Serious lifters, macro-literate users" (MacroFactor), "Busy families who want dinner solved" (eMeals), "Gym-goers who batch-cook" (MealPrepPro), "Macro-target dieters who don't want to log" (Eat This Much). Every one of them could count as "a dieter" under the PRD's wording. competitors.md puts GLP-1 users alone at "31M US adults."

---

## 2. WHERE THE WORK HAPPENS

The PRD has no separate "done means" line for each feature. Each feature is one sentence, and features 1 and 2 end in a finish point ("sees a confirmation message"). The table treats each sentence as its own "done means." Note that the heading says "FEATURES (maximum 3)" but **four** features are listed.

### Feature 1: "User submits a health statistic form and sees a confirmation message"

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Shows a form, accepts it, shows a confirmation. | Gets the numbers. The story says the user will "input" height, weight, **BMI, BMR**, GLP-1 dosage, Muscle Mass and Visceral Fat. |
| | **[INFERRED]** Gets BMI and BMR worked out somewhere else (a calculator, a clinician, a scan printout). The PRD lists them as things the user types in, not things the app works out. |
| | **[INFERRED]** Gets an InBody scan on outside equipment and reads the numbers off the printout. |
| | **[INFERRED]** Looks up their GLP-1 dosage from their prescription. |
| | **[INFERRED]** Types in new numbers whenever their weight or dose changes. The PRD describes no import from scales, scanners, health apps or pharmacies. |

Not in this feature's finish point: story step (3), where "the app will then cross-check the health statistics provided and the diet type for the users daily recommended nutritional requirements ... and water intake." No feature lists this cross-check.

### Feature 2: "User submits a diet type choice then sees a confirmation message"

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Shows a list of diet types, records the choice, shows a confirmation. | Decides which diet fits them. The PRD has the user "choose a diet type." It says nothing about the app recommending one. |
| | **[INFERRED]** Works out, on their own or with a clinician, whether a diet is safe alongside a GLP-1 prescription. |

Not in this feature's finish point: the preferred-foods list and the excluded-foods/allergen list (story steps 4 and 5). No feature lists them.

### Feature 3: "User is provided a list of recipes to choose from based on the diet type which those recipes are allocated based on a weekly/monthly calendar"

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Shows recipes filtered by **diet type**. | Picks recipes from the list. The story says recipes are "chosen by the dieter." |
| Puts recipes on a weekly or monthly calendar. | It is unclear who places them on the calendar. The feature says recipes "are allocated," but the story says the app will "allow the dieter ... to then select those recipes across a weekly / monthly calendar." **[INFERRED]** By the story's wording, the user does the placing. |
| | **[INFERRED]** Cooks the meals. Nothing in the PRD covers the kitchen. |
| | **[INFERRED]** Keeps track of what they actually ate. The PRD has no logging or tracking. |

The finish point says recipes are filtered "based on the diet type" only. It does not say they are filtered by the nutritional targets from story step 3, by preferred foods, or by excluded foods/allergens.

### Feature 4: "App will aggregate the recipes weekly providing a grocery list and the AI agent will put that grocery list into a cart, where the user decides to purchase or not."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Combines the week's recipes into one grocery list. | Decides whether to buy. |
| An AI agent puts the list into a cart. | **[INFERRED]** Completes checkout and payment. Where that happens (in HushPlate or in the store's own app or site) is not stated. |
| | **[INFERRED]** Receives the delivery, unpacks it and stores it. |
| | **[INFERRED]** Takes out items they already have at home. The PRD mentions no pantry or inventory. |

The story and this feature disagree. Story step (7) says "an AI agent **will purchase** those foods ... to be delivered ... at certain intervals selected by the user." Feature 4 stops at the cart: "where the user decides to purchase or not." Feature 4 also says "weekly," while the calendar in Feature 3 and the story is "weekly / monthly."

---

## 3. WHAT WE HOLD

**What prd.md says:**

> DATA WE STORE: The user will be providing health statistics, so make sure to protect this data consistent with United States (State and Federal) data privacy laws.

**Named in DATA WE STORE as something we keep:**
- "health statistics"

That is the only category the section names. It does not say which statistics are included.

**[INFERRED] Customer material the rest of the PRD implies would sit inside the product,** although DATA WE STORE does not list it:
- Height, weight, BMI, BMR, GLP-1 dosage (story step 1)
- InBody figures: Muscle Mass, Visceral Fat (story step 2)
- Chosen diet type (story step 3 / Feature 2)
- The calculated daily nutrition and water targets (story step 3)
- Preferred-foods list (story step 4)
- Excluded foods and allergens (story step 5)
- Chosen recipes and the weekly/monthly calendar (story step 6 / Feature 3)
- The weekly grocery list (Feature 4)
- Delivery-interval preferences (story step 7)

**Passed through without keeping:** prd.md names nothing as passed through and not kept. **[INFERRED]** The cart contents go to a grocery store (Feature 4). Payment details and delivery address would be needed to buy, but the PRD does not mention either one or say whether HushPlate would keep them.

---

## 4. DOES IT GET BETTER WITH USE

**prd.md does not say.** It describes no learning, no feedback loop, no ratings and no shared data between users.

What the PRD does describe, for each case:
- **For one user over time:** Inputs (health stats, preferences, exclusions, calendar) are entered and then used to produce recipes and a cart. **[INFERRED]** The user is spared re-entering these each week if they are kept, but nothing in the PRD says the recipe choices, the calendar or the cart improve because of past weeks.
- **For everyone as more people join:** The PRD has no feature where one user's activity affects another user's results. **[INFERRED]** As written, adding users does not change the product for existing users.

As written, the answer the PRD supports is **neither**, and that is a reading of what's missing, not of anything the PRD says.

---

## 5. WHO WE DEPEND ON

prd.md names no outside company. The list below is what its features need in order to work. "Could a competitor buy it?" draws on competitors.md wherever it has evidence.

| Dependency | Where prd.md implies it | Could a competitor buy the same thing? |
|---|---|---|
| **A local grocery store, or several** | Story step 7: "purchase those foods from a local grocery store"; Feature 4: "put that grocery list into a cart" | Yes. competitors.md: eMeals orders "via Walmart, Kroger, Instacart, Shipt, AmazonFresh, Albertsons, Safeway, H-E-B"; Samsung Food has "23 retailer integrations"; Eat This Much has "US/Canada delivery integration"; MyFitnessPal Premium Plus advertises "integrated grocery delivery." |
| **A way into that store's cart** (an integration, partner program or ordering platform) **[INFERRED]** | Feature 4: the AI agent puts items "into a cart" | Yes, going by the same competitors.md entries. **[INFERRED]** Instacart and Shipt appear there as ordering platforms that competitors already use. |
| **Grocery delivery** | Story step 7: "to be delivered to the dieter ... at certain intervals" | Yes. The same retailer and delivery partners listed above. |
| **An AI agent / AI model** | Problem statement and Feature 4: "the AI agent" | Not stated which one. **[INFERRED]** If it is a commercial model, other companies can buy the same one. competitors.md reports a MealPrepPro reviewer who won't pay for AI plans "when ChatGPT or Gemini do it free." |
| **Recipe content** | Feature 3: "a list of recipes" | Not stated where recipes come from (written in-house, licensed or AI-generated). competitors.md: Samsung Food has "240k+ recipes"; eMeals has "15 diet-specific weekly plans." **[INFERRED]** Licensed recipe libraries are available to anyone who pays. |
| **Nutrition reference data** (daily requirements; the nutrient values of recipes and ingredients) **[INFERRED]** | Story step 3: "daily recommended nutritional requirements for food intake (e.g., Calories, Fat, Protein, Carbs, Vitamins, Minerals, etc.) and water intake" | Not stated which source. **[INFERRED]** US public reference values and food-composition databases are open to everyone. competitors.md shows MacroFactor selling a "Verified food database" as a product feature, and complaints about data accuracy at MyFitnessPal and MacroFactor. |
| **InBody** (scan hardware, operated by gyms and clinics) **[INFERRED]** | Story step 2: "vital Inbody Scan statistics" | The PRD has the user type the numbers in, so there's nothing to buy. **[INFERRED]** Any competitor could add the same input fields. |
| **The user's prescriber/pharmacy** (source of GLP-1 dosage) **[INFERRED]** | Story step 1: "GLP-1 dosage" | Same as InBody: entered by hand, so there's no deal to buy. |
| **App platform and distribution** (e.g., app stores) **[INFERRED]** | "a diet, nutrition, recipe, and grocery ordering app" | Yes. All nine apps in competitors.md are on the App Store. |
| **Payment processing** **[INFERRED]** | Feature 4: "the user decides to purchase" | Not stated whether HushPlate or the store handles payment. **[INFERRED]** Payment processors are sold to anyone. |

---

## 6. WHAT WE RULED OUT

**What prd.md says:**

> OUT OF SCOPE (the v2 parking lot):
> [Everything else you are tempted by. Write it down so you can stop thinking about it.]

The section still holds the template's placeholder text. **Nothing has been ruled out.** There are no items, so there is nothing the product is barred from doing because of this list.

**[INFERRED]** Some things the core user story promises are not in any of the four features. The PRD neither builds them nor parks them:
- The nutrition and water cross-check (story step 3)
- Preferred-foods and excluded-foods/allergen lists (story steps 4 and 5)
- The AI agent completing the purchase (story step 7). Feature 4 stops at the cart.
- Delivery "at certain intervals selected by the user" (story step 7)
- Monthly grocery aggregation. Feature 4 says "weekly."

---

## GAPS

These are the places where prd.md does not answer the six questions above. None of them is filled in here.

**The user (1)**
- Who the user is beyond "wants to lose weight": age, household, income, location, health condition.
- Whether GLP-1 users are the main user or one subgroup. The wording is "including."
- Whether the user has to have an InBody scan, or whether those fields are optional.

**Where the work happens (2)**
- A "done means" line for features 3 and 4.
- Whether the app or the user places recipes on the calendar ("are allocated" vs. "select those recipes across a ... calendar").
- Whether the agent buys (story step 7) or the user buys (Feature 4).
- Where checkout and payment happen.
- Whether BMI and BMR are typed in by the user or worked out by the app.
- Which feature delivers the nutrition/water cross-check, preferred foods and exclusions.
- Whether recipes are filtered by anything other than diet type.
- How the product handles items the user already has.
- Why four features are listed under "maximum 3."

**What we hold (3)**
- Which "health statistics" are stored.
- Whether preferences, exclusions, calendar, grocery lists and order history are stored.
- What is passed through without being kept.
- Whether payment details or delivery addresses are handled or stored.
- How long data is kept, and whether users can export or delete it.
- Which "State and Federal" laws apply. None are named.

**Does it get better with use (4)**
- Any mechanism by which the product improves for one user or for all users.

**Who we depend on (5)**
- Which grocery store(s) or delivery service(s).
- Which AI agent or model.
- Where recipes come from.
- Which nutrition reference data and food database.
- Which platforms the app ships on.
- Who processes payment.
- Which "local" stores count, and in which geographic area.

**What we ruled out (6)**
- The entire out-of-scope list. It is still template text.
