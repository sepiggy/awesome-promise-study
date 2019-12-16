// Let’s implement setTimeout() as the Promise-based function delay() (similar to Q.delay()).

// Using delay():
delay(5000)
.then(function() {
    console.log('5 seconds have passed!')
})

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms)
    })
}