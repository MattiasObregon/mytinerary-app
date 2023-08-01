/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe-ui': ['Segoe UI', 'sans-serif'],
      },
    }
  },
  variants: {},
  plugins: []
}