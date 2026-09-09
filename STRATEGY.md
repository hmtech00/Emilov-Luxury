# EMILOV LUXURY — Strategy & Creative Direction

## 0. Research note (important, read first)
Instagram (@emilovluxury) could not be scraped for bio text, post history, pricing or
category data — Instagram blocks automated/unauthenticated access. Every brand fact below
that isn't generic market knowledge is therefore an **explicit assumption**, flagged
`[ASSUMPTION]` inline on the site and here. Before launch, replace these with verified
answers from the actual Instagram bio, DMs, and the business owner:

- `[ASSUMPTION]` categories sold: handbags (primary), watches, jewelry, accessories,
  collectibles — typical for an IG luxury reseller; confirm actual catalog.
- `[ASSUMPTION]` geography: Italy-based, ships internationally.
- `[ASSUMPTION]` no formal third-party authentication partner exists yet — copy is written
  to describe an in-house process without naming unverifiable certifications.
- `[ASSUMPTION]` sales currently happen via DM/WhatsApp, not a checkout — the site is built
  as an "enquire, don't checkout" model, easy to upgrade to Shopify/Stripe later.
- `[ASSUMPTION]` no reviews, press or founder bio are published anywhere — none invented;
  placeholders are marked `[CONFIRM]` in the HTML for the client to fill in.

## 1. Positioning
- **Brand essence:** A private, curated showroom for exceptional pre-owned luxury.
- **Brand promise:** Every piece is selected, assessed and represented honestly — nothing
  Emilov wouldn't put its own name on.
- **Target customer:** 28–50, discovered the brand on Instagram, financially comfortable
  but not showy, buys 1–3 luxury pieces a year, wants rarity and condition transparency
  more than the lowest price, decides fast when trust is established.
- **Emotional positioning:** calm, informed, quietly excited — like being let into a
  showroom, not sold to.
- **Trust positioning:** transparent condition documentation, a real human to talk to
  before spending, clear process, no invented guarantees.
- **Competitive positioning:** smaller and more personal than Vestiaire/Fashionphile/The
  RealReal (no marketplace noise, no seller ratings theatre), more transparent and
  digitally credible than a typical IG reseller DM-only shop, less institutional/cold than
  an auction house.

## 2. Information architecture
Shop (New Arrivals, Handbags, Watches, Jewelry, Accessories, Collectibles) · Sell With Us ·
Private Shopping · Authenticity · About · Contact — plus utility: search, wishlist,
WhatsApp, Instagram, EN/IT language switch (IT stubbed, EN complete for v1).

## 3. Pages built in this v1
`index.html` `shop.html` `product.html` `authenticity.html` `sell-with-us.html`
`private-shopping.html` `about.html` `contact.html` — shared `css/styles.css` design
system (tokens, type scale, components) and `js/main.js` (nav, filters, gallery, forms,
wishlist via localStorage). No product photography exists yet, so product imagery is
represented with labelled placeholder frames (`[PRODUCT PHOTO]`) rather than stock photos —
swap in real photography before launch, one of the highest-leverage upgrades available.

## 4. What's deliberately NOT built yet (flagged, not faked)
Real checkout/payments, real Shopify/CMS wiring, multilingual content beyond English,
real Instagram feed embed (needs Meta API + business account access), legal policy final
text (drafts included, marked for legal review), real founder photo/story, real
authentication-partner names.
