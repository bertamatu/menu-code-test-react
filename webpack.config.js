const path = require('path');
// eslint-disable-next-line node/no-unpublished-require
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
});

module.exports = {
    entry: ['./src/App.tsx'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve),
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/public/webpack/'),
        filename: 'bundle.js',
    },
    plugins: [htmlPlugin],
};
