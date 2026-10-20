# HushPlate — instructions for Claude

<!-- Drafted from prd-2.md (Oct 20, 2026, 18:13 version). -->

## What we're building

HushPlate is a consumer app for **longevity eaters**: US adults (18+) who want to eat healthy every day to lose weight, maintain weight, gain muscle, or live longer. This includes dieters and GLP-1 users. The app turns a user's health statistics and food preferences into recipes, tells them when to eat, puts the groceries for those recipes into a cart (filled by an AI agent), supports eating out on days the user doesn't cook, and gives them a Daily Health Score they can share with family and friends.

The spec is `prd-2.md`. When this file and the PRD disagree, the PRD wins. Tell me about the conflict rather than picking one silently.

## Vocabulary

- **Story items (1)–(24)** are the numbered items in the PRD's core user story. Refer to them by number in code comments, commit messages and tests (e.g. `story-21`).
- **When to eat** = story (10), the meal-timing alerts.
- **Daily audit** = story (21), the End of Day Daily Confirmation Audit.
- **User Health Report** = story (23) / Feature 6, the PDF export.
- **Groups** = story (24), family and/or friend groups.
- **Daily Health Score** = the 0–100 score shown after each daily audit (Feature 7).
- **Top 10%** = the weekly group of users whose choices drive the all-user recommendations (see Ranking rules).
- Call the user a "longevity eater" in product copy, not a "dieter" or "patient."

## The seven features (v1 scope)

Each feature is done when its flow works end to end **and** the user sees its confirmation message.

1. **Onboarding form.** Collects health statistics (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, optional InBody figures), diet goal, diet choice, preferred foods, excluded foods, workout plan, pantry contents, wake time, bed time, meal counts, and family and/or friends. BMI and BMR can be typed in or calculated by the app. InBody data is optional.
2. **Nutrition and recipes.** Calculates daily nutritional requirements (calories, fat, protein, carbs, vitamins, minerals, water). Offers recipe options filtered by those requirements, diet choice, preferred and excluded foods, and pantry, placed on a daily, weekly or monthly calendar.
3. **Grocery cart.** The app curates the chosen recipes; the AI agent fills the cart. The user picks one of three options: shop in person with an in-app grocery list and recipe list, AI-agent order for home delivery, or AI-agent order for curbside pickup.
4. **Story items (10)–(21).** When-to-eat alerts, restaurant menu reading and 3 healthier options, consumption learning, workout education, tracking and plan, gamification, daily quotes, longevity doctor contact, and the daily audit.
5. **Recommendations.** Daily per-user recommendations and weekly all-user recommendations for story items (1)–(19), plus a next-morning message naming the top-10% avatar names and their choices.
6. **User Health Report.** A PDF of health statistics plus story items (1)–(7), (10)–(12), (15)–(17) and (21), which the user can print or email.
7. **Daily Health Score.** Tracked daily, weekly and monthly, shareable with the user's family and/or friend groups, and comparable against the top 10% or the user's groups.

## Rules that must not break

These come straight from the PRD. Treat each one as a test case.

### Data
- **Never store payment or address data.** Both go to the AI agent through its API and are not persisted in our database, logs, analytics or error reports.
- Keep all other user data until the user ends service. Users **cannot delete data before ending service**, and **can delete it when they do**.
- Keep orders, menu photos, rewards and recommendations as well as the User Health Report data.
- The doctor never gets data from the app. The app only shows the doctor's contact information. Any data the doctor sees comes from the user (exported report or showing their screen).

### Allergies and exclusions
- An excluded food must **never** appear in a recipe, grocery list, cart, restaurant pick or recommendation. Excluded foods include allergies, so a failure here is a safety bug, not a cosmetic one. Test it at every step where food is picked or added.

### When to eat
- Default: 6 eating times a day, one every 3 hours, in this order: meal 1, snack 1, meal 2, snack 2, meal 3, snack 3.
- GLP-1 and intermittent fasting users default to **3 meals and 0 snacks**, set at onboarding and changeable any time.
- Any user can choose more or fewer than 6. Space their meals **evenly** through the day.
- The last meal must be **3 hours before bedtime**.
- The user enters expected wake and bed times at onboarding and can change them in the daily audit, where they also confirm their last meal.
- Tell the user when to eat with an **alert**.

