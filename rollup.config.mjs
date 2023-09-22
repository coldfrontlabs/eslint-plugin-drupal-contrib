const formats = ["cjs", "es"];

export default () => {
  return {
    input: "index.js",
    output: formats.map((format) => ({
      file: `dist/${format}/index.js`,
      format,
    })),
  };
};
