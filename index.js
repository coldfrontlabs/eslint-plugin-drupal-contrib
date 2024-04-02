import recommended from "./src/rc/recommended";
import jquery from "./src/rc/jquery";
import legacy from "./src/rc/legacy";
import passing from "./src/rc/passing";
import flatRecommended from "./src/flat/recommended";
import flatJquery from "./src/flat/jquery";
import flatLegacy from "./src/flat/legacy";
import flatPassing from "./src/flat/passing";

export default {
  configs: {
    recommended,
    jquery,
    legacy,
    passing,
    "flat/recommended": flatRecommended,
    "flat/jquery": flatJquery,
    "flat/legacy": flatLegacy,
    "flat/passing": flatPassing,
  },
};
