# Opportunity Scan — Art Commission & Room-Matching App

**Prepared:** September 22, 2026
**Analyst role:** Market research analyst
**Problem space:** Fine artists make work nobody buys because it doesn't fit a buyer's wall, palette or theme; buyers want art that appreciates but resent 30–50% gallery commissions; artists get blocked on new themes. The proposed app vets artists by degree, lets a buyer photograph their space, choose size/color/theme/texture, upload inspiration images, and generates a brief (text or images) for a commissioned work.

> **Access note.** Reddit is blocked to this tool — which costs more here than in any previous project, because artist-commission culture lives on Reddit, Discord and X. G2 is blocked; Capterra covers gallery-management software, not artist or buyer tools. Evidence below comes from the **Apple App Store review feed (289 critical reviews across 8 relevant apps)**, Trustpilot, and industry reports. See **Section 5** for everything unverified.

---

## 1. Who has this problem, and how many?

### 1a. Supply side — the artists

| Measure | US figure | Source |
|---|---|---|
| People in fine-arts occupations | **347,000 (2023)**, up **51%** from 230,000 in 2015 | [NEA Arts Data Profile](https://www.arts.gov/sites/default/files/a5-report-202412.pdf) |
| **Wage-and-salary** fine artists (painters, sculptors, illustrators — BLS 27-1013) | **10,910 (May 2023)** | [BLS OES](https://www.bls.gov/oes/2023/may/oes271013.htm) |
| US visual artists' median income from art | **$20,000–$30,000/yr; ~60% earn under $30,000** | [The Creative Independent artist survey](https://thecreativeindependent.com/artist-survey/) |
| UK comparison (median visual-artist income) | **£12,500**, down ~50% in real terms since 2010; **80%+ call earnings unstable** | [CREATe / University of Glasgow](https://www.create.ac.uk/blog/2024/11/25/new-report-earnings-and-contracts-of-uk-visual-artists/) |

**Read the first two rows together.** 347,000 people work in fine-arts occupations but only **10,910 hold wage-and-salary fine-artist jobs** — the rest are self-employed, freelance or working other jobs. **This is a large, growing, and poor population.** They have the problem. Whether they can pay to solve it is Section 4's question, not this one.

### 1b. Demand side — the buyers

| Measure | Figure | Source |
|---|---|---|
| Global art market, 2025 | **$59.6B**, +4% after two down years | [Art Basel & UBS Art Market Report 2026](https://theartmarket.artbasel.com/) |
| **US share** | **44% — roughly $26.2B** *(my arithmetic on their figures)* | [Art Basel/UBS via Family Wealth Report](https://www.familywealthreport.com/article.php/US-Remained-Largest-Art-Market-In-2025-%E2%80%93-Art-Basel,-UBS-Report-2026-?id=207156) |
| Dealer-sector sales, global | $34.8B (+2%) | [Art Basel/UBS](https://theartmarket.artbasel.com/) |
| **Online-only sales** | **$9.2B — down 11%**, lowest since 2019; **15% of market, down 3 points** | [Art Basel/UBS 2026](https://artlyst.com/art-basel-and-ubs-global-market-report-2026-highlights-growth/) |
| Collectors who bought art online (2022) | 78% | [Hiscox Online Art Trade Report](https://www.hiscox.co.uk/online-art-trade-report) |
| Instagram as preferred art-discovery platform | **65%** of respondents | [Hiscox](https://www.hiscox.co.uk/online-art-trade-report) |

**The headline risk sits in row 4: online art sales fell 11% in 2025 and are at their lowest level since 2019**, as high-value buying moved back in person. The proposed app is an online-art product entering a shrinking online-art segment.

### 1c. The commission grievance, quantified

Gallery splits run **40–60% to the gallery**, with **50/50 the industry standard** and prestige galleries taking 60–70%. ([PuppetVendors 2026 benchmarks](https://puppetvendors.com/blogs/consignment-commission-rates-guide); [Hyperallergic](https://hyperallergic.com/its-time-rethink-the-50-50-split-with-art-galleries/)) The 30–50% figure in your premise is accurate and, if anything, understates the top end.

### 1d. The professional buyers nobody in this premise mentions

| Segment | US figure | Source |
|---|---|---|
| **Interior designers** | **87,100 jobs (2024)**; median wage $63,490 | [BLS OOH](https://www.bls.gov/ooh/arts-and-Design/interior-Designers.htm) |
| **Corporate art buyers** | Role exists as a paid occupation; average **$72,133/yr**, $57,500–$89,000 typical | [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Corporate-Art-Buyer) |
| Art consulting firms | An established industry placing art in offices, healthcare and commercial spaces | [TurningArt guide](https://blog.turningart.com/guide-to-art-consultant-firms) |

**87,100 interior designers are a more concentrated, higher-intent, already-paying customer than any consumer segment in this space** — and they already do the size/palette/theme matching by hand. `[No published count of designers who commission original art specifically — see flags.]`

### 1e. The premise that needs testing before anything is built

Your app vets artists by **degree** (associate's, bachelor's, master's). **I found no evidence that formal art education predicts sales, price or appreciation** — and the art market's own value signals (gallery representation, auction record, exhibition history, collector base) are different variables entirely. `[UNVERIFIED — I could not find research either supporting or refuting degree-as-quality-signal in art sales. Worth testing before it becomes the product's core filter.]`

---

## 2. What do they use today?

| Category | Tools | Where it stops |
|---|---|---|
| **Online art marketplaces** | Saatchi Art (**4.5★, 10,491 Trustpilot reviews**), Artsy (4.80★, 6,455 App Store ratings), Singulart, Artfinder, 1stDibs, Etsy, Peggy | Browsing catalogs of existing work. **None commissions new work to a room.** |
| **AR "see it on your wall"** | **Smartist (8,529 ratings)**, Artrooms (1,930), ArtStage (2,104), iArtView (573), plus in-app AR at Etsy and Artsy | **This feature already exists at scale** — and is the single most-complained-about category in Section 3 |
| **Artist audience/portfolio** | Instagram (**65% preferred discovery platform**), Cara (**40k → 650k+ users in one week, June 2024**), Artfol ("AI-Free Art Community"), Behance, ArtStation | Reach, not transactions; algorithm-dependent |
| **Commission workflow** | Fiverr, VGen, Artconomy, direct DMs, PayPal/Venmo invoices, Google Forms briefs, Trello/Notion trackers | `[Inferred from category structure — no survey found quantifying what artists actually use. See flags.]` |
| **Professional placement** | Interior designers, art consultants, corporate art buyers, TurningArt-style leasing | Human, expensive, relationship-driven — and the real competition for "art that fits the space" |
| **Art as investment** | **Masterworks** (2,482 App Store ratings) — fractional shares in blue-chip works | Not original commissions; see its complaint record in Section 3 |
| **Inspiration / mood boards** | Pinterest (5.8M App Store ratings), Midjourney, DALL·E, Google image search | Already how briefs get assembled; free |
| **Galleries** | Physical representation at 40–60% commission | The cost the premise is attacking |

---

## 3. Complaints about current solutions

Ten complaints from 289 critical (≤3★) App Store reviews plus Trustpilot. **They cluster hard: 47% are "the app is broken," 26% are about price.**

| # | Complaint (paraphrased) | App / rating / date | Source |
|---|---|---|---|
| 1 | AR wall-preview scale is badly wrong — art doesn't match the real dimensions even after calibrating, and you can only view one piece at a time. | iArtView, 1★, Feb 20 2021 (*Bethanyjeanthebeautyqueen*) | [App Store](https://apps.apple.com/us/app/id922553017?see-all=reviews) |
| 2 | Two uploads before hitting a paywall, then $50/yr for 14 more — with scale "WAY off." | iArtView, 1★, Feb 2 2021 (*Jessyhess*) and 1★, Nov 8 2020 (*Wake 4 Life*) | [App Store](https://apps.apple.com/us/app/id922553017?see-all=reviews) |
| 3 | Room images in the preview app now look "obviously AI — really cartoony and fake"; the reviewer notes they can make a bad AI image themselves for free. | Artrooms, 3★, Jun 3 2025 (*RoxyBird_2026*) | [App Store](https://apps.apple.com/us/app/id1366610184?see-all=reviews) |
| 4 | Professionally photographed paintings come out blurry with artifacts; reviewer cancelled the subscription. | Artrooms, 1★, Apr 22 2026 (*Weatherfacinator*) | [App Store](https://apps.apple.com/us/app/id1366610184?see-all=reviews) |
| 5 | Subscription can't be cancelled easily — "once they have your account for payment, there's no way out." | Artrooms, 1★, Jan 3 2025 (*TripodAM*) | [App Store](https://apps.apple.com/us/app/id1366610184?see-all=reviews) |
| 6 | Paying artist finds the tool expensive and still inaccurate — artwork disappears and has to be re-troubleshot. | Smartist, 3★, Jul 15 2026 (*Mattier555*); 1★, Jul 3 2026 (*komty Adam*) | [App Store](https://apps.apple.com/us/app/id1505234753?see-all=reviews) |
| 7 | The art community app crashes on nearly every action — editing a post, posting, logging in — for two years running. | Artfol, 2★, May 13 2025 (*moderndayicarus*); 3★, Jun 5 2026 (*Cane24*) | [App Store](https://apps.apple.com/us/app/id1522710478?see-all=reviews) |
| 8 | Can't delete the account or get a response; privacy terms described as vague. | Artfol, 1★, Aug 17 2025 (*Eightyuh*); Peggy, 1★, Apr 6 2025 (*Nikeskates*) | [App Store](https://apps.apple.com/us/app/id1522710478?see-all=reviews) |
| 9 | Marketplace listing sat in review for six days with no reply; artist gave up. And a buyer reports winning a bid at $150 before the artist raised the ask to $750, voiding it. | Peggy, 1★, Nov 12 2025 (*monclernami*); 2★, Sep 10 2024 (*lllllooooppppppsssff*) | [App Store](https://apps.apple.com/us/app/id1584224807?see-all=reviews) |
| 10 | Art-investment platform: three years in, the reviewer can't sell shares even at a discount; another reports the secondary market was closed to investors by email. | Masterworks, 1★, Jul 2 2026 (*Paulaonnnn22*); 1★, Mar 12 2026 (*echoarcade*) | [App Store](https://apps.apple.com/us/app/id1591085645?see-all=reviews) |

**Also on the record (Trustpilot, Saatchi Art — 4.5★ across 10,491 reviews):** a 50-year-career artist stuck in ID verification for three weeks with unanswered support requests (Sep 15, 2026), and a buyer charged $50 shipping on a package costing about $20 to send, with no reply after nine days (Sep 3, 2026). ([Trustpilot](https://www.trustpilot.com/review/saatchiart.com))

### Theme frequencies (n=289)

| Theme | Count | Share | Type |
|---|---|---|---|
| App is broken — crashes, freezes, won't load | **137** | **47%** | Product |
| Pricing — subscriptions, paywalls, cancellation | **75** | **26%** | **Pricing** |
| Discovery / reach / algorithm | 27 | 9% | Product |
| Moderation, scams, account issues | 22 | 8% | Product |
| Commission/payment workflow | 9 | 3% | Product |
| AI backlash | 7 | 2% | Product |

**Two findings that matter more than the percentages:**
- **The "photograph your space" feature already exists, at scale, and is the worst-reviewed thing in this category.** Smartist alone has 8,529 ratings and 68 recent critical reviews; the complaints are about **scale accuracy**, image quality and subscription traps — not about the idea.
- **AI backlash registers at only 2% of complaints, but it shapes the market structurally.** Artfol's entire brand is "AI-Free Art Community." Cara went from 40,000 to 650,000+ users in a week in June 2024 when Meta announced it would train on users' images. ([TechCrunch](https://techcrunch.com/2024/06/06/a-social-app-for-creatives-cara-grew-from-40k-to-650k-users-in-a-week-because-artists-are-fed-up-with-metas-ai-policies/))

---

## 4. Why might this be newly solvable with AI in 2026?

**(a) Consistent, targeted image editing shipped in August 2025.**
Google released **Gemini 2.5 Flash Image ("nano banana") on August 26, 2025** — it maintains the appearance of a subject across multiple edits, performs local edits by natural-language instruction (recolor, remove, reposition), and fuses multiple input images. Roughly **$0.039 per image**. ([Google Developers Blog](https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/); [Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-flash-image-on-vertex-ai/))

**That is precisely the technical requirement for "show this artwork, at this size, in this photographed room, in this palette" and for fusing a buyer's inspiration uploads into a coherent brief.** Before mid-2025, edit-to-edit consistency was the failure mode — which is exactly what reviewers of Artrooms and iArtView complain about.

**(b) The Copyright Office drew a line in January 2025 that favors this product's design.**
On **January 29, 2025**, the US Copyright Office concluded that **prompting alone does not create copyrightable authorship**, but works where AI is an **assistive tool** and a human contributes the expression **are** protectable. ([Copyright Office](https://copyright.gov/ai/); [Jones Day summary](https://www.jonesday.com/en/insights/2025/02/copyrightability-of-ai-outputs-us-copyright-office-analyzes-human-authorship-requirement))

**Your design — AI generates a brief or inspiration, a human artist paints the work — lands on the protectable side of that line.** An app that sold AI-generated images would land on the other side. That is a real, dated, legal advantage and the strongest argument in the claim's favor.

**(c) Buyer appetite for AI-adjacent art is measurable but polarized.**
Hiscox's Art and AI Report 2024 (400+ respondents): **28% of emerging buyers had already bought AI-generated art and 52% expect to**, while **only 16% of seasoned collectors** think AI art will reach the value of human work and **82% want clear labelling** of what is AI-made. ([Hiscox](https://www.hiscoxgroup.com/news/press-releases/2024/19-09-24))

**(d) The legal ground under AI training got firmer — for the models, not the artists.**
The UK High Court **largely rejected Getty's claims against Stability AI on November 4, 2025**, holding that model weights are not a copy of the training images ([Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/11/getty-images-v-stability-ai-what-the-high-courts-decision-means-for-rights-holders-and-ai-developers)). **Andersen v. Stability AI** — the artists' class action — remains active, with class-certification briefing completed in **April 2026** ([BakerHostetler tracker](https://www.bakerlaw.com/andersen-v-stability-ai/)).

### Where AI does not solve this

- **"Photograph your room" is not new.** Smartist, Artrooms, ArtStage and iArtView have shipped it for years, and reviewers say the **scale is wrong** — a measurement and calibration problem, not a model problem.
- **"Art that appreciates in value" is not something an app can manufacture.** Appreciation requires a secondary market, and Masterworks reviewers report being unable to sell at all, with the secondary market closed by email in March 2026.
- **Artist's block is not an information problem.** Generating themes is cheap; the reviews suggest artists' actual constraints are reach, money and broken tools.
- **The audience is hostile to the input.** Etsy now requires AI disclosure on any listing where AI touched the process `[a secondary source claims 17,000+ listings were removed in early 2025 — see flags]`, Artfol markets itself as AI-free, and Cara exists because artists fled AI training. **An app that puts "AI-generated inspiration" in front of fine artists is selling to the most AI-averse professional audience in the economy.**
- **Matching art to a sofa is taste, not computation.** `[Inference — no study found on algorithmic art-to-interior matching accuracy.]`

---

## 5. Flags and gaps

| Item | Status |
|---|---|
| **Reddit** | ❌ Blocked — and this is the biggest evidence gap in this dossier, because commission culture lives there. |
| **G2 / Capterra** | ❌ G2 blocked; Capterra covers gallery-management software, not these tools. |
| **Verbatim quotes** | ⚠️ Paraphrased with app, rating, date and handle; originals in [../research/appstore-reviews.json](../research/appstore-reviews.json). |
| **US art market $26.2B** | ⚠️ My arithmetic: 44% of the reported $59.6B global total. |
| **Fine-artist population** | ⚠️ The NEA's 347,000 covers "fine arts occupations" **including art directors and animators** — not only painters and sculptors. BLS's 10,910 covers only wage-and-salary workers. The true count of practicing fine artists sits between, and nobody publishes it. |
| **Artist income figures** | ⚠️ The Creative Independent survey is self-selected, not a probability sample. The UK figures are not US data. |
| **Degree-as-quality-signal** | `[UNVERIFIED]` — no research found either way. **This is the product's core filter and it rests on an untested assumption.** |
| **Interior designers who commission original art** | ❌ Not published. The 87,100 is all interior designers. |
| **Commission-workflow tools** | `[Inferred]` — no survey found quantifying what artists actually use for briefs, deposits and contracts. |
| **"17,000+ Etsy listings removed"** | ⚠️ Attributed to "internal data obtained by the Etsy Sellers' Alliance" via a third-party blog. **Weak sourcing — do not cite without corroboration.** |
| **Hiscox Art & AI figures** | ⚠️ 400+ respondents, self-selected, 2024 — no 2025 or 2026 edition found. |
| **App age skew** | ⚠️ Several complaint sources (iArtView, Peggy) are small apps with reviews dating to 2020–2021. The Smartist, Artrooms and Artfol complaints are 2025–2026. |
| **Online art market decline** | ⚠️ Art Basel/UBS measures **online-only** sales; hybrid and dealer-website sales are counted elsewhere, so this is not the whole of "art sold online." |
