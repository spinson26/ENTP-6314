# Spec Audit: What prd-1.md Commits HushPlate To

**Prepared:** October 16, 2026 (written against the 13:10 version of prd-1.md)
**Sources:** `prd-1.md` (its header still reads `FILE: prd.md`) and [research/competitors.md](../research/competitors.md).
**Method:** This is a description, not a recommendation. Quotes are from prd-1.md unless marked otherwise. Anything worked out rather than read is marked **[INFERRED]**. The core user story's numbered items are cited as "story (n)," using this version's numbering of (1) to (22).

---

## 1. THE USER

**What prd-1.md says:**

> USER: A longevity eater above the age of 18 located in the United States (including dieters, GLP-1 users, and people who want to eat healthy food daily to either lose weight, maintain weight, gain muscle, and/or prolong their life through healthy eating choices), who wants an app that will curate healthy eating choices via recipes which they choose, and then an AI agent fills the users grocery cart with food for those recipes, which the user will approve the final purchase of the food from the grocery cart, or the longevity eater can choose a healthy food choice from a restaurant on the days the user does not want to cook food, and the app will aggregate the information for the longevity eater.

**One group or a broad category?** A broad category. The USER line now sets two limits, "above the age of 18" and "located in the United States." Inside those limits it covers four different goals ("lose weight, maintain weight, gain muscle, and/or prolong their life") and names several groups by their own labels. Going only by the PRD, it includes:

- **Dieters:** people trying to lose weight.
- **GLP-1 users:** people on a prescription drug, with their own diet choice ("GLP-1 suppressed appetite") and their own input ("GLP-1 dosage").
- **Weight maintainers:** people who "want to eat healthy food daily to ... maintain weight."
- **Muscle gainers:** people who want to "gain muscle." Story (14), (15) and (16) add workout education, tracking and a workout plan, including "free weights."
- **Longevity seekers:** people who want to "prolong their life," with "Longevity" as a diet choice, story (19) "Access to a longevity doctor," and story (22) a "User Health Report" for that doctor.
- **Followers of 16 named diet choices** in story (2), from "Longevity," "Mediterranean" and "DASH" to "Carnivore," "Daniel Fast" and "Low-FODMAP."
- **Restaurant and fast-food eaters:** the USER line now includes them: "the user can choose a healthy food choice from a restaurant on the days the user does not want to cook food." Also story (10), (11), (13) and Feature 4 ("eat out at restaurants (or fast food)").
- **Budget eaters:** story (13) recommends "meals under $10," and story (12) recommends "grocery sales, discounts and promos."
- **People who shop in person:** Feature 3 option (1) lets the user "purchase the groceries themselves at the grocery store."

The USER line describes a cart filled "with food for those recipes, which the user will approve the final purchase of," with restaurant meals on days the user "does not want to cook." Feature 3 also serves users who don't order through the app (option 1), so online grocery ordering isn't required.

**[INFERRED]** competitors.md shows these groups being served as separate customers by separate companies: "Mass-market calorie counters" (MyFitnessPal), "Serious lifters, macro-literate users" (MacroFactor), "Busy families who want dinner solved" (eMeals), "Spanish-speaking + US budget-conscious trackers" (Fitia), "Gym-goers who batch-cook" (MealPrepPro), "Macro-target dieters who don't want to log" (Eat This Much). Each would fit inside "a longevity and lifestyle eater." competitors.md puts GLP-1 users alone at "31M US adults."

---

## 2. WHERE THE WORK HAPPENS

The PRD has no separate "done means" line for each feature. Each feature is one sentence, and below, that sentence is treated as its "done means." All six features end at a confirmation the user sees. Feature 4 points back to story items (10) through (20) for its content. Several outside providers these features rely on are now listed in OUT OF SCOPE; section 6 covers what that means for each feature.

