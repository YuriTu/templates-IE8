const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

const entries = {
    home: "./src/components/index/app.js",
};
module.exports = {
    entry  : entries,
    output : {
        filename   : "[name].bundle.js",
        path       : path.resolve(__dirname, "dist/js/"),
        publicPath : "http://localhost:9001/dist/js/"
    },
    module: {
        loaders: [
            {
                test   : /\.scss$/,
                loader : "style-loader!css-loader!sass-loader"
            },
            {
                test   : /\.css$/,
                loader : "style-loader!css-loader"
            },
            {
                test   : /\.(png|jpg)$/,
                loader : "url-loader?limit=8192"
            },
            {
                test    : /\.js[x]?$/,
                exclude : /node_modules/,
                loader  : "react-hot-loader!babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"
            }
        ]
    },
    devtool : "cheap-module-eval-source-map",
    plugins : [
        new DashboardPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        // hot    : true,
        // inline : true,
        proxy  : {
            "/api/*": {
                target       : "http://develop.com",
                changeOrigin : true,
                pathRewrite  : {
                    "^/api": ""
                }
            }
        },
        headers: {
            "Access-Control-Allow-Origin"  : "*",
            "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers" : "X-Requested-With, content-type, Authorization"
        }
    }

};
