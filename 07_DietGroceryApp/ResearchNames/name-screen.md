# Name Screening Research

**Date run:** 2026-09-29 · **Candidates screened:** 75 · **Finalists web-searched:** 12

## How the names were generated

Candidates were brainstormed from five angles taken from the product and earlier research in this project:

- **GLP-1 experience:** satiety, "food noise," smaller portions (Satiety-, Hush-, Quiet-, Less-, Enough-).
- **The AI ordering agent:** steward, pilot, fetch, quartermaster.
- **Grocery and pantry:** cart, pantry, larder, provender.
- **Nutrition:** macro, protein, lean, dose.
- **Invented words:** Satiora, Satietta, Provendi, Pantrova, Nourivo, and similar coinages that are easier to trademark.

## How "not already taken" was tested

Each name ran through an automated check (`_tools_name-check.js`, raw output in `name-screen-results.json`):

- **Apple App Store (US):** [iTunes Search API](https://itunes.apple.com/search?term=satietycart&entity=software&country=us). An app counts as a match if its title starts with the name.
- **Google Play (US):** the [Play Store search page](https://play.google.com/store/search?q=satietycart&c=apps&hl=en_US&gl=US). A match is a result title or package ID that contains the name. The search box's echo of the query is ignored.
- **USPTO:** the [Trademark Search system](https://tmsearch.uspto.gov/). Only live marks whose wordmark exactly matches the name count. A second fuzzy pass (edit distance 1, plus the name as a phrase) on 24 finalists found look-alike marks.
- **Domains:** Verisign's [.com RDAP](https://rdap.verisign.com/com/v1/domain/satietycart.com) and Google Registry's [.app RDAP](https://pubapi.registry.google/rdap/domain/satietycart.app). An HTTP 404 means the name is unregistered. The same test ran on get[name].com.
- **Web search:** the 12 strongest finalists were searched as exact phrases to catch companies with no app or trademark.

## Look-alike trademarks found in the fuzzy pass

| Finalist | Live near-match marks (class) | Risk |
|---|---|---|
| SatietyCart | none | Low |
| HushPlate | none | Low |
| Pantry Steward | none | Low |
| Nourcart | NOURCARE (44) | Low to medium |
| Fetchfork | none on USPTO. The risk is the Fetch rewards app ([fetch.com](https://fetch.com)). | Medium |
| Quartermeal | none | Low |
| Lessplate | none | Low |
| StillFork | STILLFORM (32) | Low |
| Satietta | SAIETTA (7, 9, 11, 12, 35, 37, 39, 42) | Medium |
| Pantrova | PANTROVE (9, 42) | High, ruled out |
| QuietPlate, Mealsteward, Enoughly, Morselly, Plenticart | none | Low |
| SteadyCart | STEADYCARE (42) | Low to medium |
| Provendi | PROVENDO (5, 10), PROVENDA (5) | Medium |
| CartPilot | CASTPILOT (9), CAREPILOT (42), CARDPILOT (42) | High, and the .com is a live business, so ruled out |

## Web search results for finalists

- **SatietyCart:** no company or product. Results were scientific papers on the CART satiety peptide ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3517666)).
- **HushPlate:** no company or product. The nearest hits were Hush Acoustics floor panels ([specifiedby.com](https://www.specifiedby.com/hush-acoustics/hush-panel-32-impact-reducing-floor-panel)).
- **StillFork:** an Ohio creek ([Wikipedia](https://en.wikipedia.org/wiki/Still_Fork)) and STILL forklifts. No app.
- **Fetchfork:** no exact match. Other food apps named "Fetch" exist ([Roanoker](https://theroanoker.com/fetch/), [App Store](https://apps.apple.com/us/app/fetch-fetcher/id6449699653)).
- **Nourcart, Quartermeal, Lessplate, Mealsteward, Satietta, Satiora, Pantry Steward, QuietPlate:** no company, product or app found under the name.
- **Pantrova:** only look-alike drug brand names (Pantova, Pantro). Ruled out on the trademark anyway.

## What could not be verified

- **State trademarks and common-law use:** a business can own rights to a name through use without registering it. Only a professional clearance search covers this.
- **Foreign marks (EUIPO, WIPO) and non-US app stores:** not checked. Only the US stores were searched.
- **Domains:** "unregistered" means unregistered at the moment of the check on 2026-09-29. Domains can be taken any day, so register the chosen one right away.
- **Who owns the registered .com domains** (satiora.com, enoughly.com and others), and whether they're for sale: not looked up.
- **Social handles** (@satietycart and so on) on Instagram and TikTok: not checked.

## Full screening table (all 75 candidates)

| Name | App Store (US) matches | Google Play matches | Live USPTO exact mark | .com | .app | get___.com |
|---|---|---|---|---|---|---|
| Satiora | none | none | none | taken | free | free |
| Nourivo | Nourivo: GLP-1 & Protein (Tran Huong); Nourivo (Kenta Waibel) | Nourivo: GLP-1 Protein | none | taken | taken | free |
| Plenara | none | none | PLENARA [IC 028] Tu, Kaixin (INDIVIDUAL; China) | taken | free | free |
| Provendi | none | none | none | taken | free | free |
| Macrova | Macrova: AI Calorie Counter (BARAN BERTAN OKTEM); Macrova: AI Nutrition (Ruturaj Jena) | Macrova: AI Nutrition; Macrova | none | taken | taken | free |
| Grocivo | none | Grocivo - Grocery List Manager; id:com.okondori.grocivo | none | taken | free | free |
| Pantrova | none | none | none | taken | free | free |
| Cartevia | none | none | none | taken | free | free |
| Leanvia | none | none | none | taken | free | free |
| PantryPilot | Pantry Pilot: Smart Recipes (PANTRY PILOT PTY LTD); Pantry Pilot (David Lafleur); Pantry Pilot AI (ANDREI OLARU); PantryPilot: Expiry Tracker (Efe OZTURK) | PantryPilot; Pantry Pilot; Pantry Pilot: Smart Recipes; PantryPilot: AI Recipe Chef; id:com.pantrypilot.twa; id:nl.tikiwadigital.pantrypilot | none | taken | taken | taken |
| CartPilot | none | none | none | taken | taken | taken |
| PlatePilot | PlatePilots (PT PLUS IS A COMMISSION AGENT AND COMMISSION TRADING LLC) | PlatePilot; PlatePilot Habit Tracker; PlatePilots; Plate Pilot: Meal Planner; id:com.platepilot.app; id:com.plaidscocooningltd.platepilothabittracke | none | taken | taken | taken |
| SatietyCart | none | none | none | free | free | free |
| LeanCart | none | none | none | taken | free | free |
| MacroCart | MacroCart: Scan & Plan (Asther Louie Cabardo) | none | none | taken | taken | taken |
| ProteinCart | none | none | none | taken | free | free |
| DoseCart | none | none | none | taken | free | free |
| DoseWise | DoseWise: Private Med Tracker (Arda Sozen); DoseWise: GLP-1 Dose Tracker (Ahmet KARASAKAL); Dosewise Companion (Aditya Bharti); DoseWise: Medication Tracker (Dominik Drag) | DoseWise Herbal Safety Tracker; id:com.dosewise | DOSEWISE [(CANCELLED) IC 009,(CANCELLED) IC 010,IC 041] Koninklijke Philips N.V. (public limited liability company; NETHERLANDS) | taken | taken | taken |
| CartSense | none | none | none | taken | taken | free |
| PantryWise | PantryWise: Pantry Manager (Valiantum, LLC) | PantryWise: Food Waste Tracker; PantryWise Food Storage Guide; id:com.pantrywisetheapp.mobile; id:com.homewise.pantrywise.food.storage.app | none | taken | taken | taken |
| SmallPlate | none | id:com.owner.senorganicsmallplate | none | taken | free | taken |
| HalfPlate | none | Half Plate; HalfPlate | none | taken | taken | free |
| QuietPlate | none | none | none | taken | taken | free |
| QuietPantry | none | none | none | taken | free | free |
| HushPlate | none | none | none | free | free | free |
| StillFork | none | none | none | free | free | free |
| SlowFork | none | none | none | taken | free | free |
| Larderly | Larderly: Grocery List Pantry (Ferran Espuna); Larderly (Filippo Savorgiannakis) | none | none | taken | taken | free |
| Pantrist | Pantrist - Shopping List (Nico Lueg) | Pantrist | none | taken | taken | free |
| Grocient | none | none | none | taken | free | free |
| Fedwell | FedWell: Calorie Counter (Allan Thompson); Fedwell: Meal Planner (SIMONI K LULACA) | none | FEDWELL [IC 031] Bones & Co. Pet Foods (LIMITED LIABILITY COMPANY; TEXAS, USA); FEDWELL [IC 042,IC 041] Hushful Ltd (COMPANY; United Kingdom) | taken | taken | taken |
| Provisioner | none | id:com.mobileiron.client.android.nfcprovisioner; id:wifi.analytics.provisioner; id:com.trivore.nfcdeviceprovisioner; id:com.fullykiosk.provisioner | PROVISIONER [IC 012,IC 037] Astroscale U.S. Inc. (CORPORATION; Nevada, USA) | taken | taken | free |
| Quartermeal | none | none | none | free | free | free |
| Cartwright | Cartwright App (makoto morita); Cartwright's Plumbing (Christopher Fresh); Cartwright (Ryan Watts) | Cartwright's Plumbing; id:com.servzito.cartwrightsplumbing | none | taken | taken | taken |
| Fetchfork | none | none | none | free | free | free |
| Dietdrop | none | none | DIETDROP [IC 005] ClearH2O, Inc. (CORPORATION; MAINE, USA) | taken | free | free |
| Mealmover | none | none | none | taken | free | free |
| Satiate | Satiate - Calorie & Fullness (VAZGEN OGANNISIAN); Satiated Life (Satiated Life Nutrition PLLC) | Satiate; id:com.satiate.myapp | SATIATE [IC 009,IC 042,IC 044] Brandon Goethals (INDIVIDUAL; USA) | taken | free | free |
| Enoughly | none | none | none | taken | free | free |
| Lowtide Kitchen | none | none | none | taken | free | free |
| Tessellate | Tessellate (Sam Gillard); Tessellate 360 - Watch Game (Tocapp Games S.L.); Tessellate! (Plunge Studios LLC) | none | TESSELLATE [IC 042,IC 035] Forum AI, Inc. (CORPORATION; Tennessee, USA) | taken | taken | free |
| Proteinly | Proteinly: Protein Tracker (Harsha Dubey) | Proteinly, LLC; id:io.proteinly | none | taken | taken | free |
| Fuelcart | none | none | none | taken | free | free |
| Nourcart | none | none | none | free | free | free |
| Macroroute | none | none | none | taken | taken | free |
| Plateway | none | none | none | taken | taken | free |
| Dosewell | Dosewell - Medication Reminder (Jarryd Palek) | none | none | taken | taken | free |
| Kitchenward | none | none | none | taken | free | free |
| Morselly | none | none | none | taken | free | free |
| Pantrymind | PantryMind (Mateen Aminian); PantryMind AI (Mustapha OUBOUZ) | PantryMind - Pantry Tracker; id:com.fdom.pantrymind | none | taken | taken | free |
| Satietta | none | none | none | free | free | free |
| Dosely | Dosely - Peptide Tracker (EFN Group LLC); Dosely - Peptide GLP-1 Tracker (Exploring Studios LLC); Dosely: Pool & Hot Tub Care (BULPARA TEKNOLOJI LIMITED SIRKETI) | Dosely; Dosely - Peptide Tracker; Dosely: GLP-1 Peptide Tracker; Dosely Pro; Dosely: Pill & Med Reminder; Dosely - Track Medications | DOSELY [IC 005] Dosely, Inc. (CORPORATION; DELAWARE, USA) | taken | free | taken |
| Portionly | none | Portionly: AI Calorie Counter | none | taken | taken | taken |
| PortionPilot | none | none | none | taken | free | free |
| Cartfull | none | none | CARTFULL [IC 035] KM Liquidator, LLC (LIMITED LIABILITY COMPANY; MINNESOTA, USA) | taken | taken | free |
| GLPantry | none | none | none | taken | taken | free |
| GLPlate | none | none | none | taken | free | free |
| Proteinpath | none | none | none | taken | free | free |
| Tinyplate | none | TINYPLATE LLC; id:app.tinyplate | TINYPLATE [IC 009,IC 042] TinyPlate LLC (LIMITED LIABILITY COMPANY; New Jersey, USA) | taken | taken | free |
| QuietCart | none | none | none | taken | taken | free |
| Steadyplate | SteadyPlate: Nutrition AI (Orkhan Hasanbeck) | none | none | taken | taken | free |
| SteadyCart | none | none | none | taken | free | free |
| Wellstocked | Wellstocked (EZEKIEL VILLALUZ GAVIERES); Wellstocked: Cocktail Recipes (JOSEPH WILLIAM SALVANESCHI III) | none | none | taken | taken | taken |
| Restockr | Restockr X (OG Giveaways Corporation) | RestockR; id:com.restockr.app | none | taken | taken | free |
| Mealsteward | none | none | none | taken | free | free |
| Pantrysteward | none | none | none | free | free | free |
| Fillwell | FillWell (Gavin Sparks) | none | none | taken | taken | free |
| Evenkeel Kitchen | none | none | none | free | free | free |
| Smallbite | smallBite (PICDOT) | smallBite; Small Bites - Make Tasks Easy; id:com.small_bite.taskapp | none | taken | free | free |
| Lessplate | none | none | none | free | free | free |
| Satiety Kitchen | none | none | SATIETY KITCHEN [IC 030,IC 005,IC 009,IC 041] HYDROSWELL LLC (LIMITED LIABILITY COMPANY; Utah, USA) | taken | free | free |
| Hushcart | none | none | none | taken | free | free |
| Nourishcart | none | none | none | taken | taken | free |
| Plenticart | none | none | none | taken | free | free |
| Fullplate AI | none | none | none | taken | free | free |