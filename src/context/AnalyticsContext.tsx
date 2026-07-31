import React, { createContext, useContext } from 'react';
import { Product } from '../types/shopify';

interface AnalyticsContextType {
  trackProductViewed: (product: Product) => void;
  trackAddToCart: (productTitle: string, variantId: string, price: string) => void;
  trackCheckoutStarted: (cartId: string, totalAmount: string) => void;
  trackSearchPerformed: (query: string, resultsCount: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackProductViewed = (product: Product) => {
    console.log('[Analytics] Product Viewed:', product.title, product.priceRange.minVariantPrice.amount);
    // Push to window.dataLayer / GA4 / Meta Pixel if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'USD',
        value: parseFloat(product.priceRange.minVariantPrice.amount),
        items: [{ item_id: product.id, item_name: product.title, item_category: product.category }]
      });
    }
  };

  const trackAddToCart = (productTitle: string, variantId: string, price: string) => {
    console.log('[Analytics] Added To Cart:', productTitle, price);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'add_to_cart', {
        currency: 'USD',
        value: parseFloat(price),
        items: [{ item_id: variantId, item_name: productTitle }]
      });
    }
  };

  const trackCheckoutStarted = (cartId: string, totalAmount: string) => {
    console.log('[Analytics] Checkout Started:', cartId, totalAmount);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: parseFloat(totalAmount)
      });
    }
  };

  const trackSearchPerformed = (query: string, resultsCount: number) => {
    console.log('[Analytics] Search Performed:', query, `Results: ${resultsCount}`);
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackProductViewed,
        trackAddToCart,
        trackCheckoutStarted,
        trackSearchPerformed
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
