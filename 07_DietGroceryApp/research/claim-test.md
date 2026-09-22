# Testing the Claim: "This Is Newly Possible Because of AI Agents"

**Prepared:** September 22, 2026
**Window searched:** March 2025 – September 2026 (last 18 months), plus historical evidence needed to test counterargument 1.

## The claim, stated precisely

> A single app combining (a) diet and nutrient assessment, (b) preferred-food selection and allergy exclusion, (c) recipe selection, and (d) grocery ordering from a **locally selected** store is **newly possible** because an AI agent can now compile these functions and execute the order.

**Verdict up front: the claim as written does not survive.** Two of its four pillars were shipping commercially ten years ago, and the agentic-checkout rail it leans on was publicly scaled back in March 2026. A narrower version does survive — stated at the end.

---

## Part 1 — Evidence FOR

### 1a. Product launches (last 18 months)

| Date | Launch | Why it supports the claim |
|---|---|---|
| **Dec 8, 2025** | **Instacart app inside ChatGPT** with Instant Checkout — plan meals, browse local items, build a cart and check out in one conversation, across **1,800+ retailers** | This is close to a literal implementation of the claim's last mile ([Instacart newsroom](https://company.instacart.com/pressreleases/instacart-app-launches-in-openai-chatgpt)) |
| **Oct 14, 2025** | **Walmart + OpenAI partnership** for AI-first shopping | Largest US grocer committing to agent-mediated ordering ([Businesswire](https://www.businesswire.com/news/home/20251014984151/en/Walmart-Partners-with-OpenAI-to-Create-AI-First-Shopping-Experiences)) |
| **Mar 25, 2026** | **Walmart's Sparky agent inside ChatGPT**; Sparky usage **+60% quarter-over-quarter**, engaged customers place orders **40% larger** | Real usage and basket data, not a pilot ([Grocery Dive](https://www.grocerydive.com/news/walmart-sparky-chatgpt-instant-checkout/815961/), [Constellation](https://www.constellationr.com/insights/news/walmarts-sparky-ai-agent-increases-order-value)) |
| **July 2026** | **Kroger AI shopping assistant** (Gemini Enterprise) — plans meals, finds recipes, builds carts "tailored to budgets and **dietary needs**" | A major grocer shipping the diet-aware cart ([Kroger IR](https://ir.kroger.com/news/news-details/2026/Kroger-Helps-Families-Simplify-Back-to-Routine-Season-with-Fresh-Convenient-Meals-and-a-Smarter-Way-to-Shop/default.aspx)) |
| **Aug 2026** | **Ninth Circuit vacated** Amazon's injunction against Perplexity's Comet: when a user directs an agent, it is **the user** accessing the site | Removes a major legal blocker to agent-driven ordering ([eMarketer](https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling), [CNBC](https://www.cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html)) |

### 1b. Adoption data (last 18 months)

| Metric | Figure | Source |
|---|---|---|
| AI-referred traffic to US retail sites, Q1 2026 | **+393% YoY**; +1,324% since Oct 2024 | [Adobe via TechCrunch](https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/) |
| AI-referred conversion vs. non-AI traffic, May 2026 | **+54%** (was **−38%** in March 2025 — a complete reversal in 14 months) | [Adobe](https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable) |
| Consumers who have used AI assistants to shop | **39%** (Adobe survey, Mar 2026) | [Adobe](https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable) |
| Consumers who used AI to generate a **grocery list** | **25%** (MorganMyers Food Pulse, Mar 2026, n=366, ±5%) | [MorganMyers](https://morganmyers.com/2026/04/ai-impact-meal-planning-spring-2026-food-pulse/) |
| Consumers naming AI as their most-used recipe source | **13%** (vs. 42% social media) | [MorganMyers](https://morganmyers.com/2026/04/ai-impact-meal-planning-spring-2026-food-pulse/) |

### 1c. The strongest single data point for "AI changed something"

**Cal AI**: founded early 2024, first code March 2024, launched May 2024, photo-based calorie logging → **15M+ downloads and $40M in sales in the trailing 12 months**, acquired by MyFitnessPal (deal closed Dec 2025, announced Mar 2, 2026). ([TechCrunch](https://techcrunch.com/2026/03/02/myfitnesspal-has-acquired-cal-ai-the-viral-calorie-app-built-by-teens/); [GlobeNewswire](https://www.globenewswire.com/news-release/2026/03/02/3247439/0/en/MyFitnessPal-Acquires-Cal-AI-Expanding-on-its-Position-as-the-Leading-Player-in-Digital-Nutrition-Tracking.html))

Nothing like that trajectory was achievable in 2021, and the reason is specifically a model capability: **estimating nutrition from a photograph.** This is the one pillar of the claim that is genuinely new — and note that it's the *assessment* pillar, not the *agent ordering* pillar.

### 1d. Benchmarks

Multimodal models reached ~88% food recognition accuracy under heavy occlusion and ~75% composition accuracy; 2025 peer-reviewed evaluations found ChatGPT and Claude match traditional self-reported dietary assessment accuracy **without the user burden** ([PubMed](https://pubmed.ncbi.nlm.nih.gov/41081011/); [PMC benchmark](https://pmc.ncbi.nlm.nih.gov/articles/PMC13401436/)). Web-agent benchmarks have also climbed steeply on paper — WebArena and OSWorld leaderboards now report scores in the 70–86% range versus 12–35% for 2024-era agents ([Steel.dev leaderboards](https://leaderboard.steel.dev/leaderboards/osworld/)) `[UNVERIFIED — third-party leaderboard aggregator, not the original benchmark authors]`.

---

## Part 2 — Evidence AGAINST

### 2a. The agentic checkout rail partially collapsed — in public, this year

**March 17, 2026: OpenAI scaled back Instant Checkout.** Users are now redirected to partner apps (Instacart, Target, Expedia) to pay, rather than completing purchase in chat. Reported reasons: **product data was frequently wrong**, merchant onboarding was far harder than expected, and OpenAI couldn't ship multi-item carts or loyalty connections. Out of Shopify's millions of merchants, **roughly a dozen went live**. Users researched in ChatGPT but wouldn't pay there. The industry regrouped around "**discover in AI, buy on your own site.**" ([CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html), [Modern Retail](https://www.modernretail.co/technology/what-went-wrong-with-chatgpts-instant-checkout/), [Forbes](https://www.forbes.com/sites/jasongoldberg/2026/03/10/why-openais-checkout-retreat-spells-trouble-for-its-commerce-strategy/))

This is the single most damaging fact for the claim. **The specific capability the claim rests on — an agent completing the grocery order — is the part that has most visibly failed to hold up at scale in the past year.** Multi-item carts, which is exactly what a week's groceries is, were named as a thing it could not do.

### 2b. Agent reliability decays with repetition, and groceries are a repeated task

τ-bench measures multi-turn tool-use agents against realistic retail/airline tasks. Frontier function-calling agents scored ~61% on τ-retail single-attempt (pass^1), but **pass^8 — succeeding on all 8 independent attempts at the same task — fell below 25%**. The benchmark's authors conclude agents "lack sufficient consistency and rule-following ability to reliably build real-world applications." ([τ-bench paper](https://arxiv.org/pdf/2406.12045); [Sierra](https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents))

A meal-planning app is a **weekly** task. A 90%-per-attempt agent is right on all 8 of a two-month run only **57%** of the time. Groceries are exactly the domain where pass^k, not pass^1, is the number that matters.

### 2c. Headline agent benchmark progress is contested

The Online-Mind2Web team titled their evaluation paper **"An Illusion of Progress?"** and showed that the same agents score dramatically differently depending on the automatic evaluator used — raising the question of how much of the reported gain is genuine capability versus evaluation artifact. ([OSU-NLP-Group](https://github.com/OSU-NLP-Group/Online-Mind2Web))

### 2d. The allergy pillar is where LLMs are actually dangerous

- Across LLMs, **problematic responses to patient-posed medical questions ranged 21.6% (Claude) to 43.2% (Llama), with unsafe responses 5% to 13%** ([npj Digital Medicine](https://www.nature.com/articles/s41746-026-02428-5))
- A study of ChatGPT-generated allergy diets found it produced balanced diets but was **unsafe for one allergen**, and **over 60% of its cited sources were wrong or fabricated** ([J Acad Nutr Diet](https://www.sciencedirect.com/science/article/pii/S0899900723001053))
- A 120-question allergology evaluation found **six critical errors**, including a **pediatric food-allergen error with potentially life-threatening risk** ([JACI In Practice](https://www.sciencedirect.com/science/article/pii/S2213219825002806))

The claim asserts an AI agent can do allergy exclusion. The literature says a probabilistic model doing allergen exclusion without a deterministic check is a safety hazard. **Allergen exclusion should be a database rule the AI is not allowed to override** — which is an argument that this pillar should *not* be AI at all.

### 2e. The physical last mile is unchanged

Instacart sits at **1.2★ across 12,279 Trustpilot reviews** for substitutions, missing items and refused refunds (Section 2). No model improvement fixes a shopper picking the wrong item. An agent that orders perfectly still delivers the category's worst-rated experience.

---

## Part 3 — Counterargument 1, argued at full strength

### **"This was already possible five years ago."**

Not just five. **Ten.** Take the claim's four pillars in turn:

**Grocery ordering from a locally selected store, triggered by a meal plan:**
- **October 2015** — Instacart + Allrecipes: click a recipe, ingredients go to your cart ([TechCrunch](https://techcrunch.com/2015/10/12/instacart-and-allrecipes-now-let-you-add-a-meals-ingredients-to-your-grocery-list-with-a-click))
- **September 2016** — **Eat This Much** shipped one-click export of an auto-generated meal plan's grocery list to Instacart, delivered in as little as an hour ([Utter Buzz](https://utterbuzz.com/2016/09/eat-this-much-updates-adds-one-click-grocery-shopping-and-more/))
- **December 2016** — eMeals + Instacart ([PRWeb](https://www.prweb.com/releases/2016/12/prweb13941728.htm))
- **March 2019** — Chicory cut recipe-to-retailer-cart to **two clicks across 60+ retailers** ([PRNewswire](https://www.prnewswire.com/news-releases/chicory-streamlines-two-click-shoppable-recipe-experience-300816072.html))

**Diet and nutrient assessment:** USDA FoodData Central has been public for years; Mifflin-St Jeor has been the standard BMR equation since 1990; Cronometer has tracked ~84 micronutrients for over a decade. None of this needed a model.

**Allergy exclusion and preferences:** Mealime shipped **200+ personalization options** including allergens and disliked ingredients — as rules, pre-LLM ([mealime.com](https://www.mealime.com/)).

**Recipe selection to macro targets:** Eat This Much has auto-generated plans to macro targets since 2013.

**And the bundle exists today, sold by the incumbent:** MyFitnessPal's **Premium+** advertises "personalized meal plans, integrated grocery delivery" with automatic grocery lists — reportedly Instacart, Walmart+ and Amazon Fresh — at the same $19.99/month this project proposes ([App Store listing](https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718)). They also bought the meal-planning app **Intent** (2025), integrated with **ChatGPT Health** (Jan 2026), and bought **Cal AI** (Dec 2025). `[Retailer names and tier boundaries are from secondary sources — MyFitnessPal's own support page returned 403]`

**The strong form of this argument:** every function in the claim has shipped before, several of them a decade ago, and the current market leader ships all of them together right now. "AI agent" is not the enabling condition — it's a new UI on a pipeline that has existed since 2016. The reason these products didn't win wasn't missing technology; it's that **users abandon meal plans** (Section 1: tracking consistency 68% → 21% by week 12), which no model fixes.

**Where this argument is weakest:** it conflates *a button that exports a list* with *a system that reasons over unstructured constraints*. 2016 Eat This Much could export a list; it could not take "I'm on Zepbound, I hate mushrooms, my partner is vegetarian, keep it under $120, and I have 20 minutes a night" as input. Every pre-LLM system required the user to translate their life into a form. That translation step is where people quit.

---

## Part 4 — Counterargument 2, argued at full strength

### **"This still is not possible."**

**1. The checkout leg just failed in public.** OpenAI pulled back Instant Checkout in March 2026 over wrong product data and an inability to handle **multi-item carts** — the defining property of a grocery order. A dozen live merchants out of millions. The industry's own conclusion was "buy on your own site." You would be building on a rail its own creator is retreating from.

**2. Reliability math doesn't clear the bar.** A weekly grocery order with 25–40 line items, substitutions, sizes and units is a long-horizon task. τ-bench shows pass^8 collapsing below 25% where pass^1 is 61%. For a task users repeat weekly, the operative failure rate is compounded, not per-attempt. One wrong order — a $90 cart of the wrong things, or an allergen in the basket — ends the subscription.

**3. The safety-critical pillar can't be delegated to the model.** 5–13% unsafe response rates, a documented life-threatening pediatric allergen error, and fabricated sources in 60% of citations. For allergy exclusion you need a deterministic guarantee, and an LLM is the wrong instrument. Any honest build ships rules for exclusion and uses AI only for suggestion — at which point "the AI agent compiles the features" is no longer the description of the product.

**4. Nutrition estimation is not accurate enough to anchor a plan.** The same 2025 research cited in favor concludes these models **systematically underestimate large portions** and vary widely on macros, making them unsuitable where quantification matters ([PubMed](https://pubmed.ncbi.nlm.nih.gov/41081011/)).

**5. Access is granted, not guaranteed.** Amazon sued Perplexity and won an injunction before losing it on appeal; Amazon is still fighting, and has said it prefers negotiated partnerships. Retailer catalogs are behind terms of service that can change. An agent-scraping strategy is a legal dependency, not an architecture.

**6. The physical layer fails regardless.** Instacart's 1.2★ substitution problem is a human-and-logistics failure that no agent improves.

**Where this argument is weakest:** it judges the *general-purpose autonomous* agent, not the *narrow, structured* integration. Nothing here says a nutrition app can't call the Instacart Developer Platform's documented cart API with a validated product list. That path doesn't require an agent to browse a website at all — it requires an API call. Counterargument 2 defeats "an autonomous agent shops for you"; it does not defeat "an app builds a validated cart through a partner API."

---

## Part 5 — What survives

The original claim fails on two counts: the pillars aren't new (Part 3), and the agentic-execution premise is weaker now than it was six months ago (Part 4).

**Here is the version that survives all the evidence above:**

> Not newly *possible* — newly **cheap, personal and low-friction**. Four things changed between 2021 and 2026: (1) nutrition can be captured from a **photo** instead of a search box, which removed the logging burden that killed adherence — proven commercially by Cal AI's $40M in 18 months; (2) a user's constraints can be expressed in **plain language** rather than forms and toggles; (3) grocery carts became **documented APIs** (Instacart Developer Platform, March 2024) rather than integrations you had to negotiate; and (4) **25% of consumers already use AI to build grocery lists**, so the behavior no longer needs to be taught. What has *not* changed is that the ordering step must be a validated API call with human confirmation, and that allergen exclusion must be deterministic — not agentic.

That framing is defensible in front of someone who has read the same research. The original is not.

### Four tests that would falsify this — run them before building

1. **Cart-accuracy test.** Take 20 real meal plans, have the system build carts, and count line-item errors (wrong size, wrong product, missed substitution). If accuracy is below ~95%, the claimed automation isn't there. This is precisely where OpenAI's Instant Checkout failed.
2. **Allergen red-team.** 100 plans for users with an uncommon allergy (cilantro, alpha-gal, low-histamine). Any single leak is a product-defining failure, and the literature predicts leaks.
3. **pass^k test, not pass^1.** Run the same weekly order 8 times. Report pass^8. That number, not a demo, is the product.
4. **Differentiation test.** Have five people run the same week through MyFitnessPal Premium+ ($19.99, already shipping the same bundle) and through a ChatGPT + Instacart app conversation (free). If neither is meaningfully worse, the market gap is positioning, not capability.

---

## Flags

| Item | Status |
|---|---|
| WebArena / OSWorld scores (74–86%) | `[UNVERIFIED]` — third-party leaderboard aggregator; original benchmark authors publish lower and non-comparable figures. Treat direction, not level. |
| MyFitnessPal Premium+ retailer list & tier boundary | `[UNVERIFIED]` — MyFitnessPal's own support page returns 403; Apple's listing confirms "integrated grocery delivery" and names Premium Plus, but not the retailers. **This also corrects Section 3, which recorded Premium+ as unverified — Apple's listing names it.** |
| Walmart "ended" its Instant Checkout partnership | `[UNVERIFIED]` — one secondary outlet says ended; primary coverage describes OpenAI scaling the feature back while Walmart moved to a Sparky app inside ChatGPT. Treat as "restructured," not "terminated." |
| Sparky's +60% QoQ and +40% basket figures | ⚠️ Company-reported via analyst coverage, not an SEC filing. |
| MorganMyers Food Pulse (25% grocery-list figure) | ⚠️ n=366, ±5% margin — small sample, marketing-industry survey. |
| Adobe AI-traffic figures | ⚠️ Vendor analytics on its own customer base, not a census of retail. |
| Reddit / G2 | ❌ Still blocked; no community sentiment on agentic grocery ordering is included. |
| τ-bench figures | ⚠️ Retail/airline customer-service domains, not grocery. Directionally applicable, not a grocery measurement. |
