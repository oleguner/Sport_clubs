module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)'
        }
      },
      backgroundColor: {
        skin: {
          'header-main': 'var(--color-header-main)',
          'header-inverted': 'var(--color-header-inverted)',
          'body-main': 'var(--color-body-main)',
          'body-inverted': 'var(--color-body-inverted)',
          'theme-toggle': '#218291',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
