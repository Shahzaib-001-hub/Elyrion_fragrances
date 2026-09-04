/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Rich Seed Dataset for Artisanal Fragrances, Bundles & Families
 * ============================================================================
 */

export const seedCategories = [
  {
    name: "Sweet & Dessert-Inspired",
    slug: "sweet-and-dessert-inspired",
    heading: "Sweet Enough to Crave",
    subheading: "Decadent gourmands of melted chocolate, Madagascar vanilla, roasted coffee, and spun caramel.",
    bannerImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    color: "#C86D2C",
    featuredNotes: ["Chocolate", "Strawberry", "Vanilla", "Caramel", "Honey", "Coffee", "Praline", "Marshmallow"]
  },
  {
    name: "Deep, Dark & Intense",
    slug: "deep-dark-and-intense",
    heading: "Deep Notes. Bold Presence.",
    subheading: "Smoky royal agarwood, spiced cardamom, crushed amber, vintage leather, and midnight musks.",
    bannerImage: "https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=1200&auto=format&fit=crop",
    color: "#2B1A12",
    featuredNotes: ["Oud", "Cardamom", "Leather", "Amber", "Tobacco", "Coffee", "Incense", "Patchouli"]
  },
  {
    name: "Fresh & Clean",
    slug: "fresh-and-clean",
    heading: "Fresh. Clean. Effortless.",
    subheading: "Crisp Italian bergamot, morning ocean mist, sparkling green mandarin, and crushed spearmint.",
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

export const seedMoods = [
  { name: "Romantic", icon: "heart", description: "Soft, intimate, and emotionally captivating." },
  { name: "Confident", icon: "crown", description: "Commanding attention with undeniable allure." },
  { name: "Mysterious", icon: "moon", description: "Enigmatic shadows and intoxicating intrigue." },
  { name: "Playful", icon: "sparkles", description: "Vibrant, sparkling, and full of youthful joy." },
  { name: "Powerful", icon: "shield-halved", description: "Dominant sillage crafted for royalty." },
  { name: "Calm", icon: "leaf", description: "Serene, clean, and grounding elegance." },
  { name: "Fresh", icon: "droplet", description: "Crisp, airy, and revitalizing all day long." },
  { name: "Seductive", icon: "fire", description: "Irresistibly magnetic and unforgettable." }
];

export const seedVibes = [
  { name: "The Sweet One", family: "Sweet & Dessert-Inspired", subtitle: "For pure gourmand & dessert lovers" },
  { name: "The Mysterious One", family: "Deep, Dark & Intense", subtitle: "For deep, dark, and enigmatic signatures" },
  { name: "The Clean One", family: "Fresh & Clean", subtitle: "For crisp, effortless, and airy presence" },
  { name: "The Romantic One", family: "Floral & Romantic", subtitle: "For floral, tender, and soft moments" },
  { name: "The Bold One", family: "Deep, Dark & Intense", subtitle: "For intense, powerhouse sillage" }
];

export const seedProducts = [
  {
    name: "Café de Nuit",
    slug: "cafe-de-nuit",
    tagline: "Smells like walking into a Parisian café on a rainy evening with warm espresso and dark chocolate.",
    description: "An intoxicating gourmand masterpiece blending dark roasted espresso beans, Belgian cocoa, velvety vanilla cream, and spiced cardamom. Crafted for intimate evenings and cooler temperatures.",
    price: 4950,
    salePrice: 3950,
    stock: 45,
    category: "UNISEX",
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.96,
    numReviews: 89,
    concentration: "Extrait de Parfum (35% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", // Coffee beans + moody dark espresso aesthetic
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
      metaTitle: "Café de Nuit Extrait — ELYRION Fragrances of Paradise",
      metaDescription: "Experience Café de Nuit by ELYRION. An artisanal gourmand featuring Belgian chocolate, dark roasted coffee, bourbon vanilla, and spicy cardamom.",
      keywords: ["coffee perfume", "chocolate fragrance", "vanilla extrait", "elyrion cafe de nuit", "gourmand perfume pakistan"]
    }
  },
  {
    name: "Fraîcheur Royale",
    slug: "fraicheur-royale",
    tagline: "Smells like a morning breeze over coastal Italian lemon groves and crushed mint.",
    description: "An invigorating splash of sun-drenched Calabrian bergamot, Sicilian lemon, crisp green apple, and crystalline sea minerals. Dries down into an ultra-clean white musk and ambergris finish.",
    price: 4600,
    salePrice: 3600,
    stock: 60,
    category: "MEN",
    isBestSeller: true,
    isFeatured: false,
    isNewArrival: false,
    rating: 4.91,
    numReviews: 124,
    concentration: "Extrait de Parfum (32% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop", // Citrus & crisp fresh aesthetic
    },
    notes: {
      topNotes: ["Calabrian Bergamot", "Sicilian Lemon", "Crushed Spearmint"],
      heartNotes: ["Green Apple", "Neroli", "Aquatic Sea Salt"],
      baseNotes: ["White Ambergris", "Clean Cedarwood", "Subtle Musk"]
    },
    noteFamily: "Fresh & Clean",
    moods: ["Fresh", "Confident", "Calm"],
    vibe: "The Clean One",
    longevityHours: 10,
    sillage: "Moderate",
    season: "Spring / Summer / Everyday",
    seo: {
      metaTitle: "Fraîcheur Royale Extrait — Fresh Citrus Perfume | ELYRION",
      metaDescription: "Shop Fraîcheur Royale by ELYRION. Long-lasting luxury fresh fragrance with Italian bergamot, lemon, mint, and sea salt notes.",
      keywords: ["fresh perfume", "citrus fragrance", "bergamot extrait", "elyrion fraicheur royale", "clean summer scent"]
    }
  },
  {
    name: "Oud Impérial & Cardamome",
    slug: "oud-imperial-cardamome",
    tagline: "Smells like a royal palace chamber lit by amber candles and incense woodsmoke.",
    description: "A dark, magnetic powerhouse of Cambodian oud, aged leather, crushed cardamom pods, and smoky Frankincense. Created for individuals who want their signature presence remembered long after they leave.",
    price: 5400,
    salePrice: 4400,
    stock: 35,
    category: "UNISEX",
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.98,
    numReviews: 142,
    concentration: "Extrait de Parfum (38% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=800&auto=format&fit=crop", // Cardamom pods & rich dark woods
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
      metaDescription: "Shop Oud Impérial by ELYRION. Royal Cambodian oud, spicy cardamom, dark amber, and vintage leather for a commanding presence.",
      keywords: ["oud perfume", "cardamom fragrance", "dark intense extrait", "elyrion oud imperial", "luxury oud pakistan"]
    }
  },
  {
    name: "Velours de Fraise",
    slug: "velours-de-fraise",
    tagline: "Smells like sweet wild strawberries dipped in warm marshmallow fluff and spun sugar.",
    description: "An ethereal and playful symphony of ripe wild strawberries, fluffy marshmallow cream, caramel drizzle, and powdery vanilla. Soft, radiant, and utterly addictive.",
    price: 4750,
    salePrice: 3750,
    stock: 50,
    category: "WOMEN",
    isBestSeller: true,
    isFeatured: false,
    isNewArrival: true,
    rating: 4.93,
    numReviews: 76,
    concentration: "Extrait de Parfum (34% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop", // Fresh strawberries & soft pink dream
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
      metaDescription: "Velours de Fraise by ELYRION. A sweet strawberry gourmand with marshmallow fluff, vanilla, and caramel. The ultimate sweet scent.",
      keywords: ["strawberry perfume", "sweet gourmand", "marshmallow fragrance", "elyrion velours de fraise", "women perfume pakistan"]
    }
  },
  {
    name: "Rose de Paradis",
    slug: "rose-de-paradis",
    tagline: "Smells like dewy midnight Damask roses veiled in silky white musk and champagne.",
    description: "The quintessential modern floral. Lush Damask rose petals kissed by morning dew, sparkling pink champagne, night-blooming jasmine, and warm sandalwood.",
    price: 4850,
    salePrice: 3850,
    stock: 40,
    category: "WOMEN",
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.88,
    numReviews: 53,
    concentration: "Extrait de Parfum (33% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", // Dewy deep roses aesthetic
    },
    notes: {
      topNotes: ["Pink Champagne", "Lychee", "Mandarin Zest"],
      heartNotes: ["Damask Rose", "French Tuberose", "White Jasmine"],
      baseNotes: ["Sandalwood", "Silk Musk", "Golden Honeycomb"]
    },
    noteFamily: "Floral & Romantic",
    moods: ["Romantic", "Calm", "Seductive"],
    vibe: "The Romantic One",
    longevityHours: 11,
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
    tagline: "Smells like a fireside library with sweet pipe tobacco, honeyed amber, and bourbon.",
    description: "Warm, cozy, and devastatingly charming. Sweet Havana tobacco leaves steeped in rich amber resin, leather bindings, raw honeycomb, and smoked Madagascar vanilla.",
    price: 5200,
    salePrice: 4200,
    stock: 28,
    category: "MEN",
    isBestSeller: false,
    isFeatured: true,
    isNewArrival: false,
    rating: 4.95,
    numReviews: 67,
    concentration: "Extrait de Parfum (36% Oil Concentration)",
    size: "50ml / 1.7 fl. oz.",
    images: {
      studio: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      lifestyle: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop", // Tobacco leaves & warm amber glow
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
  }
];

