/** @type { import('@types/tailwindcss/tailwind-config').TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      colors: {
        primary: '#ffde53',
      },
      screens: {
        '2xl': '1550px',
      },
    },
  },
  important: '#tailwind-root',
  variants: {
    extend: {},
  },
  plugins: [],
};
