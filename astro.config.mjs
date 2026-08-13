// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sanakhademi.com',

  // Astro scopes component <style> blocks by default. Keep it that way — the v1
  // site's worst CSS bug was three conflicting global `.cta-button` rules whose
  // winner depended on import order. Shared values belong in src/styles/tokens.css.
  scopedStyleStrategy: 'attribute',

  build: {
    // Emit stylesheets as files rather than inlining, so they cache across pages.
    inlineStylesheets: 'never',
  },
});
