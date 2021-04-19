/**
 * arrayLike
 * mapFn
 * thisArg
 */

Array.myFrom = function (arrayLike, mapFn, thisArg) {
    // 判断是否是数组
    if (!arrayLike instanceof Array) {
        return [];
    }
    // 数组浅拷贝
    const newArray = new Array();
    arrayLike.forEach(item => {
        newArray.push(item);
        if (mapFn) {
            if (thisArg) {
                mapFn.call(thisArg, item);
            } else {
                mapFn(item);
            }
        }
    })
    return newArray;
}

var arr = [1,2,3]

var arr2 = Array.myFrom([1,2,3], function (s) {
    console.log(s, this, "==Array.myFrom()==");
}, {a: 1});

var arr3 = Array.from([1,2,3], function (s) {
    console.log(s, this, "==Array.from()==");
}, {a: 1});

console.log(arr === arr2);
console.log(arr === arr3);
