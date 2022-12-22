const {readFile, writeFile} = require("fs")

readFile("./subfolder/first.txt", "utf-8",(err, result) => {

    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile("./subfolder/filetest/second.txt", "utf-8",(err, result) => {

        if(err) {
            console.log(err)
            return
        }
        const second = result

        writeFile("./subfolder/result-async.txt",
            `This is the result : ${first} , ${second}`, (err, result) => {

                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)    
            })
    })
})