import { test, expect } from '@playwright/test';

test.describe('GLAMGAL Storefront End-to-End User Journeys', () => {
  test('should load home page with logo, hero campaign, and navigation bar', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/GLAMGAL/i);
    await expect(page.locator('text=BEAUTY, DEFINED YOUR WAY.')).toBeVisible();
    await expect(page.locator('text=SHOP THE COLLECTION')).toBeVisible();
  });

  test('should navigate to Skincare collection and view products', async ({ page }) => {
    await page.goto('/collections/skincare');
    await expect(page.locator('h1')).toContainText(/SKINCARE/i);
    await expect(page.locator('text=LUMINOUS BARRIER SERUM')).toBeVisible();
  });

  test('should open product detail page and test shade selection', async ({ page }) => {
    await page.goto('/products/velvet-matte-lipstick');
    await expect(page.locator('h1')).toContainText(/VELVET MATTE COUTURE LIPSTICK/i);
    await expect(page.locator('text=SHADE:')).toBeVisible();

    // Click another shade swatch
    const swatches = page.locator('button[role="radio"]');
    if ((await swatches.count()) > 1) {
      await swatches.nth(1).click();
      await expect(swatches.nth(1)).toHaveAttribute('aria-checked', 'true');
    }
  });

  test('should add product to bag and open cart drawer', async ({ page }) => {
    await page.goto('/products/luminous-barrier-serum');
    await page.click('button:has-text("ADD TO BAG")');
    await expect(page.locator('#cart-drawer-title')).toBeVisible();
    await expect(page.locator('text=YOUR SHOPPING BAG')).toBeVisible();
    await expect(page.locator('text=PROCEED TO SHOPIFY CHECKOUT')).toBeVisible();
  });
});