### Feature 1: "User submits a health statistic form, diet goals, diet choice selection, preferred foods, excluded foods, workout plan, and foods in their pantry and sees a confirmation message."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Shows a form and accepts health statistics, a diet goal, a diet choice, a preferred-foods list, an excluded-foods list, a workout plan and the foods in the user's pantry. Then shows a confirmation. | Gets the numbers. The story says the user will "plug in their health statistical information into the app (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, or Inbody Scan Statistical information)." |
| Works out BMI and BMR if the user doesn't enter them: "they can be typed into the app by the user, or the app will workout the BMI and BMR for the user." | Enters muscle mass and visceral fat if they have them. "Inbody Scan statistical information to use the app is not required. The user can just input their statistical information into the app themselves." **[INFERRED]** Those figures still come from a measurement taken elsewhere. |
| | **[INFERRED]** Looks up their GLP-1 dosage from their prescription. |
| | Picks a diet goal from story (1) and a diet choice from the 16 in story (2). Feature 5 adds recommendations the user "can use ... to make choices in #1 to #18." |
| | Writes their own preferred-foods and excluded-foods lists, story (4) and (5), including "foods ... the user is allergic to." |
| | Enters what's in their pantry. Story (6): "a user can input what foods that it has in their pantry, so that recipes and a grocery cart can be aggregated, and used to pick recipes and/or add or take food out of the grocery cart." **[INFERRED]** The user keeps this up to date by hand; the PRD describes no other way pantry contents change. |
| | Enters a workout plan. Story (16): "input their daily workouts that they plan to do each day, when inputting their health statistics." The user sets "the number of time they plan to spend on that activity as part of the initial survey," and the app "will ask the length of time for the cardiovascular work, and the free weight work." |
| | Updates the numbers over time. DATA WE STORE says statistics "may be updated periodically by the user in connection with their longevity doctor." **[INFERRED]** The PRD describes no import from scales, scanners, health apps or pharmacies, so the user types updates in by hand. |

### Feature 2: "User receives daily nutritional requirements, and then several options for recipes based on their nutritional requirements, diet choices, and preferred and excluded foods, and foods in their pantry are provided allocated on a daily/weekly/monthly calendar, which the user can choose from and then sees a confirmation message."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Works out daily nutritional requirements. Story (3) lists them as "calories, fat, protein, carbs, vitamins, minerals, water consumption." | Chooses among the recipe options ("which the user can choose from"). |
| Offers several recipe options based on "nutritional requirements, diet choices, and preferred and excluded foods, and foods in their pantry." | **[INFERRED]** Cooks the meals. Story (20) confirms afterward that the user "cooked and ate their food," but the cooking itself is the user's. |
| Places the options on a "daily/weekly/monthly calendar." | **[INFERRED]** Drinks the recommended water. The PRD outputs a water figure, but the story (20) audit doesn't mention water. |
| Shows a confirmation message once the user has chosen. | |

### Feature 3: "The app then curates those recipe choices based on a daily/weekly/monthly calendar, and then the AI agent fills the grocery cart to order, where the user can: (1) purchase the groceries themselves at the grocery store and is provided a grocery list and recipe list on the app, or (2) have an agnostic AI agent order the groceries from the grocery store for the user to be delivered to their home and provide the user the grocery list and recipe list on the app, or (3) have an agnostic AI agent order the groceries from the grocery store for the user to have curb side pickup and provide the user the grocery list and recipe list on the app, and the user sees a confirmation message to confirm their final choice."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| The app curates the chosen recipes, and "the AI agent fills the grocery cart." Story (6) says pantry contents are used to "add or take food out of the grocery cart." | Picks one of the three options. |
| In all three options, provides "a grocery list and recipe list on the app." | **Option (1):** "purchase the groceries themselves at the grocery store." The user goes to the store, finds the items, pays and carries them home. |
| **Options (2) and (3):** "an agnostic AI agent order[s] the groceries," either "to be delivered to their home" or for "curb side pickup." | **Option (2):** **[INFERRED]** Receives the delivery. **Option (3):** **[INFERRED]** Drives to the store to collect the order. |
| Shows "a confirmation message to confirm their final choice." | Pays for options (2) and (3). "Payment and address data will be taken by the AI agent that this app connects to via an API." Story (8) says the user approves first ("the user decides whether to place the order"). |

