const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: ["./src/index.js"],
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.[hash].js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-hot-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "Products",
        template: "public/index.html"
      })
    ],
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "productsapp"),
      port: 3000,
      historyApiFallback: true,
      hot: true
    }
  };
};
