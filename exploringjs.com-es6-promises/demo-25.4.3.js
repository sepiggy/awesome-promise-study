// Another way to view a Promise is as an object that emits events.

function asyncFunc() {
    const eventEmitter = { success: [] }
    setTimeout(() => {
        for (const handler of eventEmitter.success) {
            handler('DONE')
        }
    }, 100)
    return eventEmitter
}

asyncFunc().success.push(x => console.log('Result: ' + x))