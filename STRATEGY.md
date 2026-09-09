# EMILOV LUXURY — Strategy & Creative Direction

## 0. Research note (important, read first)
Instagram (@emilovluxury) was later opened directly in-browser (public profile, no login
needed) and turned out to be a real, verified (blue check) business account — 5,117
followers, bio confirms Milan (by appointment) + Rome (show room), contact email
`emilovluxury@gmail.com`, WhatsApp +39 333 347 2136. Real product photography (12 images)
and this contact/location info were pulled from the account and are now used on the site —
see §5. Anything still not verifiable from the public profile remains an explicit
`[ASSUMPTION]`, flagged `[CONFIRM]` inline on the site:

- `[ASSUMPTION]` categories sold beyond what's photographed: watches, additional
  accessories, collectibles — nav includes them as future categories; only Handbags,
  Accessories and Jewelry currently have real catalog items.
- `[ASSUMPTION]` no formal third-party authentication partner confirmed — copy describes
  an in-house process without naming unverifiable certifications.
- `[ASSUMPTION]` sales currently happen via DM/WhatsApp, not a checkout — the site is built
  as an "enquire, don't checkout" model, easy to upgrade to Shopify/Stripe later.
- `[ASSUMPTION]` no reviews, press or founder bio are published anywhere — none invented;
  placeholders are marked `[CONFIRM]` in the HTML for the client to fill in.
- `[CONFIRM]` exact bag references/sizes/years/dimensions for each photographed piece —
  captions describe only what's visually verifiable (material, hardware colour) plus
  "Alligator" as the general skin family; exact reference numbers need the owner's input.

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
wishlist via localStorage). Remaining unphotographed slots (About/Private Shopping hero,
PDP secondary angles) stay as labelled placeholder frames (`[PHOTO ... pending]`) rather
than stock photos — real photography for those is the next highest-leverage upgrade.

## 4. What's deliberately NOT built yet (flagged, not faked)
Real checkout/payments, real Shopify/CMS wiring, multilingual content beyond English,
live Instagram feed embed (needs Meta Business API access — the current site links out to
Instagram instead), legal policy final text (drafts included, marked for legal review),
real founder photo/story, real authentication-partner names, and additional angles (back,
interior, wear detail) for the products already listed.

## 5. Real photography sourced from Instagram (this update)
12 images were pulled from the account's public grid (`assets/products/` and
`assets/editorial/`) and are used as real product/editorial photography across the
homepage, shop grid, PDP and Sell With Us page — replacing the earlier grey placeholder
frames. Captions describe only what's visually verifiable per piece (material, hardware
tone); exact references/sizes/years are marked `[CONFIRM]` where shown. The catalog was
narrowed to what's actually photographed (Hermès bags + one jewelry piece + one scarf) —
the earlier placeholder brands (Chanel, Rolex, Cartier, LV, Goyard, VCA) were removed
rather than paired with the wrong product's photo. Contact info (email, Milan/Rome
locations) was also corrected from the verified bio — see §0.
