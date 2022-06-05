module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    preflight: true,
  },
}
