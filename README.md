# 👑 ELYRION — The Fragrance of Paradise
### Luxury Artisanal Extrait de Parfum E-Commerce Platform & Admin Control Center

An editorial, sensory luxury perfume web application built with **Next.js 14+ (App Router)**, **Tailwind CSS**, **FontAwesome Icons**, and **MongoDB Atlas (Mongoose ODM)** designed to transcend competitors (*Scent & Secret*, *Rawaha*).

---

## 🌟 Key Highlights & Brand Experience

- **Brand Name**: **ELYRION**
- **Tagline**: *"The Fragrance of Paradise"*
- **Sensory Storytelling**: Every perfume includes an evocative narrative description (*"Smells like walking into a Parisian café on a rainy evening with warm espresso and dark chocolate"*).
- **Dual-State Photography Hover**: Product cards seamlessly switch on hover from clean studio bottle portraits to raw note-infused sensory lifestyle shots (chocolate, roasted coffee beans, cardamom pods, sliced strawberries, Damask roses, agarwood).
- **Interactive Olfactory Architecture**: Top, Heart, and Base notes pyramid visualizer and Sillage/Longevity gauges on all products.
- **13-Step Editorial Homepage Flow**:
  1. Hero Banner System (Banner 01: Best Sellers, Banner 02: Current Campaign, Banner 03: Bundles)
  2. Best Sellers Grid with Category & Badge Tags (`UNISEX • BEST SELLER`, `MEN`, `WOMEN`)
  3. Shop by Gender Portals (Men | Women | Unisex)
  4. Shop by Fragrance Notes (Sweet Enough to Crave, Deep Notes. Bold Presence, Fresh. Clean. Effortless, Made for Soft Moments)
  5. Interactive Mood & Vibe Experience ("What's Your Mood?" & "Choose Your Vibe")
  6. "Notes You Love" Direct Clickable Discovery Pills (Love Vanilla?, Love Coffee?, Love Oud?, Love Strawberry?)
  7. Offers & Bundles ("More Fragrance. Better Value." + Interactive Custom Bundle Builder)
  8. "Find Your Signature Scent" Multi-Step Diagnostic Quiz
  9. Scent of the Week Featured Spotlight
  10. Connoisseurs in Paradise Customer Reviews & Longevity Ratings
  11. The Sensory Lookbook (Instagram Editorial Grid)
  12. The Paradise Vault VIP Club & 10% Voucher Signup
  13. Interactive Slide-out Cart Drawer with Free Shipping threshold progress bar & Complimentary 5ml sample selector

---

## 🛠️ Complete Admin Dashboard (`/admin`)

1. **Executive Dashboard (`/admin`)**: Real-time sales KPI stats, active fragrance counts, low stock alerts, and recent order stream.
2. **Product Catalog & Live Google SERP SEO Editor (`/admin/products`)**:
   - Create, edit, and delete perfumes with full Olfactory Notes Pyramid (Top, Heart, Base).
   - Dual-state studio and note-infused lifestyle photo URLs.
   - Sillage and Longevity score configuration.
   - **Live Google Search Snippet Preview**: Custom Meta Titles, Meta Descriptions, and target SEO keywords.
3. **Note Families & Categories (`/admin/categories`)**: Manage note families and editorial headlines.
4. **Moods & Vibes (`/admin/moods`)**: Manage interactive mood discovery tags.
5. **Bundles & Promotions (`/admin/bundles`)**: Manage promotional campaign offers and curated sets.
6. **Staff & User Management (`/admin/users`)**: Add new admins/staff, manage roles, and toggle access.
7. **Orders & Fulfillment (`/admin/orders`)**: Process customer orders (Pending $\rightarrow$ Processing $\rightarrow$ Shipped $\rightarrow$ Delivered) and inspect free sample choices.

---

## 🚀 Enterprise SEO Architecture

- **Next.js Dynamic Metadata (`generateMetadata`)**: Rich title tags, meta descriptions, OpenGraph social cards, and Twitter cards.
- **Schema.org JSON-LD Structured Data**:
  - `Product` Schema (Pricing, currency, stock status, ratings, sillage, note properties)
  - `Organization` & `WebSite` Schema for Google Knowledge Graph
  - `BreadcrumbList` Schema for SERP hierarchy
- **Programmatic Note Landing Routes (`/notes/[note]`)**: Dedicated indexed pages for high-intent queries (e.g. `/notes/vanilla`, `/notes/coffee`, `/notes/oud`).
- **Auto-Generated Sitemap & Robots**: `sitemap.xml` and `robots.txt` dynamic endpoints.

---

## 💻 Tech Stack

- **Framework**: Next.js 14+ (App Router with Server & Client Components)
- **Styling**: Tailwind CSS with custom luxury theme tokens, gold gradients, and micro-interactions
- **Icons**: FontAwesome (`@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-regular-svg-icons`)
- **Database & ODM**: MongoDB Atlas with Mongoose cached connection pooling

---

## ⚙️ Setup & Running

### 1. Configure Environment Variables (`.env.local`)
Create or edit `.env.local` in the project root:
```env
MONGODB_URI=mongodb+srv://officialshahzaib001_db_user:gzZDtMKksOOEZrYG@cluster0.fuhpxhv.mongodb.net/elyrion_fragrances?retryWrites=true&w=majority
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=elyrion_luxury_fragrances_secret_key_2026
NEXT_PUBLIC_BRAND_NAME=ELYRION
NEXT_PUBLIC_BRAND_TAGLINE=The Fragrance of Paradise
```

### 2. Install Dependencies & Run Development Server
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the storefront, or [http://localhost:3000/admin](http://localhost:3000/admin) to access the Admin Control Center.

