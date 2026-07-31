import { Product, Collection, Cart, BeautyIngredient, BeautyRoutine, JournalArticle, AnnouncementMetaobject, HeroCampaignMetaobject } from '../../types/shopify';

export const MOCK_PRODUCTS: Product[] = [
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
  const matchingProducts = allProducts.filter(p => 
    p.category.toLowerCase().includes(handle) || 
    handle === 'all' || 
    handle === 'new-arrivals' || 
    handle === 'best-sellers' ||
    (handle === 'skincare' && p.category.toLowerCase() === 'skincare') ||
    (handle === 'makeup' && p.category.toLowerCase() === 'makeup') ||
    (handle === 'body-care' && p.category.toLowerCase() === 'body care') ||
    (handle === 'beauty-tools' && p.category.toLowerCase() === 'beauty tools')
  );

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

