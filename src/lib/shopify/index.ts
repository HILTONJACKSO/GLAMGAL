import { shopifyFetch } from './client';
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
import { GET_PRODUCTS_QUERY, GET_PRODUCT_BY_HANDLE_QUERY } from './queries/product';
import { GET_COLLECTION_BY_HANDLE_QUERY, GET_ALL_COLLECTIONS_QUERY } from './queries/collection';
import { CREATE_CART_MUTATION, ADD_CART_LINES_MUTATION, UPDATE_CART_LINES_MUTATION, REMOVE_CART_LINES_MUTATION, GET_CART_QUERY } from './queries/cart';
import { Product, Collection, Cart, BeautyIngredient, BeautyRoutine, JournalArticle, HeroCampaignMetaobject, AnnouncementMetaobject } from '../../types/shopify';

export function isMockMode(): boolean {
  const forceMock = import.meta.env.VITE_USE_MOCK_SHOPIFY === 'true';
  const domain = import.meta.env.PUBLIC_STORE_DOMAIN;
  const token = import.meta.env.PUBLIC_STOREFRONT_API_TOKEN;
  return forceMock || !domain || !token;
}

// Memory cache for mock cart during session
let inMemoryMockCart: Cart | null = null;

export async function getProducts(options?: { first?: number; query?: string }): Promise<Product[]> {
  if (isMockMode()) {
    let list = [...MOCK_PRODUCTS];
    if (options?.query) {
      const q = options.query.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (options?.first) list = list.slice(0, options.first);
    return list;
  }

  const response = await shopifyFetch<{ products: { edges: Array<{ node: any }> } }>({
    query: GET_PRODUCTS_QUERY,
    variables: { first: options?.first || 20, query: options?.query }
  });

  return response.products.edges.map(e => formatShopifyProduct(e.node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  if (isMockMode()) {
    return MOCK_PRODUCTS.find(p => p.handle === handle) || null;
  }

  const response = await shopifyFetch<{ product: any }>({
    query: GET_PRODUCT_BY_HANDLE_QUERY,
    variables: { handle }
  });

  return response.product ? formatShopifyProduct(response.product) : null;
}

export async function getCollectionByHandle(handle: string): Promise<Collection | null> {
  if (isMockMode()) {
    return MOCK_COLLECTIONS.find(c => c.handle === handle) || MOCK_COLLECTIONS[0];
  }

  const response = await shopifyFetch<{ collection: any }>({
    query: GET_COLLECTION_BY_HANDLE_QUERY,
    variables: { handle }
  });

  if (!response.collection) return null;

  return {
    id: response.collection.id,
    handle: response.collection.handle,
    title: response.collection.title,
    description: response.collection.description,
    image: response.collection.image,
    products: response.collection.products.edges.map((e: any) => formatShopifyProduct(e.node)),
    productCount: response.collection.products.edges.length
  };
}

export async function getAllCollections(): Promise<Collection[]> {
  if (isMockMode()) {
    return MOCK_COLLECTIONS;
  }

  const response = await shopifyFetch<{ collections: { edges: Array<{ node: any }> } }>({
    query: GET_ALL_COLLECTIONS_QUERY
  });

  return response.collections.edges.map(e => ({
    id: e.node.id,
    handle: e.node.handle,
    title: e.node.title,
    description: e.node.description,
    image: e.node.image,
    products: [],
    productCount: 0
  }));
}

// Cart Operations
export async function getCart(cartId: string): Promise<Cart | null> {
  if (isMockMode()) {
    if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
    return inMemoryMockCart;
  }

  const response = await shopifyFetch<{ cart: any }>({
    query: GET_CART_QUERY,
    variables: { cartId }
  });

  return response.cart ? formatShopifyCart(response.cart) : null;
}

export async function createCart(variantId: string, quantity: number = 1): Promise<Cart> {
  if (isMockMode()) {
    const newCart = createMockCart();
    const product = MOCK_PRODUCTS.find(p => p.variants.some(v => v.id === variantId)) || MOCK_PRODUCTS[0];
    const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
    
    newCart.lines = [{
      id: `mock-line-${Date.now()}`,
      quantity,
      cost: { totalAmount: { amount: (parseFloat(variant.price.amount) * quantity).toFixed(2), currencyCode: 'USD' } },
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
    }];
    recalculateMockCart(newCart);
    inMemoryMockCart = newCart;
    return newCart;
  }

  const response = await shopifyFetch<{ cartCreate: { cart: any } }>({
    query: CREATE_CART_MUTATION,
    variables: { lineItems: [{ merchandiseId: variantId, quantity }] }
  });

  return formatShopifyCart(response.cartCreate.cart);
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1): Promise<Cart> {
  if (isMockMode()) {
    if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
    const product = MOCK_PRODUCTS.find(p => p.variants.some(v => v.id === variantId)) || MOCK_PRODUCTS[0];
    const variant = product.variants.find(v => v.id === variantId) || product.variants[0];

    const existingLine = inMemoryMockCart.lines.find(l => l.merchandise.id === variantId);
    if (existingLine) {
      existingLine.quantity += quantity;
      existingLine.cost.totalAmount.amount = (parseFloat(variant.price.amount) * existingLine.quantity).toFixed(2);
    } else {
      inMemoryMockCart.lines.push({
        id: `mock-line-${Date.now()}`,
        quantity,
        cost: { totalAmount: { amount: (parseFloat(variant.price.amount) * quantity).toFixed(2), currencyCode: 'USD' } },
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

    recalculateMockCart(inMemoryMockCart);
    return inMemoryMockCart;
  }

  const response = await shopifyFetch<{ cartLinesAdd: { cart: any } }>({
    query: ADD_CART_LINES_MUTATION,
    variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] }
  });

  return formatShopifyCart(response.cartLinesAdd.cart);
}

export async function updateCartQuantity(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  if (isMockMode()) {
    if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
    const lineIndex = inMemoryMockCart.lines.findIndex(l => l.id === lineId);
    if (lineIndex !== -1) {
      if (quantity <= 0) {
        inMemoryMockCart.lines.splice(lineIndex, 1);
      } else {
        const line = inMemoryMockCart.lines[lineIndex];
        line.quantity = quantity;
        line.cost.totalAmount.amount = (parseFloat(line.merchandise.price.amount) * quantity).toFixed(2);
      }
    }
    recalculateMockCart(inMemoryMockCart);
    return inMemoryMockCart;
  }

  const response = await shopifyFetch<{ cartLinesUpdate: { cart: any } }>({
    query: UPDATE_CART_LINES_MUTATION,
    variables: { cartId, lines: [{ id: lineId, quantity }] }
  });

  return formatShopifyCart(response.cartLinesUpdate.cart);
}

export async function removeFromCart(cartId: string, lineId: string): Promise<Cart> {
  if (isMockMode()) {
    if (!inMemoryMockCart) inMemoryMockCart = createMockCart();
    inMemoryMockCart.lines = inMemoryMockCart.lines.filter(l => l.id !== lineId);
    recalculateMockCart(inMemoryMockCart);
    return inMemoryMockCart;
  }

  const response = await shopifyFetch<{ cartLinesRemove: { cart: any } }>({
    query: REMOVE_CART_LINES_MUTATION,
    variables: { cartId, lineIds: [lineId] }
  });

  return formatShopifyCart(response.cartLinesRemove.cart);
}

// Metaobject and Editorial Getters
export async function getIngredients(): Promise<BeautyIngredient[]> {
  return MOCK_INGREDIENTS;
}

export async function getRoutines(): Promise<BeautyRoutine[]> {
  return MOCK_ROUTINES;
}

export async function getRoutineByHandle(handle: string): Promise<BeautyRoutine | null> {
  return MOCK_ROUTINES.find(r => r.handle === handle) || null;
}

export async function getArticles(): Promise<JournalArticle[]> {
  if (isMockMode()) {
    const { getLiveArticles } = await import('./mock-adapter');
    return getLiveArticles();
  }
  return MOCK_ARTICLES;
}

export async function getArticleByHandle(handle: string): Promise<JournalArticle | null> {
  if (isMockMode()) {
    const { getLiveArticleByHandle } = await import('./mock-adapter');
    return getLiveArticleByHandle(handle);
  }
  return MOCK_ARTICLES.find(a => a.handle === handle) || null;
}

export async function getHeroCampaign(): Promise<HeroCampaignMetaobject> {
  return MOCK_HERO;
}

export async function getAnnouncements(): Promise<AnnouncementMetaobject[]> {
  return MOCK_ANNOUNCEMENTS;
}

// Helper formatting functions
function formatShopifyProduct(node: any): Product {
  const images = node.images?.edges ? node.images.edges.map((e: any) => e.node) : [];
  const variants = node.variants?.edges ? node.variants.edges.map((e: any) => e.node) : [];
  
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    descriptionHtml: node.descriptionHtml,
    category: node.productType || 'Beauty',
    productType: node.productType || 'Product',
    vendor: node.vendor || 'GLAMGAL',
    availableForSale: node.availableForSale,
    tags: node.tags || [],
    priceRange: node.priceRange,
    compareAtPriceRange: node.compareAtPriceRange,
    featuredImage: node.featuredImage || images[0],
    secondaryImage: images[1] || undefined,
    images: images,
    variants: variants,
    options: node.options || [],
    rating: 4.9,
    reviewCount: 45
  };
}

function formatShopifyCart(rawCart: any): Cart {
  const lines = rawCart.lines?.edges ? rawCart.lines.edges.map((e: any) => e.node) : [];
  return {
    id: rawCart.id,
    checkoutUrl: rawCart.checkoutUrl,
    totalQuantity: rawCart.totalQuantity,
    lines,
    cost: rawCart.cost
  };
}

function recalculateMockCart(cart: Cart) {
  let qty = 0;
  let total = 0;
  cart.lines.forEach(l => {
    qty += l.quantity;
    total += parseFloat(l.cost.totalAmount.amount);
  });
  cart.totalQuantity = qty;
  cart.cost.subtotalAmount.amount = total.toFixed(2);
  cart.cost.totalAmount.amount = total.toFixed(2);
}