### Feature 4: "App has other features listed in the core user story (#10 to #20) so the longevity eater can have a functional app that allows them to eat out at restaurants (or fast food), or track workouts, or receive motivation, or access a longevity doctor, or have end of day daily confirmation audit, and the user sees confirmation message to confirm their final choice for each of these features."

| Story item | The product does | The user still does, by hand or elsewhere |
|---|---|---|
| (10) Restaurant eating | "reads a menu (online or from a photo) and picks exactly what to eat to meet the user's nutrition targets" | **[INFERRED]** Photographs the menu or finds it online; orders and pays at the restaurant. |
| (11) Healthier restaurant choices | "reads a menu and gives the user 3 healthier options that meet the user's nutrition targets" | **[INFERRED]** Same as (10), plus picks one of the three. |
| (12) Grocery consumption learning | "over time the app learns what the user eats and recommends recipes, foods and grocery sales, discounts and promos" | Confirms or corrects what they ate through the story (20) audit. |
| (13) Restaurant consumption learning | "over time the app learns what the user eats and recommends restaurants, deals and meals under $10 (via CheapFoodMap app)." Elsewhere: "the AI agent will read that CheapFoodMap recommendation of food under $10 and make recommendations to the user." | Confirms or corrects restaurant meals through the story (20) audit. |
| (14) Workout education | "app educates the user on how to work out" | Does the workouts. |
| (15) Workout tracking and motivation | "app tracks a users daily workouts and motivation via user confirming what they current plan to do each day, and then at end of day, there is an End of Day Daily Confirmation - #20 below." The app has "inputs for the user to select whether they did some form of cardiovascular work (e.g., walked, ran, sprinted, biked, ... yoga, pilates, danced, tai chi), or worked out using free weights. Each of these workouts track the period of time and calories burned for that period of time based on the users health statistics, and what the user inputted as part of their daily workout plan." | Confirms each day what they plan to do, does the workout, selects the workout type, then confirms at day's end through the story (20) audit. **[INFERRED]** The PRD names no watch or fitness-app data. |
| (16) Workout plan | "app will allow the user to input their daily workouts that they plan to do each day, when inputting their health statistics into the app" | Enters the plan and planned times in the initial survey (see Feature 1). |
| (17) Gamification | "rewards that keep the user using the app daily, weekly, monthly" | Nothing stated. |
| (18) Daily motivation | "positive quotes to start or support the user's day" | Nothing stated. |
| (19) Access to a longevity doctor | "connect a user to a longevity doctor for consultation by providing contact information." The doctor's "contact information will be listed on the app (the contact information will be provided later)." "The doctor can be booked Monday through Friday, 8:00 to 5:00 PM, Central Time, throughout the year." | **[INFERRED]** Sets up the appointment themselves using the listed contact information, within those hours. Attends it, and "will pay that doctor separately for services." "Any data provided to the doctor comes directly from the user": the user exports it (Feature 6) or shows "the doctor their app." |
| (20) End of Day Daily Confirmation Audit | "the app will confirm via a yes/no answer that the user cooked and ate their food that day, or ate at a restaurant that day, and confirm the user worked out for the day ... the user can change food amounts, or workout details; the user can change which foods or restaurant meals they had, not just amounts." | Answers yes/no every day. When the day differed, enters by hand which foods or restaurant meals they had, the amounts, and workout details. |

### Feature 5: "App provides recommendations to all users based on their history of using the app (as well as the history of the top 10% of users using the app that confirm their grocery orders and workouts during the End of Day Daily Confirmation Audit for the attributes listed above in #1 to #18), which the user can see a confirmation message the next morning via the app that confirms who the Top 10% of users avatar names are and their choices, and the app provides recommendations that are delivered to both daily per-user recommendation, the weekly all-user ones, and the user can use the recommendation to make choices in #1 to #18 in the CORE STORY."

