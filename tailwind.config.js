import { transform } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      animation: {       
        border: 'border-animation 4s infinite linear',
      },
      keyframes: {
        'border-animation': {
          '0%': {
            backgroundPosition: '100% 0, 0 0',
          },
          '50%': {
            backgroundPosition: '0 0, 100% 0',
          },
          '100%': {
            backgroundPosition: '100% 0, 0 0',
          },
        },
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(90deg, #6b46c1, #ffe578, #6b46c1)', // Purple gradient
      },


      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 0.5s steps(22), blink .5s infinite"
      }
    },
  },
  plugins: [
    
  ],
}

