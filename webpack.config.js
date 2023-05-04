const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {};
    if (isProd) {
        config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
    }
    return config;
};

const excludeSourceMap = () => {
    if (isProd) {
        return 'bundle.js';
    }
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    // entry: ['./js/index.js', './js/animation-galaxy-sphere.js', './style/style.scss'],
    entry: {
        index: './index.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/bundle.[contenthash].js'
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/style.[contenthash].css'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: excludeSourceMap(),
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'json'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },
        ],
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: true,
                            import: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    }
};