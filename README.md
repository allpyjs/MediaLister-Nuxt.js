
## Setup

Make sure to install dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

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
