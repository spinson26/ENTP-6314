# Discovery Report: HushPlate (first draft, filled)

**Prepared:** 16 Oct 2026. Word version: `research/Discovery Report - FIRST DRAFT - FILLED (10.16.2026).docx`. Sources are numbered [n] and listed at the end.

## Finding Market Problems

### The market problem you are solving, defined explicitly, and why now is the right time to target it?

- **The problem**
  - Longevity eaters (US adults who want to eat healthy every day to lose weight, maintain weight, gain muscle or live longer, including dieters and GLP-1 users) eat poorly because they don’t know their daily nutrition needs and lack the time to pick recipes, build grocery lists to those needs and shop for them. [1]
  - They also can’t tell whether their daily choices are helping or hurting their long-term health, and have no statistics to show their doctor. [2]
  - Healthy-eating efforts fail quickly: consistent calorie tracking falls from 68% of users in week 1 to 21% by week 12, and obesity-treatment dropout reaches 57% at 6 months. [3]
  - Our 20 customer interviews narrowed the problem: the most common pain was running out of time or energy and grabbing fast food (12 of 20), followed by knowing what to eat but not sticking to it (9 of 20). [4]
  - The interviews did not support our original pitch of “juggling a tracker, a recipe app and a grocery app”: none of the 20 tracks food in an app regularly, and none uses grocery delivery. [5]
  - The market gap: apps split into those that know your nutrition but can’t buy food (MyFitnessPal, MacroFactor, Fitia) and those that buy food but barely know your nutrition (eMeals, Mealime, Plan to Eat, Samsung Food), and none turns a nutrient gap into recipes and a cart. [6]
- **Why now**
  - GLP-1 drugs: 12% of US adults (about 31 million) are taking one now and 18% (about 47 million) have ever taken one. These people need enough protein and micronutrients while their appetite is suppressed, and none of the nine apps we reviewed is designed for that. [7]
  - Grocery carts became an API: the Instacart Developer Platform (March 2024) lets outside apps build carts from about 1 billion products at 85,000 stores. [8]
  - AI made the busywork cheap: nutrition can be captured from a photo (Cal AI reached 15M+ downloads and $40M in trailing 12-month sales), and 25% of consumers already use AI to build grocery lists. [9]
  - Mealime, which combined preferences, recipes and grocery lists, shuts down on 21 Oct 2026, and its users are being moved into a grocery chain’s app, which opens a short window to win them. [10]
  - Caution: our claim test concluded this is not newly possible, only newly cheap, personal and low-friction. OpenAI scaled back ChatGPT Instant Checkout in March 2026, partly because multi-item carts didn’t work, so ordering must stay a confirmed step the user approves. [11]

### The size of the target market, with the assumptions behind your estimate stated?

- Method: a bottom-up funnel built from government and survey sources. It does not take a share of the $135B US weight-loss market or the $217B online grocery market. [12]
- Funnel: 340.1M US residents → 267.0M adults → 27% actively working on their weight (72.1M) → 91% own a smartphone (65.6M) → 19.5% buy groceries online at least monthly = serviceable market of 12.8 million adults. [13]
- Case A, the original $19.99/month price: 0.25%, 1.0% and 2.5% adoption give 32,000, 128,000 and 320,000 subscribers, or $7.7M, $30.7M and $76.8M a year in gross revenue ($6.1M, $24.6M and $61.4M after a 20% app-store fee). [14]
- Case B, at the price the survey points to: 58% of subscribers pay yearly at $99.99 and 42% pay monthly at $14.99, which averages $133.54 per subscriber per year. That gives $4.3M, $17.1M and $42.7M in gross revenue ($3.4M, $13.7M and $34.2M net), about 44% less than Case A. [15]
- Cross-check using GLP-1 users only: 32.0M on a GLP-1 → 29.1M with smartphones → 5.7M ordering groceries online monthly → 57,000 subscribers at 1% adoption, or $13.7M gross at $19.99 ($7.6M at the survey price), about 45% of the base case. [16]
- Adoption rates (0.25%–2.5%) are set by comparison with paid bases at WeightWatchers (2.8M), MyFitnessPal (~3.9M, inferred) and Noom (~1.5M). They are not measured, and they are the input the result depends on most. [17]
- Churn is the binding limit: at an average paid stay of 7 months, holding 128,000 subscribers takes about 219,000 new paying subscribers a year. [18]
- Other assumptions: a 20% blended app-store fee (web checkout could cut it to ~3%), and every subscriber pays full price (real collected revenue usually runs 10–20% lower). [19]
- Sensitivity: a looser online-grocery gate (61% of households bought groceries online at least once in 2025) raises the serviceable market to 40.0M, and NHANES’ 47.4% “tried to lose weight in the past year” raises it to 22.5M. The strict version is used deliberately. [20]
- Not included: grocery delivery fees, cart commissions, advertising and health-plan or employer sales. Also, the model sizes weight-loss dieters, not the wider longevity-eater group (maintain weight, gain muscle, live longer) in the current spec, so that larger group is still unsized. [21]

