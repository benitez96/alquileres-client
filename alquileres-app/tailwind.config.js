/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': 'var(--color-light)',

        'dark-primary': 'var(--color-dark-primary)',
        'dark-secondary': 'var(--color-dark-secondary)',

        'red-primary': 'var(--color-red-primary)',
        'red-secondary': 'var(--color-red-secondary)',

        'neutral-lightest': 'var(--color-neutral-lightest)',
        'neutral-light': 'var(--color-neutral-light)',
        'neutral-dark': 'var(--color-neutral-dark)',
        'neutral-darkest': 'var(--color-neutral-darkest)',

        'uranus-base': 'var(--color-uranus-base)',

        'venus-base': 'var(--color-venus-base)',

        'nebula-lightest': 'var(--color-nebula-lightest)',
        'nebula-light': 'var(--color-nebula-light)',
        'nebula-dark': 'var(--color-nebula-dark)',
        'nebula-darkest': 'var(--color-nebula-darkest)',

      }
    },
  },
  plugins: [],
}
