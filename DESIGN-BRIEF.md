# Design Brief: EZ-GO Israel

> Created: 2026-02-24
> Niche: רכבים תפעוליים (Operational Vehicles)
> URL: ez-go.co.il

---

## 1. Brand Identity

### Basics
- **Brand name**: EZ-GO Israel / איזי גו ישראל
- **Tagline**: המומחים לרכבי E-Z-GO בישראל
- **Target audience**: קיבוצים, מושבים, מפעלים, מגרשי גולף, אתרי נופש
- **Primary goal**: Lead generation (phone + form)
- **Brand personality** (5 words): אמריקאי, מקצועי, איכותי, מומחה, אמין

### Tone of Voice
- מקצועי אך נגיש, מידעי ומהימן, ללא מכירתיות אגרסיבית
- Sample sentence: "רכבי E-Z-GO מייצגים למעלה מ-65 שנות מצוינות. צרו קשר לייעוץ מקצועי."

### CRITICAL Constraints (from SITE-SPEC)
- **NO PRICES** anywhere on the site
- **NO "Official Representative"** language
- CTA is "לפרטים והצעת מחיר" NOT "לרכישה"

---

## 2. Color System

### Brand Palette
- **Palette name**: "EZGO Professional Blue"
- **Creation method**: Based on official EZGO branding (primary blue #2563EB)

| Shade | Hex | Usage |
|-------|-----|-------|
| 50 | #EFF6FF | Subtle backgrounds, tints |
| 100 | #DBEAFE | Hover states, light backgrounds |
| 200 | #BFDBFE | Badges, light accents |
| 300 | #93C5FD | Decorative elements |
| 400 | #60A5FA | Secondary buttons |
| **500** | **#2563EB** | **Primary brand color** |
| 600 | #1D4ED8 | Button backgrounds, links |
| 700 | #1E40AF | Text on light backgrounds |
| 800 | #1E3A8A | Dark headings |
| 900 | #172554 | Near-black with brand tint |

### Semantic Colors
| Token | Hex | Purpose |
|-------|-----|---------|
| dark | #0F172A | Primary text, headings |
| surface | #F8FAFC | Alternating section backgrounds |
| border | #E2E8F0 | Borders, dividers |
| accent | #F59E0B | CTAs, highlights (amber for contrast) |
| muted | #64748B | Secondary text, captions |

### Contrast Check
- ezgo-700 (#1E40AF) on white: 7.1:1 PASS
- white on ezgo-600 (#1D4ED8): 5.2:1 PASS
- dark (#0F172A) on surface (#F8FAFC): 15.8:1 PASS

---

## 3. Typography

### Fonts
- **Primary font**: Heebo (weights: 400, 500, 600, 700, 800)
- **Secondary font**: None (Heebo for all text)

### Scale
```
h1: text-3xl md:text-4xl lg:text-5xl  font-bold     leading-tight
h2: text-2xl md:text-3xl              font-bold     leading-snug
h3: text-xl                           font-semibold
h4: text-lg                           font-semibold
body: text-base                       font-normal   leading-relaxed
```

### Font Files
- Download from: https://fonts.google.com/specimen/Heebo
- WOFF2 files needed: 400, 500, 600, 700, 800
- Location: `/public/fonts/`

---

## 4. Logo

- **Status**: Needs creation (use EZGO wordmark style)
- **File locations**: `/public/logo.svg`, `/public/logo.png`, `/public/favicon.svg`
- **Colors**: ezgo-600 on white / white on dark
- **Creation method**: Text logo "EZ-GO" with "Israel" subtitle
- **Style reference**: Official EZGO logo typography (bold, clean, American)

---

## 5. Hero Section

- **Style**: Split Hero (text + image side by side)
- **Height**: standard (py-20 md:py-28)
- **Content alignment**: right (RTL)
- **Overlay**: None (clean product photography)
- **Primary CTA**: "קבלו ייעוץ מקצועי" → Contact form / phone
- **Secondary CTA**: "כל הדגמים" → /electric/
- **Special elements**: Trust stats below CTA ("65+ שנות ייצור | 200+ מדינות | Textron Industries")

### Hero for Category Pages
- **Style**: Gradient (brand gradient) with category icon
- **Height**: compact (py-12 md:py-16)
- **Primary CTA**: "לפרטים והצעת מחיר"

### Hero for Model Pages
- **Style**: Product Gallery (large image + thumbnails)
- **Height**: auto (content-driven)

---

## 6. Homepage Layout

### Archetype: Premium Catalog

### Section Sequence

| # | Section | Pattern | Background | Padding |
|---|---------|---------|------------|---------|
| 1 | Hero | Split (text + EZGO vehicle) | bg-gradient-to-bl from-ezgo-900 via-ezgo-800 to-dark | py-20 md:py-28 |
| 2 | Trust Bar | Stats Row (3-4 stats) | bg-white border-b | py-6 |
| 3 | Categories | Icon Cards Grid (2x2) | bg-surface | py-12 md:py-16 |
| 4 | Featured Models | Product Card Grid (4-6 cards) | bg-white | py-12 md:py-16 |
| 5 | About Snippet | Zigzag (image + text) | bg-surface | py-12 md:py-16 |
| 6 | Why EZGO | Benefits Grid (4-6 items) | bg-white | py-12 md:py-16 |
| 7 | Service Network | Stats + Link | bg-ezgo-50 | py-10 md:py-12 |
| 8 | FAQ | Accordion (6-8 questions) | bg-white | py-12 md:py-16 |
| 9 | CTA Banner | Full-width with form | bg-gradient-to-r from-ezgo-600 to-ezgo-700 | py-12 md:py-16 |

---

## 7. Component Styles

| Component | Choice | Notes |
|-----------|--------|-------|
| Cards | Elevated | shadow-sm hover:shadow-xl, border on hover |
| Buttons | Rounded-md | Primary: bg-ezgo-500, Secondary: bg-accent (amber) |
| Border radius | rounded-xl | Cards, containers |
| Shadow intensity | Moderate | shadow-sm default, shadow-xl on hover |
| Trust bar | Dark+Stats | Numbers with labels, brand gradient bg |
| Header | Transparent on Hero | Solid on scroll |
| Footer | Mega 4-col | Links + social + contact |
| Mobile CTA | Floating Phone | Sticky phone button bottom-right |

### Button Styles
```css
/* Primary */
bg-ezgo-500 hover:bg-ezgo-600 text-white font-semibold rounded-md px-6 py-3

/* Secondary */
bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md px-6 py-3

/* Outline */
border-2 border-ezgo-500 text-ezgo-600 hover:bg-ezgo-50 font-semibold rounded-md px-6 py-3
```

### Card Styles (ProductCard)
```css
/* Container */
bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300
hover:-translate-y-1.5 border border-gray-100 hover:border-ezgo-200

/* Image area */
aspect-[4/3] bg-gradient-to-br from-gray-50 via-surface to-gray-100

/* CTA area (NO price!) */
<span class="text-ezgo-600 font-semibold">לפרטים והצעת מחיר</span>
```

---

## 8. Imagery Direction

- **Photo style**: Clean product photography, professional catalog style
- **Primary image ratio**: 4/3 (product cards), 16/9 (heroes)
- **Color temperature**: Neutral to cool (professional)
- **Sources**:
  - Product images: Official EZGO site (ezgo.txtsv.com)
  - Atmosphere: AI-generated (kibbutz, golf course, factory)
  - Stock: Unsplash/Pexels for industrial/lifestyle
- **Placeholder strategy**: Gradient (from-gray-50 to-gray-100) with product name text

### Image Requirements
- Hero: 1920x1080 EZGO vehicle in context
- Product cards: 800x600 white/gradient background
- Category heroes: 1920x600 atmospheric/abstract

---

## 9. Conversion Elements

- **Primary CTA**: Phone call + Form submission (both)
- **Phone number**: 077-231-2585
- **Form fields**: name (required), phone (required), location (dropdown: צפון/מרכז/דרום)
- **Webhook URL**: `https://hook.eu1.make.com/aow7z2gnae1w1ms3kk56uvgnc3haknan`
- **Webhook field mapping**:
```json
{
  "your-name": "formData.name",
  "phone": "formData.phone",
  "location": "formData.location",
  "page-title": "h1 text",
  "form-type": "almog_golfcart",
  "website": "EZ-GO",
  "category": "רכב תפעולי"
}
```

---

## 10. Competitor Analysis

| Competitor | URL | What to Learn | What to Avoid |
|-----------|-----|---------------|---------------|
| e-z-go.co.il | e-z-go.co.il | Keyword targeting, model coverage | Slow load, poor mobile UX |
| clubcar-israel.co.il | clubcar-israel.co.il | Clean design, good schema | (Our own site - use as reference) |
| marshell.co.il | marshell.co.il | Product cards, service pages | (Our own site - use as base) |

---

## 11. Inspiration References

| Site | URL | What Inspired |
|------|-----|---------------|
| marshell.co.il | Our portfolio | Component patterns, color system approach |
| clubcar-israel.co.il | Our portfolio | Layout structure, category flow |
| EZGO Official | ezgo.txtsv.com | Product photography, model specs |

---

## 12. Tailwind Config

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        ezgo: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        accent: '#F59E0B',
        dark: '#0F172A',
        surface: '#F8FAFC',
        border: '#E2E8F0',
        muted: '#64748B',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
}
```

---

## Notes

### Critical Differences from Marshell/Club Car Sites
1. **NO price field** in ProductCard - show "לפרטים והצעת מחיר" instead
2. **NO "offers" in Product schema** - just brand and description
3. **NO city pages** - we don't claim local presence
4. **Vague identity** - "המומחים" not "הנציגות הרשמית"
5. **Link to official EZGO social** - Facebook, YouTube, LinkedIn, Instagram

### Color Usage
- Use `ezgo-*` for brand elements (buttons, links, accents)
- Use `accent` (amber) sparingly for important CTAs
- Use `dark` for text, `muted` for secondary text
- Use `surface` for alternating section backgrounds

### Trust Building (E-E-A-T)
- Link to official EZGO social media accounts
- Show Textron connection (NYSE: TXT)
- Display 14 service centers network
- Show detailed technical specs from official site
