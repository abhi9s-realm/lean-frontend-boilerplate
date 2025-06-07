# Lean React + Vite + TypeScript Boilerplate

A modern, production-ready boilerplate for React applications with TypeScript, featuring a clean architecture, comprehensive error handling, and modular styling.

## Features

- 🚀 React 18 + Vite + TypeScript
- 🎨 CSS Modules with dark mode support
- 🛠️ ESLint & Prettier integration
- ✅ Vitest & Testing Library setup
- 🔄 Mock API with json-server
- 🌐 Environment configuration
- 🎯 Error boundaries & loading states
- 📱 Responsive design
- 🎭 Light/Dark theme support
- 🧩 Modular component architecture

## Quick Start

```bash
# Clone this template (replace <my-app> with your app's folder name)
npx degit <your-github-username>/<repo-name> <my-app>
cd <my-app>
npm install
npm run dev
```

## Folder Structure

```
├── public/              # Static assets
│   └── favicon.svg
├── mock/               # Mock API data
│   └── db.json
├── src/
│   ├── api/           # API integration services
│   ├── components/    # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   └── Loading.tsx
│   ├── config/        # App configuration
│   │   └── config.ts      # Environment-specific configuration
│   ├── hooks/         # Custom React hooks
│   │   └── useApi.ts
│   ├── pages/         # Application routes
│   │   ├── About.tsx
│   │   └── Home.tsx
│   ├── styles/        # Global & component styles
│   │   ├── global.css
│   │   └── *.module.css
│   ├── types/         # TypeScript definitions
│   │   ├── css.d.ts
│   │   └── env.d.ts
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Start development server with mock API
npm run dev

# Run tests
npm run test
npm run test:watch

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### Environment Variables

Configuration is managed through `src/config/config.ts` which provides environment-specific defaults and type-safe access to configuration values.

Available environment variables:
```env
# Application Settings
VITE_API_URL         # API endpoint URL
VITE_APP_NAME        # Application name
VITE_APP_VERSION     # Application version

# Development Settings
VITE_DEV_PORT       # Development server port
VITE_DEV_HOST       # Development server host
VITE_CACHE_TTL      # Cache time-to-live in seconds
```

All variables are optional and have sensible defaults defined in `config.ts`. The configuration automatically switches between development and production modes based on the build environment.

### ESLint & Prettier
Configuration is in `package.json` for simplicity:
- ESLint with React and TypeScript support
- Prettier for consistent code formatting
- Pre-configured rules for best practices

### Testing
- Vitest for unit and integration tests
- React Testing Library for component testing
- Jest DOM for DOM assertions

Example test:
```typescript
// src/components/__tests__/Loading.test.tsx
describe('Loading component', () => {
  it('renders with default props', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toHaveClass('medium');
  });

  it('renders with custom size and message', () => {
    render(<Loading size="small" message="Please wait" />);
    expect(screen.getByText('Please wait')).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toHaveClass('small');
  });
});

### Styling
- CSS Modules for component-scoped styles
- Global styles in `src/styles/global.css`
- Dark mode support using `prefers-color-scheme`
- CSS variables for theming