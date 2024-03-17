/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        dot: "url(./assets/dot.svg)"},
        animation: {
          typewriter: 'typewriter 5s steps(50) forwards',
          caret: 'typewriter 5s steps(50) forwards, blink 2s steps(50) infinite',
        },
        keyframes: {
          typewriter: {
            to: {
              left: '100%',
            },
          },
          blink: {
            '0%': {
              opacity: '0',
            },
            '25%': {
              opacity: '1',
            },
            '50%': {
              opacity: '0',
            },
            '75%': {
              opacity: '1',
            },
            '100%': {
              opacity: '0',
            },
          },
          blinkSlow: {
            '0%': {
              opacity: '0',
            },
            '25%': {
              opacity: '1',
            },
            '50%': {
              opacity: '1',
            },
            '75%': {
              opacity: '0',
            },
            '100%': {
              opacity: '0',
            },
          },
        },
    },
    
  },
  plugins: [],
}

