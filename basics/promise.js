// 1. The TestCallback function is done
// 2. After it, the callback function runs
// 3. The Promise ends after the callback is done

function testCallback(callback) {
    const seconds = 10
    setTimeout(() => {
        callback(seconds)
    }, seconds * 1000);
}


function testPromiseFromCallbackFunction() {
    return new Promise((resolve, reject) => {
        testCallback(resolve)
        console.log('1. Test function with Callback done')
        console.log('2. Promise is waiting for the callback to end')
    })
}


const promise = testPromiseFromCallbackFunction()
promise.then(seconds => {
    console.log(`3. Promise is done after ${seconds} seconds`)
})
