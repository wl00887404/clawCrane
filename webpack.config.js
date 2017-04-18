var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true)
        }
    }),
    new ExtractTextPlugin("styles.css")
];
if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.DedupePlugin())
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
    plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015', 'react'],
                "plugins": ["transform-object-rest-spread"]
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "sass-loader"])
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src/sass/')]
    },
    resolve: {
        root: [
            path.resolve('./src/'),
        ],
        extensions: ['', '.js']
    },
    plugins: plugins
};
