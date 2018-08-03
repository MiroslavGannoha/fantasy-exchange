var webpack = require('webpack');
var path = require('path');

// variables
var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const extractCSS = new ExtractTextPlugin('[name].styles.[chunkhash].css');
const extractSCSS = new ExtractTextPlugin('[name].scss-styles.[chunkhash].css');

module.exports = {
    context: sourcePath,
    entry: {
        main: './main.tsx'
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ['module', 'browser', 'main'],
        alias: {
            app: path.resolve(__dirname, 'src/app/')
        }
    },
    module: {
        rules: [
            // .ts, .tsx
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, 'functions/'),
                use: isProduction
                    ? 'ts-loader'
                    : [
                          'babel-loader?plugins=react-hot-loader/babel',
                          'ts-loader'
                      ]
            },
            // scss
            {
                test: /\.(scss)$/,
                use: extractSCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                                // options: { alias: { '../img': '../public/img' } }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }
                )
            },
            {
                test: /\.css$/,
                use: extractCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                                // options: { alias: { '../img': '../public/img' } }
                            }
                        ]
                    }
                )
            },
            {
                test: /npm\.js$/,
                loader: 'string-replace-loader',
                include: path.resolve('node_modules/firebaseui/dist'),
                options: {
                    search: 'require(\'firebase/app\');',
                    replace: 'require(\'firebase/app\').default;',
                },
            },
            // static assets
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[hash].[ext]'
                }
            },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.png$/, use: 'url-loader?limit=10000' },
            { test: /\.ico$/, use: 'url-loader?limit=10000' },
            { test: /\.jpg$/, use: 'file-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new WebpackCleanupPlugin(),
        extractSCSS,
        extractCSS,
        // new ExtractTextPlugin({
        //     filename: 'styles.css',
        //     disable: !isProduction
        // }),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal'
    },
    devtool: 'cheap-module-eval-source-map',
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
};
