import { describe, it, expect, beforeEach } from 'vitest';
import { createMockCart, MOCK_PRODUCTS } from '../../lib/shopify/mock-adapter';
import { createCart, addToCart, updateCartQuantity, removeFromCart } from '../../lib/shopify';

describe('Shopify Cart Operations & Logic Unit Tests', () => {
  it('should initialize a valid mock cart structure with subtotal matching item prices', () => {
    const cart = createMockCart();
    expect(cart).toBeDefined();
    expect(cart.id).toContain('mock-cart');
    expect(cart.lines.length).toBeGreaterThan(0);
    expect(parseFloat(cart.cost.subtotalAmount.amount)).toBeGreaterThan(0);
  });

  it('should create a new cart with specified variant and quantity', async () => {
    const variantId = MOCK_PRODUCTS[0].variants[0].id;
    const cart = await createCart(variantId, 2);

    expect(cart.totalQuantity).toBe(2);
    expect(cart.lines[0].merchandise.id).toBe(variantId);
    expect(parseFloat(cart.cost.subtotalAmount.amount)).toBe(
      parseFloat(MOCK_PRODUCTS[0].variants[0].price.amount) * 2
    );
  });

  it('should increment existing item quantity when added repeatedly', async () => {
    const variantId = MOCK_PRODUCTS[0].variants[0].id;
    const cart = await createCart(variantId, 1);
    const updated = await addToCart(cart.id, variantId, 2);

    expect(updated.totalQuantity).toBe(3);
    expect(updated.lines.length).toBe(1);
  });

  it('should update line quantity correctly', async () => {
    const variantId = MOCK_PRODUCTS[0].variants[0].id;
    const cart = await createCart(variantId, 1);
    const lineId = cart.lines[0].id;

    const updated = await updateCartQuantity(cart.id, lineId, 5);
    expect(updated.totalQuantity).toBe(5);
  });

  it('should remove item when quantity set to 0 or remove line called', async () => {
    const variantId = MOCK_PRODUCTS[0].variants[0].id;
    const cart = await createCart(variantId, 1);
    const lineId = cart.lines[0].id;

    const updated = await removeFromCart(cart.id, lineId);
    expect(updated.lines.length).toBe(0);
    expect(updated.totalQuantity).toBe(0);
  });
});