export const seedBundles = [
  {
    title: "Best Seller Discovery Duo",
    slug: "best-seller-discovery-duo",
    subtitle: "Experience our top two legendary signatures together.",
    description: "Includes 50ml Café de Nuit (Dark Chocolate & Coffee) + 50ml Oud Impérial & Cardamome. Packaged in our velvet luxury collector's box.",
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
    description: "Includes 50ml Fraîcheur Royale (Calabrian Bergamot & Lemon) + 50ml Rose de Paradis (Damask Rose & Champagne).",
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
    description: "Includes 50ml Velours de Fraise (Strawberry & Marshmallow) + 50ml Café de Nuit (Belgian Chocolate & Espresso).",
    price: 9700,
    salePrice: 7100,
    badge: "SWEET OBSESSION",
    category: "Gift Bundles",
    includedPerfumes: ["Velours de Fraise", "Café de Nuit"],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    featured: false
  }
];

export const seedReviews = [
  {
    author: "Zainab R.",
    perfume: "Café de Nuit",
    rating: 5,
    verified: true,
    longevityScore: "14+ Hours",
    date: "2 days ago",
    comment: "I have tried both Scent & Secret and Rawaha, but ELYRION is in another league. Café de Nuit literally smells like luxury melted Belgian chocolate and hot roasted coffee. I wore it to dinner and three people asked what scent I was wearing!"
  },
  {
    author: "Hamza M.",
    perfume: "Oud Impérial & Cardamome",
    rating: 5,
    verified: true,
    longevityScore: "16+ Hours",
    date: "1 week ago",
    comment: "The cardamom opening with the Cambodian oud is majestic. The projection fills a room without being harsh. Lasts through the entire day and onto my coat the next morning. Top tier Extrait."
  },
  {
    author: "Ayesha K.",
    perfume: "Velours de Fraise",
    rating: 5,
    verified: true,
    longevityScore: "12 Hours",
    date: "3 weeks ago",
    comment: "Sweet, fluffy strawberry marshmallow heaven! If you love sweet and dessert notes, buy this immediately. The packaging and bottle feel so premium and heavy."
  }
];

