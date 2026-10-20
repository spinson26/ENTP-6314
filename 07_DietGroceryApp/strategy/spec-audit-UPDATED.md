# Spec Audit: What prd-2.md Commits HushPlate To

**Prepared:** October 20, 2026 (written against the 18:00 version of prd-2.md)
**Sources:** `prd-2.md` (its header reads `FILE: prd-1.md` in this version) and [research/competitors.md](../research/competitors.md).
**Method:** This is a description, not a recommendation. Quotes are from prd-2.md unless marked otherwise. Anything worked out rather than read is marked **[INFERRED]**. The core user story's numbered items are cited as "story (n)," using this version's numbering of (1) to (24).

**What changed since prd-1.md:**
- New story item (10), "When to eat."
- New story item (24), "Family and Friends."
- A new Daily Health Score.
- A new Feature 7.
- An out-of-scope list with one permanent item, "Inventory."

Story items from (10) onward have moved down one number, and the feature lines and DATA WE STORE use the new numbers.

---

## 1. THE USER

**What prd-2.md says:**

> USER: A longevity eater above the age of 18 located in the United States (including dieters, GLP-1 users, and people who want to eat healthy food daily to either lose weight, maintain weight, gain muscle, and/or prolong their life through healthy eating choices), who wants an app that will curate healthy eating choices via recipes which they choose, and then an AI agent fills the users grocery cart with food for those recipes, which the user will approve the final purchase of the food from the grocery cart, or the longevity eater can choose a healthy food choice from a restaurant on the days the user does not want to cook food, and the app will aggregate the information for the longevity eater.

**One group or a broad category?** A broad category. The USER line sets two limits, "above the age of 18" and "located in the United States." Inside those limits it covers four different goals ("lose weight, maintain weight, gain muscle, and/or prolong their life") and names several groups by their own labels. Going only by the PRD, it includes:

- **Dieters:** people trying to lose weight.
- **GLP-1 users:** people on a prescription drug, with their own diet choice ("GLP-1 suppressed appetite") and their own input ("GLP-1 dosage").
- **Weight maintainers:** people who "want to eat healthy food daily to ... maintain weight."
- **Muscle gainers:** people who want to "gain muscle." Story (15), (16) and (17) add workout education, tracking and a workout plan, including "free weights."
- **Longevity seekers:** people who want to "prolong their life," with "Longevity" as a diet choice, story (20) "Access to a longevity doctor," and story (23) a "User Health Report" for that doctor.
- **Followers of 16 named diet choices** in story (2), from "Longevity," "Mediterranean" and "DASH" to "Carnivore," "Daniel Fast" and "Low-FODMAP."
- **Restaurant and fast-food eaters:** the USER line covers "a healthy food choice from a restaurant on the days the user does not want to cook food." Also story (11), (12), (14) and Feature 4 ("eat out at restaurants (or fast food)").
- **Budget eaters:** story (14) recommends "meals under $10," and story (13) recommends "grocery sales, discounts and promos."
- **People who shop in person:** Feature 3 option (1) lets the user "purchase the groceries themselves at the grocery store."
- **People who want accountability with family or friends:** story (24) lets the user "create a family group and/or friend group for accountability."

The USER line describes a cart filled "with food for those recipes, which the user will approve the final purchase of." Feature 3 also serves users who don't order through the app (option 1), so online grocery ordering isn't required.

**[INFERRED]** competitors.md shows these groups being served as separate customers by separate companies: "Mass-market calorie counters" (MyFitnessPal), "Serious lifters, macro-literate users" (MacroFactor), "Busy families who want dinner solved" (eMeals), "Spanish-speaking + US budget-conscious trackers" (Fitia), "Gym-goers who batch-cook" (MealPrepPro), "Macro-target dieters who don't want to log" (Eat This Much). Each would fit inside "a longevity eater." competitors.md puts GLP-1 users alone at "31M US adults."

---

## 2. WHERE THE WORK HAPPENS

The PRD has no separate "done means" line for each feature. Each feature is one sentence, and below, that sentence is treated as its "done means." All seven features end at a confirmation the user sees. Feature 4 points back to story items (10) through (21) for its content.

