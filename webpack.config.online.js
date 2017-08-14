const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const entries = {
    home: "./src/components/index/app.js",
};

module.exports = {
    entry  : entries,
    output : {
        filename : "[name]-[chunkhash:6].bundle.js",
        path     : path.join(__dirname, "dist/js/"),
    },
    module: {
        loaders: [
            {
                test    : /\.js[x]?$/,
                exclude : /node_modules/,
                loader  : "es3ify!babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"
            },
            {
                test   : /\.scss$/,
                loader : ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test   : /\.css$/,
                loader : ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(["NODE_ENV"]),
        new ExtractTextPlugin("../css/[name]-[chunkhash:6].bundle.css"),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
