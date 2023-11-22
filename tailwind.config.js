/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Deluxe: ['Poppins, Arial, sans-serif'],
      Text: ["Playfair Display, Arial, serif"],
      Text2: ["Poppins, Arial, sans-serif"],

    },
    extend: {
      backgroundImage: {
        'denizImage': "url('./img/bg_1.jpg.webp')",
        'istirahetImage': "url('./img/bg_2.jpg.webp')",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // fadeIn animasyonunu tanımla
      }
    },
  },
  plugins: [
    // Animasyon eklentisini eklemeyi unutmayın
    require('tailwindcss-animatecss'),
  ],
}