This feature repeats story (21). **[INFERRED]** "#1 to #18" refers to the core user story items, which in this version run from diet goals (1) to daily motivation (18), including the pantry (6) and workout plan (16).

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Makes recommendations for story items (1)–(18) based on the user's own "history of using the app." | Sees "a confirmation message the next morning via the app that confirms who the Top 10% of users avatar names are and their choices." |
| Adds the history of "the top 10% of users ... that confirm their grocery orders and workouts during the End of Day Daily Confirmation Audit." | **[INFERRED]** Keeps up the daily audit (story 20), which is where the history comes from. |
| Delivers "both daily per-user recommendation, the weekly all-user ones." | Decides whether to act on a recommendation: "the user can use the recommendation to make choices in #1 to #18 in the CORE STORY." |

The morning message shows top-10% "choices." DATA WE STORE says those choices "are visible, except their excluded foods and allergies, and their pantry use."

### Feature 6: "App provides the user the ability to export their data via User Health Report, where the user can export their data in written report on their activity using the app as a PDF, which the user then can provide to their doctor, and the user sees a confirmation message to confirm they want to create the report and print it to their local printer or emailing."

This feature matches story (22): the report "will contain all the health metrics of the patient, specifically, the health statistical information inputted into the app by the user (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, or Inbody Scan Statistical information) and items #1 to #7, and #10 to #11, #14 to #16, and #20."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Builds a written PDF "report on their activity using the app." | Asks for the report and confirms "they want to create the report and print it." |
| Includes the health statistics plus diet goal (1), diet choice (2), nutritional requirements (3), preferred foods (4), excluded foods (5), pantry (6), recipes (7), restaurant choices (10, 11), workout education, tracking and plan (14, 15, 16) and the daily audit (20). | Sends it by printing "to their local printer or emailing." **[INFERRED]** Printing needs the user's own printer. |
| | Gives the report to the doctor ("which the user then can provide to their doctor"). |

Story (22) calls the contents "all the health metrics of the patient," while Feature 6 calls it a report "on their activity using the app."

---

## 3. WHAT WE HOLD

**What prd-1.md says:**

> DATA WE STORE: The user will be providing health statistics about themselves listed in the CORE STORY. Those statistics must be kept on the app and may be updated periodically by the user in connection with their longevity doctor. Combine data across users regarding popular choices for CORE STORY items #1 to #18 but do so in a deidentified way where only an avatar name is used. Avatar names for the Top 10% of users can be seen by other users, and their choices are visible, except their excluded foods and allergies, and their pantry use. Top 10% of Users cannot opt out of having their choices shown. Users can see other avatar names. Other users should not be able to link back avatar names to any user. Make sure to protect the data and avatar names consistent with United States (State and Federal) data privacy laws. We do not store payment and address data. We do retain data for the user to export as a User Health Report to provide to their doctor. All data about a user is maintained for the user until the user terminates services with the app. The user can delete their data from the app upon termination. Users cannot delete app data before ending services. Payment and address data will be taken by the AI agent that this app connects to via an API. Please maintain all data consistent with United States (State and Federal) data privacy laws.

Elsewhere in the PRD:

> As for the User Health Report, material outside the User Health Report is kept by the app (orders, menu photos, rewards, recommendations).

> As for Avatar Names, the user is provided a random avatar name when using the app. The user has the ability to change their avatar name but the user cannot make their avatar name there actual name, or any name that would identify them as a user while using the app. The app will prevent a user from using an avatar name that matches their first or last name, or truncated words of their first or last name, or other identifying names that connect back to the users first name or last name with 2 letters in sequential order matching the first name, the last name, or the first and last name.