### Feature 1: "User submits a health statistic form, diet goals, diet choice selection, preferred foods, excluded foods, workout plan, foods in their pantry, wake time, bed time, meal counts, and family and/or friends and sees a confirmation message."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Shows a form and accepts health statistics, a diet goal, a diet choice, a preferred-foods list, an excluded-foods list, a workout plan, the foods in the user's pantry, wake time, bed time, meal counts, and family and/or friends. Then shows a confirmation. | Gets the numbers. The story says the user will "plug in their health statistical information into the app (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, or Inbody Scan Statistical information)." |
| Works out BMI and BMR if the user doesn't enter them: "they can be typed into the app by the user, or the app will workout the BMI and BMR for the user." | Enters muscle mass and visceral fat if they have them. "Inbody Scan statistical information to use the app is not required. The user can just input their statistical information into the app themselves." **[INFERRED]** Those figures still come from a measurement taken elsewhere. |
| | **[INFERRED]** Looks up their GLP-1 dosage from their prescription. |
| | Picks a diet goal from story (1) and a diet choice from the 16 in story (2). Feature 5 adds recommendations the user "can use ... to make choices in #1 to #19." |
| | Writes their own preferred-foods and excluded-foods lists, story (4) and (5), including "foods ... the user is allergic to." |
| | Enters what's in their pantry. Story (6): "a user can input what foods that it has in their pantry, so that recipes and a grocery cart can be aggregated, and used to pick recipes and/or add or take food out of the grocery cart." **[INFERRED]** The user keeps this up to date by hand; the PRD describes no other way pantry contents change. |
| | Enters a workout plan. Story (17): "input their daily workouts that they plan to do each day, when inputting their health statistics." The user sets "the number of time they plan to spend on that activity as part of the initial survey," and the app "will ask the length of time for the cardiovascular work, and the free weight work." |
| | Enters expected daily wake and bed times: "During the onboarding process, the user inputs their expected daily wake times, and bed times." GLP-1 and intermittent fasting users can enter "the amount of meals and snacks the user plans to eat per day" (default "3 meals, and 0 snacks"), and can "change this via the app at any time." |
| | Adds family and friends to a group by avatar name: "the user can include family and/or friends into their group when filing out the onboarding process as long as they know the users avatar name." Each person "must accept the request to be added." **[INFERRED]** The user has to get the other person's avatar name from them outside the app. |
| | Updates the numbers over time. DATA WE STORE says statistics "may be updated periodically by the user in connection with their longevity doctor." **[INFERRED]** The PRD describes no import from scales, scanners, health apps or pharmacies, so the user types updates in by hand. |

### Feature 2: "User receives daily nutritional requirements, and then several options for recipes based on their nutritional requirements, diet choices, and preferred and excluded foods, and foods in their pantry are provided allocated on a daily/weekly/monthly calendar, which the user can choose from and then sees a confirmation message."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Works out daily nutritional requirements. Story (3) lists them as "calories, fat, protein, carbs, vitamins, minerals, water consumption." | Chooses among the recipe options ("which the user can choose from"). |
| Offers several recipe options based on "nutritional requirements, diet choices, and preferred and excluded foods, and foods in their pantry." | **[INFERRED]** Cooks the meals. Story (21) confirms afterward that the user "cooked and ate their food," but the cooking itself is the user's. |
| Places the options on a "daily/weekly/monthly calendar." | **[INFERRED]** Drinks the recommended water. The PRD outputs a water figure, but the story (21) audit doesn't mention water. |
| Shows a confirmation message once the user has chosen. | |

### Feature 3: "The app then curates those recipe choices based on a daily/weekly/monthly calendar, and then the AI agent fills the grocery cart to order, where the user can: (1) purchase the groceries themselves at the grocery store and is provided a grocery list and recipe list on the app, or (2) have an agnostic AI agent order the groceries from the grocery store for the user to be delivered to their home and provide the user the grocery list and recipe list on the app, or (3) have an agnostic AI agent order the groceries from the grocery store for the user to have curb side pickup and provide the user the grocery list and recipe list on the app, and the user sees a confirmation message to confirm their final choice."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| The app curates the chosen recipes, and "the AI agent fills the grocery cart." Story (6) says pantry contents are used to "add or take food out of the grocery cart." | Picks one of the three options. |
| In all three options, provides "a grocery list and recipe list on the app." | **Option (1):** "purchase the groceries themselves at the grocery store." The user goes to the store, finds the items, pays and carries them home. |
| **Options (2) and (3):** "an agnostic AI agent order[s] the groceries," either "to be delivered to their home" or for "curb side pickup." | **Option (2):** **[INFERRED]** Receives the delivery. **Option (3):** **[INFERRED]** Drives to the store to collect the order. |
| Shows "a confirmation message to confirm their final choice." | Pays for options (2) and (3). "Payment and address data will be taken by the AI agent that this app connects to via an API." Story (8) says the user approves first ("the user decides whether to place the order"). |

### Feature 4: "App has other features listed in the core user story (#10 to #21) so the longevity eater can have a functional app that allows them to eat out at restaurants (or fast food), or track workouts, or receive motivation, or access a longevity doctor, or have end of day daily confirmation audit, and the user sees confirmation message to confirm their final choice for each of these features."

