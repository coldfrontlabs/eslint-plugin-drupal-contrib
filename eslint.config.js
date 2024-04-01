import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

const files = ["*.js", "*.cjs"];
const ignores = ["dist/", "!.*.js", "!.*.mjs", "!.*.cjs"];

const config = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
    },
  },
};

export default [
  js.configs.recommended,
  prettier,
  config,
  {
    files,
  },
  {
    ignores,
  },
];
