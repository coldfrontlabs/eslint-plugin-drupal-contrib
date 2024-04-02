import drupalContrib from "../../dist/es/index.js";

const passing = drupalContrib.configs["flat/passing"];

const config = {
  plugins: {
    passing,
  },
};

export default [
  config,
  {
    files: ["*.js"],
  },
];
