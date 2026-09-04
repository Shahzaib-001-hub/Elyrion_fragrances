# ELYRION — The Fragrance of Paradise
## Luxury E-Commerce & Admin Architecture Implementation Plan

A customized, full-stack architectural plan for **ELYRION** (*The Fragrance of Paradise*) built with **Next.js (App Router)**, **Tailwind CSS**, **FontAwesome Icons**, and **MongoDB Atlas with Mongoose ODM**.

---

## 1. Brand Identity & Aesthetic Direction

| Element | Specification & Design Execution |
| :--- | :--- |
| **Brand Name** | **ELYRION** |
| **Tagline** | **The Fragrance of Paradise** |
| **Competitor Differentiation** | Elevating beyond *Scent & Secret* and *Rawaha* through sensory storytelling, visual raw-note photography, mood discovery, and an editorial high-fashion aesthetic |
| **Color Palette** | Obsidian Midnight (`#0A090C`), Champagne Gold (`#D4AF37` / `#E6CA65`), Cashmere Pearl (`#FAF8F5`), Deep Velvet Amber (`#26150F`) |
| **Typography** | Royal Editorial Serif (*Playfair Display* / *Cinzel*) paired with clean geometric Sans (*Plus Jakarta Sans* / *Inter*) |
| **Visual Texture** | Dual-image hover states: Studio bottle portrait $\rightarrow$ Note-infused sensory landscape shot (chocolate, coffee beans, cardamoms, strawberries, oud, roses) |

---

## 2. Technical Stack

- **Framework**: Next.js 14+ (App Router with Server & Client Components)
- **Styling**: Tailwind CSS with custom luxury tokens, gold gradients, and micro-interactions
- **Icons**: FontAwesome (`@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-regular-svg-icons`)
- **Database & ODM**: MongoDB Atlas connected via Mongoose with cached connection pooling
- **State Management**: React Context API for Shopping Cart (with Free Shipping tracker & Free Sample picker) and Wishlist
- **SEO Architecture**:
  - Dynamic Next.js Metadata API (`generateMetadata`)
  - Schema.org JSON-LD Structured Data (`Product`, `Organization`, `BreadcrumbList`)
  - Programmatic SEO landing pages (`/notes/[note]`)
  - Dynamic XML Sitemap (`sitemap.js`) and Search Engine Directives (`robots.js`)

---

## 3. Admin Dashboard Capabilities (`/admin`)

1. **Executive Overview**: Total Revenue, Total Orders, Active Fragrances, Low Stock Alerts, and Recent Order Stream.
2. **Product Management (CRUD)**:
   - Name, Slug, Price, Sale Price, Stock, Category (`MEN`, `WOMEN`, `UNISEX`), Badges (`BEST SELLER`, `NEW ARRIVAL`, `LIMITED EDITION`).
   - Dual-state photography URLs (Studio bottle shot + Note-infused sensory shot).
   - Olfactory Note Pyramid (Top Notes, Heart Notes, Base Notes).
   - Sensory Storytelling narrative (*"Smells like walking into a Parisian café on a rainy evening"*).
   - Moods & Vibes multi-tagging.
   - Sillage rating & Longevity hours.
   - **Dedicated Live SEO Editor**: Meta title, Meta description, Focus keywords, Canonical URL, and Live Google SERP preview.
3. **User Management**: Add staff/admin, manage permissions, toggle account activation status.
4. **Categories & Note Families**: Manage note families (*Sweet & Dessert-Inspired*, *Deep, Dark & Intense*, *Fresh & Clean*, *Floral & Romantic*).
5. **Moods & Vibes Manager**: Manage interactive mood discovery tags.
6. **Bundles & Promotional Campaigns**: Configure homepage promotional offers (Buy 2 Get 1, Free Sample triggers, His & Hers bundles).
7. **Order Management**: View and update order statuses (`Pending`, `Processing`, `Shipped`, `Delivered`).

---

## 4. 13-Step Homepage Customer Journey

1. **Hero Banner System (Banners 01, 02, 03)**: Best Sellers, Current Campaign, Curated Bundles.
2. **Best Sellers Section**: Dual-photo hover product cards with category tags (`UNISEX • BEST SELLER`).
3. **Shop by Gender**: Visual split portals for Men, Women, and Unisex.
4. **Shop by Fragrance Notes**: 4 sensory collections (*Sweet Enough to Crave*, *Deep Notes. Bold Presence*, *Fresh. Clean. Effortless*, *Made for Soft Moments*).
5. **Interactive Mood & Vibe Experience**: "What's Your Mood?" & "Choose Your Vibe".
6. **"Notes You Love" Direct Discovery**: Clickable note pills (*Love Vanilla?*, *Love Coffee?*, *Love Oud?*).
7. **Offers & Bundles ("More Fragrance. Better Value.")**: Curated bundles + Interactive Custom 2 & 3 perfume bundle builder.
8. **"Find Your Signature Scent" Quiz**: Interactive 3-step perfume matching quiz.
9. **Scent of the Week Spotlight**: Editorial showcase with emotional story & Olfactory Pyramid visualizer.
10. **Customer Reviews & Social Proof**: Verified fragrance reviews with longevity ratings.
11. **Instagram & Lookbook Grid**: Editorial sensory photography showcase.
12. **VIP Club & Newsletter**: 10% welcome voucher signup.
13. **Cart Drawer with Perks**: Real-time free shipping progress bar, free luxury sample selector, and one-click checkout.

