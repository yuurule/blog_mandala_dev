import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    server: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    adapter: netlify()
});
