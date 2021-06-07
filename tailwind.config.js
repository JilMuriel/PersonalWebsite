// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: "20px",
        md: "29px",
        lg: "42px",
        mmd: "19px",
        msm: "20px",
        mlg: "32px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
