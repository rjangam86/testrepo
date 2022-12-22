const path = require ( 'path')

console.log(path.sep)

const filePath = path. join('/', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename(filePath)

console.log(`Base file name is : ${base}`)

const absolute = path.resolve(__dirname, 'subfolder', 'test.txt')
console.log(absolute)