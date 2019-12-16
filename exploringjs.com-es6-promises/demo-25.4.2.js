// If a function returns a Promise then that Promise is like a blank into which the function will (usually) fill in its result, once it has computed it.

function asyncFunc() {
    const blank = []
    setTimeout(() => blank.push('DONE'), 5000)
    return blank
}

const blank = asyncFunc()

// Wait until the value has been filled in
setTimeout(() => {
    const x = blank[0]
    console.log('Result: ' +x)
}, 3000)

// With Promises, you don’t access the eventual value via [0] (as in line A), you use method then() and a callback.