const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.[contenthash:8].js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(mp3|m4a)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "songs",
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "../src/stylesheet"),
      "@img": path.resolve(__dirname, "../src/images"),
      "@": path.resolve(__dirname, "../src"),
    },
    modules: ["node_modules", path.resolve(__dirname, "../src")],
    extensions: [".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      title: "Setting up webpack 4",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
