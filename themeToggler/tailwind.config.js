// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // ✅ Enables dark mode with a class
    theme: {
        extend: {},
    },
    plugins: [],
};
