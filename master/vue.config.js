const path = require('path')
const { name } = require('./package.json')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    lintOnSave: false,
}
