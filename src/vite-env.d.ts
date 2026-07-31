/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STORE_DOMAIN: string;
  readonly PUBLIC_STOREFRONT_API_TOKEN: string;
  readonly PUBLIC_STORE_VERSION: string;
  readonly VITE_USE_MOCK_SHOPIFY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
