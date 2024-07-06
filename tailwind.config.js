/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-theme': '#6061F6',
        'text-color': '#1B0E5B',
        'grey-text-color': '#C3C3C3',
        'grey-color': '#F3F4F6',
        'border-color': '#B8B8B8',
      },
      borderRadius: {
        'main-theme': '12px',
      },
      width: {
        menubar: '86%',
      },

      fontFamily: {
        ZhankuFont: 'ZhankuFont',
        Zyfht: 'Zyfht',
      },
    },
  },
  plugins: [],
};
