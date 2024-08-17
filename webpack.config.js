// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    homePage: "./src/index.js",
    newFencer: "./src/fencers.js",
    newBout: "./src/bouts.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [
      "./src/index.html",
      // "./src/new-fencer.html",
      // "./src/new-bout.html",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["homePage"],
    }),
    new HtmlWebpackPlugin({
      filename: "new-fencer.html",
      template: "./src/new-fencer.html",
      chunks: ["newFencer"],
    }),
    new HtmlWebpackPlugin({
      filename: "new-bout.html",
      template: "./src/new-bout.html",
      chunks: ["newBout"],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
