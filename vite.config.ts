import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/FoodZero/',
    build: {
        outDir: 'dist',
    },
})
