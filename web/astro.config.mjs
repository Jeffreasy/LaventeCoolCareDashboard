import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [react({
        // Enable React for interactive islands
        include: ['**/components/**/*'],
    }), tailwind()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    vite: {
        optimizeDeps: {
            exclude: ['convex'],
        },
    },
});