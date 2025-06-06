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
│   │   ├── config.ts
│   │   └── env.ts
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
Create `.env.development` and `.env.production` files:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Your App Name
VITE_ENABLE_DEBUG=true
```

### ESLint & Prettier
Configuration is in `package.json` for simplicity:
- ESLint with React and TypeScript support
- Prettier for consistent code formatting
- Pre-configured rules for best practices

### Testing
- Vitest for unit and integration tests
- React Testing Library for component testing
- Jest DOM for DOM assertions

### Styling
- CSS Modules for component-scoped styles
- Global styles in `src/styles/global.css`
- Dark mode support using `prefers-color-scheme`
- CSS variables for theming

---