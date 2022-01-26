const customColor = {
  primary: '#05C4D2',
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
