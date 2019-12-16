// The following is a Promise-based function that performs an HTTP GET via the event-based XMLHttpRequest API

httpGet('http://www.baidu.com')
.then(function(value) {
    console.log('Contents: ' + value)
}, function(reasone) {
    console.log('Something went wrong', reasone)
})

function httpGet(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.response)
                } else {
                    reject(new Error(this.statusText))
                }
            }
            request.onerror = function () {
                reject(new Error(
                    'XMLHttpRequest Error: ' + this.statusText)
                )
            }
            request.open("GET", url)
            request.send()
        }
    )
}