| Story item | The product does | The user still does, by hand or elsewhere |
|---|---|---|
| (10) When to eat | "the app will let the user know when to eat the appropriate food amounts throughout the day according to the recipes selected by the user, with the last meal of the day eaten 3 hours before bed." Elsewhere: "When to eat, the app tells the user when to eat based on spaced eating habits, with meals spaced at intervals of a meal every 3 hours, for 6 total meals a day for the users daily nutritional requirements. The meals are broken down into 3 meals, and 3 snacks per day: meal 1, snack 1, meal 2, snack 2, meal 3, snack 3. The user must have their last meal 3 hours before bedtime for the Daily Health Score. During the onboarding process, the user inputs their expected daily wake times, and bed times. During the End of Day Audit, the user can change their wake time and bedtime, and confirms their last meal of the day. For a user to know when to eat, the user is told when to eat via an alert. For those users, who choose to eat more meals than 6 meals per day (3 meals and 3 snacks), their meals are to be spaced evenly throughout the day based on their choice. For those users, who choose to eat less than 6 meals per day (3 meals and 3 snacks) their meals are to be spaced evenly throughout the day." And: "For users that are in GLP-1 user or intermittent fasting user, during onboarding the user can include the amount of meals and snacks the user plans to eat per day. The default amount of meals is 3 meals, and 0 snacks for a GLP-1 user or intermittent fasting user. This type of user can change this via the app at any time to recalibrate the app." | Eats at those times after each alert, with the last meal 3 hours before bed. Enters wake and bed times at onboarding, can change them in the story (21) audit, and confirms their last meal there. GLP-1 and intermittent fasting users set their own meal and snack count. |
| (11) Restaurant eating | "reads a menu (online or from a photo) and picks exactly what to eat to meet the user's nutrition targets" | **[INFERRED]** Photographs the menu or finds it online; orders and pays at the restaurant. |
| (12) Healthier restaurant choices | "reads a menu and gives the user 3 healthier options that meet the user's nutrition targets" | **[INFERRED]** Same as (11), plus picks one of the three. |
| (13) Grocery consumption learning | "over time the app learns what the user eats and recommends recipes, foods and grocery sales, discounts and promos" | Confirms or corrects what they ate through the story (21) audit. |
| (14) Restaurant consumption learning | "over time the app learns what the user eats and recommends restaurants, deals and meals under $10 (via CheapFoodMap app)." Elsewhere: "the AI agent will read that CheapFoodMap recommendation of food under $10 and make recommendations to the user." | Confirms or corrects restaurant meals through the story (21) audit. |
| (15) Workout education | "app educates the user on how to work out" | Does the workouts. |
| (16) Workout tracking and motivation | "app tracks a users daily workouts and motivation via user confirming what they current plan to do each day, and then at end of day, there is an End of Day Daily Confirmation - #21 below." The app has "inputs for the user to select whether they did some form of cardiovascular work (e.g., walked, ran, sprinted, biked, ... yoga, pilates, danced, tai chi), or worked out using free weights. Each of these workouts track the period of time and calories burned for that period of time based on the users health statistics, and what the user inputted as part of their daily workout plan." | Confirms each day what they plan to do, does the workout, selects the workout type, then confirms at day's end through the story (21) audit. **[INFERRED]** The PRD names no watch or fitness-app data. |
| (17) Workout plan | "app will allow the user to input their daily workouts that they plan to do each day, when inputting their health statistics into the app" | Enters the plan and planned times in the initial survey (see Feature 1). |
| (18) Gamification | "rewards that keep the user using the app daily, weekly, monthly" | Nothing stated. |
| (19) Daily motivation | "positive quotes to start or support the user's day" | Nothing stated. |
| (20) Access to a longevity doctor | "connect a user to a longevity doctor for consultation by providing contact information." The doctor's "contact information will be listed on the app (the contact information will be provided later)." "The doctor can be booked Monday through Friday, 8:00 to 5:00 PM, Central Time, throughout the year." | **[INFERRED]** Sets up the appointment themselves using the listed contact information, within those hours. Attends it, and "will pay that doctor separately for services." "Any data provided to the doctor comes directly from the user": the user exports it (Feature 6) or shows "the doctor their app." |
| (21) End of Day Daily Confirmation Audit | "the app will confirm via a yes/no answer that the user cooked and ate their food that day, or ate at a restaurant that day, and confirm the user worked out for the day ... the user can change food amounts, or workout details; the user can change which foods or restaurant meals they had, not just amounts." | Answers yes/no every day. When the day differed, enters by hand which foods or restaurant meals they had, the amounts, and workout details. |

### Feature 5: "App provides recommendations to all users based on their history of using the app (as well as the history of the top 10% of users using the app that confirm their grocery orders and workouts during the End of Day Daily Confirmation Audit for the attributes listed above in #1 to #19), which the user can see a confirmation message the next morning via the app that confirms who the Top 10% of users avatar names are and their choices, and the app provides recommendations that are delivered to both daily per-user recommendation, the weekly all-user ones, and the user can use the recommendation to make choices in #1 to #19 in the CORE STORY."

