const pkg = require("./package.json");
const deps = Object.keys(pkg.dependencies || {});

export default {
  input: "index",
  external: deps,
  output: {
    extend: true,
    file: `build/${pkg.name}.js`,
    format: "umd",
    globals: deps.reduce((p, v) => (p[v] = "d3", p), {}),
    name: "d3"
  }
};
