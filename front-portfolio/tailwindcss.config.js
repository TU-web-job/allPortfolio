const { keyframes } = require("framer-motion");
const { extend } = require("leaflet");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    extend: {
        keyframes:{
            'fade-in': {
                '0%': { opacity: 0 },
                '100%' : { opacity: 1 },
            }
        },
        animation: {
            'fade-in': 'fade-in 1s ease forwards',
        }
    }
}