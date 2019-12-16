// The following code is a Promise-based version of the built-in Node.js function fs.readFile().
const fs = require('fs')
const readFile = fs.readFile

function readFilePromisified(filename) {
    return new Promise(
        function(resolve, reject) {
            readFile(filename, { encoding: 'utf8' }, (error, data) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(data)
                }
            })
        }
    )
}

readFilePromisified(process.argv[2])
.then(text => {
    console.log(text)
})
.catch(error => {
    console.log(error)
})