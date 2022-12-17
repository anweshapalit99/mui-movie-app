const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: "3000",
    static: ["./dist"],
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
