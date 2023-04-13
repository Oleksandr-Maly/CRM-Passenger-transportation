import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import ghPages from 'vite-plugin-gh-pages';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  plugins: [react()],
})
