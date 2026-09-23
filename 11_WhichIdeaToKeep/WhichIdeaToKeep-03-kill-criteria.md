# Three Things That Would Mean Stop — DietGroceryApp

**Prepared:** September 22, 2026 · Section 3 of this document. Each test is runnable in two weeks with no code beyond a spreadsheet and a checkout link.

## 1. The incumbent is already good enough

**Do this:** recruit 5 people who match the target (they cook, they order groceries online at least monthly, they're trying to manage weight). Pay for **MyFitnessPal Premium+ at $19.99/month** for each. Have them plan one week and place one grocery order through it. Then ask two questions: *would you keep paying for this?* and *what's missing?*

**Stop if:** 3 or more of the 5 say they'd keep it **and** none of them names a missing feature you were planning to build.

**Why this is the first test:** MyFitnessPal Premium+ already advertises "personalized meal plans, integrated grocery delivery" at exactly $19.99/month, from a company doing $310M a year. If it works, you are building a second one.

## 2. The cart comes out wrong

**Do this:** take 20 real meal plans for real people. Build each grocery cart by hand the way the product would — plan → ingredient list → matched retailer products → quantities. Count every line-item error: wrong size, wrong unit, wrong product, missing item, a substitution the person wouldn't accept. Separately, write 20 plans for someone with an uncommon allergy (cilantro, alpha-gal, sesame) and check whether the allergen appears anywhere in the cart.

**Stop if:** line-item accuracy is below **95%** (more than about 1 error per 20 lines) after two rounds of fixing, **or** a single allergen leaks through in the 20 allergy plans.

**Why this threshold:** OpenAI scaled back Instant Checkout in March 2026 over wrong product data and an inability to handle multi-item carts — the same problem, at a company with far more resources. And current models give unsafe answers to medical questions 5–13% of the time, so one leak is a pattern, not bad luck.

## 3. Nobody pays on top of the grocery bill

**Do this:** put up a one-page offer with a real checkout — **$19.99/month, or $99 for a founding year** — and drive 100 targeted people to it. The best audience available is **Mealime's users before the app shuts down on October 21, 2026**: 5M+ downloads, publicly angry, actively looking, and they lose their saved recipes with no export.

**Stop if:** fewer than **3 of 100** enter card details. Refunds afterwards are fine — the signal is whether anyone pays at all.

**Why 3%:** it's the base-case adoption rate the market sizing runs on. Below that, the model's revenue is fiction and the category's pattern holds — 39% of complaints in this space are already about being charged, and four of five grocery-side competitors are free.

---

**One honest note:** test 3 is the only one of the three that produces a number you can put in a pitch. Tests 1 and 2 tell you whether to build; test 3 tells you whether anyone wants it.