## Understanding Customers

### What you learned from customer research from the Survey?

- **Survey (19 completed responses, 9–12 Oct 2026)**
  - The sample is small and was shared by anonymous link, so it probably reflects our own network rather than a random group of longevity eaters. [22]
  - Most wanted features: daily nutrition targets (17 of 19), preferred foods (12), diet choice (11), then health statistics, 3 healthier restaurant options, workout education and workout tracking (10 each). [23]
  - Least wanted: the AI agent filling the cart (6 of 19), restaurant learning via CheapFoodMap (6), gamification (6) and daily quotes (5). [24]
  - Price: 11 prefer yearly and 8 monthly. The middle answers were about $15 a month or under $120 a year. On delivery, the most common choice was a flat $5–$9.99 per order; those who preferred a percentage of the order chose 3–6%. [25]
  - Trial: the middle and most common answer is 4 weeks, and a 30-day trial would satisfy 12 of 19. [26]
  - How they find apps: word of mouth (12 of 19, and ranked first most often), Instagram (9), Google Search (6), TikTok (5) and ChatGPT (5). [27]
  - Why they don’t use an app like this: tedious logging (10), cluttered screens (10), never thought they needed one (9), cost (7), messy restaurant and shared meals (6) and privacy (5). [28]
- **Interviews (20 Mom Test interviews, 6 Oct 2026)**
  - About 8 of the 20 were not trying to lose weight and only 2 were on a GLP-1, so the sample only partly matches the target user. [29]
  - In most failure stories the groceries were already in the house; what ran out was the time or energy to cook. HushPlate as pitched would have prevented 1 of 19 failure days (up to 7 on a generous count). [30]
  - Nobody pays for a food app today: 3 said outright they won’t, and one cancelled a $3/month recipe app. Real spending goes to GLP-1 drugs, dietitians and premade or pre-marinated food. [31]
  - 11 of 20 have someone else doing the shopping or cook for others, so the buyer may be the household cook rather than the person dieting. [32]
- **What the two agree on**
  - People want the profile and nutrition-target side of HushPlate, while the grocery-ordering side is weak in both (6 of 19 survey respondents want the AI cart; none of 20 interviewees uses delivery). [33]
  - Next step from the interview verdict: don’t build as pitched yet. Run a second round with 12–15 better-matched people, a two-week hand-built pickup-cart test, and a request for a refundable deposit, with set criteria for going ahead or stopping. [34]

## Working out a Business Model

### A business model with planned pricing?

- How HushPlate makes money: a subscription for the app, plus a possible fee on grocery orders placed through the AI agent. The survey tested both. The longevity doctor is paid separately by the user, so it brings in no revenue. [35]
- Payments and addresses are handled by the AI agent through its API and never stored by HushPlate, so grocery money passes through the agent, not through us. [36]
- Option A, Premium at $19.99/month: the price the market-size model used, matching MyFitnessPal Premium and Fitia. It earns the most per user ($239.88 a year), but it sits at the top of the category and only 3 of the 8 survey respondents who prefer monthly chose a band of $20 or more. [37]
- Option B, the survey price of $14.99/month or $99.99/year with a 30-day free trial: it matches what respondents said and the 58% who prefer yearly, but earns about 44% less per subscriber ($133.54 a year on average), so it needs more subscribers. [38]
- Option C, free core plus paid upgrade: nutrition targets and profile free, with recipes, cart and restaurant features paid. This answers “if it isn’t free, I am not buying” and the 9 of 19 who never felt they needed an app, but moving free features behind a paywall later is the category’s top complaint. [39]
- Grocery fee options: a flat $5–$9.99 per delivery with 1–3 free deliveries a month (preferred by 9 of 19); 3–6% of the order (7 of 19, median 4%, or $4 on a $100 order); or a monthly unlimited-delivery plan (only 3 of 19). [40]
- Value argument: doing this job with people (a nutrition coach plus a grocery shopper) costs about $150 a month, and a personal chef $1,500+, so even $19.99 is about 13% of the cheapest human option. [41]
- Terms as a selling point: a plain price, easy cancellation, no ads and data export would stand out, because 39% of 479 critical competitor reviews were about money and billing, and 10 of 19 survey respondents named cluttered screens. [42]
- Costs to plan for: a 15–30% app-store fee (20% blended in the model), the bought AI-agent service on every order, and the cost of replacing churned users (about 219,000 new subscribers a year at the base case). [43]
- Untested and not yet modeled: there is no evidence yet that anyone will pay, which the next interview round will test with a refundable deposit, and health-plan or employer sales remain possible upside. [44]

