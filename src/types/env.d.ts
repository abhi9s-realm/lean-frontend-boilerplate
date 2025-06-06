/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENV: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_ENABLE_DEBUG: string;
  readonly VITE_DEV_PORT?: string;
  readonly VITE_DEV_HOST?: string;
  readonly VITE_CACHE_TTL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
