module.exports = {
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
      './node_modules/flowbite/**/*.js'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      'soulmaze': ['MADE-Soulmaze'],
      'soulmaze-outline': ['MADE-Soulmaze-Outline']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