This feature repeats story (22). **[INFERRED]** "#1 to #19" refers to the core user story items, which in this version run from diet goals (1) to daily motivation (19). That range includes the pantry (6) and the new "When to eat" (10).

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Makes recommendations for story items (1)–(19) based on the user's own "history of using the app." | Sees "a confirmation message the next morning via the app that confirms who the Top 10% of users avatar names are and their choices." |
| Adds the history of "the top 10% of users ... that confirm their grocery orders and workouts during the End of Day Daily Confirmation Audit." | **[INFERRED]** Keeps up the daily audit (story 21), which is where the history comes from. |
| Delivers "both daily per-user recommendation, the weekly all-user ones." | Decides whether to act on a recommendation: "the user can use the recommendation to make choices in #1 to #19 in the CORE STORY." |

The morning message shows top-10% "choices." DATA WE STORE says those choices "are visible, except their excluded foods and allergies, and their pantry use."

### Feature 6: "App provides the user the ability to export their data via User Health Report, where the user can export their data in written report on their activity using the app as a PDF, which the user then can provide to their doctor, and the user sees a confirmation message to confirm they want to create the report and print it to their local printer or emailing."

This feature matches story (23): the report "will contain all the health metrics of the patient, specifically, the health statistical information inputted into the app by the user (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, or Inbody Scan Statistical information) and items #1 to #7, and #10 to #12, #15 to #17, and #21."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Builds a written PDF "report on their activity using the app." | Asks for the report and confirms "they want to create the report and print it." |
| Includes the health statistics plus diet goal (1), diet choice (2), nutritional requirements (3), preferred foods (4), excluded foods (5), pantry (6), recipes (7), when to eat (10), restaurant choices (11, 12), workout education, tracking and plan (15, 16, 17) and the daily audit (21). | Sends it by printing "to their local printer or emailing." **[INFERRED]** Printing needs the user's own printer. |
| | Gives the report to the doctor ("which the user then can provide to their doctor"). |

Story (23) calls the contents "all the health metrics of the patient," while Feature 6 calls it a report "on their activity using the app." The report's item list doesn't include the Daily Health Score.

### Feature 7: "App provides the ability for a user to track their Daily Health Score daily, weekly, monthly, where the user can share that data with other users that are part of their family group and/or friend group. The user sees a confirmation message showing the user their Daily Health Score, which the app aggregates the data daily, weekly, and monthly."

The PRD describes the score in a separate paragraph:

