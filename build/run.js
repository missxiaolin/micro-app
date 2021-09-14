const childProcess = require('child_process')
const path = require('path')

const filePath = {
    vue2: path.join(__dirname, '../vue2'),
    vue3: path.join(__dirname, '../vue3'),
    react: path.join(__dirname, '../h5')
}

// cd 子应用的目录 npm start 启动项目
function runChild() {
    Object.values(filePath).forEach(item => {
        childProcess.spawn(`cd ${item} && npm start`, {stdio: 'inherit', shell: true})
    })
}

runChild()