import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";
import prettier from "eslint-config-prettier";
import yml from "eslint-plugin-yml";
import drupalGlobals from "../drupal-globals.json";

// Get the recommended configurations from the plugins.
const ymlRecommended = yml.configs["flat/recommended"];

// Set up common variables.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new FlatCompat instance.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Set up the config.
const config = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
      ...drupalGlobals.core,
    },
  },
  rules: {
    "prettier/prettier": "error",
    "consistent-return": ["off"],
    "no-underscore-dangle": ["off"],
    "max-nested-callbacks": ["warn", 3],
    "import/no-mutable-exports": ["warn"],
    "no-plusplus": [
      "warn",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-param-reassign": ["off"],
    "no-prototype-builtins": ["off"],
    "valid-jsdoc": [
      "warn",
      {
        prefer: {
          returns: "return",
          property: "prop",
        },
        requireReturn: false,
      },
    ],
    "no-unused-vars": ["warn"],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } },
    ],
    "yml/indent": ["error", 2],
  },
};

export default [
  ...compat.extends("airbnb-base"),
  prettier,
  ymlRecommended,
  config,
];