> United States state and federal data privacy laws related to the collection of consumer and health information collected by a third-party app apply to this app. All 50 state laws, and all federal laws related to the collection of data for this type of app apply.

**Kept inside the product:**

- **Each user's health statistics** "listed in the CORE STORY" ("must be kept on the app"): height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, and "Inbody Scan Statistical information."
- **Data for the User Health Report:** "We do retain data for the user to export as a User Health Report." Per story (22), that's the health statistics plus diet goal and choice, nutritional requirements, preferred and excluded foods, pantry, recipes, restaurant choices, workout education, tracking and plan (type, planned time, "period of time and calories burned") and the daily audit.
- **Material outside the report:** "orders, menu photos, rewards, recommendations."
- **Avatar names:** a "random avatar name" the user can change, but not to "their actual name, or any name that would identify them." The app blocks names matching "their first or last name, or truncated words of their first or last name, or other identifying names that connect back to the users first name or last name with 2 letters in sequential order matching the first name, the last name, or the first and last name." **[INFERRED]** To run that check, the app holds the user's first and last name. Read literally, any avatar name sharing any two consecutive letters with the user's first or last name is blocked.
- **Combined data across users:** "data across users regarding popular choices for CORE STORY items #1 to #18," combined "in a deidentified way where only an avatar name is used." A popular choice is "what the top 10% of users average choices are using the app based on their End of Day Daily Confirmation Audit." Top-10% avatar names "can be seen by other users, and their choices are visible, except their excluded foods and allergies, and their pantry use," and "Top 10% of Users cannot opt out of having their choices shown." Also: "Users can see other avatar names" and "Other users should not be able to link back avatar names to any user."
- **How long:** "All data about a user is maintained for the user until the user terminates services with the app. The user can delete their data from the app upon termination. Users cannot delete app data before ending services."
- **[INFERRED]** Also kept, though not named in the passages above: the grocery list and recipe list "on the app" (Feature 3).

**Passed through without keeping:**
- "We do not store payment and address data." "Payment and address data will be taken by the AI agent that this app connects to via an API."
- Nothing goes from the app to the doctor: "the app only gives contact information of the doctor and not any data," and "The doctor will not have access to any information on the app." The user carries their data to the doctor themselves, as an exported report or by "showing the doctor their app."
- **[INFERRED]** Grocery orders go out to stores through "agnostic AI agents," but the app keeps its own record ("orders" are kept). Menu photos are sent to be read, and the app keeps them too.

**Laws:** "United States state and federal data privacy laws related to the collection of consumer and health information collected by a third-party app apply to this app. All 50 state laws, and all federal laws related to the collection of data for this type of app apply." The PRD names no individual law.

---

## 4. DOES IT GET BETTER WITH USE

**What prd-1.md says:**

> The app improves over time, and for the user over time. The app improves over time by aggregating the days data from day to day for each user, providing daily recommendations. As more people join, the app will improve by providing updates regarding popular choices for top 10% of users on the app, providing weekly recommendations to all users. A popular choice is what the top 10% of users average choices are using the app based on their End of Day Daily Confirmation Audit. For average choices of the Top 10% of users, that are not numbers, the average would be the amount of times that option was chosen by the Top 10% of users. Top 10% users are ranked by how often they confirm results for all items in the End of Day Daily Confirmation Audit for the entire week by answering “yes”. Users who skip the End of Day Daily Confirmation Audit one (or more times) throughout the week do not count for the Top 10% users for the week. If Top 10% users are tied, then the users avatar name will break the tie by ranking in alphabetical order. If fewer than 10% of users confirm during the week, then continue to rank the remaining users based on how often they confirm results for all items in the End of Day Daily Confirmation Audit for the entire week by answering “yes”. If fewer than 10% of users skip the End of Day Daily Confirmation Audit one (or more times) throughout the week do not count for the fewer than Top 10% users for the week. If the fewer than Top 10% users are tied, then the users avatar name will break the tie by ranking in alphabetical order. If a user answers “no” and enter changes to the End of Day Daily Confirmation Audit, they can still be considered a Top 10% user, or fewer than Top 10% user, as long as they complete the End of Day Daily Confirmation Audit everyday for the week. If a user answers “no” and enters changes to the End of Day Daily Confirmation Audit, they are scored in a similar manner as the Top 10% of users, or the fewer than Top 10% user, and a corrected day counts less than a “yes” day by 25% less.

