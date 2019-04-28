const path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "index.js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "lib")
  },
  resolve: {
    extensions: [".js", ".ts"]
  }
};
