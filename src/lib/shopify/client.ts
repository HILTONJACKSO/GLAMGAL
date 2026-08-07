interface ShopifyFetchOptions {
  query: string;
  variables?: Record<string, any>;
}

export async function shopifyFetch<T>({ query, variables }: ShopifyFetchOptions): Promise<T> {
  let domain = import.meta.env.VITE_PUBLIC_STORE_DOMAIN || import.meta.env.PUBLIC_STORE_DOMAIN || '';
  let storefrontToken = import.meta.env.VITE_PUBLIC_STOREFRONT_API_TOKEN || import.meta.env.PUBLIC_STOREFRONT_API_TOKEN || '';
  const apiVersion = import.meta.env.VITE_PUBLIC_STORE_VERSION || import.meta.env.PUBLIC_STORE_VERSION || '2024-07';

  if (typeof window !== 'undefined' && (!domain || !storefrontToken)) {
    try {
      const saved = localStorage.getItem('glamgal_shopify_credentials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.domain && parsed.token) {
          domain = parsed.domain;
          storefrontToken = parsed.token;
        }
      }
    } catch (e) {
      // ignore
    }
  }

  if (!domain || !storefrontToken) {
    throw new Error('Shopify credentials missing in environment.');
  }

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API HTTP Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    if (json.errors) {
      throw new Error(json.errors.map((e: { message: string }) => e.message).join('\n'));
    }

    return json.data as T;
  } catch (error) {
    console.error('Shopify GraphQL Request Failed:', error);
    throw error;
  }
}
