import json from "@rollup/plugin-json";

const formats = ["cjs", "es"];

export default () => {
  return {
    input: "index.js",
    output: formats.map((format) => ({
      file: `dist/${format}/index.js`,
      format,
    })),
    plugins: [json()],
    external: [
      "url",
      "path",
      "@eslint/eslintrc",
      "globals",
      "eslint-plugin-yml",
      "eslint-config-prettier",
    ],
  };
};
