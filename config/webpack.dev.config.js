const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const path = require("path");

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.[contenthash:8].js",
    publicPath: "/",
  },
});
