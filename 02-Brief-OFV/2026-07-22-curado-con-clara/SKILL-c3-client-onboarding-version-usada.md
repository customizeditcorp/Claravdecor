---
name: c3-client-onboarding
description: Runs C3 Local Marketing's client onboarding — produces a Business Brief, Buyer Persona, Value Offer, and Local Presence Audit for a local service business (painters, roofers, HVAC, plumbers, landscapers, event decorators, mobile services, etc.). Use this skill whenever the user is onboarding a new client, starting a new client project, mentions a brief, buyer persona, ICP, avatar, value offer, OFV, or offer positioning, or pastes discovery-call notes, a client FAQ manual, or a Google Business Profile export for a local business — even if they don't say "onboarding" by name. Also use when the user asks to audit a client's GBP, benchmark a client against local competitors, or build out strategy docs before a website or Google Business Profile build.
---

# C3 Client Onboarding

Produces four deliverables for a local service business: **Business Brief → Buyer Persona → Value Offer → Local Presence Audit**. The first three feed each other; the fourth is where the immediately executable work lives.

Written for home-services contractors originally, but the method applies to any local business that sells a scheduled service in a defined geography — event decor, mobile detailing, pet grooming, med spa, catering. Where the skill says "trade," read "service."

---

## Non-negotiable rules

**1. Verify, never assume.** Every factual claim must be checkable. Where a fact isn't confirmed, write `[TO CONFIRM]` or `[TODO]` visibly — never paper over a gap with a plausible guess.

**2. Copy precision — the trap that matters most.** Distinguish the owner's *personal trade experience* from the *company's age*. A contractor can have 20 years of hands-on experience while the corporation was licensed last month.
- ✅ "20 years of experience" / "20 years of hands-on craftsmanship"
- ❌ "20 years in business" / "established 2006" / "serving the area for 20 years"

Always check the entity's license/registration date against the claimed experience. If they differ, flag it in the brief with a copy warning.

**3. Digital age ≠ business age.** A brand-new GBP, an unfindable listing, or zero web footprint does **not** mean a new business. Plenty of established operators run for years on referrals and WhatsApp before anyone creates a listing. Do not infer business age from digital absence — and if you did in an earlier draft, correct it explicitly rather than quietly.

This cuts the other way too: an old GBP doesn't prove longevity either. The only acceptable sources for business age are entity registration records, license issue dates, or the owner's own confirmed statement.

**4. Anti-generic standard.** No filler, no unverifiable superlatives ("#1", "best in town"), no stock persona language. Every line must be specific to this client and traceable to discovery input or verified data.

**5. Mark assumptions as assumptions.** Market-based inferences are fine — label them `[Assumption]`.

**6. No invented social proof.** Never write testimonials, review counts, or ratings that don't exist — not as placeholder copy, not in a mockup, not as a design example. A fabricated testimonial that reaches production is a legal and trust problem that doesn't get repaired.

**7. Never recommend a tactic that violates platform guidelines, even when competitors are visibly getting away with it.** Keyword-stuffed GBP business names, review gating, fake service areas, address gaming. Note that competitors do it, name the risk, recommend the compliant path. For a client whose only digital presence is a GBP, a suspension is catastrophic.

**8. Liability insurance is a standard question for any business that installs, builds, or works on someone else's property.** Not just licensed trades. Venues, property managers, schools, and corporate clients routinely require a Certificate of Insurance naming them as additional insured. If the client can't produce a COI, an entire high-ticket segment is closed to them — and that's usually invisible in a discovery call because they've simply never pursued the work they were quietly disqualified from.

**9. Respect the source-of-truth hierarchy.** C3 runs BrightLocal as the operational source for local search data and GBP best practice. Where a BrightLocal report covers a question, it wins — over inference, over a places search, over general SEO knowledge. Ask for the export before improvising a substitute, and say plainly when an improvised method is a rough approximation rather than a measurement. Getting a directionally-right answer from a weaker instrument is not the same as being right, and presenting it as equivalent is how a wrong number ends up in a client deck.

---

## Step 1 — Intake

Gather what the user has. Ask only for what's missing and material; don't interrogate. Core fields:
- Legal entity name, DBA, address, phone, email, website, hours, language of service
- License/registration number (if a licensed trade)
- **Liability insurance status and COI capability** (see Rule 8)
- Services offered + which is the **star service** (highest revenue/margin)
- Service area (base city + target cities)
- Years of experience, certifications, insurance/bonding
- Differentiators from the discovery call — the owner's own words
- Existing digital assets: GBP, website, socials, reviews
- Current lead source
- **Minimum order value and travel/distance fee structure** — for any business with an install or delivery component. Without this, marketing generates leads that cost the same to quote as a job ten times the size.

