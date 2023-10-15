/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
      hd: ['Cinzel Decorative', 'cursive'],
      utama: ['Lusitana', 'serif'],
      sty: ['Tangerine', 'cursive'],
    },
    colors:{
      'hitam': '#222831',
      'putih': '#EEEEEE',
      'primary': '#E4E4D0',
      'secondary': '#65451F'
    },
    keyframes: {
      wiggle: {
          '0%, 100%': {
              transform: 'rotate(-3deg)'
          },
          '50%': {
              transform: 'rotate(3deg)'
          },
      }
  },
  animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
  }
    },
  },
  plugins: [],
}

