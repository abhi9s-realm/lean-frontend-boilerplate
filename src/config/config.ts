type Config = {
  apiUrl: string;
  appName: string;
  debug: boolean;
  env: 'development' | 'production';
  version: string;
  devPort: number;
  devHost: string;
  cacheTtl: number;
};

const config: Record<'development' | 'production', Config> = {
  development: {
    apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
    appName: import.meta.env.VITE_APP_NAME ?? 'Lean Frontend (Dev)',
    debug: true,
    env: 'development',
    version: import.meta.env.VITE_APP_VERSION ?? '1.0.0',
    devPort: Number(import.meta.env.VITE_DEV_PORT ?? 5173),
    devHost: import.meta.env.VITE_DEV_HOST ?? 'localhost',
    cacheTtl: Number(import.meta.env.VITE_CACHE_TTL ?? 0)
  },
  production: {
    apiUrl: import.meta.env.VITE_API_URL ?? 'https://api.production.com',
    appName: import.meta.env.VITE_APP_NAME ?? 'Lean Frontend',
    debug: false,
    env: 'production',
    version: import.meta.env.VITE_APP_VERSION ?? '1.0.0',
    devPort: Number(import.meta.env.VITE_DEV_PORT ?? 5173),
    devHost: import.meta.env.VITE_DEV_HOST ?? 'localhost',
    cacheTtl: Number(import.meta.env.VITE_CACHE_TTL ?? 3600)
  }
} as const;

const mode = import.meta.env.MODE || 'development';
export const env = config[mode as keyof typeof config];