If the user pastes discovery notes, a client FAQ manual, or a GBP export, mine it first and only ask about real gaps.

**Mine client-authored FAQ manuals for buried differentiators.** Owners bury their best material in operational answers. A section on why they ask about floor surface, ceiling height, or power access is a real technical differentiator — far more sellable than the "attention to detail" line they wrote in the marketing section. The FAQ they wrote to prevent problems is usually the strongest sales material in the document.

**Mine the FAQ for objections, too.** Any question the owner answered at length, or answered twice from different angles, marks a real and frequent customer objection. That is free primary research for Persona blocks 4, 8, and 11.

---

## Step 2 — Verify (do this before writing anything)

Three parts. Do all three. Report exactly what's verified vs. unconfirmed.

### 2A — Registry verification

**Licensed trades:** look up the license in the public registry and confirm status, classification, issue date, bond, and the qualifying individual's name. In California, use the CSLB "Check a License" tool.

- The **issue date** reveals whether the entity is new → drives Rule 2.
- The **qualifying individual** often resolves the owner's full legal name.

**Non-licensed trades:** say so plainly rather than skipping the step. Then verify what does exist — state entity registration, sales tax permit where the model includes rentals or tangible goods, DBA filings. Note which registries are form-POST and can't be automated; leave them as a manual step **with the URL**, and never assert an unverified status.

**Watch for internal contradictions** (e.g., a service area that doesn't match the address's area code/ZIP). Surface conflicts and resolve them with the user — don't silently pick one.

### 2B — Local prominence benchmark

This is the step that tells you what you're actually up against.

**Source of truth order:**

1. **BrightLocal, when the client is set up in the account.** It is the operational source and it supersedes anything derived here. `Local Search Grid` for geo-grid visibility, `Local Search Rank Checker` for city/ZIP-level ranking with localized volume, `GBP Audit` for listing optimization benchmarked against top-ranking competitors, `Local Search Audit` for the full picture, `Citation Tracker` for NAP consistency. Ask for the exports before doing anything manual.
2. **Manual geolocated benchmark (below)** — only when the client isn't in BrightLocal yet, or during a first-pass discovery before the account is provisioned. Treat it as a rough read, not a measurement.

Never present the manual method's output as equivalent to a geo-grid. A places search returns a ranked list from one synthetic point; a geo-grid measures visibility across dozens of real points. They answer different questions and the geo-grid is the one that matters.

**Manual fallback method:**

1. Run a **geolocated places search** biased to the client's base coordinates, radius 15–20 km, using two query types:
   - The client's own name, in every spelling variant that exists
   - The category query a real buyer would type ("balloon garland installation [area]", "cabinet painting [area]")
2. Record for each competitor: **name, base city, review count, rating, whether they have a physical address with suite, posted hours, and any published pricing**
3. Widen to a second ring only after the immediate ring is mapped

Do not substitute a plain web search — it returns national aggregators and content farms, not the businesses competing for the same map pack.

**Read the results for these five things:**

| Signal | What it tells you |
|---|---|
| **Review count spread** in the immediate ring | The actual bar. Not the one you'd guess. |
| **Physical address vs. service-area** among leaders | SABs can't match storefront prominence directly; they compensate with relevance, reviews, photos, proximity |
| **Published pricing** | If the market publishes and the client doesn't, the site must work much harder — the buyer already saw a number |
| **The nearest mirror competitor** | Same model, same demographic, same radius. This is who the client actually loses to. Find the axis where they differ. |
| **Evidence that premium sells** | A review saying "they were the most expensive of three and worth it" validates a premium position better than any market research |

**The prominence test.** If the client's own listing does not surface in any geolocated query inside its own service area — while competitors do, including ones with zero reviews — that is a **configuration or verification problem, not an age problem**. Flag it as the first thing to fix, before any content or campaign spend. A zero-review competitor being indexable while the client isn't is the diagnostic.

Where BrightLocal is available, the geo-grid answers this properly: a listing invisible across the whole grid is a configuration problem; one visible at the pin and dropping off within a mile is a normal proximity curve and a different fix entirely. **Don't call it a configuration problem from a places search alone** — confirm on the grid first.

### 2C — GBP forensics

If a GBP exists, treat its contents as primary evidence, not just a checklist.

**Reviews prove things the discovery call didn't.** Read every review for:

