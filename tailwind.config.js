const customColor = {
  primary: '#ff0844',
  secondary: '#4bbcaf',
  'light-gray': '#f7f7f6',
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: customColor,
      zIndex: {
        '-1': '-1',
      },
      backgroundColor: (theme) => customColor,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
