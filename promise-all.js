/**
 * Promise.all() 实现
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

Promise.all([testA(), testB(), testC()]).then(result => {
    console.log(result, "---from old----");
})

const myPromise = {
    all (fns) {
        return new Promise(function (resolve, reject) {
            const result = [];
            for (let i = 0; i < fns.length; i++) {
                const element = fns[i];
                Promise.resolve(element).then(s => {
                    result.push(s)
                    if (result.length === fns.length) {
                        resolve(result);
                    }
                });
            }
        })
    }
}

myPromise.all([testA(), testB(), testC()]).then(result => {
    console.log(result, "---from new----");
})
