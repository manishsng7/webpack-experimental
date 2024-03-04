const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// const deps = require("./package.json").dependencies;

module.exports = {
  // entry point of our application
  entry: path.join(__dirname, "src", "index.js"),
  // output bundle into this folder
  // output: {
  //   publicPath: "http://localhost:8082/",
  //   path: path.resolve(__dirname, "dist"),
  // },

  //   Add the bundled js file to the HTML file
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "webpacksetup",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     home: "home@http://localhost:8080/remoteEntry.js",
    //   },
    //   exposes: {},
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: deps["react-dom"],
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  mode: "development",

  //Configure webpack to use babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          //Defining preset rules for babel
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