- **Longevity claims from third parties.** "She's been decorating our events for years" is external corroboration of experience. It doesn't license a number in copy (Rule 2) but it does correct a wrong assumption about business age (Rule 3).
- **Segment concentration.** Count how many reviews come from businesses, schools, institutions, or industry peers vs. individual consumers. **If the split contradicts your persona hypothesis, the persona is wrong, not the reviews.** Accumulated reputation is the strongest signal of where the client actually wins.
- **Peer recommendations.** A review from a planner, GC, or vendor who works alongside the client is B2B2C referral proof, and points at a channel.
- **Repeat-client language.** "Every year," "many of our," "we keep coming back" — retention proof, usable in copy with attribution.
- **Original language of the review.** Google marks translated reviews. If most reviews were written in one language and the listing is configured entirely in another, that's a documented mismatch, and it usually settles the site-language question better than any demographic inference.
- **Specific operational praise.** "Punctual," "showed up early," "communicated throughout" — these map directly onto Persona block 5 fears and are the highest-value proof to surface.

**Review velocity.** Plot the distribution over time. A burst of reviews all landing in one month with nothing before or after is a weak pattern — Google weights recency and consistency, and extreme bursts can trip spam filters. The fix is **cadence, not volume**: a steady monthly flow tied to real recent jobs beats another burst. Set the target against the client's actual monthly job count.

**Owner response rate.** Count responded vs. total. Responding is an activity signal to Google and a professionalism signal to readers. It's usually an hour of work with immediate impact.

**Primary category.** The single heaviest relevance factor in the local pack. Check whether the chosen category matches the *intent* of the buyer, not just the vocabulary of the business — adjacent categories can pull the wrong traffic entirely (an entertainer category vs. an installation category, a repair category vs. an installation category).

Do **not** recommend a category change from inference alone. Give the client a verification method: search the buyer's actual query from within the service area, open the top three local-pack listings, and read the category shown under each business name. Flag that changing a primary category can trigger re-review and temporary ranking movement, so document current state first and don't stack it with other large changes the same week.

**Services list audit.** Compare the listed services against the client's own service list from intake. Look for:
- **Typos** — check every entry character by character; these are live on a public listing
- **Redundancy** — near-duplicate entries competing for the same concept add no relevance and dilute readability
- **Gaps** — services the client demonstrably offers that aren't listed. Cross-check against the reviews: a service confirmed by a customer review but missing from the listing is the clearest possible gap.
- **Highest-intent missing services** — the ones with real local search volume and high ticket. Rank the gaps; they aren't equal.
- **Language mismatch** — see review-language above

**Configuration items to request** when panel access isn't available: verification status, address hidden vs. visible, service areas configured, secondary categories used (up to 9 — usually empty), photo count, posted hours, business description and its language, attributes, Products/Posts usage, messaging enabled.

**If the business operates from home,** the address must be hidden and service areas configured. A visible residential address is a suspension risk and a personal safety risk.

---

## Step 3 — Business Brief (5 blocks)

1. **Business Identity** — legal entity, address, phone, email, hours, language, license (with verified status), **insurance status**, owner. End with the **canonical NAP** line for citations.
2. **Services** — core, star service (called out), specialties, additional. Sales model. Residential/commercial mix. Minimum order and distance fees.
3. **Market & Service Area** — physical base vs. primary marketing area; target cities with travel times; **the competitive benchmark table from Step 2B** with the five-signal read.
4. **Differentiators & Trust Signals** — from the discovery call, in concrete terms. Separate the *marketing* differentiators the owner wrote from the *operational* ones buried in their process — lead with the operational ones. Insurance, license, bond. Social proof with honest status and the review forensics from 2C. **Include the copy-precision warning here.**
5. **Digital Assets & Objectives** — GBP status and configuration, website, socials, lead source, core brand message/slogan.

**Check brand-name consistency across all source material.** Client documents routinely spell their own brand three different ways. Flag every variant found, with where it appears, and force a canonical choice before anything touches GBP, directories, or the site.

Close with an **open items** list, split into blocking vs. commercial vs. brand.

---

## Step 4 — Buyer Persona (12 blocks)

Covers **all services**, not just the star one. Ground every block in the discovery call and the review evidence; label market inferences `[Assumption]`.

