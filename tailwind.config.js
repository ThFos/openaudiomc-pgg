export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Το indigo του Tailwind γίνεται το μωβ του PGG Legacy
        indigo: {
          50:  '#f3edff',
          100: '#e6dbff',
          200: '#cdb8fb',
          300: '#b08df5',
          400: '#8f5ee9',
          500: '#6b2dd8',
          600: '#521eb8',
          700: '#421796',
          800: '#321172',
          900: '#230c50',
          950: '#170834',
        },
      },
    },
  },
};
