const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
    const config = {
        mode: "development",
        entry: {
            "main": "./src/index.tsx"
        },
        output: {
            filename: "[name].[chunkhash].js",
            path: path.join(__dirname, "/dist")
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                { test: /\.(ts|tsx)?$/, include: /src/, use: "awesome-typescript-loader" },
                { test: /\.(js|jsx)$/, include: /src/, loader: require.resolve("babel-loader") }
            ]
        },
        devServer: {
            contentBase: "./dist",
            historyApiFallback: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            },
            runtimeChunk: {
                name: "manifest"
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Hello React",
                template: "index.html"
            }),
            new webpack.HashedModuleIdsPlugin({
                hashFunction: "sha256"
            }),
            // new BundleAnalyzerPlugin()
        ]
    }

    return config;
}