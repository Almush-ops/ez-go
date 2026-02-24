# Site Spec: EZ-GO Israel

**Domain**: ez-go.co.il
**Type**: 1 — Lead Gen (Product Showcase)
**Created**: 2026-02-24
**Status**: Draft
**Plan File**: `C:\Users\Almog\.claude\plans\jaunty-hopping-reddy.md`

---

## Business Context

- **Goal**: Lead generation (form fills, phone calls)
- **Niche**: רכבים תפעוליים E-Z-GO - חשמליים ובנזין
- **Target queries**:
  - ezgo / איזיגו / איזי גו
  - רכב תפעולי ezgo / e-z-go
  - רכב גולף EZGO
  - קלאב קאר איזיגו
- **Competition level**: Medium (main competitor: e-z-go.co.il)
- **Platform**: Astro 5.x + Cloudflare Pages

### Special Constraints (CRITICAL)
- **NO PRICES** - אין קשר עם יבואן/ספק, לכן אין מחירים באתר
- **NO "Official Representative"** - לא לכתוב "הנציגות הרשמית"
- **Product Schema WITHOUT offers** - No price field in JSON-LD
- **Vague but credible identity** - "המומחים לרכבי E-Z-GO בישראל"

---

## Brand Concept

**Business Name**: EZ-GO Israel / איזי גו ישראל

**Type**: New brand (no existing assets)

**Personality** (5 adjectives):
- אמריקאי (American heritage - since 1954)
- מקצועי (Professional expertise)
- איכותי (Quality-focused)
- מומחה (Expert in EZGO vehicles)
- אמין (Trustworthy)

**Target Audience**:
- **Primary**: קיבוצים, מושבים, מפעלים - מחפשים רכב תפעולי איכותי
- **Secondary**: מגרשי גולף, אתרי נופש, ריזורטים
- **What makes them choose us**: מומחיות ב-EZGO, ידע מקצועי, שירות אישי

**Trust Strategy** (how we look like a real business):
- קישורים לסושיאל הרשמי של EZGO (Facebook, YouTube, LinkedIn, Instagram)
- מידע מפורט על היצרן (1954, Textron, אוגוסטה ג'ורג'יה)
- 14 מוסכים שותפים ברחבי הארץ
- מפרטים טכניים מדויקים מאתר היצרן
- טלפון ישראלי: 077-231-2585

**Niche Profile Match**: Operational Vehicles (מתוך industry-profiles.md)
**Recommended Layout Archetype**: Premium Catalog (full-bleed heroes, product galleries)

---

## Images Plan

**User will provide:**
- [ ] לוגו EZ-GO (מאתר היצרן או עיצוב חדש)
- [ ] תמונות מוצרים (מאתר היצרן הרשמי ezgo.txtsv.com)

**Generate with AI (Ideogram/Midjourney):**
- [ ] Hero background - קיבוץ/מושב עם רכב תפעולי
- [ ] Atmosphere shots - מגרש גולף, מפעל, ריזורט
- [ ] Category hero images (4)

**Find on Unsplash/Pexels:**
- [ ] Industrial/warehouse scenes
- [ ] Golf course atmosphere
- [ ] Kibbutz/community scenes

**From Official EZGO Site** (ezgo.txtsv.com):
- [ ] All 12 model product images
- [ ] Technology images (ELiTE Lithium, Samsung SDI)
- [ ] Brand assets

---

## Page Inventory

### Core Pages (always exist)

| URL | Hebrew Name | Template | Priority | Schema Types |
|-----|------------|---------|---------|-------------|
| `/` | עמוד הבית | homepage | P1 | Organization, WebSite |
| `/about/` | אודות E-Z-GO | about | P2 | Organization |
| `/contact/` | צור קשר | contact | P1 | LocalBusiness, PostalAddress |
| `/service/` | שירות ותמיכה | service | P2 | - |
| `/service/service-centers/` | מרכזי שירות | service-centers | P2 | LocalBusiness (multiple) |
| `/accessibility/` | נגישות | legal | P3 | - |
| `/privacy/` | פרטיות | legal | P3 | - |
| `/terms/` | תנאי שימוש | legal | P3 | - |
| `/thank-you/` | תודה | utility | P3 | - (noindex) |

