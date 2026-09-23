# Testing the Claim: "A Voting App Is Newly Possible Because an AI Agent Can Compile and Continuously Update Voting Information"

**Prepared:** September 22, 2026
**Window searched:** March 2025 – September 2026, plus the historical record needed to test counterargument 1.

## The claim, stated precisely

> A voting app is **newly possible** because an AI agent can **compile the data** and provide **continuously updated** voting information.

**Verdict up front: the claim fails twice.** The compile-and-deliver capability is **fourteen years old** and free, and in the last twelve months **every major AI assistant has shipped exactly this feature** — sourced from the same nonprofit — to hundreds of millions of people at no charge. What is genuinely new is much narrower, and stated at the end.

---

## Part 1 — Evidence FOR

### 1a. Product launches (last 18 months)

| Date | Launch | Relevance |
|---|---|---|
| **Sept 9, 2026** | **Google** ships voting tools across **Search, AI Mode, AI Overviews and the Gemini app** — polling locations, registration deadlines and official data from state and local governments and **Democracy Works**, plus AP results | The claimed product, inside the world's default search surface ([Google blog](https://blog.google/company-news/outreach-and-initiatives/civics/midterm-elections-2026/)) |
| **Fall 2026** | **OpenAI** partners with **Democracy Works** (voting and registration information via API) and **AP** (live vote counts) inside ChatGPT | Same, inside the most-used assistant ([TechPolicy.Press](https://www.techpolicy.press/how-openai-google-and-anthropic-plan-to-handle-the-2026-us-midterms/)) |
| **2026** | **Anthropic** uses **Democracy Works** data with banners directing users to **TurboVote** | Same, third platform ([TechPolicy.Press](https://www.techpolicy.press/how-openai-google-and-anthropic-plan-to-handle-the-2026-us-midterms/)) |
| **Nov 2024** | **Perplexity election hub** — voting requirements, poll times, and **AI-summarized analyses of ballot measures, candidates, policy stances and endorsements**, using Democracy Works and AP data | The closest existing implementation of your full feature set ([TechCrunch](https://techcrunch.com/2024/11/01/perplexity-launches-an-elections-tracker)) |

### 1b. Accuracy improved measurably

Early 2024: expert raters found **half** of leading models' election answers inaccurate ([Proof News / AI Democracy Projects](https://www.cbsnews.com/news/ai-chatbots-inaccurate-election-information-proof-news/)); GroundTruthAI measured **27% wrong** ([NBC](https://www.nbcnews.com/tech/tech-news/ai-chatbots-got-questions-2024-election-wrong-27-time-study-finds-rcna155640)). In 2026 follow-up testing across Arizona, Pennsylvania and Michigan, verifiable factual error rates for Google's AI and ChatGPT **fell to 0%**, down from 6.9% and 8.2% in an earlier round ([CyberScoop](https://cyberscoop.com/ai-chatbots-2026-midterm-elections/)).

### 1c. Voters are already doing it

**About half of US adults now use AI chatbots**, up from a third in 2024 (Pew, June 2026), and reporting describes voters using ChatGPT, Gemini and Claude as de facto ballot guides. ([TIME, Sept 2026](https://time.com/article/2026/09/10/election-voting-gemini-chatgpt-claude/); [CyberScoop](https://cyberscoop.com/ai-chatbots-2026-midterm-elections/))

### 1d. One task where AI is unambiguously the right tool

2025's statewide ballot measures averaged a **doctorate-level reading level** — the highest since tracking began ([Ballotpedia](https://news.ballotpedia.org/2025/10/20/2025-statewide-ballot-measures-written-at-the-highest-reading-level-equivalent-to-a-doctorate-degree-since-ballotpedia-started-tracking-in-2017/)) — while 23 states have laws calling for plain language. Rendering that text at a controlled reading level, with the original alongside, is a task current models do well.

---

## Part 2 — Evidence AGAINST

### 2a. The strongest single fact: Google quit this problem

Google **turned off** the Civic Information **Representatives API on April 30, 2025**. One call used to return every elected official for any US address, from president to school board. It now returns nothing. ProPublica's Congress API was archived in February 2025 and OpenSecrets paywalled in April. ([Turndown notice](https://groups.google.com/g/google-civicinfo-api/c/9fwFn-dhktA); [Crawlify](https://www.crawlify.ai/insights/civic-data-gap-google-civic-api-shutdown))

**A trillion-dollar company with the best data infrastructure on earth ran this service for over a decade and shut it down.** That is not evidence the problem is newly solvable. It is evidence that maintaining address-to-office data across 10,000+ jurisdictions is economically unattractive even at Google's scale.

### 2b. Accuracy is still not clean where it counts

The Institute for Strategic Dialogue tested six chatbots on 15 prompts: **29% of responses were incomplete, inaccurate or outdated**, and **Spanish-language responses were 16% less likely to be accurate**. Technically correct answers often failed to point voters to official sources. ([ISD](https://www.isdglobal.org/publication/chatbots-and-the-ballot-box-evaluating-accuracy-sourcing-and-language-gaps-in-ai-answers-to-election-questions/); [The Hill](https://thehill.com/policy/technology/6071757-ai-chatbots-election-info-inaccuracy/))

### 2c. The labs deliberately refuse the feature you most want

Claude, ChatGPT and Gemini are **explicitly trained not to make political recommendations** — and reporting notes they do it anyway when a prompt is rephrased as a "ballot rundown." OpenAI prohibits scaled campaign messaging for or against a candidate or ballot measure and is declining political ads this cycle; Anthropic trains for equal treatment of political viewpoints. ([TIME](https://time.com/article/2026/09/10/election-voting-gemini-chatgpt-claude/); [TechPolicy.Press](https://www.techpolicy.press/how-openai-google-and-anthropic-plan-to-handle-the-2026-us-midterms/))

**The three organizations with the most capable models have decided that judging candidates is a line they won't cross.** Your "truthful critique" feature is the thing they are actively engineering *against*.

### 2d. The source data is missing, not merely unformatted

**80% of candidates gave Ballotpedia no positions in 2024** — its best year ([Ballotpedia](https://news.ballotpedia.org/2025/01/16/6541-candidates-responded-to-ballotpedias-candidate-connection-survey-in-2024/)). VOTE411 marks non-responses as blanks. No model can compile what nobody said.

### 2e. Current AI-era attempts are failing publicly

Politik App, launched recently: ZIP-only lookup returns the **wrong representative** (multiple reviewers, May–July 2026); one user placed in the wrong state; reviews titled **"Misinformation"** and **"AI Slop."** Two Secretary of State apps — the ones with authoritative data — show ballots that **don't match the real ballot** (Section 1). The New York Attorney General has formally warned voters not to rely on AI chatbots for election information ([NY AG](https://ag.ny.gov/press-release/2024/attorney-general-james-warns-voters-against-relying-ai-chatbots-election)).

---

## Part 3 — Counterargument 1, argued at full strength

### **"This was already possible five years ago."**

**Fourteen years ago, and it worked better than it does now.**

**September 2012:** Google launched the **Civic Information API** — free, public, and documented. It returned, for any residential address: **polling places, early vote locations, drop-off locations, candidate data, referendum data, and election official contacts**, plus every elected representative from president to school board. ([TechCrunch, Sept 2012](https://techcrunch.com/2012/09/21/google-launches-a-civic-information-api-for-the-upcoming-u-s-elections/amp/); [Google developer docs](https://developers.google.com/civic-information/docs/v2/elections/voterInfoQuery))

**Every element of your claim — compile the data, keep it current, deliver it to a voter by address — was a free API call from 2012 until April 2025.** Any competent developer could have built your app in a weekend for thirteen years. Several did; Section 2 shows what happened to them.

**October 2006:** the League of Women Voters launched **VOTE411** — polling-place locator, ballot lookup, candidate positions on issues. **Twenty years ago.** It served 9M+ users across 29,000+ races in 2024. ([VOTE411 about](https://www.vote411.org/about); [LWV](https://www.lwv.org/elections/vote411))

**2012:** TurboVote. **2015:** BallotReady. **Since 2018:** Democracy Works has supplied Google with verified official election data — the same pipeline now feeding ChatGPT and Claude. ([Democracy Works](https://www.democracy.works/voting-info-project))

**"Continuous updates" is not an AI capability.** It is a data pipeline from 10,000 election offices, and Democracy Works has been running it for more than a decade. AI does not collect election data; **it consumes what Democracy Works collects** — which is exactly what OpenAI, Google and Anthropic are all doing.

**The strong form:** the capability was never the constraint. It was free and public for thirteen years, and voter turnout in local elections stayed at 9–25%. **The binding constraint is attention and money to maintain the data — and on the money question, Google already voted by shutting the API down.**

**Where this argument is weakest:** the 2012 API handled *structured* facts — where to vote, who is on the ballot. It could not read a 900-word constitutional amendment written at a doctorate reading level and explain what a yes vote does. It could not read a candidate's local news coverage when the candidate answered no surveys. That interpretive layer genuinely did not exist before 2023, and it is the half of your product that is not fourteen years old.

---

## Part 4 — Counterargument 2, argued at full strength

### **"This still is not possible."**

**1. The distribution war is already lost.** Google ships this in Search, AI Mode, AI Overviews and Gemini. OpenAI ships it in ChatGPT with AP results. Anthropic ships it in Claude with TurboVote banners. All free, all preinstalled or already open on the user's phone, all sourced from the same authoritative nonprofit you would have to license. **A standalone app must persuade someone to download something in order to get what their existing assistant now answers for free.**

**2. The data problem is unsolved and getting worse.** Google's Representatives API is gone, ProPublica's is archived, OpenSecrets is paywalled, and 80% of candidates publish nothing. The remaining path — machine-reading 10,000 jurisdictions' websites and PDFs — is a permanent data-operations cost, not a one-time build.

**3. Accuracy still fails at 29% in the broad test**, and worse in Spanish. In this category, a single error is not a bug report — Section 2 shows reviewers calling for apps to be **taken down** over one wrong fact. The error budget is effectively zero, and no current system meets it.

**4. The feature that differentiates you is the one every major lab refuses to ship.** Truthful critique of candidates is an editorial judgment. OpenAI won't take political ads; Anthropic trains for equal treatment; all three avoid recommendations. Building it means accepting a risk that organizations with far more resources decided not to take — and Section 3 shows VOTE411 being called a "data-mining sham" for merely asking every candidate the same questions.

**5. Nobody will pay for it.** Section 4 put the base case at roughly $650,000/year across a cycle, in a category where every serious competitor is free by mission.

**Where this argument is weakest:** it judges a general-purpose voting app. It says nothing against a **narrow** product — a ballot-measure explainer, or a data supplier feeding the assistants and civic groups that now need what Google stopped providing. The vacuum Google left is real, and someone will fill it.

---

## Part 5 — What survives

The claim fails on both clauses: not newly possible (2012), and not uncontested (2026). Here is the version that survives:

> **Compiling and delivering voting information is not newly possible — it has been a free API call since September 2012, and as of this cycle it is a free feature of ChatGPT, Gemini and Claude, all sourced from Democracy Works.** Two things *are* new. First, **interpretation**: a model can now turn a doctorate-level ballot measure into eighth-grade English with the original alongside, and can read a candidate's local coverage when the candidate answered no surveys — neither was possible before 2023. Second, **the vacuum**: Google's April 2025 shutdown removed the structured feed the whole civic-tech ecosystem depended on, so machine-reading 10,000 jurisdictions' unstructured sources went from unnecessary to the only path. **The opportunity is not a voting app. It is the ballot-explainer layer and the data supply underneath it** — and the customers for that are the assistants, states and civic groups that just lost their feed, not consumers paying $4.99.

### Four tests that would falsify this — cheapest first

1. **The assistant test (one hour, free).** Ask ChatGPT, Gemini and Claude your three core questions — when do I vote, what's on my ballot, what does this measure do — for five addresses in five states. **If they answer well, your app competes with free and already-installed.** Do this before anything else.
2. **The address test.** Build ZIP→district and address→district lookups and measure error rates against official sources for 100 addresses. Politik failed this publicly and got reviews titled "Misinformation."
3. **The coverage test.** Pick three counties and assemble a complete ballot with candidate positions from scratch. Time it. Multiply by 10,000 jurisdictions. That product is your real cost structure.
4. **The Democracy Works test.** Ask them what licensing their Elections API costs. They already supply Google, OpenAI, Anthropic and Perplexity. **If you can't beat their data, you are a customer, not a competitor.**

---

## Flags

| Item | Status |
|---|---|
| OpenAI's own election page | ❌ 403 to this tool; details come from [TechPolicy.Press](https://www.techpolicy.press/how-openai-google-and-anthropic-plan-to-handle-the-2026-us-midterms/), a secondary source. |
| "Error rates fell to 0%" | ⚠️ A narrow follow-up test of two assistants in three states, via CyberScoop. ISD's 29% is the broader and less flattering measure. |
| Google Civic API launch date | ⚠️ TechCrunch reports the launch in **September 2012**; some sources say 2013. Either way it predates the claim's five-year window by more than a decade. |
| Perplexity election hub current status | ⚠️ Launched Nov 2024; I did not verify it is still running for 2026. |
| Pew chatbot-usage figure | ⚠️ Cited via CyberScoop's account of the June 2026 survey, not the Pew release itself. |
| "Models refuse political recommendations but comply when rephrased" | ⚠️ Journalistic testing (TIME), not a controlled study. |
| Reddit / G2 | ❌ Blocked throughout this dossier. |
| Democracy Works API pricing | ❌ Not published; test 4 above exists because I could not answer it. |
