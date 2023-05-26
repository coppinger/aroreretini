/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    safelist: [
        "bg-red-300",
        "text-red-950",
        "bg-blue-300",
        "text-blue-950",
        "bg-indigo-300",
        "text-indigo-950",
        "bg-purple-300",
        "text-purple-950",
        "bg-pink-300",
        "text-pink-950",
        "bg-emerald-300",
        "text-emerald-950",
        "bg-green-300",
        "text-green-950",
        "bg-teal-300",
        "text-teal-950",
        "bg-orange-300",
        "text-orange-950",
    ],
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
