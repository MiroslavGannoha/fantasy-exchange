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
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractCSS = new ExtractTextPlugin('[name].styles.[chunkhash].css');
const extractSCSS = new ExtractTextPlugin('[name].scss-styles.[chunkhash].css');

module.exports = {
    context: sourcePath,
    entry: {
        main: ['react-hot-loader/patch', '@babel/polyfill', './main.tsx'],
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/',
        pathinfo: false
    },
    target: 'web',
    resolve: {
        extensions: [ '.mjs', '.js', '.ts', '.tsx'],
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
                include: sourcePath,
                exclude: /node_modules/,
                use: isProduction
                    ? 'babel-loader'
                    : ['react-hot-loader/webpack', 'babel-loader'],
            },
            // .mjs
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
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
            // css
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            // static assets
            {
                test: /\.(woff(2)?|ttf|eot|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]'
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
        runtimeChunk: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,      
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
        }),
        // new BundleAnalyzerPlugin(),

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
    devtool: 'cheap-module-eval-source-map'
};
