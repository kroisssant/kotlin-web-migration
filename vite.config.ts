import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { Plugin } from "vite";

function ssrIgnoreCss(): Plugin {
  return {
    name: 'ssr-ignore-css',
    enforce: 'pre',
    resolveId(id, _importer, options) {
      if (options?.ssr && id.endsWith('.css')) return '\0virtual:empty-css'
    },
    load(id) {
      if (id === '\0virtual:empty-css') return 'export default {}'
    },
  }
}

const rescuiPackages = [
  '@rescui/button',
  '@rescui/card',
  '@rescui/checkbox',
  '@rescui/colors',
  '@rescui/icons',
  '@rescui/input',
  '@rescui/tab-list',
  '@rescui/tooltip',
  '@rescui/typography',
  '@rescui/ui-contexts',
]

// These are webpack CJS IIFE bundles — need esbuild pre-bundling for SSR ESM compatibility
const kwsUiFiles = [
  '@jetbrains/kotlin-web-site-ui/dist/footer.js',
  '@jetbrains/kotlin-web-site-ui/dist/header.js',
]

export default defineConfig({
  plugins: [
    ssrIgnoreCss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: [...rescuiPackages, '@jetbrains/kotlin-web-site-ui'],
    optimizeDeps: {
      include: kwsUiFiles,
      esbuildOptions: {
        loader: { '.css': 'empty' },
        plugins: [{
          name: 'externalize-react-and-context',
          setup(build) {
            build.onResolve({ filter: /^(react|react-dom|react\/jsx-runtime)$/ }, (args) => ({
              path: args.path,
              external: true,
            }));
          },
        }],
      },
    },
  },
});