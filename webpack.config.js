const Path = require('path');
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;


const babelOptions = {
    "presets": [
        "@babel/env"
    ],
    babelrc: false
};

module.exports = {
    entry: './lib/example/index.js',
    mode: 'none',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        filename: 'main.js',
        path: Path.join(process.cwd(), 'example'),
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            declaration: false
                        }
                    }
                }
            ]
        }, {
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: babelOptions
            }]
        }]
    },
    plugins: [
        new WebpackBundleSizeAnalyzerPlugin('plain-report2.txt')
    ],
    node: {
        console: false,
        global: false,
        process: false,
        __filename: "mock",
        __dirname: "mock",
        Buffer: false,
        setImmediate: false
    }
}