const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/App.jsx",
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['syle-loader', 'css-loader']
      }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "/client/dist")
    },
    compress: true,
    port: 8080
  }
}