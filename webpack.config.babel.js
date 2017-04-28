import path from "path";
import fs from "fs";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

let nodeModules = {};
fs
  .readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

export default [
  {
    name: "server",
    target: "node",
    entry: "./built/Main.js",
    output: {
      filename: "Main.js",
      path: path.resolve(__dirname, "built"),
      publicPath: "/"
    },
    externals: nodeModules,
    node: {
      __dirname: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["built"]),
      new CopyWebpackPlugin([
        {
          from: "src/resources",
          to: "built/static"
        },
        {
          from: "src/libs",
          to: "built/libs"
        }
      ])
    ]
  }
  //   {
  //     name: "client",
  //     entry: "./client/index.js",
  //     output: {
  //       filename: "client.js",
  //       path: path.resolve(__dirname, "dist")
  //     },
  //     module: {
  //       rules: [
  //         {
  //           test: /\.js$/,
  //           exclude: /(node_modules)/,
  //           use: {
  //             loader: "babel-loader"
  //           }
  //         }
  //       ]
  //     }
  //   }
];
