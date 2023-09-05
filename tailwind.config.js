/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        standard: '#7000FF',
        light: '#6E01F8',
        dark: '#380C7E',
        deep: '#1F0F39',
        deepest: '#11002D',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#E9E2F3'
      },
      boxShadow: {
        banner: '0 0 16px 8px rgba(143, 0, 255, 0.8)'
      },
      fontWeight: {
        900: 900,
        700: 700,
        500: 500,
        400: 400,
        300: 300
      },
      backgroundImage: {
        homeIntro: "url('/public/images/carousel.png')",
        homeIntroSm: "url('/public/images/mobile/carousel_mobile.png')",
        homeBanner: "url('/public/images/home_background.png')",
        homeDiane: "url('/public/images/diane_vertical.png')",
        homeFelix: "url('/public/images/felix_vertical.png')",
        homeKarina: "url('/public/images/karina_verticalgle.png')",
        homeVito: "url('/public/images/vito_vertical.png')",
        aboutUs: "url('/public/images/about_us.png')",
        aboutUsSm: "url('/public/images/mobile/about_us_mobile.png')"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1296px',
      fsFix: { min: '1024px', max: '1919px' }
    },
    container: {
      center: true,
      padding: '12px'
    },
    fontFamily: {
      shrik: ['Shrikhand', 'cursive'],
      saira: ['Saira Extra Condensed', 'sans-serif']
    }
  },
  plugins: []
}
