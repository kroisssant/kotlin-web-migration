# Kotlin Homepage: React Router 7 Migration

Migration of the kotlinlang.org homepage from a legacy webpack + Flask + JSX stack to **React Router 7 Framework Mode** with full **Server-Side Rendering (SSR)**, TypeScript, and Vite.

## Stack

- **React Router 7** (Framework Mode, SSR enabled)
- **React 18.3** + **TypeScript**
- **Vite** with `sass-embedded` for SCSS
- **RESCUI** component library (`@rescui/*`): JetBrains' internal UI kit
- `@jetbrains/kotlin-web-site-ui`: shared Header and Footer components

## Project Structure

Everything lives under `app/`. The entry points are `root.tsx` (global layout, head tags, Header/Footer) and `routes.ts` (maps `/` to `home.tsx`).

The actual page content is in `page/index/`, split into 5 sections: hero, latest posts, why kotlin, usage highlights, and the CTA. Each section is a folder with its own component, styles, and data file: nothing shared between them.

Shared things like the `<Section>`/`<Container>` layout helpers and the Header/Footer wrappers live in `components/`. Global SCSS is in `css/`. Static assets (fonts, images) are in `public/`.


## Running the Project

```bash
yarn install
yarn dev       # Development server at http://localhost:5173
yarn build     # Production build → build/client/ + build/server/
yarn start     # Serve the production build
```

### Docker

```bash
docker build -t kotlin-homepage .
docker run -p 3000:3000 kotlin-homepage
```


## RESCUI & Library Notes

Getting RESCUI to work with Vite SSR was the main challenge.

- **CSS imports in SSR**: `@rescui/*` packages import CSS at the module level, which breaks Node.js during SSR. Fixed by adding all `@rescui/*` packages to `ssr.noExternal` so Vite bundles them through esbuild instead of letting Node resolve them directly.

- **`@rescui/ui-contexts` must be in `ssr.noExternal`**: Even though it has no CSS, it needs to be bundled. `@jetbrains/kotlin-web-site-ui` uses `require('@rescui/ui-contexts')` internally, and when kept external, rollup transforms that into `import require$$1 from '@rescui/ui-contexts'` in the production bundle. Since `@rescui/ui-contexts` is ESM-only with no default export, this crashes `yarn start` with `SyntaxError: does not provide an export named 'default'`. Bundling it inline avoids the external import entirely.

- **`@jetbrains/kotlin-web-site-ui` is a CJS webpack bundle**: The Header and Footer come from this library. It uses `require()` internally, which Vite handles by pre-bundling it through esbuild during dev and inlining it via rollup in production. The Footer uses a hardcoded CSS class (`ktl-footer-module_footer-dark-theme_1lVqh`) to force dark styling on SSR, since `ThemeProvider` context doesn't propagate into the pre-bundled CJS module. If this library is updated, that hashed class name may change.