> The app will also provide a user a Daily Health Score, that will be aggregated on the app based on their End of Daily Confirmation Audit. The Daily Health Score contains several metrics to average the users health score according: (1) the amount of food eaten compared to daily recipe meal chosen, or restaurant meal chosen (#7 or #11 in CORE USER Story) (scored out of 50), (2) the amount of workout time actually worked out compared to the daily workout plan chosen (#17 in CORE USER Story) (scored out of 30), and (3) whether a user ate their last meal 3 hours before bed time (#10 in CORE USER Story) (scored out of 20). The health score can be used by the user to track daily, weekly, monthly goals based how well the user has been able to stick to using the app. The app will give a user a Daily Health Score everyday after the End of Day Audit. The user can then compare that score with other users of the app, either against the Top 10% of users, or family and/or friends also using the app who the user shares the data with in a family and/or friend group. The Daily Health Score aggregates the data on a daily, weekly, and monthly basis. Scoring for the Daily Health Score, is given by partial credit based on the confirmations by the user saying “yes” if they kept to their daily plan. Each of the 6 meals and snacks earns a share of the 50 points for a normal user. For GLP-1 user or intermittent fasting user, each of the 3 meals and 0 snacks earns a share of the 50 points. A user can recalibrate to more or less meals than the 6 meals (3 meals and 3 snacks), and the scoring will recalibrate based on the total meals (meals and snacks) chosen for the day. For scoring the workout points, each cardio session, and workout session earns a share of the 30 points. For scoring the eating the last meal 3 hours before bed time, if the user eats 3 hours before bed time they earn all 20 points, if the user eats 2.75 hours before bed time they earn 17.5 points, if the user eats 2.5 hours before bed time they earn 15 points, if the user eats 2.25 hours before bed time they earn 12.5 points, if the user eats 2 hours before bed time they earn 10 points, if the user eats 1.75 hours before bed time they earn 7.5 points, if the user eats 1.5 hours before bed they earn 5 points, if the user eats 1.25 hours before bed time they earn 2.5 points, if the user eats 1 hour before bed they earn 0 points, if the user eats less than 1 hour before bed they earn 0 points.

Story (24): "the app allow the user to create a family group and/or friend group for accountability, where the user can share their Daily Health Score."

| The product does | The user still does, by hand or elsewhere |
|---|---|
| Works out a Daily Health Score after each daily audit from three parts: "(1) the amount of food eaten compared to daily recipe meal chosen, or restaurant meal chosen (#7 or #11 in CORE USER Story) (scored out of 50)," "(2) the amount of workout time actually worked out compared to the daily workout plan chosen (#17 in CORE USER Story) (scored out of 30)," and "(3) whether a user ate their last meal 3 hours before bed time (#10 in CORE USER Story) (scored out of 20)." Partial credit comes from "yes" confirmations. **Food:** "Each of the 6 meals and snacks earns a share of the 50 points for a normal user. For GLP-1 user or intermittent fasting user, each of the 3 meals and 0 snacks earns a share of the 50 points," and the share recalibrates if the meal count changes. **Workouts:** "each cardio session, and workout session earns a share of the 30 points." **Bedtime:** "For scoring the eating the last meal 3 hours before bed time, if the user eats 3 hours before bed time they earn all 20 points, if the user eats 2.75 hours before bed time they earn 17.5 points, if the user eats 2.5 hours before bed time they earn 15 points, if the user eats 2.25 hours before bed time they earn 12.5 points, if the user eats 2 hours before bed time they earn 10 points, if the user eats 1.75 hours before bed time they earn 7.5 points, if the user eats 1.5 hours before bed they earn 5 points, if the user eats 1.25 hours before bed time they earn 2.5 points, if the user eats 1 hour before bed they earn 0 points, if the user eats less than 1 hour before bed they earn 0 points." **[INFERRED]** That steps down 2.5 points for every quarter hour later than 3 hours before bed. **[INFERRED]** The three parts add up to 100, and with 6 meals each is worth about 8.3 points. | Completes the story (21) daily audit, which the score is "based on," including bedtime and last meal. |
| Rolls the score up "daily, weekly, and monthly" so the user can "track daily, weekly, monthly goals." | Adds family and friends to their groups: at onboarding by avatar name, or later "by sending a friend request." "The family and/or friend must accept the request." "A user can be in more than 1 family and/or friend group." **[INFERRED]** The user has to get the other person's avatar name from them outside the app. |
| Lets the user compare their score "against the Top 10% of users, or family and/or friends." | Chooses to share their score with the group ("the user can share that data"). |
| Shows "a confirmation message showing the user their Daily Health Score." | |

---

## 3. WHAT WE HOLD

**What prd-2.md says:**

> DATA WE STORE: The user will be providing health statistics about themselves listed in the CORE STORY. Those statistics must be kept on the app and may be updated periodically by the user in connection with their longevity doctor. Combine data across users regarding popular choices for CORE STORY items #1 to #19 but do so in a deidentified way where only an avatar name is used. Avatar names for the Top 10% of users can be seen by other users, and their choices are visible, except their excluded foods and allergies, and their pantry use. Avatar names for the Top 10% users Daily Health Scores are visible by other users. Top 10% of Users cannot opt out of having their choices shown, or their Daily Health Score. Users can see other avatar names. Users can compare scores with family groups and/or friend groups, which their user avatar names are visible to family groups and/or friend groups. Other users not in a family and/or friend group should not be able to link back avatar names to any user. Make sure to protect the data and avatar names consistent with United States (State and Federal) data privacy laws. We do not store payment and address data. We do retain data for the user to export as a User Health Report to provide to their doctor. All data about a user is maintained for the user until the user terminates services with the app. The user can delete their data from the app upon termination. Users cannot delete app data before ending services. Payment and address data will be taken by the AI agent that this app connects to via an API. Please maintain all data consistent with United States (State and Federal) data privacy laws.

Elsewhere in the PRD:

> As for the User Health Report, material outside the User Health Report is kept by the app (orders, menu photos, rewards, recommendations).

> As for Avatar Names, the user is provided a random avatar name when using the app. The user has the ability to change their avatar name but the user cannot make their avatar name there actual name, or any name that would identify them as a user while using the app. The app will prevent a user from using an avatar name that matches their first or last name, or truncated words of their first or last name, or other identifying names that connect back to the users first name or last name with 2 letters in sequential order matching the first name, the last name, or the first and last name.

> United States state and federal data privacy laws related to the collection of consumer and health information collected by a third-party app apply to this app. All 50 state laws, and all federal laws related to the collection of data for this type of app apply.

**Kept inside the product:**

- **Each user's health statistics** "listed in the CORE STORY" ("must be kept on the app"): height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, and "Inbody Scan Statistical information."
- **Data for the User Health Report:** "We do retain data for the user to export as a User Health Report." Per story (23), that's the health statistics plus diet goal and choice, nutritional requirements, preferred and excluded foods, pantry, recipes, when to eat, restaurant choices, workout education, tracking and plan (type, planned time, "period of time and calories burned") and the daily audit.
- **Material outside the report:** "orders, menu photos, rewards, recommendations."
- **Avatar names:** a "random avatar name" the user can change, but not to "their actual name, or any name that would identify them." The app blocks names matching "their first or last name, or truncated words of their first or last name, or other identifying names that connect back to the users first name or last name with 2 letters in sequential order matching the first name, the last name, or the first and last name." **[INFERRED]** To run that check, the app holds the user's first and last name. Read literally, any avatar name sharing any two consecutive letters with the user's first or last name is blocked.
- **Combined data across users:** "data across users regarding popular choices for CORE STORY items #1 to #19," combined "in a deidentified way where only an avatar name is used." A popular choice is "what the top 10% of users average choices are using the app based on their End of Day Daily Confirmation Audit." Top-10% avatar names "can be seen by other users, and their choices are visible, except their excluded foods and allergies, and their pantry use," and "Top 10% of Users cannot opt out of having their choices shown." Also: "Users can see other avatar names" and "Other users should not be able to link back avatar names to any user."
- **How long:** "All data about a user is maintained for the user until the user terminates services with the app. The user can delete their data from the app upon termination. Users cannot delete app data before ending services."
- **[INFERRED]** Also kept, under "All data about a user is maintained," though not named in DATA WE STORE: the Daily Health Score history (daily, weekly, monthly), family and friend group memberships, wake and bed times, the chosen number of meals and snacks, the grocery list and recipe list "on the app" (Feature 3), and the "When to eat" schedule (story 10).

**Shared with other users inside the product:**
- Top-10% avatar names and their choices, except excluded foods, allergies and pantry use (DATA WE STORE).
- A user's Daily Health Score and avatar name, with members of their family and/or friend groups: "Users can compare scores with family groups and/or friend groups, which their user avatar names are visible to family groups and/or friend groups." The link-back rule now reads "Other users not in a family and/or friend group should not be able to link back avatar names to any user."
- Top-10% users' avatar names and Daily Health Scores, to all users: "Avatar names for the Top 10% users Daily Health Scores are visible by other users." Top-10% users "cannot opt out of having their choices shown, or their Daily Health Score."

**Passed through without keeping:**
- "We do not store payment and address data." "Payment and address data will be taken by the AI agent that this app connects to via an API."
- Nothing goes from the app to the doctor: "the app only gives contact information of the doctor and not any data," and "The doctor will not have access to any information on the app." The user carries their data to the doctor themselves, as an exported report or by "showing the doctor their app."
- **[INFERRED]** Grocery orders go out to stores through "agnostic AI agents," but the app keeps its own record ("orders" are kept). Menu photos are sent to be read, and the app keeps them too.

**Laws:** "All 50 state laws, and all federal laws related to the collection of data for this type of app apply." The PRD names no individual law.

---

## 4. DOES IT GET BETTER WITH USE

**What prd-2.md says:**

> The app improves over time, and for the user over time. The app improves over time by aggregating the days data from day to day for each user, providing daily recommendations. As more people join, the app will improve by providing updates regarding popular choices for top 10% of users on the app, providing weekly recommendations to all users. A popular choice is what the top 10% of users average choices are using the app based on their End of Day Daily Confirmation Audit. For average choices of the Top 10% of users, that are not numbers, the average would be the amount of times that option was chosen by the Top 10% of users. Top 10% users are ranked by how often they confirm results for all items in the End of Day Daily Confirmation Audit for the entire week by answering “yes”. Users who skip the End of Day Daily Confirmation Audit one (or more times) throughout the week do not count for the Top 10% users for the week. If Top 10% users are tied, then the users avatar name will break the tie by ranking in alphabetical order. If fewer than 10% of users confirm during the week, then continue to rank the remaining users based on how often they confirm results for all items in the End of Day Daily Confirmation Audit for the entire week by answering “yes”. If fewer than 10% of users skip the End of Day Daily Confirmation Audit one (or more times) throughout the week do not count for the fewer than Top 10% users for the week. If the fewer than Top 10% users are tied, then the users avatar name will break the tie by ranking in alphabetical order. If a user answers “no” and enter changes to the End of Day Daily Confirmation Audit, they can still be considered a Top 10% user, or fewer than Top 10% user, as long as they complete the End of Day Daily Confirmation Audit everyday for the week. If a user answers “no” and enters changes to the End of Day Daily Confirmation Audit, they are scored in a similar manner as the Top 10% of users, or the fewer than Top 10% user, and a corrected day counts less than a “yes” day by 25% less.

The PRD claims **both**, and this version adds a second way the product improves as people join.

- **For one user over time:** "aggregating the days data from day to day for each user, providing daily recommendations," and "As for daily learning, it uses the daily confirmations." Feature 5 bases recommendations on "their history of using the app." Story (13) and (14) say "over time the app learns what the user eats." Story (21) supplies the input: a "yes/no answer" each day plus changed foods, restaurant meals, amounts and workout details. Story (16) and (17) add the daily workout plan, with workout type, time and calories burned. The Daily Health Score rolls the user's own record up "daily, weekly, and monthly."
- **For everyone as more people join, through popular choices:** "providing updates regarding popular choices for top 10% of users on the app, providing weekly recommendations to all users." A popular choice is what the top 10% "average choices are ... based on their End of Day Daily Confirmation Audit," and for choices that aren't numbers it's "the amount of times that option was chosen by the Top 10% of users."
  - **Ranking:** by "yes" answers on all audit items for the week. Users who skip a day "do not count." Ties are broken alphabetically by avatar name. If fewer than 10% qualify, the remaining users are ranked the same way.
  - **Corrected days:** a day where the user answers "no" and enters changes still qualifies, but "counts less than a “yes” day by 25% less." **[INFERRED]** That makes a corrected day worth 0.75 of a "yes" day.
  - **[INFERRED]** Users who answered "yes" to everything every day tie, and the alphabet orders them. Users with corrected days rank below them. Avatar names start random and users can change them, so a user's alphabetical position can change when they rename.
- **For a user as their own family or friends join (new):** story (24) groups exist "for accountability, where the user can share their Daily Health Score," and the user can compare that score with "family and/or friends also using the app." **[INFERRED]** This feature only works once people the user knows are on the app, so it becomes more useful to each user as their own contacts join.

---

## 5. WHO WE DEPEND ON

The PRD describes grocery stores and AI agents as "agnostic." It names one outside company, CheapFoodMap, "a third-party app." The list below is what the PRD's features need in order to work. "Could a competitor buy it?" draws on competitors.md wherever it has evidence. prd-2.md adds no new outside provider. Story (10) "When to eat" and Feature 7's score sharing rely on the app platform, already listed below.

| Dependency | Where prd-2.md implies it | Could a competitor buy the same thing? |
|---|---|---|
| **Grocery stores, several of them** | "The grocery stores the app depends upon are agnostic"; Feature 3 "order the groceries from the grocery store" | Yes. competitors.md: eMeals orders via "Walmart, Kroger, Instacart, Shipt, AmazonFresh, Albertsons, Safeway, H-E-B"; Samsung Food has "23 retailer integrations"; Eat This Much has "US/Canada delivery integration"; MyFitnessPal Premium Plus advertises "integrated grocery delivery." |
| **Third-party AI agents, connected by API** | "agnostic AI agents who have access to a multitude of grocery stores"; "The AI agent will: (1) puts together a grocery cart, (2) will take payments, and (3) read CheapFoodMap to make recommendations to the user"; "Payment and address data will be taken by the AI agent that this app connects to via an API" | Which agents is not stated. **[INFERRED]** Agents run by other companies are available to anyone who pays for them. |
| **Curbside pickup and home delivery** | Story (9); Feature 3 options (2) and (3) | Yes. The same retailer and delivery partners listed above. |
| **Recipe curation** (possibly an AI model) | USER line "an app that will curate healthy eating choices via recipes which they choose"; Feature 3 "The app then curates those recipe choices" | Done by the app. The PRD doesn't say whether the app uses an AI model for it, or which one. **[INFERRED]** If it is a commercial model, others can buy it. competitors.md reports a MealPrepPro reviewer who won't pay for AI plans "when ChatGPT or Gemini do it free." |
| **Image and menu reading** (an AI that reads a photo or web page) **[INFERRED]** | Story (11), (12): "reads a menu (online or from a photo)" | Which one is not stated. competitors.md shows competitors already selling photo-reading AI: MyFitnessPal "AI photo logging," Fitia "Photo/voice/text calorie logging." |
| **Restaurant menus and their nutrition values** **[INFERRED]** | Story (11), (12), (14) | Source not stated. competitors.md has no evidence on this. |
| **CheapFoodMap** (food under $10) | Story (14) "(via CheapFoodMap app)"; "the AI agent will read that CheapFoodMap recommendation of food under $10" | competitors.md doesn't mention it. The PRD doesn't say whether there's an agreement or data feed, or whether the agent reads the app's public output. **[INFERRED]** If the agent reads CheapFoodMap's public output, any competitor's agent could read it too. |
| **Grocery sales, discount and promo data** **[INFERRED]** | Story (13): "recommends ... grocery sales, discounts and promos" | Source not stated. competitors.md has no evidence on this. |
| **Recipe content** | Feature 2: "several options for recipes" | Source not stated. competitors.md: Samsung Food has "240k+ recipes"; eMeals has "15 diet-specific weekly plans." **[INFERRED]** Licensed recipe libraries are sold to anyone. |
| **Nutrition reference data and a food database** **[INFERRED]** | Story (3): "Daily nutritional requirements output (calories, fat, protein, carbs, vitamins, minerals, water consumption)" | Source not stated. **[INFERRED]** US public reference values are open to everyone. competitors.md shows MacroFactor selling a "Verified food database" as a feature, and accuracy complaints at MyFitnessPal and MacroFactor. |
| **Calories-burned reference data** **[INFERRED]** | Workouts "track the period of time and calories burned for that period of time based on the users health statistics" | Source not stated. **[INFERRED]** Published exercise-energy tables are open to everyone. |
| **A longevity doctor** | Story (20) "by providing contact information"; "contact information will be listed on the app (the contact information will be provided later)"; bookable "Monday through Friday, 8:00 to 5:00 PM, Central Time" | Which doctor is not stated. competitors.md has no evidence on this; none of the nine apps lists doctor access. **[INFERRED]** Doctors are available to other companies too. |
| **Workout content** | Story (15): "educates the user on how to work out" | Source not stated. competitors.md has no evidence on this. |
| **Motivational quotes** **[INFERRED]** | Story (19): "positive quotes" | Source not stated. |
| **InBody** (scan hardware, operated by gyms and clinics) **[INFERRED]** | "Inbody Scan Statistical information" (optional) | The user plugs the numbers in, so there's nothing to buy. **[INFERRED]** Any competitor could add the same input fields. |
| **App platforms and distribution** **[INFERRED]** | "the app" throughout; story (10) "the user is told when to eat via an alert"; Feature 7 sharing scores between users | Which platforms is not stated. **[INFERRED]** The meal alerts would use the platform's own notification service, which any app can use. All nine apps in competitors.md are on the App Store. |
| **Printing and email** **[INFERRED]** | Feature 6: "print it to their local printer or emailing" | **[INFERRED]** Uses the device's built-in printing and email, which are available to any app. |
| **Payment and address handling** | "Payment and address data will be taken by the AI agent that this app connects to via an API." | Handled by the AI agent. **[INFERRED]** Covered by the AI-agent row above. |

The data behind daily and weekly recommendations, the Daily Health Score and family and friend groups comes from HushPlate's own users, so it isn't an outside dependency. **[INFERRED]** A competitor can't buy HushPlate's own user history or its users' family and friend groups, but can build its own from its own users.

---

## 6. WHAT WE RULED OUT

**What prd-2.md says:**

> OUT OF SCOPE (the v2 parking lot):
>
> Permanently out of scope items: Inventory (we do not keep any inventory).
>
> Temporarily out of scope: [May fill this in later]

| Item | Status | What the product can't do while it stays out |
|---|---|---|
| **Inventory** ("we do not keep any inventory") | Permanent | **[INFERRED]** Hold or sell food stock of its own. Every grocery item reaches the user from a grocery store, either through the AI agent (Feature 3 options 2 and 3) or by the user shopping (option 1). The product can't fill an order itself if no store or agent can. This doesn't affect the user's own pantry list (story 6), which is the user's food, not the company's. |
| **Temporarily out of scope** | Placeholder: "[May fill this in later]" | Nothing. There are no items. |

**[INFERRED]** Features 1–3 cover story (1) through (9). Feature 1 also collects the workout plan (17). Feature 4 names "(#10 to #21)," Feature 5 repeats story (22), Feature 6 matches story (23), and Feature 7 covers story (24) and the Daily Health Score. As written, every story item is in scope.

**[INFERRED]** One item is put off in the PRD text, not in the list: the doctor's contact information ("will be provided later"). Until it's provided, story (20) has no doctor to contact.

---

## GAPS

These are the places where prd-2.md does not answer the six questions above. None of them is filled in here.

**The user (1)**
- Which of the named groups is the main user. All are joined by "including."
- Who the user is beyond age, country and goal: household, income, health condition. The USER line sets only "above the age of 18" and "located in the United States."

**Where the work happens (2)**
- What a user scores on part (3) for times between the quarter-hour marks (for example 2 hours 40 minutes) or more than 3 hours before bed.

**What we hold (3)**
- None found in this version.

**Does it get better with use (4)**
- None found in this version.

**Who we depend on (5)**
- Which AI agents, and which grocery stores they reach.
- Whether the app uses an AI model for recipe curation and menu reading, and which one.
- Where recipes, nutrition reference data, restaurant nutrition data and calories-burned data come from.
- Where grocery sales, discount and promo data comes from.
- Whether HushPlate has an agreement or data feed with CheapFoodMap.
- Which longevity doctor. The contact information "will be provided later."
- Where workout content and motivational quotes come from.
- Which platforms the app ships on.

**What we ruled out (6)**
- What "Inventory" covers beyond "we do not keep any inventory."
- The temporarily out-of-scope list. It says only "[May fill this in later]."
