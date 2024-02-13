/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        darkOrange: '#CC742D',
        lightOrange: '#C78D5E',
        darkBlue: '#223',
        midBlue: '#37374E',
        lightBlue: '#ABABE4'
      },
      transitionProperty: {
        margin: 'margin',
        hamburgerButton: 'transform, margin',
      },
      spacing: {
        headerHeight: 'var(--header-height, 0px)',
        pageHeight: 'calc(100vh - var(--header-height, 0px))'
      },
    },
  },
  plugins: [],
}
