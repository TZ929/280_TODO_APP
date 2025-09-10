import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'	

export default defineConfig({
    base: "/280_TODO_APP/",
    plugins: [
        tailwindcss(),
    ],
});
