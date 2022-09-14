/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#a55eea',
                'primary-hover': '#8854d0',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                rotate360: {
                    '100%': { transform: 'rotate(360deg)' },
                },
                movecircle: {
                    '40%': { transform: 'translateY(20px) translateX(-30px)' }
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                rotate360: 'rotate360 40s infinite linear',
                movecircle: 'movecircle 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;'
            }
        },
    },
    plugins: [],
};