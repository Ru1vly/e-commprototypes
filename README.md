# e-commprototypes
E commerce prototypes for Kod Fikir Sanat.

## Turborepo + Next.js Monorepo

This repository contains a Turborepo monorepo with 5 Next.js applications.

### Structure

```
e-commprototypes/
├── apps/
│   ├── app1/    # Next.js app 1
│   ├── app2/    # Next.js app 2
│   ├── app3/    # Next.js app 3
│   ├── app4/    # Next.js app 4
│   └── app5/    # Next.js app 5
├── package.json
└── turbo.json
```

### Getting Started

Install dependencies:

```bash
npm install
```

### Available Commands

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps for production
- `npm run lint` - Lint all apps

### Individual Apps

Each app is a Next.js 16 application with:
- TypeScript
- Tailwind CSS v4
- ESLint
- App Router

To work with individual apps, navigate to their directory:

```bash
cd apps/app1
npm run dev
```