The PRD claims **both**, each with its own mechanism and timing.

- **For one user over time:** "aggregating the days data from day to day for each user, providing daily recommendations," and "As for daily learning, it uses the daily confirmations." Feature 5 bases recommendations on "their history of using the app." Story (12) and (13) say "over time the app learns what the user eats." Story (20) supplies the input: a "yes/no answer" each day plus changed foods, restaurant meals, amounts and workout details. Story (15) and (16) add the daily workout plan, with workout type, time and calories burned.
- **For everyone as more people join:** "providing updates regarding popular choices for top 10% of users on the app, providing weekly recommendations to all users." A popular choice is what the top 10% "average choices are ... based on their End of Day Daily Confirmation Audit," and for choices that aren't numbers it's "the amount of times that option was chosen by the Top 10% of users."
  - **Ranking:** by "yes" answers on all audit items for the week. Users who skip a day "do not count." Ties are broken alphabetically by avatar name. If fewer than 10% qualify, the remaining users are ranked the same way.
  - **Corrected days:** a day where the user answers "no" and enters changes still qualifies, but "counts less than a “yes” day by 25% less." **[INFERRED]** That makes a corrected day worth 0.75 of a "yes" day.
  - **[INFERRED]** Users who answered "yes" to everything every day tie, and the alphabet orders them. Users with corrected days rank below them. Avatar names start random and users can change them, so a user's alphabetical position can change when they rename.

---

## 5. WHO WE DEPEND ON

The PRD describes grocery stores and AI agents as "agnostic." It names one outside company, CheapFoodMap, "a third-party app." The list below is what the PRD's features need in order to work. "Could a competitor buy it?" draws on competitors.md wherever it has evidence. Most rows are now covered by an OUT OF SCOPE item: AI agents and grocery stores; the AI model; recipe, nutrition, restaurant, calories-burned and promotion data; the CheapFoodMap agreement; the doctor; workout content and quotes; and platforms (see section 6).

