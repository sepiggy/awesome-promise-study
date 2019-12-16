const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'package.jsonx')

// With Node.js-style callbacks, reading a file asynchronously looks like this:
/*
fs.readFile(filePath,
function (error, text) {
    if (error) {
        console.error('Error while reading config file ' + error.message)
    } else {
        try {
            const obj = JSON.parse(text)
            console.log(JSON.stringify(obj, null, 4))
        } catch (e) {
            console.error('Invalid JSON in file')
        }
    }
})
*/

// With Promises, the same functionality is used like this:
readFilePromisified(filePath)
.then(function(text) {
    const obj = JSON.parse(text)
    console.log(JSON.stringify(obj, null, 4))
})
.catch(function(error) {
    console.error('An error occurred', error)
})

function readFilePromisified(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', (err, data)=> {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}