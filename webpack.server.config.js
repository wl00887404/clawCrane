var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

var plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(false)
            }
        }),
    ]
    /*if (process.env.NODE_ENV === 'production') {
        plugins.push(new webpack.optimize.DedupePlugin())
        plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
        plugins.push(new webpack.optimize.UglifyJsPlugin())
    }*/

module.exports = {

    entry: path.resolve(__dirname, './src/server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons',
    ]).reduce(function(ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
    }, {}),

    node: {
        __filename: true,
        __dirname: true
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
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    resolve: {
        root: [
            path.resolve('./src/'),
        ],
        extensions: ['', '.js']
    },
    plugins: plugins
}
