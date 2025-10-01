/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        impacta1: '#044bab',
        impacta2: '#2e65af',
        impacta3: '#3c6cb3',
        impacta4: '#04079e',
        impacta5: '#255bac',
        impacta6: '#4a7abc',
        impacta7: '#3268bc',
        impacta8: '#0429a8',
        impacta9: '#044792',
        impacta10: '#0434ac',
        impacta11: '#0a1f33',
        impacta12: '#102A6C',
        greyhover: '#DDDDDD',
        bluehover: '#216FE0',
      },
    },
  },
  plugins: [],
}
