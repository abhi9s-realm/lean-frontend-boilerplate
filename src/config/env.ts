// Environment variable configuration
// Type declarations moved to env.d.ts for proper global augmentation

export const env = {
  API_URL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  ENV: import.meta.env.VITE_ENV ?? 'development',
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'Lean Frontend Boilerplate',
  APP_VERSION: import.meta.env.VITE_APP_VERSION ?? '1.0.0',
  ENABLE_DEBUG: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  DEV_PORT: Number(import.meta.env.VITE_DEV_PORT ?? 5173),
  DEV_HOST: import.meta.env.VITE_DEV_HOST ?? 'localhost',
  CACHE_TTL: Number(import.meta.env.VITE_CACHE_TTL ?? 0),
} as const;

// Type for our environment
export type Env = typeof env;
