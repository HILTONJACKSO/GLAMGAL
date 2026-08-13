import {
  MOCK_PRODUCTS,
  MOCK_COLLECTIONS,
  MOCK_INGREDIENTS,
  MOCK_ROUTINES,
  MOCK_ARTICLES,
  MOCK_HERO,
  MOCK_ANNOUNCEMENTS,
  createMockCart
} from './mock-adapter';
import {
  Product,
  Collection,
  Cart,
  BeautyIngredient,
  BeautyRoutine,
  JournalArticle,
  HeroCampaignMetaobject,
  AnnouncementMetaobject
} from '../../types/shopify';

// Memory cache for mock cart during session
let inMemoryMockCart: Cart | null = null;

function getCMSProducts(): Product[] {
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('glamgal_cms_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.products && parsed.products.length > 0) {
          return parsed.products.map((p: Product) => ({
            ...p,
            shopifyUrl: p.shopifyUrl || `https://glamgalbeauty.com/products/${p.handle}`
          }));
        }
      }
    }
  } catch (e) {
    console.warn('Error reading CMS products from storage:', e);
  }
  return MOCK_PRODUCTS.map((p) => ({
    ...p,
    shopifyUrl: p.shopifyUrl || `https://glamgalbeauty.com/products/${p.handle}`
  }));
}

export async function getProducts(options?: { first?: number; query?: string }): Promise<Product[]> {
  let list = [...getCMSProducts()];
  if (options?.query) {
    const q = options.query.toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
    );
  }
  if (options?.first) list = list.slice(0, options.first);
  return list;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const products = getCMSProducts();
  const found = products.find((p) => p.handle === handle) || products[0] || null;
  if (found) {
    return {
      ...found,
      shopifyUrl: found.shopifyUrl || `https://glamgalbeauty.com/products/${found.handle}`
    };
  }
  return null;
}

export async function getCollectionByHandle(handle: string): Promise<Collection | null> {
  const collection = MOCK_COLLECTIONS.find((c) => c.handle === handle) || MOCK_COLLECTIONS[0];
  if (collection) {
    return {
      ...collection,
      shopifyUrl: collection.shopifyUrl || `https://glamgalbeauty.com/collections/${collection.handle}`
    };
  }
  return null;
}

export async function getAllCollections(): Promise<Collection[]> {
  return MOCK_COLLECTIONS.map((c) => ({
    ...c,
    shopifyUrl: c.shopifyUrl || `https://glamgalbeauty.com/collections/${c.handle}`
  }));
}

// Cart Operations (Local session state)
export async function getCart(cartId: string): Promise<Cart | null> {
  if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
  return inMemoryMockCart;
}

export async function createCart(variantId: string, quantity: number = 1): Promise<Cart> {
  const newCart = createMockCart();
  const products = getCMSProducts();
  const product = products.find((p) => p.variants.some((v) => v.id === variantId)) || products[0];
  const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];

  newCart.lines = [
    {
      id: `mock-line-${Date.now()}`,
      quantity,
      cost: {
        totalAmount: {
          amount: (parseFloat(variant.price.amount) * quantity).toFixed(2),
          currencyCode: 'USD'
        }
      },
      merchandise: {
        id: variant.id,
        title: variant.title,
        price: variant.price,
        selectedOptions: variant.selectedOptions,
        image: variant.image || product.featuredImage,
        product: {
          id: product.id,
          handle: product.handle,
          title: product.title,
          category: product.category,
          featuredImage: product.featuredImage
        }
      }
    }
  ];

  inMemoryMockCart = newCart;
  return newCart;
}

export async function addToCart(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }> | string, quantityParam?: number): Promise<Cart> {
  if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
  const products = getCMSProducts();

  let lineItems: Array<{ merchandiseId: string; quantity: number }> = [];
  if (typeof lines === 'string') {
    lineItems = [{ merchandiseId: lines, quantity: quantityParam || 1 }];
  } else {
    lineItems = lines;
  }

  lineItems.forEach((line) => {
    const product = products.find((p) => p.variants.some((v) => v.id === line.merchandiseId)) || products[0];
    const variant = product.variants.find((v) => v.id === line.merchandiseId) || product.variants[0];

    const existingIndex = inMemoryMockCart!.lines.findIndex((l) => l.merchandise.id === line.merchandiseId);
    if (existingIndex > -1) {
      inMemoryMockCart!.lines[existingIndex].quantity += line.quantity;
    } else {
      inMemoryMockCart!.lines.push({
        id: `mock-line-${Date.now()}-${Math.random()}`,
        quantity: line.quantity,
        cost: {
          totalAmount: {
            amount: (parseFloat(variant.price.amount) * line.quantity).toFixed(2),
            currencyCode: 'USD'
          }
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          price: variant.price,
          selectedOptions: variant.selectedOptions,
          image: variant.image || product.featuredImage,
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            category: product.category,
            featuredImage: product.featuredImage
          }
        }
      });
    }
  });

  return inMemoryMockCart;
}

export async function updateCart(cartId: string, lines: Array<{ id: string; quantity: number }>): Promise<Cart> {
  if (!inMemoryMockCart) inMemoryMockCart = createMockCart();

  lines.forEach((line) => {
    const index = inMemoryMockCart!.lines.findIndex((l) => l.id === line.id);
    if (index > -1) {
      if (line.quantity <= 0) {
        inMemoryMockCart!.lines.splice(index, 1);
      } else {
        inMemoryMockCart!.lines[index].quantity = line.quantity;
      }
    }
  });

  return inMemoryMockCart;
}

export async function updateCartQuantity(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  return updateCart(cartId, [{ id: lineId, quantity }]);
}

export async function removeFromCart(cartId: string, lineIds: string[] | string): Promise<Cart> {
  if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
  const idsToRemove = Array.isArray(lineIds) ? lineIds : [lineIds];
  inMemoryMockCart.lines = inMemoryMockCart.lines.filter((l) => !idsToRemove.includes(l.id));
  return inMemoryMockCart;
}

// Metaobject & CMS content helpers
export async function getBeautyIngredients(): Promise<BeautyIngredient[]> {
  return MOCK_INGREDIENTS;
}
export const getIngredients = getBeautyIngredients;

export async function getBeautyRoutines(): Promise<BeautyRoutine[]> {
  return MOCK_ROUTINES;
}
export const getRoutines = getBeautyRoutines;

export async function getRoutineByHandle(handle: string): Promise<BeautyRoutine | null> {
  return MOCK_ROUTINES.find((r) => r.handle === handle) || MOCK_ROUTINES[0] || null;
}

export async function getJournalArticles(): Promise<JournalArticle[]> {
  return MOCK_ARTICLES;
}
export const getArticles = getJournalArticles;

export async function getArticleByHandle(handle: string): Promise<JournalArticle | null> {
  return MOCK_ARTICLES.find((a) => a.handle === handle) || MOCK_ARTICLES[0] || null;
}

export async function getHeroCampaign(): Promise<HeroCampaignMetaobject> {
  return MOCK_HERO;
}

export async function getAnnouncementMetaobjects(): Promise<AnnouncementMetaobject[]> {
  return MOCK_ANNOUNCEMENTS;
}
export const getAnnouncements = getAnnouncementMetaobjects;
