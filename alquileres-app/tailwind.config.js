/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-light': 'var(--color-neutral-light)',
        'neutral-primary': 'var(--color-neutral-primary)',
        'neutral-secondary': 'var(--color-neutral-secondary)',
        'red-primary': 'var(--color-red-primary)',
        'red-secondary': 'var(--color-red-secondary)',
      }
    },
  },
  plugins: [],
}
