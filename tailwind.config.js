/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        textFamily: ['Roboto', 'sans-serif'],
      },
      colors:{
        primary:{
          DEFAULT:'#00875f',
          light: '#00B37E'
        },
        secondary:{
          white:'#ffffff',
          100:'#e1e1e6',
          300:'#c4c4cc',
          400:'#8d8d99',
          600:'#323238',
          700:'#29292e',
          800:'#202024',
          900:'#121214',
        },
        danger:{
          DEFAULT: '#F75A68'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
