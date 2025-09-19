import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1180px',
        },
      },
      fontSize: {
        'headingXL': ['50px', { lineHeight: '50px' }],
        'headingS': ['26px', { lineHeight: '26px' }],
        'bodyL': ['22px', { lineHeight: '22px' }],
        'bodyS': ['14px', { lineHeight: '20px' }],
        'button': ['16px', { lineHeight: '16px' }],
        'rating': ['50px', { lineHeight: '40px' }],
        'ratingLabel': ['22px', { lineHeight: 'normal' }],
        'cardTitle': ['16px', { lineHeight: '16px' }],
        'cardText': ['14px', { lineHeight: '20px' }],
      },
      colors: {
        'accent-primary': '#006fff',
        'dark-deep': '#000000',
        'white-pure': '#fdfeff',
        'blue-dark': '#0b042d',
        'grey-text': '#4d5c83',
        'light-grey': '#e7e7e7',
      },
      fontFamily: {
        'intro': ['Intro', 'sans-serif'],
        'gilroy': ['Gilroy', 'sans-serif'],
        'alexandria': ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config