## Assessing Competition and Moats

### An analysis of your competitors?

- Scope: 9 apps compared on price, features, target customer, ownership and complaints, using their own pricing pages or App Store listings and 479 critical App Store reviews (3 stars or fewer since 22 Mar 2025). [45]
- Trackers that can’t buy food: MyFitnessPal ($19.99/month or $79.99/year; 4.7 stars from 2.4M ratings; about $310M revenue in 2025, down 5.7%), MacroFactor ($11.99/month, no free tier) and Fitia ($19.99/month). [46]
- Planners that buy food but barely know nutrition: eMeals (from $4.99/month, ordering through 8 retailers), Samsung Food ($6.99/month, 23 retailer links), Plan to Eat ($5.95/month) and Mealime (closing 21 Oct 2026). [47]
- In between: Eat This Much ($8.99–$14.99/month) plans to macro targets but its top complaint is nonsensical, repetitive plans (39%); MealPrepPro’s is price versus AI-made value (58%), and users say it ignores their exclusions. [48]
- Closest threats: MyFitnessPal Premium Plus already advertises personalized meal plans with integrated grocery delivery, and a ChatGPT conversation with the Instacart app does much of this for free. [49]
- Top complaints across the category: pricing, paywalls and billing (39%), nutrition data accuracy (26%), recipe quality and repetition (22%), bugs and redesigns (14%), and grocery integration and lock-in (12%). [50]
- Indirect competitors are the real incumbents: phone-note lists and mental tallies, a spouse or parent who plans, premade food, dietitians and GLP-1 drugs. [51]
- Gaps nobody serves well: micronutrient gaps turned into a cart, exclusions and allergies that reliably hold, retailer neutrality with data export, GLP-1 users, a priced cart before purchase, one plan for a household, and pantry planning that works. [52]
- Takeaway: every HushPlate feature already exists somewhere in the category, so our edge has to come from combining them and doing them reliably, not from any single feature. [53]

### Your defensibility argument: what makes your product's proposed moat hold up?

- Honest starting point: HushPlate has no strong moat today. The features can be copied, and the stores, AI agents, recipes and nutrition data it depends on are open to anyone who pays. [54]
- Ranked by how much each matters to this business: switching costs (1), brand (2), process power (3), network effects (4), scale economies (5) and cornered resource (6, irrelevant here). [55]
- The moat we can start now is switching costs. Each user’s health statistics, pantry, workout plan, daily audit history and personal recommendations build up over time, and the export is a PDF for a doctor that a rival app can’t import. [56]
- A second, thinner barrier: the weekly top-10% recommendations get better as more people join, but they stay weak while the user base is small. [57]
- A position owned rivals can’t easily copy: staying neutral across grocery stores. Mealime (owned by Albertsons) and Samsung Food were bought to lock users in, and Mealime users are leaving because of it. [58]
- Process power over time: exclusions that never fail and accurate carts, proven by tests before launch (at least 95% cart accuracy, 100 allergy test plans with zero leaks, and the same weekly order placed correctly 8 times out of 8). Building this needs years of real use. [59]
- A focus wedge: designing for GLP-1 users and longevity eaters, which none of the nine competitors targets (based on reviews; not a full feature audit). [60]
- The weak spot: brand ranks 2nd in importance but 5th in what we can build. Winning new users is unprotected, and anyone we attract is equally reachable by MyFitnessPal. [61]
- A built-in tension: data that can’t be deleted before ending service and leaves only as a PDF works against the easy cancel and export that users trust, so the moat we can build pulls against the brand we need. [62]
- Ways to start building brand: word of mouth and Instagram (the top two sources in the survey) and trainer or gym referrals, backed by plain pricing and no ads. [63]

