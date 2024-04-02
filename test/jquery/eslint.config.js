import drupalContrib from "../../dist/es/index.js";

const jquery = drupalContrib.configs["flat/jquery"];

const config = {
  plugins: {
    jquery,
  },
};

export default [
  config,
  {
    files: ["*.js"],
  },
];
