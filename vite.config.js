import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { ghPages } from 'vite-plugin-gh-pages';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      // ghPages plugin options go here
      // for example:
      domain: 'oleksandr-maly.github.io/CRM-Passenger-transportation//'
      // or
      // cname: '<custom-domain-name>.com'
    })
  ],
  build: {
    base: '/CRM-Passenger-transportation/'
  },
})
