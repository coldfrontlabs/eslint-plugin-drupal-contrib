"use strict";

var recommended = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:yml/recommended",
  ],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
    drupalTranslations: true,
    jQuery: true,
    _: true,
    Cookies: true,
    Backbone: true,
    Modernizr: true,
    loadjs: true,
    Popper: true,
    Shepherd: true,
    Sortable: true,
    once: true,
    CKEDITOR: true,
    CKEditor5: true,
    tabbable: true,
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

var jquery = {
  plugins: ["jquery"],
  rules: {
    "jquery/no-ajax": 0,
    "jquery/no-ajax-events": 2,
    "jquery/no-animate": 0,
    "jquery/no-attr": 0,
    "jquery/no-bind": 2,
    "jquery/no-class": 0,
    "jquery/no-clone": 0,
    "jquery/no-closest": 0,
    "jquery/no-css": 0,
    "jquery/no-data": 0,
    "jquery/no-deferred": 0,
    "jquery/no-delegate": 2,
    "jquery/no-each": 0,
    "jquery/no-extend": 0,
    "jquery/no-fade": 0,
    "jquery/no-filter": 0,
    "jquery/no-find": 0,
    "jquery/no-global-eval": 2,
    "jquery/no-grep": 2,
    "jquery/no-has": 0,
    "jquery/no-hide": 0,
    "jquery/no-html": 0,
    "jquery/no-in-array": 0,
    "jquery/no-is-array": 0,
    "jquery/no-is-function": 2,
    "jquery/no-is": 0,
    "jquery/no-load": 2,
    "jquery/no-map": 2,
    "jquery/no-merge": 2,
    "jquery/no-param": 2,
    "jquery/no-parent": 0,
    "jquery/no-parents": 0,
    "jquery/no-parse-html": 0,
    "jquery/no-prop": 0,
    "jquery/no-proxy": 0,
    "jquery/no-ready": 0,
    "jquery/no-serialize": 0,
    "jquery/no-show": 0,
    "jquery/no-size": 2,
    "jquery/no-sizzle": 0,
    "jquery/no-slide": 0,
    "jquery/no-submit": 2,
    "jquery/no-text": 2,
    "jquery/no-toggle": 0,
    "jquery/no-trigger": 0,
    "jquery/no-trim": 2,
    "jquery/no-val": 2,
    "jquery/no-when": 0,
    "jquery/no-wrap": 0,
  },
};

var legacy = {
  extends: "eslint:recommended",
  root: true,
  env: {
    browser: true,
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
    drupalTranslations: true,
    domready: true,
    jQuery: true,
    _: true,
    matchMedia: true,
    Backbone: true,
    Modernizr: true,
    CKEDITOR: true,
  },
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "block-scoped-var": "error",
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "comma-dangle": ["error", "never"],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    curly: ["error", "all"],
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": [
      "error",
      { beforeBlockComment: true, afterBlockComment: false },
    ],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-parens": ["error", "functions"],
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-with": "error",
    "object-curly-spacing": ["error", "never"],
    "one-var": ["error", "never"],
    "quote-props": ["error", "consistent-as-needed"],
    quotes: ["error", "single", "avoid-escape"],
    semi: ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" },
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": ["error", "always"],
    strict: ["error", "function"],
    yoda: ["error", "never"],
    "max-nested-callbacks": ["warn", 3],
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
  },
};

var passing = {
  extends: [
    "plugin:drupal-contrib/recommended",
    "plugin:drupal-contrib/jquery",
  ],
  rules: {
    "no-shadow": "off",
    "no-new": "off",
    "no-continue": "off",
    "new-cap": "off",
    "max-len": "off",
    "default-case": "off",
    "default-param-last": "off",
    "prefer-destructuring": "off",
    "prefer-regex-literals": "off",
    "import/named": "off",
    "import/no-import-module-exports": "off",
  },
};

var index = {
  configs: {
    recommended,
    jquery,
    legacy,
    passing,
  },
};

module.exports = index;
