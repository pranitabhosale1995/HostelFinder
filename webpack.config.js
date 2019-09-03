const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");



module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = {};
  config.mode = argv.mode;


  config.entry = [path.join(__dirname, "/src/index.js")];
  config.output = {
    path: path.join(__dirname, "/dist"),
    filename: isProd ? "[name].[hash].js" : "[name].js"
  };

  config.resolve = {
    alias: {
      appRoot: path.join(__dirname, "/src")
    },
    extensions: ['*', '.js', '.jsx']
  };

  config.module = {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    }
    ]
  };


  config.plugins = [];

  if (isProd) {
    config.devtool = false;

    config.plugins.push(
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/HTML_TEMPLATE/index.html"),
        minify: {
          collapseWhitespace: true,
          minifyCSS: true
        },
      })
    );
  } else {
    config.devtool = "eval";

    config.plugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/HTML_TEMPLATE/index.html"),
        minify: {
          collapseWhitespace: false,
          minifyCSS: true
        },
      }),
    );
  }

  config.plugins.push(
    new CopyWebpackPlugin(
      [{
        from: path.join(__dirname, "/HTML_TEMPLATE")
      }], {
        ignore: ["*.html", "service-worker.js"]
      }
    )
  );

  config.devServer = {
    port: 3004,
    stats: "minimal"
  };



  return config;
};