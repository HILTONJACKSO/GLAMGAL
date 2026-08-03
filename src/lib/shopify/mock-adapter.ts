import { Product, Collection, Cart, BeautyIngredient, BeautyRoutine, JournalArticle, AnnouncementMetaobject, HeroCampaignMetaobject } from '../../types/shopify';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'gid://shopify/Product/10',
    handle: 'brow-fixx-gel-tint-shaper',
    title: 'BROW FIXX GEL TINT & SHAPER',
    subtitle: 'Micro-Fiber Eyebrow Sculpting Gel & Density Filler',
    description: 'Achieve effortlessly laminated, fuller brows in seconds. Engineered with a revolutionary precision micro-ball spoolie applicator and weightless botanical fibers, BROW FIXX tames unruly hair, bulks up sparse brows, and locks in natural density with waterproof 16-hour flexible hold.',
    descriptionHtml: '<p>Achieve effortlessly laminated, fuller brows in seconds with BROW FIXX.</p><p>Engineered with a precision micro-ball spoolie applicator and weightless botanical fibers, this tinted gel tames unruly hairs, builds natural volume, and imparts long-wear waterproof hold without flaking or stiffness.</p>',
    category: 'Makeup',
    productType: 'Eyebrow Sculptor',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Brows', 'Sculpting'],
    priceRange: {
      minVariantPrice: { amount: '34.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '34.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-bf-1',
      url: '/brow_fixx_mockup.png',
      altText: 'BROW FIXX Gel Tint & Shaper Bottle'
    },
    secondaryImage: {
      id: 'img-bf-2',
      url: '/brow_fixx_mockup.png',
      altText: 'BROW FIXX Ball Brush Applicator'
    },
    images: [
      { id: 'img-bf-1', url: '/brow_fixx_mockup.png', altText: 'BROW FIXX Gel Tint & Shaper' },
      { id: 'img-bf-2', url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80', altText: 'Brow Application Model' }
    ],
    options: [
      { name: 'Shade', values: ['Clear Sculpt', 'Soft Brown', 'Deep Brown', 'Velvet Black'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1001',
        title: 'Clear Sculpt',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Clear Sculpt' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-BF-CLR'
      },
      {
        id: 'gid://shopify/ProductVariant/1002',
        title: 'Soft Brown',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Soft Brown' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-BF-BRN'
      },
      {
        id: 'gid://shopify/ProductVariant/1003',
        title: 'Deep Brown',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Deep Brown' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-BF-DBRN'
      },
      {
        id: 'gid://shopify/ProductVariant/1004',
        title: 'Velvet Black',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Velvet Black' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-BF-BLK'
      }
    ],
    rating: 4.95,
    reviewCount: 128,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      'Tames & fills in brows with micro-fiber density technology',
      'Precision micro-ball brush applicator targets fine hair with zero clumping',
      '16-hour flexible hold — smudge-proof & humidity resistant',
      'Wear alone or layer over brow shadow & pencil'
    ],
    ingredientsList: [
      'Botanical Micro-Fibers',
      'Pro-Vitamin B5 (Panthenol)',
      'Bamboo Extract Density Booster',
      'Organic Castor Oil'
    ],
    usageInstructions: 'Using the precision micro-ball brush applicator, sweep upward and outward through brows to tame, lift, and bulk up volume. Allow 30 seconds to set.'
  },
  {
    id: 'gid://shopify/Product/11',
    handle: 'brow-dip-liner-powder',
    title: 'BROW DIP LINER',
    subtitle: 'Micro-Fine Powder Dip Liner & Brow Architecture Definer',
    description: 'Master hair-like stroke precision and soft ombre brow definition with BROW DIP LINER. Formulated with micro-milled velvet powder pigments and instant skin-adhesion polymers, this dip-liner wand fills gaps, shapes arches, and delivers 24-hour smudge-proof water resistant wear.',
    descriptionHtml: '<p>Master hair-like stroke precision and soft ombre brow definition with BROW DIP LINER.</p><p>Formulated with micro-milled velvet powder pigments and instant skin-adhesion polymers, this dip-liner wand fills gaps, shapes arches, and delivers 24-hour smudge-proof water resistant wear.</p>',
    category: 'Makeup',
    productType: 'Eyebrow Liner',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Makeup', 'Brows', 'Powder Liner', 'Precision'],
    priceRange: {
      minVariantPrice: { amount: '32.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '32.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '40.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '40.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-bdl-1',
      url: '/brow_dip_liner_mockup.png',
      altText: 'BROW DIP LINER Applicator & Pot'
    },
    secondaryImage: {
      id: 'img-bdl-2',
      url: '/brow_dip_liner_mockup.png',
      altText: 'BROW DIP LINER Dip Wand'
    },
    images: [
      { id: 'img-bdl-1', url: '/brow_dip_liner_mockup.png', altText: 'BROW DIP LINER Bottle' },
      { id: 'img-bdl-2', url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80', altText: 'Model Precision Brow Makeup' }
    ],
    options: [
      { name: 'Shade', values: ['Taupe Blonde', 'Warm Espresso', 'Charcoal Brown', 'Obsidian Dark'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1101',
        title: 'Taupe Blonde',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Taupe Blonde' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-BDL-TP'
      },
      {
        id: 'gid://shopify/ProductVariant/1102',
        title: 'Warm Espresso',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Warm Espresso' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-BDL-ESP'
      },
      {
        id: 'gid://shopify/ProductVariant/1103',
        title: 'Charcoal Brown',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Charcoal Brown' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-BDL-CH'
      },
      {
        id: 'gid://shopify/ProductVariant/1104',
        title: 'Obsidian Dark',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Obsidian Dark' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-BDL-OBS'
      }
    ],
    rating: 4.9,
    reviewCount: 94,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' }
    ],
    keyBenefits: [
      'Micro-fine powder formula defines & refines brow architecture',
      'Ultimate skin-adhesion technology with zero powder fallout',
      '24-hour longwear — 100% smudge-free & sweat resistant',
      'Ultra-fine dip wand tip draws soft hair-like strokes effortlessly'
    ],
    ingredientsList: [
      'Micro-Milled Velvet Mineral Pigments',
      'Adhesion Silk Polymers',
      'Vitamin E Complex',
      'Jojoba Seed Extract'
    ],
    usageInstructions: 'Dip the precision felt wand into the powder pot. Lightly feather through sparse brow areas in short upward strokes. Layer for deeper ombre intensity.'
  },
  {
    id: 'gid://shopify/Product/12',
    handle: 'ultimate-brow-eye-cream-liner',
    title: 'ULTIMATE BROW & EYE CREAM LINER',
    subtitle: '24-Hour Waterproof Cream Pomade & Built-In Angled Brush Wand',
    description: 'Define brows and cat-eye flicks with the dual-purpose ULTIMATE BROW & EYE CREAM LINER. Featuring a 24-hour locked-in-place pomade formula and an integrated precision angled brush wand hidden inside the handle cap, this waterproof cream liner glides on like velvet and sets instantly with zero transfer.',
    descriptionHtml: '<p>Define brows and cat-eye flicks with the dual-purpose ULTIMATE BROW & EYE CREAM LINER.</p><p>Featuring a 24-hour locked-in-place pomade formula and an integrated precision angled brush wand hidden inside the handle cap, this waterproof cream liner glides on like velvet and sets instantly with zero transfer.</p>',
    category: 'Makeup',
    productType: 'Cream Pomade Liner',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Brows', 'Eyeliner', 'Pomade', 'Waterproof'],
    priceRange: {
      minVariantPrice: { amount: '36.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '36.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '45.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '45.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-ube-1',
      url: '/ultimate_brow_eye_cream_liner_mockup.png',
      altText: 'ULTIMATE BROW & EYE CREAM LINER Pots & Wands'
    },
    secondaryImage: {
      id: 'img-ube-2',
      url: '/ultimate_brow_eye_cream_liner_mockup.png',
      altText: 'ULTIMATE BROW & EYE CREAM LINER Angled Brush'
    },
    images: [
      { id: 'img-ube-1', url: '/ultimate_brow_eye_cream_liner_mockup.png', altText: 'ULTIMATE BROW & EYE CREAM LINER Lineup' },
      { id: 'img-ube-2', url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80', altText: 'Model Eye & Brow Makeup' }
    ],
    options: [
      { name: 'Shade', values: ['Soft Blonde', 'Warm Chestnut', 'Dark Espresso', 'Velvet Black'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1201',
        title: 'Soft Blonde',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Soft Blonde' }],
        price: { amount: '36.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '45.00', currencyCode: 'USD' },
        sku: 'GG-UBE-BLN'
      },
      {
        id: 'gid://shopify/ProductVariant/1202',
        title: 'Warm Chestnut',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Warm Chestnut' }],
        price: { amount: '36.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '45.00', currencyCode: 'USD' },
        sku: 'GG-UBE-CHN'
      },
      {
        id: 'gid://shopify/ProductVariant/1203',
        title: 'Dark Espresso',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Dark Espresso' }],
        price: { amount: '36.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '45.00', currencyCode: 'USD' },
        sku: 'GG-UBE-ESP'
      },
      {
        id: 'gid://shopify/ProductVariant/1204',
        title: 'Velvet Black',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Velvet Black' }],
        price: { amount: '36.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '45.00', currencyCode: 'USD' },
        sku: 'GG-UBE-BLK'
      }
    ],
    rating: 4.98,
    reviewCount: 156,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      '24-hour longwear waterproof pomade lines brows and eyes with a locked-in-place look',
      'Built-in angled brush applicator concealed inside the handle for effortless precision',
      'Dual-purpose formula acts as rich winged gel eyeliner & sculpted brow pomade',
      'Zero transfer, smudge-free, and sweat-resistant formula'
    ],
    ingredientsList: [
      'Isododecane Longwear Complex',
      'Velvet Pigment Matrix',
      'Carnauba Wax Sealant',
      'Vitamin E Shield'
    ],
    usageInstructions: 'Unscrew the top cap to pull out the built-in angled brush applicator. Dip into the cream pomade pot, outline brows or lash line, and fill in with light feathered strokes.'
  },
  {
    id: 'gid://shopify/Product/13',
    handle: '5-well-eyeshadow-palette',
    title: '5 WELL EYESHADOW COUTURE PALETTE',
    subtitle: 'Triple-Milled Pigment Eyeshadow Palette & Dual Applicator',
    description: 'Unveil effortless couture eye looks with the 5 WELL EYESHADOW COUTURE PALETTE. Featuring 5 color-coordinated triple-milled powder pans in a sleek vertical compact, these silk-texture shadows offer intense color payoff, seamless blendability, and zero creasing for 16-hour longwear beauty.',
    descriptionHtml: '<p>Unveil effortless couture eye looks with the 5 WELL EYESHADOW COUTURE PALETTE.</p><p>Featuring 5 color-coordinated triple-milled powder pans in a sleek vertical compact, these silk-texture shadows offer intense color payoff, seamless blendability, and zero creasing for 16-hour longwear beauty.</p>',
    category: 'Makeup',
    productType: 'Eyeshadow Palette',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Eyeshadow', 'Palette', 'Couture'],
    priceRange: {
      minVariantPrice: { amount: '48.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '48.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '60.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '60.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-5w-1',
      url: '/five_well_eyeshadow_palette_mockup.png',
      altText: '5 WELL EYESHADOW COUTURE PALETTE Lineup'
    },
    secondaryImage: {
      id: 'img-5w-2',
      url: '/five_well_eyeshadow_palette_mockup.png',
      altText: '5 WELL EYESHADOW Open Compact'
    },
    images: [
      { id: 'img-5w-1', url: '/five_well_eyeshadow_palette_mockup.png', altText: '5 WELL EYESHADOW Palettes' },
      { id: 'img-5w-2', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80', altText: 'Eyeshadow Makeup Model' }
    ],
    options: [
      { name: 'Palette Set', values: ['Warm Gold Nudes', 'Cool Mauve Plum', 'Smokey Charcoal', 'Sunset Rose Gold'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1301',
        title: 'Warm Gold Nudes',
        availableForSale: true,
        selectedOptions: [{ name: 'Palette Set', value: 'Warm Gold Nudes' }],
        price: { amount: '48.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '60.00', currencyCode: 'USD' },
        sku: 'GG-5W-WGN'
      },
      {
        id: 'gid://shopify/ProductVariant/1302',
        title: 'Cool Mauve Plum',
        availableForSale: true,
        selectedOptions: [{ name: 'Palette Set', value: 'Cool Mauve Plum' }],
        price: { amount: '48.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '60.00', currencyCode: 'USD' },
        sku: 'GG-5W-CMP'
      },
      {
        id: 'gid://shopify/ProductVariant/1303',
        title: 'Smokey Charcoal',
        availableForSale: true,
        selectedOptions: [{ name: 'Palette Set', value: 'Smokey Charcoal' }],
        price: { amount: '48.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '60.00', currencyCode: 'USD' },
        sku: 'GG-5W-SMC'
      },
      {
        id: 'gid://shopify/ProductVariant/1304',
        title: 'Sunset Rose Gold',
        availableForSale: true,
        selectedOptions: [{ name: 'Palette Set', value: 'Sunset Rose Gold' }],
        price: { amount: '48.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '60.00', currencyCode: 'USD' },
        sku: 'GG-5W-SRG'
      }
    ],
    rating: 4.97,
    reviewCount: 184,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      '5 color-coordinated triple-milled shadow pans for effortless shading',
      'Ultra-pigmented velvet powder formula with buttery blendability & zero fallout',
      'Includes dual-ended applicator brush stored inside sleek obsidian compact',
      '16-hour crease-resistant & smudge-proof longwear finish'
    ],
    ingredientsList: [
      'Triple-Milled Velvet Mica Pigments',
      'Silk Protein Binding Powder',
      'Vitamin E Antioxidant',
      'Jojoba Oil Powder Sealant'
    ],
    usageInstructions: 'Using the included dual-ended applicator, sweep the lightest base shade across the lid, define the crease with medium tones, and accentuate the outer corner with deep sculpted shades.'
  },
  {
    id: 'gid://shopify/Product/14',
    handle: 'calming-rosewater-facial-toner',
    title: 'CALMING ROSEWATER FACIAL TONER',
    subtitle: '115ml / 3.9 fl. oz. • Rosewater, Niacinamide & AHA Soothing Elixir (Vegan)',
    description: 'A softening, nutrient-dense facial toner that instantly calms, hydrates, and balances skin pH. Rosewater is a gentle fragrant distillation of pure rose petals—an antioxidant powerhouse known for its anti-inflammatory properties. Infused with Niacinamide, cooling Cucumber, Green Tea, and gentle micro-AHA, skin is left feeling instantly fresh, calm, and perfectly balanced.',
    descriptionHtml: '<p>A softening, nutrient-dense facial toner that instantly calms, hydrates, and balances skin pH.</p><p>Rosewater is a gentle fragrant distillation of pure rose petals—an antioxidant powerhouse known for its anti-inflammatory properties. Infused with Niacinamide, cooling Cucumber, Green Tea, and gentle micro-AHA, skin is left feeling instantly fresh, calm, and perfectly balanced.</p>',
    category: 'Skincare',
    productType: 'Facial Toner',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Skincare', 'Toner', 'Rosewater', 'Vegan', 'Hydration'],
    priceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '52.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '52.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-crt-1',
      url: '/calming_rosewater_toner_mockup.png',
      altText: 'CALMING ROSEWATER FACIAL TONER Bottle & Box'
    },
    secondaryImage: {
      id: 'img-crt-2',
      url: '/calming_rosewater_toner_mockup.png',
      altText: 'CALMING ROSEWATER FACIAL TONER Splash'
    },
    images: [
      { id: 'img-crt-1', url: '/calming_rosewater_toner_mockup.png', altText: 'CALMING ROSEWATER TONER Bottle & Box' },
      { id: 'img-crt-2', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80', altText: 'Model Application Skin Care' }
    ],
    options: [
      { name: 'Volume', values: ['115ml / 3.9 fl. oz.'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1401',
        title: '115ml / 3.9 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Volume', value: '115ml / 3.9 fl. oz.' }],
        price: { amount: '42.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '52.00', currencyCode: 'USD' },
        sku: 'GG-CRT-115'
      }
    ],
    rating: 4.99,
    reviewCount: 210,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' },
      { text: 'VEGAN', type: 'vegan' }
    ],
    keyBenefits: [
      'Pure Damask Rosewater distillation soothes inflammation & calms redness',
      'Niacinamide & Cucumber extract refine pores and balance skin barrier moisture',
      'Green Tea antioxidants shield against environmental oxidative stress',
      'Gentle AHA micro-exfoliants leave skin feeling refreshed & supple'
    ],
    ingredientsList: [
      'Pure Rosewater Distillate',
      'Niacinamide (Vitamin B3)',
      'Cucumber Fruit Extract',
      'Green Tea Leaf Extract',
      'Micro AHA (Lactic Acid)'
    ],
    usageInstructions: 'After cleansing, apply to face and neck using a cotton pad or pat directly into skin with clean fingertips. Use day and night before applying serums.'
  },
  {
    id: 'gid://shopify/Product/15',
    handle: 'purify-charcoal-face-polish',
    title: 'PURIFY CHARCOAL FACE POLISH',
    subtitle: '150ml / 5.1 fl. oz. • Activated Charcoal, Apricot Seed & Aloe Detox Scrub',
    description: 'Detoxify pores and uncover velvety smooth radiance with PURIFY CHARCOAL FACE POLISH. Formulated with micro-activated charcoal, natural apricot seed, and walnut shell micro-exfoliants, this luxurious scrub draws out impurities without stripping natural moisture oils. Infused with soothing Aloe, Vitamin E, and Cucumber to leave your complexion clarified, brightened, and primed for flawless serum absorption.',
    descriptionHtml: '<p>Detoxify pores and uncover velvety smooth radiance with PURIFY CHARCOAL FACE POLISH.</p><p>Formulated with micro-activated charcoal, natural apricot seed, and walnut shell micro-exfoliants, this luxurious scrub draws out impurities without stripping natural moisture oils. Infused with soothing Aloe, Vitamin E, and Cucumber to leave your complexion clarified, brightened, and primed for flawless serum absorption.</p>',
    category: 'Skincare',
    productType: 'Exfoliating Scrub',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Skincare', 'Exfoliator', 'Charcoal', 'Detox', 'Scrub'],
    priceRange: {
      minVariantPrice: { amount: '44.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '44.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '55.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '55.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-pcf-1',
      url: '/purify_charcoal_face_polish_mockup.png',
      altText: 'PURIFY CHARCOAL FACE POLISH Tube & Box'
    },
    secondaryImage: {
      id: 'img-pcf-2',
      url: '/purify_charcoal_face_polish_mockup.png',
      altText: 'PURIFY CHARCOAL FACE POLISH Swatch'
    },
    images: [
      { id: 'img-pcf-1', url: '/purify_charcoal_face_polish_mockup.png', altText: 'PURIFY CHARCOAL FACE POLISH Tube & Box' },
      { id: 'img-pcf-2', url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1000&q=80', altText: 'Skincare Exfoliation Model' }
    ],
    options: [
      { name: 'Volume', values: ['150ml / 5.1 fl. oz.'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1501',
        title: '150ml / 5.1 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Volume', value: '150ml / 5.1 fl. oz.' }],
        price: { amount: '44.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '55.00', currencyCode: 'USD' },
        sku: 'GG-PCF-150'
      }
    ],
    rating: 4.96,
    reviewCount: 165,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      'Activated Charcoal draws out deep-seated pore impactions & excess sebum',
      'Apricot Seed & Walnut Shell micro-grains buff away dead surface skin',
      'Nourishing Vitamin E, Aloe, & Cucumber calm and hydrate post-polish',
      'Primes skin texture for maximum serum absorption & seamless makeup glide'
    ],
    ingredientsList: [
      'Micro-Activated Charcoal',
      'Crushed Apricot Seed Grains',
      'Fine Walnut Shell Powder',
      'Vitamin E (Tocopherol)',
      'Organic Aloe Vera Gel',
      'Cooling Cucumber Extract'
    ],
    usageInstructions: 'Lightly massage onto damp cleansed skin in gentle circular motions. Rinse thoroughly with warm water and gently pat dry. For best results, use 1 – 2 times per week.'
  },
  {
    id: 'gid://shopify/Product/16',
    handle: 'polished-smoothing-body-scrub',
    title: 'POLISHED SMOOTHING BODY SCRUB',
    subtitle: '150ml / 5.1 fl. oz. • Organic Sugar, Coffee Leaf, Shea Butter & Lavender Nectar (Vegan)',
    description: 'Transform dry, dull skin into silky velvet softness with POLISHED SMOOTHING BODY SCRUB. Formulated with natural fine sugar crystals and energizing Coffee Leaf extracts to gently buff away roughness, while rich Shea Butter, Organic Aloe, Vitamin E, and French Lavender essential oil deeply nourish and veil your body in subtle botanical nectar.',
    descriptionHtml: '<p>Transform dry, dull skin into silky velvet softness with POLISHED SMOOTHING BODY SCRUB.</p><p>Formulated with natural fine sugar crystals and energizing Coffee Leaf extracts to gently buff away roughness, while rich Shea Butter, Organic Aloe, Vitamin E, and French Lavender essential oil deeply nourish and veil your body in subtle botanical nectar.</p>',
    category: 'Body Care',
    productType: 'Body Scrub',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Body Care', 'Scrub', 'Shea Butter', 'Lavender', 'Vegan'],
    priceRange: {
      minVariantPrice: { amount: '46.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '46.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '58.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '58.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-psb-1',
      url: '/polished_smoothing_body_scrub_mockup.png',
      altText: 'POLISHED SMOOTHING BODY SCRUB Tube & Box'
    },
    secondaryImage: {
      id: 'img-psb-2',
      url: '/polished_smoothing_body_scrub_mockup.png',
      altText: 'POLISHED SMOOTHING BODY SCRUB Product'
    },
    images: [
      { id: 'img-psb-1', url: '/polished_smoothing_body_scrub_mockup.png', altText: 'POLISHED SMOOTHING BODY SCRUB Tube & Box' },
      { id: 'img-psb-2', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80', altText: 'Body Care Spa Model' }
    ],
    options: [
      { name: 'Volume', values: ['150ml / 5.1 fl. oz.'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1601',
        title: '150ml / 5.1 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Volume', value: '150ml / 5.1 fl. oz.' }],
        price: { amount: '46.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '58.00', currencyCode: 'USD' },
        sku: 'GG-PSB-150'
      }
    ],
    rating: 4.98,
    reviewCount: 178,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' },
      { text: 'VEGAN', type: 'vegan' }
    ],
    keyBenefits: [
      'Natural Fine Sugar & Coffee Leaf gently exfoliate for visibly soft, renewed skin',
      'Nourishing Shea Butter & Vitamin E provide deep hydration & moisture lock',
      'French Lavender Oil & Botanical Fruit extracts leave an intoxicating subtle scent',
      '100% Vegan & Cruelty-Free creamy body polish for all skin types'
    ],
    ingredientsList: [
      'Fine Natural Sugar Crystals',
      'Coffee Leaf Extract',
      'Rich Shea Butter',
      'French Lavender Essential Oil',
      'Vitamin E (Tocopherol)',
      'Organic Aloe Vera Gel',
      'Green Tea Extract'
    ],
    usageInstructions: 'Apply in the shower, massage a generous amount of scrub onto damp body skin in circular motions, and rinse thoroughly. Follow with GLAMGAL decadent body cream.'
  },
  {
    id: 'gid://shopify/Product/17',
    handle: 'luxe-decadent-body-cream',
    title: 'LUXE DECADENT BODY CREAM',
    subtitle: '150ml / 5.1 fl. oz. • Coconut Oil, Cocoa Butter, Shea & Niacinamide Elixir (Vegan)',
    description: 'Indulge skin in deep restorative hydration with LUXE DECADENT BODY CREAM. Formulated with raw Coconut Oil, Cocoa Seed Butter, rich Shea Butter, and 3% Niacinamide, this rich botanical cream melts into skin to repair moisture barrier damage, eliminate dry patches, and veil your body in soothing notes of French Lavender and Warm Vanilla.',
    descriptionHtml: '<p>Indulge skin in deep restorative hydration with LUXE DECADENT BODY CREAM.</p><p>Formulated with raw Coconut Oil, Cocoa Seed Butter, rich Shea Butter, and 3% Niacinamide, this rich botanical cream melts into skin to repair moisture barrier damage, eliminate dry patches, and veil your body in soothing notes of French Lavender and Warm Vanilla.</p>',
    category: 'Body Care',
    productType: 'Body Cream',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Body Care', 'Body Cream', 'Coconut Oil', 'Niacinamide', 'Vegan'],
    priceRange: {
      minVariantPrice: { amount: '48.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '48.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '60.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '60.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-ldc-1',
      url: '/luxe_decadent_body_cream_mockup.png',
      altText: 'LUXE DECADENT BODY CREAM Tube & Box'
    },
    secondaryImage: {
      id: 'img-ldc-2',
      url: '/luxe_decadent_body_cream_mockup.png',
      altText: 'LUXE DECADENT BODY CREAM Product'
    },
    images: [
      { id: 'img-ldc-1', url: '/luxe_decadent_body_cream_mockup.png', altText: 'LUXE DECADENT BODY CREAM Tube & Box' },
      { id: 'img-ldc-2', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80', altText: 'Body Care Cream Model' }
    ],
    options: [
      { name: 'Volume', values: ['150ml / 5.1 fl. oz.'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1701',
        title: '150ml / 5.1 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Volume', value: '150ml / 5.1 fl. oz.' }],
        price: { amount: '48.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '60.00', currencyCode: 'USD' },
        sku: 'GG-LDC-150'
      }
    ],
    rating: 4.99,
    reviewCount: 224,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' },
      { text: 'VEGAN', type: 'vegan' }
    ],
    keyBenefits: [
      'Coconut Oil, Cocoa Seed Butter & Shea Butter provide 48-hour moisture nourishment',
      'Niacinamide strengthens skin barrier resilience and evens body skin tone',
      'Infused with calming notes of French Lavender and Warm Vanilla Bean',
      '100% Vegan & Cruelty-Free rich restorative cream for all skin types'
    ],
    ingredientsList: [
      'Organic Virgin Coconut Oil',
      'Cocoa Seed Butter',
      'Pure Shea Butter',
      '3% Niacinamide (Vitamin B3)',
      'French Lavender Oil',
      'Warm Vanilla Extract'
    ],
    usageInstructions: 'Apply to the body daily after showering or bathing for soft, deeply nourished, and velvety skin.'
  },
  {
    id: 'gid://shopify/Product/18',
    handle: 'beauty-stix-foundation-stick',
    title: 'BEAUTY STIX CREAM FOUNDATION & CONTOUR STICK',
    subtitle: 'Multi-Tasking Medium-to-Full Coverage Foundation & Sculpting Stick',
    description: 'Achieve seamless skin perfection on the go with BEAUTY STIX. This creamy, weightless multi-tasking foundation stick glides effortlessly to conceal imperfections, even skin tone, highlight, and contour. Formulated with hydrating botanical squalane and silk pigments, it provides customizable medium-to-full coverage with a natural satin skin-like finish that lasts all day without dryness.',
    descriptionHtml: '<p>Achieve seamless skin perfection on the go with BEAUTY STIX.</p><p>This creamy, weightless multi-tasking foundation stick glides effortlessly to conceal imperfections, even skin tone, highlight, and contour. Formulated with hydrating botanical squalane and silk pigments, it provides customizable medium-to-full coverage with a natural satin skin-like finish that lasts all day without dryness.</p>',
    category: 'Makeup',
    productType: 'Foundation Stick',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Foundation', 'Contour', 'Coverage'],
    priceRange: {
      minVariantPrice: { amount: '38.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '38.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '48.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '48.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-bsf-1',
      url: '/beauty_stix_foundation_stick_mockup.png',
      altText: 'BEAUTY STIX Foundation & Contour Stick'
    },
    secondaryImage: {
      id: 'img-bsf-2',
      url: '/beauty_stix_foundation_stick_mockup.png',
      altText: 'BEAUTY STIX Cream Bullet'
    },
    images: [
      { id: 'img-bsf-1', url: '/beauty_stix_foundation_stick_mockup.png', altText: 'BEAUTY STIX Foundation Stick' },
      { id: 'img-bsf-2', url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80', altText: 'Model Face Foundation Makeup' }
    ],
    options: [
      { name: 'Shade', values: ['Fair Ivory', 'Nude Beige', 'Warm Honey', 'Deep Mocha'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1801',
        title: 'Fair Ivory',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Fair Ivory' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
        sku: 'GG-BSF-FIV'
      },
      {
        id: 'gid://shopify/ProductVariant/1802',
        title: 'Nude Beige',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Nude Beige' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
        sku: 'GG-BSF-NBG'
      },
      {
        id: 'gid://shopify/ProductVariant/1803',
        title: 'Warm Honey',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Warm Honey' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
        sku: 'GG-BSF-WHO'
      },
      {
        id: 'gid://shopify/ProductVariant/1804',
        title: 'Deep Mocha',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Deep Mocha' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
        sku: 'GG-BSF-DMC'
      }
    ],
    rating: 4.97,
    reviewCount: 192,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      'Multi-tasking cream stick conceals, foundations, contours & highlights in one',
      'Medium-to-full buildable coverage with a natural satin skin-like finish',
      'Creamy weightless texture glides effortlessly with zero cakeyness or settling',
      'Hydrating Botanical Squalane & Vitamin E prevent skin dryness'
    ],
    ingredientsList: [
      'Botanical Olive Squalane',
      'Silk Elastomer Powder Matrix',
      'Vitamin E (Tocopherol)',
      'Jojoba Seed Esters'
    ],
    usageInstructions: 'Twist up stick and swipe directly onto forehead, cheeks, nose, and chin. Blend outward with a sponge, brush, or fingertips for seamless skin perfection.'
  },
  {
    id: 'gid://shopify/Product/19',
    handle: 'lip-plumper-high-shine-gloss',
    title: 'LIP PLUMPER HIGH SHINE LIP GLOSS',
    subtitle: 'Peptide-Volume Plumping Gloss with Aloe Vera, Avocado & Vitamin C',
    description: 'Achieve instantly fuller, firmer, and glass-like shiny lips with LIP PLUMPER HIGH SHINE LIP GLOSS. Formulated with a volume-boosting peptide complex and a refreshing cooling tingle, this silky lip gloss drenches lips in a sheer nude pink glaze. Infused with nourishing Aloe Vera, Avocado Oil, Jojoba Oil, and Vitamins C & E to hydrate, smooth lip lines, and protect your pout.',
    descriptionHtml: '<p>Achieve instantly fuller, firmer, and glass-like shiny lips with LIP PLUMPER HIGH SHINE LIP GLOSS.</p><p>Formulated with a volume-boosting peptide complex and a refreshing cooling tingle, this silky lip gloss drenches lips in a sheer nude pink glaze. Infused with nourishing Aloe Vera, Avocado Oil, Jojoba Oil, and Vitamins C & E to hydrate, smooth lip lines, and protect your pout.</p>',
    category: 'Makeup',
    productType: 'Plumping Lip Gloss',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Lips', 'Lip Gloss', 'Plumping', 'Peptides'],
    priceRange: {
      minVariantPrice: { amount: '32.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '32.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '40.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '40.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-lpg-1',
      url: '/lip_plumper_gloss_mockup.png',
      altText: 'LIP PLUMPER HIGH SHINE LIP GLOSS Tube & Wand'
    },
    secondaryImage: {
      id: 'img-lpg-2',
      url: '/lip_plumper_gloss_mockup.png',
      altText: 'LIP PLUMPER Doe Foot Applicator'
    },
    images: [
      { id: 'img-lpg-1', url: '/lip_plumper_gloss_mockup.png', altText: 'LIP PLUMPER High Shine Lip Gloss' },
      { id: 'img-lpg-2', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80', altText: 'Model Glossy Lip Makeup' }
    ],
    options: [
      { name: 'Shade', values: ['Sheer Nude Pink', 'Rose Quartz Glaze', 'Peach Blossom', 'Champagne Sparkle'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1901',
        title: 'Sheer Nude Pink',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Sheer Nude Pink' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-LPG-SNP'
      },
      {
        id: 'gid://shopify/ProductVariant/1902',
        title: 'Rose Quartz Glaze',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Rose Quartz Glaze' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-LPG-RQG'
      },
      {
        id: 'gid://shopify/ProductVariant/1903',
        title: 'Peach Blossom',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Peach Blossom' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-LPG-PBL'
      },
      {
        id: 'gid://shopify/ProductVariant/1904',
        title: 'Champagne Sparkle',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Champagne Sparkle' }],
        price: { amount: '32.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '40.00', currencyCode: 'USD' },
        sku: 'GG-LPG-CSP'
      }
    ],
    rating: 4.98,
    reviewCount: 215,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      'Volume-boosting peptide blend hugs lips making them appear instantly fuller & firmer',
      'Silky sheer nude pink glaze delivers glass-like high shine with a refreshing tingle',
      'Aloe Vera, Avocado Oil & Jojoba Oil deeply nourish and eliminate dry lip lines',
      'Vitamins C & E provide antioxidant defense against environmental stress'
    ],
    ingredientsList: [
      'Palmitoyl Tripeptide-1 Plumping Matrix',
      'Organic Aloe Vera Extract',
      'Cold-Pressed Avocado Oil',
      'Jojoba Seed Oil',
      'Vitamin C (Ascorbyl Palmitate)',
      'Vitamin E (Tocopherol)'
    ],
    usageInstructions: 'Using the plush doe-foot applicator, glide gloss across bare lips or layer over lip pencil & lipstick for high-voltage volume and glass shine.'
  },
  {
    id: 'gid://shopify/Product/20',
    handle: 'liquid-velvet-lipstick',
    title: 'LIQUID VELVET LIPSTICK',
    subtitle: 'Longwear Velvet Cream Liquid Matte Lipstick',
    description: 'Imbue your lips with couture richness using LIQUID VELVET LIPSTICK. Formulated with saturated silk pigments and hydrating botanical oils, this ultra-lightweight liquid formula glides on velvet-smooth and dries down to a comfortable, non-drying matte finish. Feather-proof and transfer-resistant for 16-hour longwear confidence.',
    descriptionHtml: '<p>Imbue your lips with couture richness using LIQUID VELVET LIPSTICK.</p><p>Formulated with saturated silk pigments and hydrating botanical oils, this ultra-lightweight liquid formula glides on velvet-smooth and dries down to a comfortable, non-drying matte finish. Feather-proof and transfer-resistant for 16-hour longwear confidence.</p>',
    category: 'Makeup',
    productType: 'Liquid Lipstick',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Best Seller', 'Makeup', 'Lips', 'Liquid Lipstick', 'Matte', 'Velvet'],
    priceRange: {
      minVariantPrice: { amount: '34.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '34.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-lvl-1',
      url: '/liquid_velvet_lipstick_mockup.png',
      altText: 'LIQUID VELVET LIPSTICK Tubes Collection'
    },
    secondaryImage: {
      id: 'img-lvl-2',
      url: '/liquid_velvet_lipstick_mockup.png',
      altText: 'LIQUID VELVET LIPSTICK Shades'
    },
    images: [
      { id: 'img-lvl-1', url: '/liquid_velvet_lipstick_mockup.png', altText: 'LIQUID VELVET LIPSTICK Collection' },
      { id: 'img-lvl-2', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80', altText: 'Model Velvet Lip Application' }
    ],
    options: [
      { name: 'Shade', values: ['Beloved (Nude Mauve)', 'Geranium (Deep Pink)', 'Smother (Berry Plum)', 'Anarchy (Dark Merlot)', 'Crimson Velvet (Classic Red)'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/2001',
        title: 'Beloved (Nude Mauve)',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Beloved (Nude Mauve)' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-LVL-BLV'
      },
      {
        id: 'gid://shopify/ProductVariant/2002',
        title: 'Geranium (Deep Pink)',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Geranium (Deep Pink)' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-LVL-GRN'
      },
      {
        id: 'gid://shopify/ProductVariant/2003',
        title: 'Smother (Berry Plum)',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Smother (Berry Plum)' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-LVL-SMT'
      },
      {
        id: 'gid://shopify/ProductVariant/2004',
        title: 'Anarchy (Dark Merlot)',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Anarchy (Dark Merlot)' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-LVL-ANC'
      },
      {
        id: 'gid://shopify/ProductVariant/2005',
        title: 'Crimson Velvet (Classic Red)',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Crimson Velvet (Classic Red)' }],
        price: { amount: '34.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '42.00', currencyCode: 'USD' },
        sku: 'GG-LVL-CRV'
      }
    ],
    rating: 4.99,
    reviewCount: 248,
    badges: [
      { text: 'NEW ARRIVAL', type: 'new' },
      { text: 'BEST SELLER', type: 'best-seller' }
    ],
    keyBenefits: [
      'Velvet creamy liquid formula glides smoothly and dries down to a comfortable matte finish',
      'Ultra-high pigment opacity delivers intense 1-swipe full color coverage',
      '16-Hour longwear transfer-resistant formula that will not feather or bleed',
      'Enriched with Vitamin E & Hyaluronic spheres to prevent lip dryness & cracking'
    ],
    ingredientsList: [
      'Saturated Micro-Pigment Matrix',
      'Hyaluronic Filling Spheres',
      'Vitamin E (Tocopherol)',
      'Jojoba Esters'
    ],
    usageInstructions: 'Define lip outline with the precision applicator tip, then fill in lips with a single coat of velvet liquid cream. Allow 60 seconds to dry down into a touch-proof matte finish.'
  },
  {
    id: 'gid://shopify/Product/1',
    handle: 'luminous-barrier-serum',
    title: 'LUMINOUS BARRIER SERUM',
    subtitle: 'Triple Peptide & Hyaluronic Acid Skin Elixir',
    description: 'A transformative lightweight serum formulated with multi-molecular hyaluronic acid, niacinamide, and a rare botanical peptide complex. Restores skin barrier integrity, delivers continuous hydration, and gives a glossy, glassy complexion.',
    descriptionHtml: '<p>A transformative lightweight serum formulated with multi-molecular hyaluronic acid, niacinamide, and a rare botanical peptide complex.</p><p>Restores skin barrier integrity, delivers continuous 72-hour hydration, and gives a glossy, glassy complexion.</p>',
    category: 'Skincare',
    productType: 'Serum',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['Best Seller', 'Hydration', 'Glow', 'Skincare'],
    priceRange: {
      minVariantPrice: { amount: '68.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '98.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '80.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '115.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-1-1',
      url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
      altText: 'Luminous Barrier Serum Bottle'
    },
    secondaryImage: {
      id: 'img-1-2',
      url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1000&q=80',
      altText: 'Luminous Barrier Serum Texture'
    },
    images: [
      { id: 'img-1-1', url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80', altText: 'Luminous Barrier Serum' },
      { id: 'img-1-2', url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1000&q=80', altText: 'Serum Dropper Texture' },
      { id: 'img-1-3', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80', altText: 'Skin Model Application' }
    ],
    options: [
      { name: 'Size', values: ['30ml / 1 fl. oz.', '50ml / 1.7 fl. oz.'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/101',
        title: '30ml / 1 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '30ml / 1 fl. oz.' }],
        price: { amount: '68.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '80.00', currencyCode: 'USD' },
        sku: 'GG-LBS-30',
        size: '30ml'
      },
      {
        id: 'gid://shopify/ProductVariant/102',
        title: '50ml / 1.7 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '50ml / 1.7 fl. oz.' }],
        price: { amount: '98.00', currencyCode: 'USD' },
        compareAtPrice: { amount: '115.00', currencyCode: 'USD' },
        sku: 'GG-LBS-50',
        size: '50ml'
      }
    ],
    metafields: {
      keyBenefits: [
        'Boosts skin hydration by up to 210% instantly',
        'Strengthens moisture barrier within 7 days',
        'Soothes redness and refines skin texture',
        'Non-comedogenic & fragrance-free'
      ],
      howToUse: 'Dispense 3–4 drops onto freshly cleansed, damp skin. Press gently into face, neck and décolletage morning and evening before moisturizer.',
      fullIngredients: 'Water/Aqua/Eau, Glycerin, Niacinamide, Sodium Hyaluronate, Palmitoyl Tripeptide-5, Squalane, Centella Asiatica Extract, Tocopherol, Phenoxyethanol.',
      skinTypes: ['All Skin Types', 'Sensitive', 'Dry', 'Dehydrated'],
      beautyConcerns: ['Dryness', 'Dullness', 'Uneven Texture', 'Barrier Damage'],
      finish: 'Dewy & Glassy'
    },
    rating: 4.9,
    reviewCount: 342,
    badges: [{ text: 'BEST SELLER', type: 'best-seller' }, { text: 'VEGAN', type: 'vegan' }]
  },

  {
    id: 'gid://shopify/Product/2',
    handle: 'velvet-matte-lipstick',
    title: 'VELVET MATTE COUTURE LIPSTICK',
    subtitle: 'Weightless High-Pigment Lip Satin',
    description: 'A revolutionary weightless matte lipstick delivering intense color payoff in a single swipe. Enriched with hyaluronic spheres and camellia seed oil to prevent drying.',
    descriptionHtml: '<p>A revolutionary weightless matte lipstick delivering intense color payoff in a single swipe.</p><p>Enriched with hyaluronic spheres and camellia seed oil to nourish lips while maintaining a cushion-soft plush matte finish.</p>',
    category: 'Makeup',
    productType: 'Lipstick',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['New', 'Makeup', 'Lips', 'Shades'],
    priceRange: {
      minVariantPrice: { amount: '38.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '38.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-2-1',
      url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80',
      altText: 'Velvet Matte Couture Lipstick Swatches'
    },
    secondaryImage: {
      id: 'img-2-2',
      url: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=1000&q=80',
      altText: 'Lipstick Bullet Texture'
    },
    images: [
      { id: 'img-2-1', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80', altText: 'Velvet Matte Lipstick' },
      { id: 'img-2-2', url: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=1000&q=80', altText: 'Lipstick Texture' }
    ],
    options: [
      { name: 'Shade', values: ['01 Obsidian Red', '02 Warm Taupe', '03 Nude Blush', '04 Crimson Muse'] }
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/201',
        title: '01 Obsidian Red',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: '01 Obsidian Red' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        shadeHex: '#8B0000',
        sku: 'GG-VML-01'
      },
      {
        id: 'gid://shopify/ProductVariant/202',
        title: '02 Warm Taupe',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: '02 Warm Taupe' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        shadeHex: '#B9ADA2',
        sku: 'GG-VML-02'
      },
      {
        id: 'gid://shopify/ProductVariant/203',
        title: '03 Nude Blush',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: '03 Nude Blush' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        shadeHex: '#D8C3B5',
        sku: 'GG-VML-03'
      },
      {
        id: 'gid://shopify/ProductVariant/204',
        title: '04 Crimson Muse',
        availableForSale: false,
        selectedOptions: [{ name: 'Shade', value: '04 Crimson Muse' }],
        price: { amount: '38.00', currencyCode: 'USD' },
        shadeHex: '#5C0916',
        sku: 'GG-VML-04'
      }
    ],
    metafields: {
      keyBenefits: [
        '12-hour wear without feathering',
        'Micro-encapsulated hyaluronic moisture',
        'Silky cushion texture with weightless feel',
        'Cruelty-free & dermatologist tested'
      ],
      howToUse: 'Apply directly from the bullet starting at the center of your Cupid’s bow and stretching outward to lip corners.',
      fullIngredients: 'Dimethicone, Synthetic Wax, Camellia Oleifera Seed Oil, Sodium Hyaluronate, Silica, Iron Oxides (CI 77491, CI 77499).',
      finish: 'Velvet Soft Matte'
    },
    rating: 4.8,
    reviewCount: 189,
    badges: [{ text: 'NEW', type: 'new' }]
  },

  {
    id: 'gid://shopify/Product/3',
    handle: 'sculpting-body-nectar',
    title: 'SCULPTING GLOW BODY NECTAR',
    subtitle: 'Nourishing Botanical Body Serum Oil',
    description: 'An ultra-luxurious, fast-absorbing body nectar infused with cold-pressed marula oil, rosehip oil, and golden shimmer micro-pearls. Leaves body skin glowing, firm, and delicately scented with wild jasmine and warm cedar.',
    descriptionHtml: '<p>An ultra-luxurious, fast-absorbing body nectar infused with cold-pressed marula oil and golden shimmer micro-pearls.</p>',
    category: 'Body Care',
    productType: 'Body Oil',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['Body', 'Glow', 'Luxury'],
    priceRange: {
      minVariantPrice: { amount: '72.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '72.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-3-1',
      url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1000&q=80',
      altText: 'Sculpting Glow Body Nectar'
    },
    images: [
      { id: 'img-3-1', url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1000&q=80', altText: 'Body Oil Bottle' }
    ],
    options: [{ name: 'Size', values: ['100ml / 3.4 fl. oz.'] }],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/301',
        title: '100ml / 3.4 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '100ml / 3.4 fl. oz.' }],
        price: { amount: '72.00', currencyCode: 'USD' },
        sku: 'GG-SBN-100'
      }
    ],
    metafields: {
      keyBenefits: [
        'Instantly illuminates body skin',
        'Deeply nourishes dry elbows, legs and shoulders',
        'Non-greasy, satin-dry dry oil finish'
      ],
      howToUse: 'Warm 4-6 pumps in palms and massage over collarbones, legs, and arms in upward circular movements.',
      fullIngredients: 'Sclerocarya Birrea (Marula) Seed Oil, Rosa Canina (Rosehip) Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Mica, Fragrance/Parfum.',
      skinTypes: ['All Body Skin Types'],
      finish: 'Satin Shimmer Glow'
    },
    rating: 5.0,
    reviewCount: 96,
    badges: [{ text: 'AWARD WINNER', type: 'award' }]
  },

  {
    id: 'gid://shopify/Product/4',
    handle: 'precision-contour-gua-sha',
    title: 'OBSIDIAN PRECISION CONTOUR GUA SHA',
    subtitle: 'Hand-Carved Volcanic Stone Facial Sculptor',
    description: 'Carved from 100% natural obsidian volcanic stone, this facial tool is designed to release facial tension, promote lymphatic drainage, and sculpt cheekbones and jawlines with targeted precision.',
    descriptionHtml: '<p>Carved from 100% natural obsidian volcanic stone, this facial tool is designed to release facial tension.</p>',
    category: 'Beauty Tools',
    productType: 'Facial Tool',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['Beauty Tools', 'Sculpting', 'Facial Tool'],
    priceRange: {
      minVariantPrice: { amount: '45.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '45.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-4-1',
      url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80',
      altText: 'Obsidian Precision Contour Gua Sha Tool'
    },
    images: [
      { id: 'img-4-1', url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1000&q=80', altText: 'Gua Sha Tool' }
    ],
    options: [{ name: 'Material', values: ['Natural Obsidian'] }],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/401',
        title: 'Natural Obsidian',
        availableForSale: true,
        selectedOptions: [{ name: 'Material', value: 'Natural Obsidian' }],
        price: { amount: '45.00', currencyCode: 'USD' },
        sku: 'GG-GS-OBS'
      }
    ],
    metafields: {
      keyBenefits: [
        'Enhances skin circulation & radiant tone',
        'Helps relieve jaw tension and facial stiffness',
        'Ergonomic multi-edge design for targeted sculpting'
      ],
      howToUse: 'Apply 3-5 drops of Luminous Barrier Serum. Hold tool at a 15-degree angle and glide gently from neck to jawline and cheekbones upward.',
      fullIngredients: '100% Genuine Volcanic Obsidian Gemstone.'
    },
    rating: 4.9,
    reviewCount: 214,
    badges: [{ text: 'BEST SELLER', type: 'best-seller' }]
  },

  {
    id: 'gid://shopify/Product/5',
    handle: 'cellular-overnight-cream',
    title: 'CELLULAR OVERNIGHT REPAIR CREAM',
    subtitle: 'Bio-Fermented Lipid Recovery Treatment',
    description: 'A rich, cocooning night cream powered by bio-fermented lipids, bakuchiol, and ceramides. Works overnight to repair environmental damage, restore firmness, and wake up skin with youthful plumpness.',
    descriptionHtml: '<p>A rich night cream powered by bio-fermented lipids, bakuchiol, and ceramides.</p>',
    category: 'Skincare',
    productType: 'Moisturizer',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['Skincare', 'Night Cream', 'Repair'],
    priceRange: {
      minVariantPrice: { amount: '85.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '85.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-5-1',
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
      altText: 'Cellular Overnight Repair Cream Jar'
    },
    images: [
      { id: 'img-5-1', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80', altText: 'Cream Jar' }
    ],
    options: [{ name: 'Size', values: ['50ml / 1.7 fl. oz.'] }],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/501',
        title: '50ml / 1.7 fl. oz.',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '50ml / 1.7 fl. oz.' }],
        price: { amount: '85.00', currencyCode: 'USD' },
        sku: 'GG-CORC-50'
      }
    ],
    metafields: {
      keyBenefits: [
        'Reduces appearance of fine lines in 14 nights',
        'Replenishes essential skin ceramides NP, AP & EOP',
        'Bakuchiol offers retinol-like benefits without irritation'
      ],
      howToUse: 'Warm a pearl-sized amount between fingertips and smooth evenly over face and neck as the final step in your evening routine.'
    },
    rating: 4.7,
    reviewCount: 112,
    badges: [{ text: 'NEW', type: 'new' }]
  },

  {
    id: 'gid://shopify/Product/6',
    handle: 'micro-skin-perfecting-veil',
    title: 'MICRO-SKIN PERFECTING VEIL',
    subtitle: 'Blurring Weightless Translucent Setting Powder',
    description: 'An ultra-fine setting powder that blurs pores, controls unwanted shine, and sets makeup for up to 16 hours without flash-back or cakey buildup.',
    descriptionHtml: '<p>An ultra-fine setting powder that blurs pores and controls unwanted shine.</p>',
    category: 'Makeup',
    productType: 'Setting Powder',
    vendor: 'GLAMGAL',
    availableForSale: true,
    tags: ['Makeup', 'Powder', 'Complexion'],
    priceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    featuredImage: {
      id: 'img-6-1',
      url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80',
      altText: 'Micro-Skin Perfecting Veil Powder'
    },
    images: [
      { id: 'img-6-1', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80', altText: 'Powder Compact' }
    ],
    options: [{ name: 'Shade', values: ['Translucent Universal', 'Warm Honey'] }],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/601',
        title: 'Translucent Universal',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Translucent Universal' }],
        price: { amount: '42.00', currencyCode: 'USD' },
        shadeHex: '#F8F6F2',
        sku: 'GG-MSPV-TR'
      },
      {
        id: 'gid://shopify/ProductVariant/602',
        title: 'Warm Honey',
        availableForSale: true,
        selectedOptions: [{ name: 'Shade', value: 'Warm Honey' }],
        price: { amount: '42.00', currencyCode: 'USD' },
        shadeHex: '#D8C3B5',
        sku: 'GG-MSPV-WH'
      }
    ],
    metafields: {
      keyBenefits: [
        'Photo-ready blurring soft focus filter effect',
        'Zero flashback under flash photography',
        'Infused with micronized silk dust'
      ]
    },
    rating: 4.9,
    reviewCount: 178
  }
];

export function getLiveProducts(): Product[] {
  try {
    const cmsState = localStorage.getItem('glamgal_cms_state');
    if (cmsState) {
      const parsed = JSON.parse(cmsState);
      if (parsed.products && Array.isArray(parsed.products) && parsed.products.length > 0) {
        return parsed.products;
      }
    }
  } catch (e) {
    console.error('Error fetching live CMS products:', e);
  }
  return MOCK_PRODUCTS;
}

export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: 'gid://shopify/Collection/1',
    handle: 'all',
    title: 'SHOP ALL GLAMGAL',
    description: 'Explore our complete suite of skin-first care, high-impact makeup, body care, and precision tools.',
    image: {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Complete Collection'
    },
    products: MOCK_PRODUCTS,
    productCount: MOCK_PRODUCTS.length
  },
  {
    id: 'gid://shopify/Collection/2',
    handle: 'skincare',
    title: 'SKINCARE ESSENTIALS',
    description: 'Advanced formulations engineered with potent botanical actives and clinical peptides for healthy skin barrier performance.',
    image: {
      url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Skincare Collection'
    },
    products: MOCK_PRODUCTS.filter(p => p.category === 'Skincare'),
    productCount: 2
  },
  {
    id: 'gid://shopify/Collection/3',
    handle: 'makeup',
    title: 'HIGH-IMPACT MAKEUP',
    description: 'Weightless textures, vivid pigments, and skin-loving formulas for effortless daily glam and evening drama.',
    image: {
      url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Makeup Collection'
    },
    products: MOCK_PRODUCTS.filter(p => p.category === 'Makeup'),
    productCount: 2
  },
  {
    id: 'gid://shopify/Collection/4',
    handle: 'body-care',
    title: 'LUXURY BODY CARE',
    description: 'Nourishing body nectars, scrubs, and illuminators for smooth skin from collarbones to toes.',
    image: {
      url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Body Care Collection'
    },
    products: MOCK_PRODUCTS.filter(p => p.category === 'Body Care'),
    productCount: 1
  },
  {
    id: 'gid://shopify/Collection/5',
    handle: 'beauty-tools',
    title: 'PRECISION BEAUTY TOOLS',
    description: 'Professional-grade obsidian stone sculptors and tools designed to enhance your daily beauty ritual.',
    image: {
      url: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Beauty Tools Collection'
    },
    products: MOCK_PRODUCTS.filter(p => p.category === 'Beauty Tools'),
    productCount: 1
  },
  {
    id: 'gid://shopify/Collection/6',
    handle: 'new-arrivals',
    title: 'NEW ARRIVALS',
    description: 'Discover the latest formulation breakthroughs and shade releases fresh from our laboratories.',
    image: {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL New Arrivals'
    },
    products: MOCK_PRODUCTS.filter(p => p.badges?.some(b => b.type === 'new')),
    productCount: 2
  },
  {
    id: 'gid://shopify/Collection/7',
    handle: 'best-sellers',
    title: 'BEST SELLERS',
    description: 'Our most-coveted, award-winning skincare, makeup, and beauty ritual icons.',
    image: {
      url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      altText: 'GLAMGAL Best Sellers'
    },
    products: MOCK_PRODUCTS.filter(p => p.badges?.some(b => b.type === 'best-seller')),
    productCount: 2
  }
];

export const MOCK_INGREDIENTS: BeautyIngredient[] = [
  {
    id: 'ing-1',
    name: 'Multi-Molecular Hyaluronic Acid',
    shortDescription: 'Attracts and binds up to 1,000 times its weight in water to plump deep skin layers.',
    fullDetails: 'Engineered with 5 distinct molecular weights, this complex penetrates from epidermal surface down to dermal layers, preventing transepidermal water loss and restoring bounce.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    benefits: ['Deep Hydration', 'Immediate Plumping', 'Smoother Fine Lines'],
    featuredProductHandles: ['luminous-barrier-serum', 'velvet-matte-lipstick']
  },
  {
    id: 'ing-2',
    name: 'Bio-Identical Ceramides NP, AP & EOP',
    shortDescription: 'Replenishes essential lipid intercellular matrix for resilient skin protection.',
    fullDetails: 'Ceramides make up 50% of the skin lipid barrier. Our bio-identical tri-ceramide complex fortifies skin resilience against environmental pollutants, harsh weather, and reactive sensitivity.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    benefits: ['Barrier Repair', 'Calms Redness', 'Protects Elasticity'],
    featuredProductHandles: ['cellular-overnight-cream']
  },
  {
    id: 'ing-3',
    name: 'Cold-Pressed Marula Oil',
    shortDescription: 'Rich in essential fatty acids and potent flavonoids for a silky radiant glow.',
    fullDetails: 'Sustainably harvested and cold-pressed to preserve active antioxidants. Absorbs rapidly into skin without clogging pores, leaving body skin velvety soft and deeply nourished.',
    image: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=800&q=80',
    benefits: ['Radiant Shimmer', 'Lipid Replenishment', 'Silky Touch'],
    featuredProductHandles: ['sculpting-body-nectar']
  }
];

export const MOCK_ROUTINES: BeautyRoutine[] = [
  {
    id: 'routine-1',
    handle: 'morning-glass-skin-routine',
    title: 'Morning Glass Skin Routine',
    subtitle: '3 Steps to Dewy, Hydrated & Radiant Skin',
    goal: 'Glow & Hydration',
    durationMinutes: 5,
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    description: 'Start your day with maximum radiance. This 3-step routine plumps moisture levels, sculpts cheekbones, and leaves skin smooth for seamless makeup application.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hydrate & Plump',
        instruction: 'Press 3-4 drops of Luminous Barrier Serum into clean damp skin.',
        productHandle: 'luminous-barrier-serum'
      },
      {
        stepNumber: 2,
        title: 'Sculpt & Drain',
        instruction: 'Glide the Obsidian Precision Contour Gua Sha along jawline and cheekbones for 2 minutes.',
        productHandle: 'precision-contour-gua-sha'
      },
      {
        stepNumber: 3,
        title: 'Lips & Polish',
        instruction: 'Swipe Velvet Matte Couture Lipstick in Shade 02 Warm Taupe onto lips for an effortless finish.',
        productHandle: 'velvet-matte-lipstick'
      }
    ],
    recommendedSkinTypes: ['All Skin Types', 'Dry', 'Combination']
  },
  {
    id: 'routine-2',
    handle: 'overnight-skin-barrier-recovery',
    title: 'Overnight Barrier Recovery',
    subtitle: 'Deep Cellular Repair While You Sleep',
    goal: 'Barrier Repair',
    durationMinutes: 4,
    coverImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    description: 'Rebuild compromised skin overnight with our highest concentration of peptides and bio-ceramides.',
    steps: [
      {
        stepNumber: 1,
        title: 'Prep Elixir',
        instruction: 'Apply 4 drops of Luminous Barrier Serum to lock in dampness.',
        productHandle: 'luminous-barrier-serum'
      },
      {
        stepNumber: 2,
        title: 'Deep Recovery Cream',
        instruction: 'Massage Cellular Overnight Repair Cream in upward strokes over face and neck.',
        productHandle: 'cellular-overnight-cream'
      }
    ],
    recommendedSkinTypes: ['Dry', 'Sensitive', 'Dehydrated']
  }
];

export const MOCK_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    handle: 'the-art-of-skin-barrier-repair',
    title: 'The Art of Skin Barrier Repair: Why Hydration Isn’t Enough',
    summary: 'Discover how peptides, niacinamide, and bio-identical ceramides work synergistically to restore compromised skin barriers.',
    contentHtml: `
      <p class="lead">Understanding the architecture of your skin barrier is the first step toward achieving lasting radiance. While basic moisturizers sit on the epidermal surface, true skin health requires lipid-identical replenishment.</p>
      <h2>What Breaks the Skin Barrier?</h2>
      <p>Over-exfoliation, harsh weather changes, and aggressive alkaline cleansers strip essential fatty acids, leading to redness, dehydration, and increased reactivity.</p>
      <h2>The GLAMGAL Multi-Layer Philosophy</h2>
      <p>Our formulation team combines 5 molecular weights of Hyaluronic Acid with clinically proven Ceramides to seal moisture from within.</p>
    `,
    author: 'Dr. Elena Vance, Lead Chemist',
    publishedAt: '2026-07-15',
    readTime: '4 min read',
    category: 'Skincare Education',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    relatedProductHandles: ['luminous-barrier-serum', 'cellular-overnight-cream']
  },
  {
    id: 'art-2',
    handle: 'how-to-master-velvet-matte-lips',
    title: 'How to Master the Velvet Matte Lip Without Any Drying',
    summary: 'Pro editorial makeup secrets to achieve seamless matte lips that feel weightless and cushion-soft all day.',
    contentHtml: `
      <p class="lead">Matte lipstick has evolved far beyond dry, cracking textures. Modern high-impact formulas pair dense mineral pigments with micro-encapsulated oil spheres.</p>
      <h2>Step 1: Gentle Lip Prep</h2>
      <p>Gently press a warm damp cloth over lips for 30 seconds before applying your lipstick bullet directly to lip centers.</p>
    `,
    author: 'Sora Kim, Global Editorial Makeup Artist',
    publishedAt: '2026-07-20',
    readTime: '3 min read',
    category: 'Makeup Tutorials',
    coverImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=80',
    relatedProductHandles: ['velvet-matte-lipstick']
  }
];

export const MOCK_HERO: HeroCampaignMetaobject = {
  heading: 'BEAUTY, DEFINED YOUR WAY.',
  subheading: 'High-impact makeup, skin-first care and everyday essentials created for confident self-expression.',
  primaryCtaText: 'SHOP THE COLLECTION',
  primaryCtaLink: '/collections/all',
  secondaryCtaText: 'DISCOVER SKINCARE',
  secondaryCtaLink: '/collections/skincare',
  desktopImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
  mobileImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
  theme: 'dark'
};

export const MOCK_ANNOUNCEMENTS: AnnouncementMetaobject[] = [
  { id: 'ann-1', message: 'Complimentary shipping on qualifying orders over $75', active: true },
  { id: 'ann-2', message: 'Discover the latest GLAMGAL Velvet Matte collection', link: '/collections/makeup', active: true },
  { id: 'ann-3', message: 'Secure checkout powered by Shopify Storefront API', active: true }
];

export function createMockCart(): Cart {
  return {
    id: 'mock-cart-id-12345',
    checkoutUrl: 'https://checkout.shopify.com/mock-glamgal-checkout',
    totalQuantity: 1,
    lines: [
      {
        id: 'mock-line-1',
        quantity: 1,
        cost: { totalAmount: { amount: '68.00', currencyCode: 'USD' } },
        merchandise: {
          id: 'gid://shopify/ProductVariant/101',
          title: '30ml / 1 fl. oz.',
          price: { amount: '68.00', currencyCode: 'USD' },
          compareAtPrice: { amount: '80.00', currencyCode: 'USD' },
          selectedOptions: [{ name: 'Size', value: '30ml / 1 fl. oz.' }],
          image: {
            url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
            altText: 'Luminous Barrier Serum'
          },
          product: {
            id: 'gid://shopify/Product/1',
            handle: 'luminous-barrier-serum',
            title: 'LUMINOUS BARRIER SERUM',
            category: 'Skincare',
            featuredImage: {
              url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
              altText: 'Luminous Barrier Serum'
            }
          }
        }
      }
    ],
    cost: {
      subtotalAmount: { amount: '68.00', currencyCode: 'USD' },
      totalAmount: { amount: '68.00', currencyCode: 'USD' }
    }
  };
}

export async function getMockProducts(options?: { first?: number; query?: string; category?: string }): Promise<Product[]> {
  let products = getLiveProducts();
  if (options?.category && options.category !== 'all') {
    products = products.filter(p => p.category.toLowerCase() === options.category?.toLowerCase());
  }
  if (options?.query) {
    const q = options.query.toLowerCase();
    products = products.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  if (options?.first) {
    products = products.slice(0, options.first);
  }
  return products;
}

export async function getMockProductByHandle(handle: string): Promise<Product | null> {
  const products = getLiveProducts();
  return products.find(p => p.handle === handle) || null;
}

export async function getMockCollectionByHandle(handle: string): Promise<Collection | null> {
  const collectionMap: Record<string, { title: string; description: string; image: string }> = {
    'skincare': {
      title: 'SKINCARE ESSENTIALS',
      description: 'Advanced formulations engineered with potent botanical actives and clinical peptides for healthy skin barrier performance.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    },
    'makeup': {
      title: 'COUTURE MAKEUP',
      description: 'High-pigment, weightless satin lipsticks, cheek veil elixirs, and precision framing tools.',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=80',
    },
    'body-care': {
      title: 'BODY CARE',
      description: 'Nourishing botanical body nectar oils and barrier recovery lotions for radiant head-to-toe glow.',
      image: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=1200&q=80',
    },
    'beauty-tools': {
      title: 'BEAUTY TOOLS & ACCESSORIES',
      description: 'Hand-carved obsidian volcanic stone sculptors and facial contour massage tools.',
      image: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=1200&q=80',
    },
    'new-arrivals': {
      title: 'NEW ARRIVALS',
      description: 'The latest fresh formulations, couture shade drops, and limited edition beauty rituals.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    },
    'best-sellers': {
      title: 'BEST SELLERS',
      description: 'Our most coveted award-winning icons loved by over 10,000+ beauty enthusiasts.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    },
  };

  const info = collectionMap[handle] || {
    title: `${handle.replace('-', ' ').toUpperCase()} COLLECTION`,
    description: 'Explore GLAMGAL luxury beauty formulations and tools.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  };

  const allProducts = getLiveProducts();
  const matchingProducts = allProducts.filter(p => {
    if (handle === 'all') return true;
    if (handle === 'best-sellers') {
      return (
        p.badges?.some(b => b.type === 'best-seller' || b.text.toLowerCase().includes('best')) ||
        p.tags.some(t => t.toLowerCase().includes('best')) ||
        (p.rating && p.rating >= 4.8)
      );
    }
    if (handle === 'new-arrivals') {
      return (
        p.badges?.some(b => b.type === 'new' || b.text.toLowerCase().includes('new')) ||
        p.tags.some(t => t.toLowerCase().includes('new'))
      );
    }
    return (
      p.category.toLowerCase().includes(handle) ||
      (handle === 'skincare' && p.category.toLowerCase() === 'skincare') ||
      (handle === 'makeup' && p.category.toLowerCase() === 'makeup') ||
      (handle === 'body-care' && p.category.toLowerCase() === 'body care') ||
      (handle === 'beauty-tools' && p.category.toLowerCase() === 'beauty tools')
    );
  });

  return {
    id: `gid://shopify/Collection/${handle}`,
    handle,
    title: info.title,
    description: info.description,
    image: { url: info.image, altText: info.title },
    products: matchingProducts,
    productCount: matchingProducts.length,
  };
}

export function getLiveArticles(): JournalArticle[] {
  try {
    const saved = localStorage.getItem('glamgal_cms_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.articles && Array.isArray(parsed.articles) && parsed.articles.length > 0) {
        return parsed.articles;
      }
    }
  } catch (e) {
    console.error('Error parsing live articles:', e);
  }
  return MOCK_ARTICLES;
}

export function getLiveArticleByHandle(handle: string): JournalArticle | null {
  const articles = getLiveArticles();
  return articles.find(a => a.handle === handle) || null;
}

