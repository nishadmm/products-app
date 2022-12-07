/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '500px': '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      textColor: {
        primary: '#0790bd',
      },
      backgroundColor: {
        primary: '#0790bd',
        greenOne: '#00a233',
      },
      animation: {
        TopToBottom: 'toBottom 0.5s ease-in',
      },
      keyframes: {
        toBottom: {
          from: {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      fill: {
        primary: '#0790bd',
      },
    },
  },
  plugins: [],
};
