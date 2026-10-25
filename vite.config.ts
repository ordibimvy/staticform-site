import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: [
        /_framer-runtime\.js$/,
        /\/components\/[^/]+\/[^/]+\.js$/, // precompiled Framer bundles (lowercase filenames, so [A-Z] wouldn't match)
      ],
    }),
  ],
})