### Category Pages (4 categories)

| URL | Hebrew Name | Models | Priority | Schema |
|-----|------------|--------|---------|--------|
| `/electric/` | רכבים חשמליים | 6 | P1 | ItemList + BreadcrumbList |
| `/gas/` | רכבי בנזין | 2 | P1 | ItemList + BreadcrumbList |
| `/cargo/` | רכבי משא | 2 | P1 | ItemList + BreadcrumbList |
| `/industrial/` | רכבים לתעשייה | 2 | P1 | ItemList + BreadcrumbList |

### Model Pages (12 models)

| URL | Hebrew Name | Category | Priority | Schema |
|-----|------------|----------|---------|--------|
| `/models/rxv-2/` | RXV 2 - רכב גולף 2 מושבים | electric | P1 | Product (NO offers) + FAQPage + BreadcrumbList |
| `/models/rxv-4/` | RXV 4 - רכב גולף 4 מושבים | electric | P1 | Product + FAQPage + BreadcrumbList |
| `/models/liberty/` | Liberty - רכב לנסיעה ברחוב | electric | P1 | Product + FAQPage + BreadcrumbList |
| `/models/express-4-elite/` | Express 4 ELiTE - חשמלי 4 מושבים | electric | P1 | Product + FAQPage + BreadcrumbList |
| `/models/express-6-elite/` | Express 6 ELiTE - חשמלי 6 מושבים | electric | P1 | Product + FAQPage + BreadcrumbList |
| `/models/rxv-2-gas/` | RXV 2 בנזין - 2 מושבים | gas | P1 | Product + FAQPage + BreadcrumbList |
| `/models/rxv-4-gas/` | RXV 4 בנזין - 4 מושבים | gas | P1 | Product + FAQPage + BreadcrumbList |
| `/models/express-4-gas/` | Express 4 בנזין - 4 מושבים | gas | P1 | Product + FAQPage + BreadcrumbList |
| `/models/express-6-gas/` | Express 6 בנזין - 6 מושבים | cargo | P1 | Product + FAQPage + BreadcrumbList |
| `/models/valor-6/` | Valor 6 - רכב משא 6 מושבים | cargo | P1 | Product + FAQPage + BreadcrumbList |
| `/models/cushman-hauler-pro/` | Cushman Hauler PRO - תעשייתי | industrial | P1 | Product + FAQPage + BreadcrumbList |
| `/models/hauler-800/` | Hauler 800 - משא תעשייתי | industrial | P1 | Product + FAQPage + BreadcrumbList |

### Blog Articles (15 articles)

| URL | Hebrew Name | Type | Priority | Schema |
|-----|------------|------|---------|--------|
| `/blog/ezgo-vs-club-car/` | E-Z-GO מול Club Car - השוואה מקיפה | comparison | P2 | Article + FAQPage |
| `/blog/ezgo-vs-marshell/` | E-Z-GO מול Marshell - יתרונות וחסרונות | comparison | P2 | Article + FAQPage |
| `/blog/ezgo-vs-yamaha/` | E-Z-GO מול Yamaha - השוואת רכבי גולף | comparison | P2 | Article + FAQPage |
| `/blog/how-to-choose-golf-cart/` | מדריך בחירת רכב גולף | guide | P2 | Article + FAQPage |
| `/blog/lithium-vs-lead-acid-ezgo/` | סוללת ליתיום מול עופרת-חומצה | guide | P2 | Article |
| `/blog/ezgo-buying-guide/` | מדריך רכישת E-Z-GO | guide | P2 | Article + FAQPage |
| `/blog/ezgo-for-kibbutz/` | E-Z-GO לקיבוצים ומושבים | use-case | P3 | Article |
| `/blog/ezgo-for-hotels/` | E-Z-GO למלונות ואתרי נופש | use-case | P3 | Article |
| `/blog/ezgo-for-golf-courses/` | E-Z-GO לשטחי גולף | use-case | P3 | Article |
| `/blog/ezgo-for-industry/` | E-Z-GO למפעלים ותעשייה | use-case | P3 | Article |
| `/blog/ezgo-maintenance-guide/` | תחזוקת רכב E-Z-GO - המדריך המלא | technical | P3 | Article + HowTo |
| `/blog/ezgo-charging-guide/` | טעינת רכב E-Z-GO | technical | P3 | Article + HowTo |
| `/blog/ezgo-elite-lithium-technology/` | טכנולוגיית ELiTE - סוללת הליתיום של E-Z-GO | technical | P2 | Article |
| `/blog/ezgo-history/` | ההיסטוריה של E-Z-GO - מ-1954 עד היום | info | P3 | Article |
| `/blog/all-ezgo-models-comparison/` | השוואת כל דגמי E-Z-GO | comparison | P2 | Article + ItemList |

