export default {
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