### Daily Health Score (0–100, given after each daily audit)
- **Food, 50 points:** the meals eaten compared to the recipe or restaurant meals chosen. Each meal and snack the user confirms with "yes" earns an equal share of the 50. The share recalculates if the user's meal count changes (e.g. 6 meals ≈ 8.33 each; 3 meals ≈ 16.67 each).
- **Workout, 30 points:** workout time done compared to the plan. Each cardio or free-weight session earns an equal share of the 30.
- **Last meal before bed, 20 points**, by hours between the last meal and bedtime:
  - 3 or more hours (including 3 to 2.91): 20
  - 2.9 to 2.75: 17.5
  - 2.74 to 2.5: 15
  - 2.49 to 2.25: 12.5
  - 2.24 to 2.0: 10
  - 1.99 to 1.75: 7.5
  - 1.74 to 1.5: 5
  - 1.49 to 1.25: 2.5
  - 1.24 or less: 0
- Roll the score up daily, weekly and monthly.

### Groups (family and friends)
- At onboarding a user can add people by their **avatar name**. Later, they add people by sending a **friend request**.
- The other person **must accept** in both cases.
- A user can be in **more than one** group.
- Group members can see each other's avatar names and shared Daily Health Scores.

### Avatar names and privacy
- New users get a random avatar name. Users can change it.
- Reject any avatar name that matches the user's first or last name, a truncation of either, or shares **any 2 consecutive letters** with the first name, last name, or first-and-last name.
- Every user can see every avatar name. Everyone can see top-10% users' choices and Daily Health Scores, **except excluded foods, allergies and pantry use**, which are never shown to others.
- Top-10% users cannot opt out of having their choices or Daily Health Score shown.
- Cross-user data is combined only in deidentified form, keyed to avatar names. Users **outside** someone's groups must not be able to link that avatar name back to a real person.

### Ranking rules (weekly top 10%)
- Score each user by "yes" answers on all items in the daily audit for the week.
- A user who skips the audit on any day that week does not qualify.
- A day where the user answers "no" and enters corrections still qualifies but counts **25% less** than a "yes" day (0.75 of a yes day).
- Break ties alphabetically by avatar name.
- If fewer than 10% of users qualify, rank whoever qualifies using the same rules.
- A "popular choice" is the average of the top 10%'s choices. For choices that aren't numbers, use how many times the top 10% chose each option.

### Workouts
- Workout types: cardio (walk, run, sprint, bike, cycle, hike, swim, elliptical, stair step, row, kickbox, HIIT, core, yoga, pilates, dance, tai chi) or free weights.
- The user sets planned workout time in onboarding. Calories burned are calculated from time and the user's health statistics.

### Compliance
- All 50 state laws and all federal laws on collecting consumer and health data through a third-party app apply. Flag any feature that collects, shares or exports health data so I can review it.

## Not decided yet — ask before choosing

The PRD names no provider for any of these. **Don't pick one, add a dependency, or hard-code a vendor without asking me first.** Build behind an interface so the choice can be made later.

- Which AI agent(s) and grocery stores (stores and agents are meant to be "agnostic")
- Whether an AI model is used for recipe curation and menu reading, and which one
- Sources for recipes, nutrition reference data, restaurant nutrition, calories burned, and grocery sales/promos
- Any agreement or data feed with CheapFoodMap (the AI agent reads its under-$10 recommendations)
- Which longevity doctor. Contact info "will be provided later." Booking hours are Mon–Fri, 8:00–5:00 PM Central.
- Workout education content and motivational quote sources
- Which platforms the app ships on

## Out of scope

- **Permanently:** Inventory. HushPlate holds no food stock of its own. Every grocery item comes from a store, through the AI agent or the user's own shopping.
- **Temporarily:** nothing listed yet.

If a request seems to go beyond the seven features above, ask before building it.

## Where things live

- `prd-2.md` — the current product spec
- `strategy/spec-audit-UPDATED.md` — plain description of what prd-2.md commits to, plus open gaps
- `strategy/moat-ranking.md` — moat analysis (written against the older prd-1.md)
- `research/competitors.md` — nine-competitor teardown and complaint themes

## Rules
Explain changes in pain English. I am not a programmer.
- Prefer the simplest solution that works.
- Ask before adding any new service or library.
- Commit automatically at the end of each phase. Don't ask, don't just remind.
- Never leave the ENTP 6314 folder.