**Total Pages**: ~50 pages (9 core + 4 category + 12 models + 15 blog + utility pages)

---

## URL Structure Rules

- All slugs in **English** (even for Hebrew content)
- Pattern: `/models/[model-slug]/` for products
- Pattern: `/blog/[article-slug]/` for articles
- Categories as top-level: `/electric/`, `/gas/`, `/cargo/`, `/industrial/`
- NO query parameters in indexable URLs
- Trailing slash: YES (consistent across site)
- NO city pages (no local presence claims)

---

## UI Modules Per Page Type

### Homepage
- **HeroSection** - Split hero with EZGO vehicle image + value proposition
- **TrustBar** - Dark variant: "65+ שנות ייצור", "200+ מדינות", "Textron Industries"
- **CategoryGrid** - 4 cards (electric, gas, cargo, industrial) with images
- **ProductCard grid** - 4-6 featured models
- **AboutSnippet** - Brief EZGO story with Textron mention
- **FAQ** - 6-8 common questions
- **CTABanner** - "לקבלת ייעוץ מקצועי"

### Category Pages (electric, gas, cargo, industrial)
- **HeroSection** - Category intro with image
- **ProductCard grid** - All models in category
- **SpecTable** - Category comparison (all models side-by-side)
- **FAQ** - Category-specific questions
- **RelatedItems** - Link to other categories
- **CTABanner**

### Model Pages (CRITICAL: No prices!)
- **ProductImageGallery** - 4-6 photos from EZGO official site
- **SpecTable** - Full specifications
- **FeatureCards** - 4-6 key features
- **TrustBar** - Badges (warranty, certification)
- **FAQ** - 6 model-specific questions
- **RelatedItems** - 3 related models
- **CTABanner** - "לפרטים והצעת מחיר"

**Note**: ProductCard and Model pages show "לפרטים והצעת מחיר" instead of price.

### Service Centers Page
- **HeroSection** - "14 מוסכים ברחבי הארץ"
- **RegionCards** - 3 regions (צפון, מרכז, דרום)
- **BusinessCard** - Per garage: name, address, phone, hours
- **ServicesList** - What services are offered
- **FAQ** - Service-related questions
- **CTABanner**

### Blog Articles
- **ArticleHeader** - Title, date, reading time
- **TableOfContents** - For long articles
- **Content** - Markdown with images
- **FAQ** - Article-specific (for comparison/guide articles)
- **RelatedItems** - 3 related articles
- **CTABanner**

### About Page
- **HeroSection** - EZGO story
- **Timeline** - 1954 founding → Textron acquisition → today
- **StatsRow** - 65+ years, 200+ countries, 35,000+ employees
- **TrustBarLogos** - Textron family brands (Cushman, Bell, Cessna)
- **SocialLinks** - Official EZGO social media
- **CTABanner**

---

## Content Requirements

### Model Pages (minimum)
- 400+ words unique description
- ALL spec fields filled (from ezgo.txtsv.com)
- 4+ images (front, side, detail, context)
- 6+ FAQ questions specific to this model
- **NO price** - use "לפרטים והצעת מחיר צרו קשר"

### Category Pages (minimum)
- 200+ words unique intro
- All models in category displayed
- Comparison table (specs side-by-side)
- Category-specific FAQ

### Blog Articles (minimum)
- 800+ words for comparison articles
- 500+ words for use-case articles
- Internal links to relevant model pages
- FAQ section for guide/comparison articles

---

## Internal Linking Map

