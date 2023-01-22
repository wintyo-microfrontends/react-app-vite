import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-app/',
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      formats: ['es'],
      entry: path.join(__dirname, 'src/index.tsx'),
      fileName: (format) => `index.${format}.js`
    }
  }
})
