main()

async function main() {
    const x = await asyncFunc()
    console.log('Result: ' + x)
}

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE'), 100)
    })
}