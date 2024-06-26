import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.scss","resources/js/index.js", "resources/js/app.js"], // add scss file
            refresh: true,
        }),
    ],
});
