// the plugin that will generate the HTML5 file
// with the emitted output bundle as a script tag
const HtmlWebpackPlugin = require('html-webpack-plugin')
// importing node path module
const path = require('path')

module.exports = {
    // this is where you can override the default entry point
    entry: './src/js/index.js',
    //this in where you can override the default output location
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    //dev server
    devServer: {
        contentBase: path.join(__dirname, './src'),
        compress: true,
        port: 9000
    },
    // watch options
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/
    },
    // this is how loaders are used
    module: {
        rules: [
            {
                // regex to run the loader on all files ending with .js only
                test: /\.js$/,
                // we don't wanna run the loader on node_modules contents
                exclude: /node_modules/,
                use: [
                    // specifying to use babel-loader
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    },

    // this is how plugins are used
    plugins: [
        new HtmlWebpackPlugin({
            // the HTML5 template to use
            template: './index.html',
            // the emitted html file name
            filename: './index.html',
        })
    ]
}