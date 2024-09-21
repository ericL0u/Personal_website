import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Personal_website/',
  plugins: [react()]
})


// build and deploy on github
// npm run build
// npm run deploy

// github pages deployed