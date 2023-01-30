/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'second-bg': "url('../components/img/shahadat-rahman-BfrQnKBulYQ-unsplash-min.jpg')",
        'first-bg': "url('../components/img/farzad-p-xSl33Wxyc-unsplash-min.jpg')",
        'third-bg': "url('./components/img/marvin-meyer-SYTO3xs06fU-unsplash-min.jpg')",
      }
    },
  },
  plugins: [],
}