| Dependency | Where prd-1.md implies it | Could a competitor buy the same thing? |
|---|---|---|
| **Grocery stores, several of them** | "The grocery stores the app depends upon are agnostic"; Feature 3 "order the groceries from the grocery store" | Yes. competitors.md: eMeals orders via "Walmart, Kroger, Instacart, Shipt, AmazonFresh, Albertsons, Safeway, H-E-B"; Samsung Food has "23 retailer integrations"; Eat This Much has "US/Canada delivery integration"; MyFitnessPal Premium Plus advertises "integrated grocery delivery." |
| **Third-party AI agents, connected by API** | "agnostic AI agents who have access to a multitude of grocery stores"; "The AI agent will: (1) puts together a grocery cart, (2) will take payments, and (3) read CheapFoodMap to make recommendations to the user"; "Payment and address data will be taken by the AI agent that this app connects to via an API" | Which agents is not stated. **[INFERRED]** Agents run by other companies are available to anyone who pays for them. |
| **Curbside pickup and home delivery** | Story (9); Feature 3 options (2) and (3) | Yes. The same retailer and delivery partners listed above. |
| **Recipe curation** (possibly an AI model) | USER line "curated for them by the app via recipes which they choose"; Feature 3 "The app then curates those recipe choices" | Done by the app. The PRD doesn't say whether the app uses an AI model for it, or which one. **[INFERRED]** If it is a commercial model, others can buy it. competitors.md reports a MealPrepPro reviewer who won't pay for AI plans "when ChatGPT or Gemini do it free." |
| **Image and menu reading** (an AI that reads a photo or web page) **[INFERRED]** | Story (10), (11): "reads a menu (online or from a photo)" | Which one is not stated. competitors.md shows competitors already selling photo-reading AI: MyFitnessPal "AI photo logging," Fitia "Photo/voice/text calorie logging." |
| **Restaurant menus and their nutrition values** **[INFERRED]** | Story (10), (11), (13) | Source not stated. competitors.md has no evidence on this. |
| **CheapFoodMap** (food under $10) | Story (13) "(via CheapFoodMap app)"; "the AI agent will read that CheapFoodMap recommendation of food under $10" | competitors.md doesn't mention it. The PRD doesn't say whether there's an agreement or data feed, or whether the agent reads the app's public output. **[INFERRED]** If the agent reads CheapFoodMap's public output, any competitor's agent could read it too. |
| **Grocery sales, discount and promo data** **[INFERRED]** | Story (12): "recommends ... grocery sales, discounts and promos" | Source not stated. competitors.md has no evidence on this. |
| **Recipe content** | Feature 2: "several options for recipes" | Source not stated. competitors.md: Samsung Food has "240k+ recipes"; eMeals has "15 diet-specific weekly plans." **[INFERRED]** Licensed recipe libraries are sold to anyone. |
| **Nutrition reference data and a food database** **[INFERRED]** | Story (3): "Daily nutritional requirements output (calories, fat, protein, carbs, vitamins, minerals, water consumption)" | Source not stated. **[INFERRED]** US public reference values are open to everyone. competitors.md shows MacroFactor selling a "Verified food database" as a feature, and accuracy complaints at MyFitnessPal and MacroFactor. |
| **Calories-burned reference data** **[INFERRED]** | Workouts "track the period of time and calories burned for that period of time based on the users health statistics" | Source not stated. **[INFERRED]** Published exercise-energy tables are open to everyone. |
| **A longevity doctor** | Story (19) "by providing contact information"; "contact information will be listed on the app (the contact information will be provided later)"; bookable "Monday through Friday, 8:00 to 5:00 PM, Central Time" | Which doctor is not stated. competitors.md has no evidence on this; none of the nine apps lists doctor access. **[INFERRED]** Doctors are available to other companies too. |
| **Workout content** | Story (14): "educates the user on how to work out" | Source not stated. competitors.md has no evidence on this. |
| **Motivational quotes** **[INFERRED]** | Story (18): "positive quotes" | Source not stated. |
| **InBody** (scan hardware, operated by gyms and clinics) **[INFERRED]** | "Inbody Scan Statistical information" | The user plugs the numbers in, so there's nothing to buy. **[INFERRED]** Any competitor could add the same input fields. |
| **App platforms and distribution** **[INFERRED]** | "the app" throughout | Which platforms is not stated. Yes, others can use them: all nine apps in competitors.md are on the App Store. |
| **Printing and email** **[INFERRED]** | Feature 6: "print it to their local printer or emailing" | **[INFERRED]** Uses the device's built-in printing and email, which are available to any app. |
| **Payment and address handling** | "Payment and address data will be taken by the AI agent that this app connects to via an API." | Handled by the AI agent. **[INFERRED]** Covered by the AI-agent row above. |

The data behind daily and weekly recommendations comes from HushPlate's own users (Feature 5, DATA WE STORE), so it isn't an outside dependency. **[INFERRED]** A competitor can't buy HushPlate's own user history, but can build its own from its own users.

---

## 6. WHAT WE RULED OUT

**What prd-1.md says:**

> OUT OF SCOPE (the v2 parking lot):
> • AI agents and grocery stores
> • AI model is used for recipes and menus
> • Recipe, nutrition, restaurant, calories-burned and promotion data come from
> • CheapFoodMap agreement
> • Doctor
> • Workout content and quotes come from
> • Platforms
> • \*The items in this OUT OF SCOPE list are parked until further notice.

