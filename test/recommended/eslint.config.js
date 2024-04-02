import drupalContrib from "../../dist/es/index.js";

const recommended = drupalContrib.configs["flat/recommended"];

const config = {
  plugins: {
    recommended,
  },
};

export default [
  config,
  {
    files: ["*.js"],
  },
];
