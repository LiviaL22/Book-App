const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const stylesHandler = "style-loader";
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: ['./src/index.js', './src/css/style.css', './src/index.html'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundler.js"
    },
    devServer: {
        open: true,
        host: "localhost",
        static: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "find you book",
            template: "src/index.html"
        }),
    ],
    module: {
        rules: [{
                test: /\.js$/i,
                use: "babel-loader",

            },
            {
                test: /\.html$/i,
                use: "html-loader"

            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    mode: devMode ? "development" : "production",
}