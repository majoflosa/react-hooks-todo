const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    
    output: {
        path: path.resolve( __dirname, 'dist/js'),
        filename: 'main.js',
        publicPath: '/'
    },
    
    resolve: { 
        extensions: ['.js', '.jsx', '.json']
    },
    
    devtool: 'source-map',
    
    devServer: {
        contentBase: './dist',
        publicPath: '/js/',
        port: 8080,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true
    },
    
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({ filename: './dist/index.html' })
    ]
}
