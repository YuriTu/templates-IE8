/**
 * Created by renren on 16/5/30.
 */

const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const nodeModules = path.join(__dirname, "node_modules");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 所有的入口文件注册到entriesForWebpack.js中
const entriesOrigin = require("./entries");
const entries = entriesOrigin.filter(item => !!item.jsPath).reduce((next, cur) => {
    next[cur.path] = cur.jsPath;
    return next;
}, {});

module.exports = {
    entry  : entries,
    output : {
        filename   : "[name]-[chunkhash:6].bundle.js",
        path       : path.join(__dirname, "dist/js/"),
    },
    module: {
        loaders : [
            {
                test    : /\.js[x]?$/,
                exclude : /node_modules/,
                loader  : `es3ify!babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react`
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
    externals: {
        "react"     : "React",
        "jquery"    : "jQuery",
        "react-dom" : "ReactDOM",
    },
    plugins: [
        new webpack.EnvironmentPlugin(["NODE_ENV"]),
        new ExtractTextPlugin("../css/[name]-[chunkhash:6].bundle.css"),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
