module.exports = {
  presets: [
    "@babel/preset-env",
    //   ["@babel/preset-env", { targets: { node: "20" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    //   { runtime: "automatic" },
  ],
  //   presets: [
  //     "@babel/preset-env",
  //     ["@babel/preset-react", { runtime: "automatic" }],
  //   ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-runtime",
      ],
    },
  },
};
