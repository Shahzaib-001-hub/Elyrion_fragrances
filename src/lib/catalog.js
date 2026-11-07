/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Official Artisanal Luxury Fragrance Catalog & Collections
 * ============================================================================
 */

export const categories = [
  {
    name: "Sweet & Dessert-Inspired",
    slug: "sweet-and-dessert-inspired",
    heading: "Sweet Enough to Crave",
    subheading: "Decadent gourmands of Belgian chocolate, Madagascar vanilla, hot espresso, and spun caramel.",
    bannerImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    color: "#C86D2C",
    featuredNotes: ["Chocolate", "Strawberry", "Vanilla", "Caramel", "Honey", "Coffee", "Praline", "Marshmallow"]
  },
  {
    name: "Deep, Dark & Intense",
    slug: "deep-dark-and-intense",
    heading: "Deep Notes. Bold Presence.",
    subheading: "Smoky royal agarwood (oud), spiced green cardamom, crushed amber resin, and midnight woods.",
    bannerImage: "https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=1200&auto=format&fit=crop",
    color: "#2B1A12",
    featuredNotes: ["Oud", "Cardamom", "Leather", "Amber", "Tobacco", "Coffee", "Incense", "Patchouli"]
  },
  {
    name: "Fresh & Clean",
    slug: "fresh-and-clean",
    heading: "Fresh. Clean. Effortless.",
    subheading: "Crisp Calabrian bergamot, morning ocean sea salt, sparkling Sicilian lemon, and crushed spearmint.",
    bannerImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
    color: "#1B4D3E",
    featuredNotes: ["Bergamot", "Citrus", "Lemon", "Mint", "Aquatic", "Green Tea", "Orange"]
  },
  {
    name: "Floral & Romantic",
    slug: "floral-and-romantic",
    heading: "Made for Soft Moments",
    subheading: "Velvety Damask rose petals, midnight tuberose, blooming jasmine, and powdery French lavender.",
    bannerImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    color: "#8B1E3F",
    featuredNotes: ["Rose", "Jasmine", "Peony", "Tuberose", "Lavender", "Orange Blossom", "Violet"]
  }
];

export const moods = [
  { name: "Romantic", icon: "heart", description: "Soft, intimate, and emotionally captivating." },
  { name: "Confident", icon: "crown", description: "Commanding attention with undeniable allure." },
  { name: "Mysterious", icon: "moon", description: "Enigmatic shadows and intoxicating intrigue." },
  { name: "Playful", icon: "sparkles", description: "Vibrant, sparkling, and full of youthful joy." },
  { name: "Powerful", icon: "shield-halved", description: "Dominant sillage crafted for royalty." },
  { name: "Calm", icon: "leaf", description: "Serene, clean, and grounding elegance." },
  { name: "Fresh", icon: "droplet", description: "Crisp, airy, and revitalizing all day long." },
  { name: "Seductive", icon: "fire", description: "Irresistibly magnetic and unforgettable." }
];

export const vibes = [
  { name: "The Sweet One", family: "Sweet & Dessert-Inspired", subtitle: "For pure gourmand & dessert lovers" },
  { name: "The Mysterious One", family: "Deep, Dark & Intense", subtitle: "For deep, dark, and enigmatic signatures" },
  { name: "The Clean One", family: "Fresh & Clean", subtitle: "For crisp, effortless, and airy presence" },
  { name: "The Romantic One", family: "Floral & Romantic", subtitle: "For floral, tender, and soft moments" },
  { name: "The Bold One", family: "Deep, Dark & Intense", subtitle: "For intense, powerhouse sillage" }
];

