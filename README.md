# Medialister-Nuxt.js

This project demonstrates a Nuxt.js application that implements an infinite scrollable list using Vue 3, TypeScript, TanStack Query, and Faker.js for mock data generation.

## Project Structure
```
Medialister-Nuxt.js/
│
├── app.vue                         # Optional global wrapper for the app
│
├── mock-api.ts                     # Mock backend API using Faker
│
├── composables/                    # Nuxt composables directory
│   └── useInfiniteData.ts          # Infinite data fetching logic with TanStack Query
│
├── components/                     # Components directory
│   └── InfiniteList.vue            # Component for infinite scroll list
│
├── pages/                          # Nuxt pages directory
│   └── index.vue                   # Root page importing InfiniteList.vue
│
├── public/                         # Static assets (optional)
│
├── .nuxt/                          # Nuxt build files (generated on build)
│
├── node_modules/                   # Installed dependencies
│
├── nuxt.config.ts                  # Nuxt configuration file
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Lockfile for npm dependencies
│
└── README.md                       # Documentation for the project (optional)
```

## Key Features
- **Infinite Scroll**: Smoothly loads and displays up to 150,000 items dynamically.
- **Mock Data**: Uses Faker.js to simulate backend data for testing.
- **Pagination with TanStack Query**: Efficiently fetches and caches paginated data.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Nuxt.js Framework**: Provides server-side rendering and a powerful development environment.

## How to Run
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

## How It Works
### Backend Mock Data
The `mock-api.ts` file generates fake data using Faker.js and simulates paginated API responses.

### Data Fetching
The `useInfiniteData.ts` composable utilizes TanStack Query’s `useInfiniteQuery` to fetch paginated data dynamically.

### Infinite Scrolling
The `InfiniteList.vue` component listens to scroll events and fetches more data as the user scrolls near the bottom of the list.

### Sortable Column
The list allows sorting by the "Sort by Views" button, which can be toggled by the user.

### Scroll Position Persistence
Scroll position is saved and restored between sessions using `@vueuse/core`'s `useSessionStorage` composable.

## Dependencies
- **Vue 3**: Frontend framework.
- **Nuxt.js**: Server-side rendering and full-stack framework.
- **@tanstack/vue-query**: For data fetching and caching.
- **@faker-js/faker**: Mock data generation.
- **@vueuse/core**: Utilities for handling session storage and other features.
- **TypeScript**: Type-safe development.

