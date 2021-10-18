const childProcess = require('child_process')
const path = require('path')

const filePath = {
    sad: path.join(__dirname, '../react15'),
    acc: path.join(__dirname, '../react16'),
    vac: path.join(__dirname, '../vue2'),
    mac: path.join(__dirname, '../vue2_c'),
    mad: path.join(__dirname, '../vue3')
}

// cd 子应用的目录 npm start 启动项目
function runChild() {
    Object.values(filePath).forEach(item => {
        childProcess.spawn(`cd ${item} && npm start`, {stdio: 'inherit', shell: true})
    })
}

runChild()