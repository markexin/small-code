/**
 * Promise.race() 实现过程
 */

// 示例展示
function testA () {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('I am testA');
        }, 1000)
    });
}

function testB () {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('I am testB');
        }, 2000)
    });
}

function testC () {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('I am testC');
        }, 3000)
    });
}

Promise.race([testA(), testB(), testC()]).then(result => {
    console.log(result, "---from old----");
})


const myPromise = {
    race(fns) {
        return new Promise(function (resolve) {
            for (let i = 0; i < fns.length; i++) {
                Promise.resolve(fns[i]).then(s => {
                    resolve(s);
                });
            }
        })
    }
}

myPromise.race([testA(), testB(), testC()]).then(result => {
    console.log(result, "---from new----");
})