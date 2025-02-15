import { defineConfig } from 'vite';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        svelte(),
    ],
    optimizeDeps: {
        include: ["@inertiajs/svelte"],
    },
});