export const promotionalOffers = [
  {
    title: "Complimentary Luxury Sample",
    subtitle: "With every perfume purchase",
    description: "Choose a free 5ml Extrait de Parfum sample with any full bottle order at checkout.",
    cta: "Shop Now & Claim Sample",
    badge: "FREE GIFT"
  },
  {
    title: "Buy 2 Fragrances, Get 1 Free",
    subtitle: "Limited Time Paradise Campaign",
    description: "Add any 3 perfumes to your cart and the 3rd bottle is automatically 100% free.",
    cta: "Shop The 3-Bottle Offer",
    badge: "LIMITED OFFER"
  },
  {
    title: "Complimentary VIP Express Shipping",
    subtitle: "On all orders above Rs. 3,500",
    description: "Delivered to your doorstep in luxury insulated packaging within 2-3 business days.",
    cta: "Explore Catalog",
    badge: "FREE SHIPPING"
  }
];

export const seedUsers = [
  {
    name: "Shahzaib",
    email: "officialshahzaib001@elyrion.com",
    role: "Super Admin",
    active: true,
  },
  {
    name: "Antoine Lie",
    email: "masterperfumer@elyrion.com",
    role: "Master Perfumer",
    active: true,
  },
  {
    name: "Zainab Logistics",
    email: "fulfillment@elyrion.com",
    role: "Fulfillment Manager",
    active: true,
  },
];

export const seedOrders = [
  {
    orderId: "ELY-1092",
    customerName: "Omar Farooq",
    email: "omar.farooq@gmail.com",
    phone: "+92 300 8492019",
    city: "Lahore",
    items: ["Café de Nuit (50ml)"],
    freeSample: "Oud Impérial & Cardamome (5ml)",
    totalAmount: 4950,
    status: "Dispatched",
    createdAt: "2026-09-04T18:30:00.000Z",
  },
  {
    orderId: "ELY-1093",
    customerName: "Dr. Ayesha Siddiqui",
    email: "ayesha.siddiqui@gmail.com",
    phone: "+92 321 9928172",
    city: "Karachi",
    items: ["The Royal Duo Bundle (His & Hers)"],
    freeSample: "Velours de Fraise (5ml)",
    totalAmount: 7950,
    status: "Processing",
    createdAt: "2026-09-04T20:15:00.000Z",
  },
  {
    orderId: "ELY-1094",
    customerName: "Bilal Hassan",
    email: "bilal.hassan@outlook.com",
    phone: "+92 333 4488219",
    city: "Islamabad",
    items: ["Oud Impérial & Cardamome (50ml)"],
    freeSample: "Café de Nuit (5ml)",
    totalAmount: 5200,
    status: "Delivered",
    createdAt: "2026-09-03T14:10:00.000Z",
  },
];


