const resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    babel = require('rollup-plugin-babel'),
    typescript = require('rollup-plugin-typescript');

const pkg = require('./package.json');

module.exports = [
    // browser-friendly UMD build
    {
        input: './src/index.ts',
        output: {
            file: pkg.browser,
            format: 'umd',
            name: 'viewjs.validation',
            globals: {
                '@viewjs/view': 'viewjs.view',
                '@viewjs/html': 'viewjs.html',
                '@viewjs/utils': 'viewjs.utils'
            }
        },
        external: ['@viewjs/view', '@viewjs/html', '@viewjs/utils'],
        plugins: [
            typescript({
                typescript: require('typescript'),
                declration: false
            }),
            resolve(),
            commonjs(),
            babel({
                exclude: ['node_modules/**']
            })
        ]
    }
];