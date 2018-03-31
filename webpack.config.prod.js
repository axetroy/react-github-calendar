const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "react-github-calendar.jsx"),
  output: {
    path: path.join(__dirname, "lib"),
    filename: "react-github-calendar.js",
    libraryTarget: "umd"
  },
  externals: {
    react: "react",
    "prop-types": "prop-types"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "example")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    })
  ]
};
