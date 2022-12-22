const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./subfolder/first.txt","utf8")
const second = readFileSync("./subfolder/filetest/second.txt","utf8")

console.log(first, second)

writeFileSync(
    "./subfolder/result-sync.txt",
    `Here is the result: ${first}, ${second}`)

writeFileSync(
   "./subfolder/result-sync.txt",
    `This is Krishna's world.`,{flag: 'a'})
    