export const products = [
  {
    name: "Café de Nuit",
    slug: "cafe-de-nuit",
    tagline: "Walking into a Parisian café on a rainy evening with warm espresso and dark chocolate.",
    description: "An intoxicating gourmand masterpiece blending dark roasted espresso beans, Belgian cocoa, velvety vanilla cream, and spiced cardamom. Crafted for intimate evenings and cooler temperatures with extraordinary projection.",
    price: 4950,
    salePrice: 3950,
    stock: 45,
    category: "UNISEX",
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.96,
    numReviews: 89,
    concentration: "Extrait de Parfum (35% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Cardamom", "Bitter Almond", "Roasted Coffee Beans"],
      heartNotes: ["Belgian Dark Chocolate", "Tonka Bean", "Praline"],
      baseNotes: ["Madagascar Bourbon Vanilla", "Warm Amber", "Smoked Cedar"]
    },
    noteFamily: "Sweet & Dessert-Inspired",
    moods: ["Mysterious", "Seductive", "Calm", "Confident"],
    vibe: "The Sweet One",
    longevityHours: 14,
    sillage: "Intense",
    season: "Autumn / Winter / Date Nights",
    seo: {
      metaTitle: "Café de Nuit Extrait — ELYRION Fragrances Pakistan",
      metaDescription: "Experience Café de Nuit by ELYRION. Artisanal gourmand featuring Belgian chocolate, dark roasted coffee, bourbon vanilla, and spicy cardamom.",
      keywords: ["coffee perfume", "chocolate fragrance", "vanilla extrait", "elyrion cafe de nuit", "gourmand perfume pakistan"]
    }
  },
  {
    name: "Oud Impérial & Cardamome",
    slug: "oud-imperial-cardamome",
    tagline: "A royal palace chamber illuminated by golden amber candles and sacred incense woodsmoke.",
    description: "A dark, magnetic powerhouse of Cambodian agarwood, vintage leather, crushed green cardamom pods, and smoky Frankincense. Created for individuals who demand an unforgettable signature presence.",
    price: 5400,
    salePrice: 4400,
    stock: 35,
    category: "UNISEX",
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.98,
    numReviews: 142,
    concentration: "Extrait de Parfum (38% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Green Cardamom", "Pink Peppercorn", "Saffron Threads"],
      heartNotes: ["Cambodian Agarwood (Oud)", "Smoked Leather", "Turkish Tobacco"],
      baseNotes: ["Precious Amber", "Somalian Incense", "Black Musk", "Patchouli"]
    },
    noteFamily: "Deep, Dark & Intense",
    moods: ["Powerful", "Mysterious", "Confident", "Seductive"],
    vibe: "The Bold One",
    longevityHours: 16,
    sillage: "Enormous",
    season: "All Seasons / Black Tie / Signature",
    seo: {
      metaTitle: "Oud Impérial & Cardamome — Luxury Dark Oud Extrait | ELYRION",
      metaDescription: "Shop Oud Impérial by ELYRION. Royal Cambodian oud, spicy cardamom, dark amber, and vintage leather for commanding presence.",
      keywords: ["oud perfume", "cardamom fragrance", "dark intense extrait", "elyrion oud imperial", "luxury oud pakistan"]
    }
  },
  {
    name: "Fraîcheur Royale",
    slug: "fraicheur-royale",
    tagline: "A crisp morning breeze over coastal Italian lemon groves and crushed spearmint.",
    description: "An invigorating splash of sun-drenched Calabrian bergamot, sparkling Sicilian lemon, crisp green apple, and crystalline sea salt minerals. Settles into a clean white musk and ambergris drydown.",
    price: 4600,
    salePrice: 3600,
    stock: 60,
    category: "MEN",
    isBestSeller: true,
    isFeatured: false,
    isNewArrival: false,
    rating: 4.91,
    numReviews: 124,
    concentration: "Extrait de Parfum (32% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Calabrian Bergamot", "Sicilian Lemon", "Crushed Spearmint"],
      heartNotes: ["Green Apple", "Neroli", "Aquatic Sea Salt"],
      baseNotes: ["White Ambergris", "Clean Cedarwood", "Subtle Musk"]
    },
    noteFamily: "Fresh & Clean",
    moods: ["Fresh", "Confident", "Calm"],
    vibe: "The Clean One",
    longevityHours: 11,
    sillage: "Moderate",
    season: "Spring / Summer / Everyday",
    seo: {
      metaTitle: "Fraîcheur Royale Extrait — Fresh Citrus Perfume | ELYRION",
      metaDescription: "Shop Fraîcheur Royale by ELYRION. Long-lasting fresh fragrance with Italian bergamot, lemon, mint, and sea salt.",
      keywords: ["fresh perfume", "citrus fragrance", "bergamot extrait", "elyrion fraicheur royale", "clean summer scent"]
    }
  },
  {
    name: "Velours de Fraise",
    slug: "velours-de-fraise",
    tagline: "Sweet wild strawberries dipped in fluffy marshmallow cream and golden spun sugar.",
    description: "An ethereal and playful symphony of ripe wild strawberries, airy marshmallow cream, caramel drizzle, and powdery vanilla. Soft, radiant, and irresistibly charming.",
    price: 4750,
    salePrice: 3750,
    stock: 50,
    category: "WOMEN",
    isBestSeller: true,
    isFeatured: false,
    isNewArrival: true,
    rating: 4.93,
    numReviews: 76,
    concentration: "Extrait de Parfum (34% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Wild Strawberries", "Red Berries", "Sugared Raspberry"],
      heartNotes: ["Marshmallow Cream", "Spun Sugar", "White Orchid"],
      baseNotes: ["Tahitian Vanilla", "Caramelized Amber", "Soft Cashmere Musk"]
    },
    noteFamily: "Sweet & Dessert-Inspired",
    moods: ["Playful", "Romantic", "Seductive"],
    vibe: "The Sweet One",
    longevityHours: 12,
    sillage: "Intense",
    season: "Spring / Summer / Casual Dates",
    seo: {
      metaTitle: "Velours de Fraise — Strawberry Gourmand Perfume | ELYRION",
      metaDescription: "Velours de Fraise by ELYRION. A sweet strawberry gourmand with marshmallow fluff, vanilla, and caramel.",
      keywords: ["strawberry perfume", "sweet gourmand", "marshmallow fragrance", "elyrion velours de fraise", "women perfume pakistan"]
    }
  },
  {
    name: "Rose de Paradis",
    slug: "rose-de-paradis",
    tagline: "Dewy midnight Damask roses veiled in silky white musk and sparkling pink champagne.",
    description: "The quintessential modern floral. Lush Damask rose petals kissed by morning dew, sparkling pink champagne, night-blooming jasmine, and velvety honeyed sandalwood.",
    price: 4850,
    salePrice: 3850,
    stock: 40,
    category: "WOMEN",
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.88,
    numReviews: 53,
    concentration: "Extrait de Parfum (33% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Pink Champagne", "Lychee", "Mandarin Zest"],
      heartNotes: ["Damask Rose", "French Tuberose", "White Jasmine"],
      baseNotes: ["Sandalwood", "Silk Musk", "Golden Honeycomb"]
    },
    noteFamily: "Floral & Romantic",
    moods: ["Romantic", "Calm", "Seductive"],
    vibe: "The Romantic One",
    longevityHours: 12,
    sillage: "Moderate",
    season: "All Year / Romance / Weddings",
    seo: {
      metaTitle: "Rose de Paradis Extrait — Luxury Rose & Jasmine | ELYRION",
      metaDescription: "Rose de Paradis by ELYRION. Majestic Damask rose, champagne, jasmine, and honeyed sandalwood. Romantic elegance redefined.",
      keywords: ["rose perfume", "floral fragrance", "elyrion rose de paradis", "damask rose extrait", "luxury perfume women"]
    }
  },
  {
    name: "Ambre Fumé & Tabac",
    slug: "ambre-fume-tabac",
    tagline: "A fireside library with sweet Havana tobacco, golden amber resin, and aged bourbon.",
    description: "Warm, cozy, and devastatingly magnetic. Sweet Havana tobacco leaves steeped in rich amber crystals, leather bindings, raw honeycomb, and smoked Madagascar vanilla.",
    price: 5200,
    salePrice: 4200,
    stock: 28,
    category: "MEN",
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.95,
    numReviews: 67,
    concentration: "Extrait de Parfum (36% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["Cuban Tobacco Leaf", "Cinnamon Bark", "Nutmeg"],
      heartNotes: ["Raw Honey", "Benzoin Resin", "Tonka Bean"],
      baseNotes: ["Amber Crystals", "Smoked Vanilla", "Guaiacwood"]
    },
    noteFamily: "Deep, Dark & Intense",
    moods: ["Confident", "Powerful", "Mysterious"],
    vibe: "The Mysterious One",
    longevityHours: 15,
    sillage: "Intense",
    season: "Autumn / Winter / Evening",
    seo: {
      metaTitle: "Ambre Fumé & Tabac — Tobacco & Amber Extrait | ELYRION",
      metaDescription: "Ambre Fumé & Tabac by ELYRION. Warm Cuban tobacco, honeyed amber crystals, vanilla, and cinnamon for a seductive presence.",
      keywords: ["tobacco perfume", "amber perfume", "men luxury fragrance", "elyrion ambre fume", "winter perfume"]
    }
  },
  {
    name: "Santal Blanc & Poivre",
    slug: "santal-blanc-poivre",
    tagline: "Creamy Mysore sandalwood bathed in white pepper, velvety iris, and cashmere milk.",
    description: "A serene, opulent woody masterpiece. Rare Mysore sandalwood enriched with cracked white peppercorns, Florentine iris, cedarwood shavings, and a creamy touch of coconut milk.",
    price: 5100,
    salePrice: 4100,
    stock: 32,
    category: "UNISEX",
    isBestSeller: false,
    isFeatured: false,
    isNewArrival: true,
    rating: 4.92,
    numReviews: 48,
    concentration: "Extrait de Parfum (35% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["White Peppercorn", "Cardamom", "Violet Leaf"],
      heartNotes: ["Florentine Iris", "Cedar Shavings", "Coconut Milk"],
      baseNotes: ["Mysore Sandalwood", "Cashmere Wood", "White Amber"]
    },
    noteFamily: "Deep, Dark & Intense",
    moods: ["Calm", "Confident", "Romantic"],
    vibe: "The Bold One",
    longevityHours: 13,
    sillage: "Intense",
    season: "All Year / Formal / Signature",
    seo: {
      metaTitle: "Santal Blanc & Poivre — Luxury Sandalwood Extrait | ELYRION",
      metaDescription: "Santal Blanc & Poivre by ELYRION. Mysore sandalwood, white pepper, iris, and cashmere woods for timeless elegance.",
      keywords: ["sandalwood perfume", "santal extrait", "unisex perfume pakistan", "luxury woody perfume"]
    }
  },
  {
    name: "Soleil Aquatique",
    slug: "soleil-aquatique",
    tagline: "Sun-drenched Mediterranean neroli kissed by azure sea breeze and solar amber.",
    description: "An invigorating aquatic symphony capturing sunlit coastal waves. Sparkling French neroli, zesty mandarin, salty sea breeze, and sun-warmed driftwood dried with mineral ambergris.",
    price: 4600,
    salePrice: 3650,
    stock: 42,
    category: "MEN",
    isBestSeller: false,
    isFeatured: false,
    isNewArrival: true,
    rating: 4.9,
    numReviews: 39,
    concentration: "Extrait de Parfum (32% Pure Oil)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    },
    notes: {
      topNotes: ["French Neroli", "Sunlit Mandarin", "Sea Spray"],
      heartNotes: ["Marine Breeze", "Rosemary", "Orange Blossom"],
      baseNotes: ["Mineral Ambergris", "Sun-bleached Driftwood", "Clean Musk"]
    },
    noteFamily: "Fresh & Clean",
    moods: ["Fresh", "Playful", "Calm"],
    vibe: "The Clean One",
    longevityHours: 10,
    sillage: "Moderate",
    season: "Spring / Summer / Daytime",
    seo: {
      metaTitle: "Soleil Aquatique — Fresh Marine Aquatic Extrait | ELYRION",
      metaDescription: "Soleil Aquatique by ELYRION. French neroli, ocean salt breeze, and ambergris for vibrant summer freshness.",
      keywords: ["aquatic perfume", "summer perfume pakistan", "fresh marine scent", "neroli extrait"]
    }
  }
];

