const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: ["file-loader"],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html"
        })
    ]
};