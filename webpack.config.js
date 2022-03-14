const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintplugin = require('eslint-webpack-plugin')
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin')


const isProduction = process.env.MODE_ENV === 'production'
const publicUrl = '/my-shop'

const config = {
    entry: [
        './src/styling/index.scss',
        './src/index.tsx'
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        publicPath: publicUrl
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use:[{
                    loader: 'ts-loader',
                    options:{
                        translateOnly: true
                    }
                }]
            },
            {
                test: /\.c[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                },
                'scc-loader',
                { loader: 'sass-loader', options: { sourceMap: !isProduction}}
            ]
            },
            {
                test: /\.css$/i,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        }
                    },
                    'css-loader'
                ]
            },
        ],
        resolves: {
            extensions: [ '.tsx', '.ts', '.js', '.jsx', '.scss'],
            plugins:[
                new TsconfigPathsPlugin()
            ],
            modules: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/styling')
            ]
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.ProgressPlugin(),
            new webpack.DefinePlugin({
                'process.env.PUBLIC_URL' : JSON.stringify(publicUrl)
            }),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                publicUrl: publicUrl
            }),
            new ESLintplugin({
                extension: ['ts', 'tsx'],
                fix: false,
                failOnError: true,
                failOnWarning: false
            }),
            new ExtraWatchWebpackPlugin({
                dirs:[

                ]
            })
        ]
    }

};

module.export = () =>{
    if(isProduction){
        config.mode = 'production',
        config.devtool = 'source-map'
    }else{
        config.mode = 'development',
        config.devtool = 'inline-source-map'
    }
    return config
}
