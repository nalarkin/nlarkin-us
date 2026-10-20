import { defineConfig } from 'cypress';

export default defineConfig({
  expose: {
    site_url: 'http://localhost:3000',
    mobileViewportWidthBreakpoint: 414,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/**/*.spec.ts',
    supportFile: 'cypress/support/index.ts',
  },
});
