/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0078FF',
        navy: '#0B1F3A',
        'support-green': '#008377',
        'soft-blue': '#DDEDFF',
        'body-text': '#334155',
        'border-color': '#E2E8F0',
        'button-blue': '#005FCC',
      },
    },
  },
  plugins: [],
}
