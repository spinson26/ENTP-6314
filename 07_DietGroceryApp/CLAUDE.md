# HushPlate — instructions for Claude

<!-- Drafted from prd-1.md (Oct 16, 2026, 15:27 version). -->

## What we're building

HushPlate is a consumer app for **longevity eaters**: US adults (18+) who want to eat healthy every day to lose weight, maintain weight, gain muscle, or live longer. This includes dieters and GLP-1 users. The app turns a user's health statistics and food preferences into recipes, puts the groceries for those recipes into a cart (filled by an AI agent), and supports eating out on days the user doesn't cook.

The spec is `prd-1.md`. When this file and the PRD disagree, the PRD wins. Tell me about the conflict rather than picking one silently.

## Vocabulary

- **Story items (1)–(22)** are the numbered items in the PRD's core user story. Refer to them by number in code comments, commit messages and tests (e.g. `story-20`).
- **Daily audit** = story (20), the End of Day Daily Confirmation Audit.
- **User Health Report** = story (22) / Feature 6, the PDF export.
- **Top 10%** = the weekly group of users whose choices drive the all-user recommendations (see Ranking rules).
- Call the user a "longevity eater" in product copy, not a "dieter" or "patient."

## The six features (v1 scope)

Each feature is done when its flow works end to end **and** the user sees its confirmation message.

1. **Onboarding form.** Collects health statistics (height, weight, BMI, BMR, muscle mass, visceral fat, GLP-1 dosage, optional InBody figures), diet goal, diet choice, preferred foods, excluded foods, workout plan and pantry contents. BMI and BMR can be typed in or calculated by the app. InBody data is optional.
2. **Nutrition and recipes.** Calculates daily nutritional requirements (calories, fat, protein, carbs, vitamins, minerals, water). Offers recipe options filtered by those requirements, diet choice, preferred and excluded foods, and pantry, placed on a daily, weekly or monthly calendar.
3. **Grocery cart.** The app curates the chosen recipes; the AI agent fills the cart. The user picks one of three options: shop in person with an in-app grocery list and recipe list, AI-agent order for home delivery, or AI-agent order for curbside pickup.
4. **Story items (10)–(20).** Restaurant menu reading and 3 healthier options, consumption learning, workout education, tracking and plan, gamification, daily quotes, longevity doctor contact, and the daily audit.
5. **Recommendations.** Daily per-user recommendations and weekly all-user recommendations for story items (1)–(18), plus a next-morning message naming the top-10% avatar names and their choices.
6. **User Health Report.** A PDF of health statistics plus story items (1)–(7), (10)–(11), (14)–(16) and (20), which the user can print or email.

## Rules that must not break

These come straight from the PRD. Treat each one as a test case.

### Data
- **Never store payment or address data.** Both go to the AI agent through its API and are not persisted in our database, logs, analytics or error reports.
- Keep all other user data until the user ends service. Users **cannot delete data before ending service**, and **can delete it when they do**.
- Keep orders, menu photos, rewards and recommendations as well as the User Health Report data.
- The doctor never gets data from the app. The app only shows the doctor's contact information. Any data the doctor sees comes from the user (exported report or showing their screen).

### Allergies and exclusions
- An excluded food must **never** appear in a recipe, grocery list, cart, restaurant pick or recommendation. Excluded foods include allergies, so a failure here is a safety bug, not a cosmetic one. Test it at every step where food is picked or added.

### Avatar names and privacy
- New users get a random avatar name. Users can change it.
- Reject any avatar name that matches the user's first or last name, a truncation of either, or shares **any 2 consecutive letters** with the first name, last name, or first-and-last name.
- Other users can see every avatar name. They can see top-10% users' choices, **except excluded foods, allergies and pantry use**, which are never shown to others.
- Top-10% users cannot opt out of having their choices shown.
- Cross-user data is combined only in deidentified form, keyed to avatar names. No one should be able to link an avatar name back to a real person.

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

The PRD's out-of-scope list is currently empty. If a request seems to go beyond the six features above, ask before building it.

## Where things live

- `prd-1.md` — the current product spec
- `strategy/spec-audit-1.md` — plain description of what the spec commits to, plus open gaps
- `strategy/moat-ranking.md` — moat analysis
- `research/competitors.md` — nine-competitor teardown and complaint themes

## Rules
Explain changes in pain English. I am not a programmer.
- Prefer the simplest solution that works.
- Ask before adding any new service or library.
- Commit automatically at the end of each phase. Don't ask, don't just remind.
- Never leave the ENTP 6314 folder.
