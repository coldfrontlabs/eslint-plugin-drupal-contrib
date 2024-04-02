import jquery from "./jquery";
import recommended from "./recommended";

// Set up the config.
const config = {
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

export default [recommended, jquery, config];
