/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STORE_DOMAIN: string;
  readonly PUBLIC_STORE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
