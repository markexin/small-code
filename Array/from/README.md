## Array.from()

> Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

### 语法

```javascript
Array.from(arrayLike[, mapFn[, thisArg]])
```

### 解释
1. arrayLike

想要转换成数组的伪数组对象或可迭代对象。

2. mapFn

如果指定了该参数，新数组中的每个元素会执行该回调函数。

3. thisArg

可选参数，执行回调函数 mapFn 时 this 对象。