```
Homepage
  --> Electric, Gas, Cargo, Industrial (categories)
  --> Featured models (4-6)
  --> About, Contact, Service

Category Pages
  --> All models in category
  --> Other categories (cross-link)
  --> Relevant blog articles

Model Pages
  --> Back to parent category
  --> Related models (3 from same category)
  --> Relevant blog articles (2-3)
  --> Contact page

Blog Articles
  --> Relevant model pages (2-3 links)
  --> Category pages
  --> Contact page (at end)

Service Pages
  --> Contact
  --> Model pages (for warranty info)
  --> About
```

---

## SEO Implementation

### Keyword Map (no cannibalization)

| Page URL | Primary Keyword | Search Intent |
|----------|----------------|--------------|
| `/` | ezgo ישראל / איזי גו | Navigational |
| `/electric/` | רכב תפעולי חשמלי ezgo | Informational |
| `/gas/` | רכב תפעולי בנזין ezgo | Informational |
| `/cargo/` | רכב משא ezgo | Informational |
| `/industrial/` | רכב תעשייתי ezgo | Informational |
| `/models/liberty/` | ezgo liberty | Informational |
| `/models/rxv-elite-lithium/` | ezgo rxv | Informational |
| `/blog/ezgo-vs-club-car/` | ezgo vs club car | Comparison |
| `/blog/how-to-choose-golf-cart/` | איך לבחור רכב גולף | Informational |

### Noindex Pages

- `/thank-you/`
- All `?filter=*` parameter URLs (if any)

### Canonical Strategy

- Self-referencing canonical on every page
- Trailing slash consistent everywhere
- non-www (ez-go.co.il, not www.ez-go.co.il)

---

## Technical Requirements

### Astro-Specific
- [x] `<html lang="he" dir="rtl">`
- [ ] Self-hosted Hebrew font (Heebo woff2)
- [ ] GA4 `<script is:inline>`
- [ ] Security headers in `public/_headers`
- [ ] og:type varies per page type
- [ ] og:image unique per key page

### Schema Per Page (CRITICAL: No offers on Product!)

**Homepage:**
```json
{
  "@type": "Organization",
  "name": "EZ-GO Israel - איזי גו ישראל",
  "url": "https://ez-go.co.il",
  "description": "המומחים לרכבי E-Z-GO בישראל. ייעוץ מקצועי, שירות ותמיכה.",
  "telephone": "+972-77-231-2585",
  "sameAs": [
    "https://www.facebook.com/ezgo",
    "https://www.youtube.com/user/EZGO",
    "https://www.linkedin.com/company/ezgo",
    "https://www.instagram.com/ezgocarts"
  ]
}
```

**Model Pages (NO offers - this is critical):**
```json
{
  "@type": "Product",
  "name": "E-Z-GO RXV ELiTE Lithium - רכב תפעולי חשמלי",
  "description": "...",
  "image": ["..."],
  "brand": {
    "@type": "Brand",
    "name": "E-Z-GO"
  }
  // NO "offers" property - price unknown
}
```

**Category Pages:**
```json
{
  "@type": "ItemList",
  "name": "רכבים חשמליים E-Z-GO",
  "numberOfItems": 6,
  "itemListElement": [...]
}
```

**Blog Articles:**
```json
{
  "@type": "Article",
  "headline": "...",
  "author": {"@type": "Organization", "name": "EZ-GO Israel"},
  "publisher": {"@type": "Organization", "name": "EZ-GO Israel"},
  "datePublished": "...",
  "dateModified": "..."
}
```

---

## Component Requirements

Components needed for vibe-site-builder:

| Component | From astro-design-system | Pages Used |
|-----------|-------------------------|-----------|
| HeroSection | YES (split variant) | All pages |
| ProductCard | YES (modified - no price) | Homepage, Category |
| SpecTable | YES | Model, Category |
| FAQ | YES | All pages |
| CTABanner | YES | All pages |
| TrustBar | YES | Homepage, Model |
| CategoryGrid | YES | Homepage |
| ProductImageGallery | YES | Model pages |
| RelatedItems | YES | Model, Blog |
| ArticleCard | YES | Blog index |
| RegionCards | NO - build custom | Service centers |
| GarageCard | NO - build custom | Service centers |
| Timeline | NO - build custom | About page |

---

## Service Centers Data

14 garages from golfcart.co.il (same network):

