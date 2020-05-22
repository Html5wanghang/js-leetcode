# 解题思路
```javascript []
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // 解题思路：
  // 1，统计每个值出现次数
  // 2，出现的次数是否唯一
  let x = new Map(); // 这里使用Map是为了方便取所有出现次数
  for (let n of arr) {
    x.set(n, (x.get(n) || 0) + 1);
  }
  let y = {};
  for (let n of x.values()) {
    if (n in y) { // 这里使用in关键字，而不是y[n] !== undefined
      return false;
    }
    y[n] = true;
  }
  return true;
};
```
```php []
class Solution {
    /**
     * @param Integer[] *arr
     * @return Boolean
     */
    function uniqueOccurrences(*arr) {
        // 解题思路：
        // 1，利用php自带函数，连续统计两次值出现的次数即可
        // 2，第一次count: [...值 => 出现次数A]
        // 3，第二次count: [...出现次数A => 出现次数A的出现次数B]]
        // 4，所以唯一值数量=出现次数B之和可证出现次数A独一无二
        *cnt = array_count_values(array_count_values(*arr));
        return count(*cnt) == array_sum(*cnt);
    }
}
```
# 极简主义
这个应该都会，2333~