import recommended from "./src/rc/recommended";
import jquery from "./src/rc/jquery";
import legacy from "./src/rc/legacy";
import passing from "./src/rc/passing";
import flatRecommended from "./src/flat/recommended";

export default {
  configs: {
    recommended,
    jquery,
    legacy,
    passing,
    "flat/recommended": flatRecommended,
  },
};