**North (6):**
| Name | Address | Phone |
|------|---------|-------|
| GN סוכנויות | רמות נפתלי | 04-6905080 |
| תל יוסף רכב חשמלי | עין חרוד מאוחד | 04-6070134 |
| אוטוטק | רח' העמל 1, אלוני אבא | 04-8383232 |
| ארז מוטורס | כפר בית ג'אן | 072-2288456 |
| בשטח | קיבוץ מענית | 074-7408404 |
| סוזוקה ע.פ | הקורנס 21, חיפה | 04-8724501 |

**Center (4):**
| Name | Address | Phone |
|------|---------|-------|
| סקוטרז כפר סבא | הבנים 11, כפר סבא | 050-6313131 |
| כסלו רכב עזר | טירה | 09-7455222 |
| א.ג. קלנועיות | יעקב עולמי 51, משמר השבעה | 03-5033319 |
| משה וגיא טרקטורונים | ההר 2, איזור תעשייה הר טוב | 050-2676789 |

**South (4):**
| Name | Address | Phone |
|------|---------|-------|
| גוד ריידר | פלדה 5, ערד | 052-9435571 |
| פרג לכיש | שדרות צורן 5, קרית גת | 08-6885371 |
| מדי אילת | מרכז הוכמן, מדיין 12, אילת | 08-6332657 |
| רותם סייקל | התופרת 6, אילת | 08-6315540 |

---

## Contact Form Webhook

Same webhook as marshell.co.il:
```javascript
const data = {
  'your-name': formData.get('name'),
  'phone': formData.get('phone'),
  'location': formData.get('location'),
  'page-title': h1,
  'form-type': 'almog_golfcart',
  'website': 'EZ-GO',  // Changed from 'מרשל'
  'category': 'רכב תפעולי',
};

fetch('https://hook.eu1.make.com/aow7z2gnae1w1ms3kk56uvgnc3haknan', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## Content Factory Integration

- [x] NO — manual content (not a recipe/content site)

---

## Launch Checklist

- [ ] SITE-SPEC.md approved by user
- [ ] DESIGN-BRIEF.md created (site-design-brief skill)
- [ ] All mandatory images collected (EZGO product photos)
- [ ] Domain registered: ez-go.co.il
- [ ] GSC domain property set up: sc-domain:ez-go.co.il
- [ ] Email routing: support@ez-go.co.il
- [ ] Astro project initialized (vibe-site-builder skill)
- [ ] All pages built and content filled
- [ ] Schema validated (Google Rich Results Test)
- [ ] Sitemap submitted to GSC
- [ ] Top 10 pages manually indexed
- [ ] Cross-links from owned sites added (8+ backlinks)
- [ ] Site added to Uptime Monitor
- [ ] Site added to SEO Ranking Monitor

---

## Backlinks Plan

From portfolio sites:

| Site | Anchor | Target |
|------|--------|--------|
| marshell.co.il | E-Z-GO Israel | ez-go.co.il |
| clubcar-israel.co.il | איזי גו | /models/liberty/ |
| golfcart.co.il | EZGO רכב תפעולי | homepage |
| golanagency.co.il | רכבי E-Z-GO | /electric/ |
| hatavor-motor.co.il | איזיגו ישראל | /cargo/ |
| yad2clubcar.co.il | E-Z-GO חדש | /models/rxv-elite-lithium/ |
| clubmotor.co.il | רכבי EZGO | /gas/ |
| carmelgilboa.co.il | איזי גו ישראל | homepage |

---

## About Page Content (from official EZGO)

Sources: ezgo.txtsv.com/about-e-z-go, ezgo.txtsv.com/about-textron

**Key Points:**
- Founded in 1954 in Augusta, Georgia
- Two brothers wanted to build a better golf car
- Part of Textron Inc. (NYSE: TXT) since 1960
- 35,000+ employees, 25 countries
- Sister brands: Cushman, Jacobsen, Bell Helicopter, Cessna
- Shingo Prize for Manufacturing Excellence (2009)
- ISO 9001 certified
- Technologies: AC Drive, ELiTE Lithium, Samsung SDI batteries

**Official Social Media (for E-E-A-T):**
- Facebook: https://www.facebook.com/ezgo
- YouTube: https://www.youtube.com/user/EZGO
- LinkedIn: https://www.linkedin.com/company/ezgo
- Instagram: https://www.instagram.com/ezgocarts
