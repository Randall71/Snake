const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "gameBuildWebpack.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
}