1. Identity (age, role, decision-maker status)
2. Socioeconomic context
3. Triggering situation (what makes them search *today*)
4. Pain points — from the call, in their terms
5. Service-specific fears — **one row per service**, not a general list
6. Deeper motivations
7. Decision criteria (ranked)
8. Objections + how to answer each, sourced from the client's own FAQ answers where they exist
9. Search behavior (actual queries in every relevant language, platforms, local channels)
10. Buying season / cycle
11. Buyer language — words to USE vs. AVOID
12. Ideal conversion scenario (step by step, ending in the desired action)

Blocks 4, 5, 8 and 11 are the highest-leverage — they feed the offer, the website copy, and the ads.

**Where review evidence contradicts the persona hypothesis, say so at the top of the document rather than quietly rewriting.** The user needs to see that the correction happened and why. Then hold the rewrite until the client confirms revenue mix — reordering personas on review counts alone is trading one assumption for another.

Add short **secondary variants** where the buying process genuinely differs (dual decision-maker, B2B procurement) rather than forcing one persona to cover incompatible behavior.

---

## Step 5 — Value Offer (7 components)

Built on the **star service** (the wedge), with the rest as supporting services.

**If the star service isn't confirmed, say so at the top of the document and state that the whole offer gets rewritten — not adjusted — if the hypothesis is wrong.** Don't build a polished offer on an unmarked guess.

1. **Transformational result** — the outcome in the buyer's language, not features. If the client wrote a strong line themselves, build around it instead of replacing it.
2. **Named method** — give their real process a name, based on what actually differentiates them **technically** (usually from the buried operational material in Step 1). Offer two or three options. Flag as `[CONFIRM with client]` before treating it as a brand.
3. **Tangible deliverables** — what they actually receive, itemized. Flag deliverables they already produce informally but don't get credit for.
4. **Proof** — split explicitly into *can state today* and *cannot state until verified*. Only what's verified.
5. **Risk reduction** — guarantee if one exists; if not, say so plainly and assemble the **operational commitments** already documented in their process, which usually add up to real trust without inventing a warranty. Where the client genuinely can't guarantee an outcome (weather, third-party venues, client handling), recommend saying so visibly — it prevents the review that comes from an expectation nobody could meet.
6. **Urgency / scarcity** — must be real (crew capacity, physical inventory blocked per date, seasonality). Never manufacture. If the honest scarcity needs a number the client hasn't given, don't use it until they do.
7. **Call to action** — one clear action with the real contact method and response time. Order intake fields by friction; a nine-field first contact kills conversion.

---

## Step 6 — Local Presence Audit

The executable document. Separate file, because the other three are strategy and this one is a work order.

Structure:
1. **One-line diagnosis**
2. **Prominence evidence** — the queries run, what surfaced, what didn't
3. **Primary category** — current, risk, candidates table, verification method, change warning
4. **Services** — typos, redundancy, gaps ranked by value, language
5. **Reviews** — count vs. benchmark, velocity, response rate, request system
6. **Configuration items pending verification**
7. **Prioritized action plan** — *this week* (free, high impact, with time estimates) / *next two weeks* (needs client decision, with dependency named) / *month 2+*
8. **What NOT to do** — the guideline-violating tactics competitors are visibly using, named with the risk

---

## Output format

Four separate markdown documents. Write them in the **language the client's site will use** — for contractors serving English-speaking homeowners, write in English even if the conversation is in Spanish.

Where the site language is genuinely undecided, write the internal strategy docs in the working language, state explicitly that this is a document-language choice and not a site decision, and make the site-language question a blocking open item. Where review-language evidence exists (Step 2C), use it — it beats demographic inference.

End the run with a consolidated **open items** list, tiered blocking / commercial / brand, and a separate list of verification steps C3 still owes.

---

## Common failure modes to avoid

- Writing the persona around only the star service instead of all services
- Inventing a named method with technical claims the client never made
- Assigning specific cities/locations that weren't verified
- Letting "X years of experience" drift into "X years in business"
- **Inferring that a business is new because its digital footprint is** (Rule 3)
- **Benchmarking with a plain web search instead of a geolocated places search** — you'll get aggregators and a competitive bar that's off by an order of magnitude
- **Improvising a benchmark when a BrightLocal report already answers it**, or presenting a places-search read as equivalent to a geo-grid
- **Treating reviews as a number instead of as evidence** — the text tells you segment, longevity, language, channel, and which fears to answer
- Recommending a category change from inference instead of giving a verification method
- Recommending a tactic that works for competitors but violates platform guidelines
- Skipping the insurance question because the trade isn't licensed
- Producing a polished doc that hides gaps instead of flagging them
- Quietly correcting an earlier wrong conclusion instead of marking the correction
