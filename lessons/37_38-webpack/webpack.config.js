const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //context: 'src',
  mode: "development",
  entry: {
    main: "./src/main.js",
    contacts: "./src/components/Contacts/Contacts.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpeg|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundler.js",
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new HTMLWebpackPlugin({
      filename: "contacts.html",
      template: "./public/contacts.html",
      chunks: ["contacts"],
    }),
    new MiniCssExtractPlugin(),
  ],
  target: "web",
  resolve: {
    extensions: [".js", ".ts"],
  },
};
