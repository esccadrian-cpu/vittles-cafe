# Vittles Cafe

The Vittles Cafe website, built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Content

`menu.json` is the source of truth for all menu categories, items, descriptions, and prices. The page renders it through typed React components in `app/components/`.

The site is ready for Vercel's standard Next.js deployment and does not require environment variables.
