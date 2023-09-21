const formats = ["cjs", "es"];

module.exports = () => {
  return {
    input: "index.js",
    output: formats.map((format) => ({
      file: `dist/${format}/index.js`,
      format,
    })),
  };
};
