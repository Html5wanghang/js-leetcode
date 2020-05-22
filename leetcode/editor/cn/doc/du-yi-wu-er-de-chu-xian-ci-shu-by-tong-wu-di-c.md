### 解题思路
- 利用reduce计算出每个元素在数组中出现的次数，并将它们合并成一个数组
- 保存数组的长度，然后对其进行去重
- 比较去重前后数组的长度，如果相等说明都是独一无二的，就返回 true；否则返回 false

```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    var newObj = arr.reduce(function (obj, item) {
        if (item in obj) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        return obj
    }, {})

    var newArr = []
    for (var k of Object.values(newObj)) {
        newArr.push(k)
    }

    var len = newArr.length
    var size = new Set(newArr).size
 
    if (len == size) {
        return true
    } else {
        return false
    }
};
```