The list has seven items, plus a note: "The items in this OUT OF SCOPE list are parked until further notice." Each item names an outside provider or source that sections 2 and 5 rely on. The list doesn't say whether an item parks only the choice of provider, or the capability itself. Below, for each item, is what the product can't do while it stays parked, read as parking the capability. Every entry in that column is **[INFERRED]**.

| Parked item | What the product can't do while it stays parked **[INFERRED]** | Where the PRD still describes it as in scope |
|---|---|---|
| **AI agents and grocery stores** | Fill a grocery cart, order for home delivery or curbside pickup, take payment and address data, or read CheapFoodMap. These are the AI agent's three jobs: "(1) puts together a grocery cart, (2) will take payments, and (3) read CheapFoodMap." Option (1), "purchase the groceries themselves," still leaves the user with "a grocery list and recipe list on the app." | USER line ("an AI agent fills the users grocery cart"); story (8), (9); Feature 3 options (2) and (3); DATA WE STORE ("Payment and address data will be taken by the AI agent") |
| **AI model is used for recipes and menus** | Read a menu "online or from a photo" and pick dishes (story 10, 11), and curate recipes, if those depend on an AI model. The PRD itself doesn't say either one needs a model. | Story (7), (10), (11); Feature 2; Feature 3 ("The app then curates") |
| **Recipe, nutrition, restaurant, calories-burned and promotion data come from** | Offer recipes (Feature 2), output "daily nutritional requirements" (story 3), pick restaurant dishes "to meet the user's nutrition targets" (story 10, 11), recommend "meals under $10" (story 13), work out "calories burned" (workout plan), or recommend "grocery sales, discounts and promos" (story 12). Each needs a data source. | Features 2, 4 and 6; story (3), (7), (10)–(13), (15) |
| **CheapFoodMap agreement** | Recommend food under $10 "via CheapFoodMap app" (story 13), if reading CheapFoodMap needs an agreement. The PRD doesn't say whether it does. | Story (13); "the AI agent will read that CheapFoodMap recommendation of food under $10" |
| **Doctor** | List a longevity doctor's contact information, so story (19) has no doctor to connect the user to. The User Health Report (Feature 6) can still be exported and printed or emailed. | Story (19), (22); Feature 4 ("access a longevity doctor"); the doctor paragraph (booking hours, "will pay that doctor separately"); DATA WE STORE ("in connection with their longevity doctor") |
| **Workout content and quotes come from** | Educate the user "on how to work out" (story 14) or show "positive quotes" (story 18). | Story (14), (18); Feature 4 ("receive motivation") |
| **Platforms** | Name the devices the app runs on. No platform is committed. Feature 6's printing and email depend on the device. | "the app" throughout; Feature 6 ("print it to their local printer or emailing") |

**[INFERRED]** Every feature line is unchanged from the previous version. Features 2–6 still describe the capabilities these seven items cover.

---

## GAPS

These are the places where prd-1.md does not answer the six questions above. None of them is filled in here.

**The user (1)**
- Which of the named groups is the main user. All are joined by "including."
- Who the user is beyond age, country and goal: household, income, health condition. The USER line sets only "above the age of 18" and "located in the United States."

**Where the work happens (2)**
- None found in this version.

**What we hold (3)**
- None found in this version.

**Does it get better with use (4)**
- None found in this version. Daily learning "uses the daily confirmations."

**Who we depend on (5)**
- None beyond the seven items now listed in OUT OF SCOPE. Which AI agents, stores, models, data sources, CheapFoodMap terms, doctor, workout and quote sources, and platforms are all parked there rather than answered.

**What we ruled out (6)**
- Whether each OUT OF SCOPE item parks only the choice of provider, or the capability itself.
- What Features 2–6 do while those items stay parked. The feature lines still describe AI-agent ordering, menu reading, recipes and nutrition outputs, CheapFoodMap recommendations, doctor access, workout education, quotes and printing or email.
- When the parked items come back. The list says only "until further notice."
