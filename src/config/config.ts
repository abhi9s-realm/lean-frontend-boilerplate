const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    appName: 'Lean Frontend (Dev)',
    debug: true,
    env: 'development'
  },
  production: {
    apiUrl: 'https://api.production.com',
    appName: 'Lean Frontend',
    debug: false,
    env: 'production'
  }
} as const;

// Extend ImportMetaEnv to add custom environment variables if needed
declare global {
  interface ImportMetaEnv {
    MODE: string;
    // add other env variables here if needed
  }
}

const mode = import.meta.env.MODE || 'development';
export const env = config[mode as keyof typeof config];
