// 

function test(callBack) {
    const seconds = 3

    setTimeout(() => {
        callBack(seconds)
    }, seconds * 1000)
    console.log('1. Test function is done')
}

test(seconds => {
    console.log(`2. Callback from test function comes after ${seconds} seconds`)
})