export const bundles = [
  {
    title: "Best Seller Discovery Duo",
    slug: "best-seller-discovery-duo",
    subtitle: "Experience our top two legendary signatures together.",
    description: "Includes 50ml Café de Nuit (Dark Chocolate & Coffee) + 50ml Oud Impérial & Cardamome. Packaged in our velvet luxury collector's box with two free 5ml travel atomizers.",
    price: 10350,
    salePrice: 7500,
    badge: "SAVE 28%",
    category: "Best Seller Bundles",
    includedPerfumes: ["Café de Nuit", "Oud Impérial & Cardamome"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    title: "His & Hers Paradise Duo",
    slug: "his-and-hers-paradise-duo",
    subtitle: "The ultimate couple pairing of strength and romance.",
    description: "Includes 50ml Fraîcheur Royale (Calabrian Bergamot & Lemon) + 50ml Rose de Paradis (Damask Rose & Champagne). The perfect gift for weddings and anniversaries.",
    price: 9450,
    salePrice: 6900,
    badge: "COUPLE SET",
    category: "His & Hers Bundles",
    includedPerfumes: ["Fraîcheur Royale", "Rose de Paradis"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    title: "The Gourmand Craving Box",
    slug: "the-gourmand-craving-box",
    subtitle: "For lovers of sweet, dessert-inspired decadence.",
    description: "Includes 50ml Velours de Fraise (Strawberry & Marshmallow) + 50ml Café de Nuit (Belgian Chocolate & Espresso). Decadent, addictive, and delightfully sweet.",
    price: 9700,
    salePrice: 7100,
    badge: "SWEET OBSESSION",
    category: "Gift Bundles",
    includedPerfumes: ["Velours de Fraise", "Café de Nuit"],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    featured: false
  }
];

export const reviews = [
  {
    author: "Zainab R.",
    city: "Lahore",
    perfume: "Café de Nuit",
    rating: 5,
    verified: true,
    longevityScore: "14+ Hours",
    date: "2 days ago",
    comment: "I have tried almost every local perfume impression brand, but ELYRION is genuinely on another level. Café de Nuit smells like rich Belgian chocolate and freshly roasted espresso. Lasts the entire working day in Lahore heat without fading!",
  },
  {
    author: "Hamza M.",
    city: "Karachi",
    perfume: "Oud Impérial & Cardamome",
    rating: 5,
    verified: true,
    longevityScore: "16+ Hours",
    date: "1 week ago",
    comment: "The cardamom opening with the Cambodian oud is majestic. It projects strongly without giving any headache or harsh synthetic smell. I sprayed it on my kurta for a wedding and could still smell it the next morning. Top tier Extrait.",
  },
  {
    author: "Ayesha K.",
    city: "Islamabad",
    perfume: "Velours de Fraise",
    rating: 5,
    verified: true,
    longevityScore: "12+ Hours",
    date: "2 weeks ago",
    comment: "Sweet strawberry marshmallows in a heavy, luxurious glass bottle! Delivery was super fast to Islamabad with Cash on Delivery, and the free 5ml tester was such a nice bonus.",
  },
  {
    author: "Bilal H.",
    city: "Faisalabad",
    perfume: "Ambre Fumé & Tabac",
    rating: 5,
    verified: true,
    longevityScore: "15+ Hours",
    date: "3 weeks ago",
    comment: "Warm honeyed tobacco and sweet amber. Extremely cozy for evenings and gets compliments everywhere. Packaging is so premium and solid.",
  }
];

export const promotionalOffers = [
  {
    title: "Free 5ml Luxury Tester",
    subtitle: "With every perfume purchase",
    description: "Every full-size bottle order includes a free 5ml Extrait sample so you can test before breaking the box seal.",
    cta: "Shop Now & Claim Sample",
    badge: "FREE TESTER"
  },
  {
    title: "Buy 2 Perfumes, Get 1 Free",
    subtitle: "Limited Time Paradise Campaign",
    description: "Add any 3 perfumes to your cart and the 3rd bottle is automatically 100% free at checkout.",
    cta: "Shop The 3-Bottle Deal",
    badge: "BUY 2 GET 1"
  },
  {
    title: "Free Express Shipping Across Pakistan",
    subtitle: "On all orders above Rs. 3,500",
    description: "Insulated, damage-proof packaging delivered to your doorstep in 2-4 working days nationwide.",
    cta: "Explore Catalog",
    badge: "FREE SHIPPING"
  }
];
