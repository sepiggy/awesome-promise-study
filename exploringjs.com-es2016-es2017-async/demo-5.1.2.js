async function asyncFunc() {
    return 123
}

asyncFunc()
.then(x => console.log(x))

async function asyncFunc1() {
    throw new Error('Problem!')
}

asyncFunc1()
.catch(err => console.log(err))

