/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                glamour: ["Glamour", "serif"],
                apercu: ["ApercuPro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
