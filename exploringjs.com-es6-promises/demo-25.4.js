function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE'), 100)
    })
}

asyncFunc()
.then(x => console.log('Result: ' + x))