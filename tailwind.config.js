/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
      hero: "60% 40% 30% 70%/60% 30% 70% 40%"
    },
    extend: {
      backgroundImage:{
        dot: "url(./assets/dot.svg)",
        hero: "url(./assets/hero.jpg)"},
        animation: {
          typewriter: 'typewriter 5s steps(48) forwards',
          caret: 'typewriter 5s steps(48) forwards, blink 2s steps(48) infinite',
          morph: "morph 8s ease-in-out infinite",
          fadeOut: "5s normal forwards running fadeIn",
          fadeOutDelay: "10s normal forwards running fadeIn"
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
          morph:{
            '0%': {
              borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
            },
            '50%': {
              borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
            },
            '100%': {
              borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
            }
          },
          fadeIn:{
            from:{
              opacity:"1"
            },
            to:{
              opacity:"0"
            }
          }
        },
    },
    
  },
  plugins: [],
}

