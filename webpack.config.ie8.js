const webpack = require("webpack");
const path = require("path");
const nodeModules = path.join(__dirname, "node_modules");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const entries = require("./entries").filter(item => !!item.jsPath).reduce((next, cur) => {
    next[cur.path] = cur.jsPath;
    return next;
}, {});

module.exports = {
    entry  : entries,
    output : {
        filename   : "[name].bundle.js",
        path       : path.join(__dirname, "dist/js/"),
    },
    module: {
        loaders : [
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
            }
        ]
    },
    externals: {
        "react"     : "React",
        "react-dom" : "ReactDOM",
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].css")
    ]
};