## Sources

1. 07_DietGroceryApp/prd-1.md, “USER” and “PROBLEM.”
2. 07_DietGroceryApp/prd-1.md, “PROBLEM.”
3. 07_DietGroceryApp/ResearchAgents/opportunity-scan.md, section 1d (citing a MyFitnessPal goal-setting study on arXiv and PMC dropout cohorts).
4. 07_DietGroceryApp/research/interview-synthesis.md, section 1, “Recurring pains, ranked.”
5. 07_DietGroceryApp/research/interview-synthesis.md, “Bottom line” and section 4; 07_DietGroceryApp/research/interview-evidence-verdict.md, scorecard item 4.
6. 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 1.
7. 07_DietGroceryApp/ResearchAgents/opportunity-scan.md, sections 1b and 4e (citing KFF poll, Oct–Nov 2025); 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 4 (marked unverified).
8. 07_DietGroceryApp/ResearchAgents/opportunity-scan.md, section 4b (citing the Instacart newsroom and Digital Commerce 360).
9. 07_DietGroceryApp/research/claim-test.md, Part 1c and Part 5 (the 25% figure comes from a MorganMyers survey of 366 people and is flagged as a small sample).
10. 07_DietGroceryApp/research/competitors.md, master table (Mealime) and “The sharpest wedge.”
11. 07_DietGroceryApp/research/claim-test.md, Part 2a (citing CNBC, Modern Retail and Forbes) and Part 5.
12. 07_DietGroceryApp/research/market-size.md, “Method” and “What this model does not claim.”
13. 07_DietGroceryApp/research/market-size.md, “The funnel (base case)” (citing Census Bureau 2024–25, Gallup Nov 2025, Pew Research 2025 and Grocery Dive 2025).
14. 07_DietGroceryApp/research/market-size.md, “Three cases.”
15. Calculated for this report: the funnel and adoption rates come from 07_DietGroceryApp/research/market-size.md; the 11-of-19 yearly split, the ~$15 monthly answer and the “under $120” yearly answer come from 07_DietGroceryApp/research/survey-results-summary.md, section 2. $99.99/yr is an assumed price inside the “under $120” band.
16. 07_DietGroceryApp/research/market-size.md, “Independent cross-check: the GLP-1 wedge” (citing KFF Nov 2025); survey-price figure calculated for this report.
17. 07_DietGroceryApp/research/market-size.md, “Why those adoption rates are defensible” and assumption A5.
18. 07_DietGroceryApp/research/market-size.md, “Three cases” and assumption A8.
19. 07_DietGroceryApp/research/market-size.md, assumptions A7 and A10.
20. 07_DietGroceryApp/research/market-size.md, assumptions A2 and A4 and “Sensitivity.”
21. 07_DietGroceryApp/research/market-size.md, “What this model does not claim”; 07_DietGroceryApp/prd-1.md, “USER.”
22. 07_DietGroceryApp/research/survey-results-summary.md, “Read this first”; raw data in 07_DietGroceryApp/research/1. Qualtrics - Survey Results - (10.14.2026).csv.
23. 07_DietGroceryApp/research/survey-results-summary.md, section 1.
24. 07_DietGroceryApp/research/survey-results-summary.md, section 1.
25. 07_DietGroceryApp/research/survey-results-summary.md, sections 2 and 3.
26. 07_DietGroceryApp/research/survey-results-summary.md, section 4.
27. 07_DietGroceryApp/research/survey-results-summary.md, section 5.
28. 07_DietGroceryApp/research/survey-results-summary.md, section 6.
29. 07_DietGroceryApp/research/interview-synthesis.md, “Interview key” and “Sample problem.”
30. 07_DietGroceryApp/research/interview-synthesis.md, section 1 note; 07_DietGroceryApp/research/interview-evidence-verdict.md, scorecard item 2.
31. 07_DietGroceryApp/research/interview-synthesis.md, section 3, “Evidence of willingness to pay.”
32. 07_DietGroceryApp/research/interview-evidence-verdict.md, scorecard item 9.
33. 07_DietGroceryApp/research/survey-results-summary.md, section 1; 07_DietGroceryApp/research/interview-synthesis.md, section 4.
34. 07_DietGroceryApp/research/interview-evidence-verdict.md, “The decision” and “What would settle it.”
35. 07_DietGroceryApp/research/survey-results-summary.md, sections 2–3; 07_DietGroceryApp/prd-1.md, doctor section.
36. 07_DietGroceryApp/prd-1.md, “DATA WE STORE.”
37. 07_DietGroceryApp/research/market-size.md, assumption A6 and “The price assumption is the weakest part”; 07_DietGroceryApp/research/survey-results-summary.md, section 2.
38. 07_DietGroceryApp/research/survey-results-summary.md, sections 2 and 4; per-subscriber figure calculated for this report.
39. 07_DietGroceryApp/research/interview-synthesis.md, section 4, “Paying for it”; 07_DietGroceryApp/research/survey-results-summary.md, section 6; 07_DietGroceryApp/research/competitors.md, master table (MyFitnessPal: paywalling formerly free basics, 40%).
40. 07_DietGroceryApp/research/survey-results-summary.md, section 3.
41. 07_DietGroceryApp/research/complaints.md, “What companies pay humans to do this job” (citing ZipRecruiter, Indeed Flex and iHireChefs rates); 07_DietGroceryApp/research/market-size.md, price section.
42. 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 8; 07_DietGroceryApp/research/complaints.md, Theme 1; 07_DietGroceryApp/research/survey-results-summary.md, section 6.
43. 07_DietGroceryApp/research/market-size.md, assumptions A7–A8; 07_DietGroceryApp/strategy/moat-ranking.md, Table 2 (scale economies).
44. 07_DietGroceryApp/research/interview-evidence-verdict.md, scorecard item 8 and “What would settle it”; 07_DietGroceryApp/research/market-size.md, “What this model does not claim.”
45. 07_DietGroceryApp/research/competitors.md, “Method”; 07_DietGroceryApp/research/complaints.md, “How this evidence was gathered.”
46. 07_DietGroceryApp/research/competitors.md, master table; 07_DietGroceryApp/ResearchAgents/opportunity-scan.md, section 2 (citing Business of Apps).
47. 07_DietGroceryApp/research/competitors.md, master table.
48. 07_DietGroceryApp/research/competitors.md, master table and per-competitor detail.
49. 07_DietGroceryApp/research/claim-test.md, Part 3 and Part 5, test 4; 07_DietGroceryApp/research/competitors.md, “Flags” (Premium Plus named on Apple’s listing; retailers unverified).
50. 07_DietGroceryApp/research/complaints.md, “The themes.”
51. 07_DietGroceryApp/ResearchAgents/opportunity-scan.md, section 2 (manual workarounds; the chemical shortcut); 07_DietGroceryApp/research/interview-synthesis.md, section 2.
52. 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” items 1–7.
53. 07_DietGroceryApp/strategy/moat-ranking.md, Table 1, rank 1 (switching costs).
54. 07_DietGroceryApp/strategy/moat-ranking.md, Table 1 and “The gap.”
55. 07_DietGroceryApp/strategy/moat-ranking.md, Table 1.
56. 07_DietGroceryApp/strategy/moat-ranking.md, Table 2, rank 1; 07_DietGroceryApp/prd-1.md, “DATA WE STORE” and story item 22.
57. 07_DietGroceryApp/strategy/moat-ranking.md, Table 2, rank 2; 07_DietGroceryApp/prd-1.md, recommendations paragraph.
58. 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 3; 07_DietGroceryApp/strategy/moat-ranking.md, Table 1, rank 6.
59. 07_DietGroceryApp/research/claim-test.md, Part 5, “Four tests”; 07_DietGroceryApp/strategy/moat-ranking.md, Table 2, rank 4.
60. 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 4.
61. 07_DietGroceryApp/strategy/moat-ranking.md, “The gap.”
62. 07_DietGroceryApp/strategy/moat-ranking.md, “The gap”; 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 8.
63. 07_DietGroceryApp/research/survey-results-summary.md, section 5; 07_DietGroceryApp/research/competitors.md, “What does nobody serve well?” item 8.
