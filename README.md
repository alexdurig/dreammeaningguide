
# DreamMeaningGuide

A calm, symbolic dream interpretation site built with [Astro](https://astro.build/).

**Live site:** [dreammeaningguide.site](https://dreammeaningguide.site)

Part of the [Meaning Atlas](https://themeaningatlas.com) network.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage with navigation cards |
| `/dream-symbols` | `src/pages/dream-symbols/index.astro` | Symbol categories + searchable list |
| `/dream-symbols/animals` | `src/pages/dream-symbols/animals/index.astro` | Animal symbols |
| `/dream-symbols/places` | `src/pages/dream-symbols/places/index.astro` | Place symbols |
| `/dream-symbols/emotions` | `src/pages/dream-symbols/emotions/index.astro` | Emotion symbols |
| `/dream-symbols/archetypes` | `src/pages/dream-symbols/archetypes/index.astro` | Archetype symbols |
| `/seer` | `src/pages/seer.astro` | Interactive oracle with typewriter reveal |
| `/journal` | `src/pages/journal.astro` | Dream journal with localStorage archive |
| `/sleep-tools-hub` | `src/pages/sleep-tools-hub.astro` | Affiliate product hub (Amazon + external) |
| `/about` | `src/pages/about.astro` | About page |
| `/api/symbols.json` | `src/pages/api/symbols.json.js` | JSON endpoint of all symbols |

## Components

| File | Purpose |
|---|---|
| `src/components/SiteNav.astro` | Sticky nav with affiliate disclosure |
| `src/components/SiteFooter.astro` | Footer with links + Amazon Associates notice |
| `src/layouts/BaseLayout.astro` | HTML shell with SEO meta, fonts, nav + footer |

## Setup

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Affiliate Notes

- Replace `"dreamguide-20"` in `sleep-tools-hub.astro` with your verified Amazon Associates tag
- External links use `rel="noopener noreferrer sponsored"` as required by FTC guidelines
- The SiteNav and SiteFooter both render the required affiliate disclosure automatically

## Content

Content stubs are scaffolded at:
- `src/content/dream-symbols/animals/*.md`
- `src/content/dream-symbols/places/*.md`
- `src/content/dream-symbols/emotions/*.md`
- `src/content/dream-symbols/archetypes/*.md`

Add individual `.md` files per symbol to power dynamic detail pages.


