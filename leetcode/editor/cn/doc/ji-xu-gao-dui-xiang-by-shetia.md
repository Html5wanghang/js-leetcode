### 解题思路

用个对象来记录出现过的值, 一旦再次出现就说明是无限循环了, 就表明这数并不快乐, 骚年! 没对象搞可不快乐鸭.

### 代码

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = sum(n)
    let obj = {}
    while(res != 1){
      if (res in obj) return false
      obj[res] = 1
      res = sum(res)
    }
    return true
}
function sum(n){
  n = n + ''
  let sum = 0
  for(let num of n){
    sum += num * num
  }
  return sum
}
```

什么! 礼不想搞对象? 

```js
var isHappy = function(n) {
    let slow = sum(n)
    let fast = sum(slow)
    while(slow != fast){
      slow = sum(slow)
      fast = sum(sum(fast))
    }
    return slow == 1
}
function sum(n){
  n = n + ''
  let sum = 0
  for(let num of n){
    sum += num * num
  }
  return sum
}
```
看不懂吧? 嘿嘿, 我也看不懂, 他们都说这叫 快慢指针,

就是**慢的 只做一次平方求和**,  **快的做两次**,   显然 快的 比 慢的 快,  

如果 (死循环 或者 最终等于1) 的话 fast 肯定会 和 slow 碰上

  1. 等于1后 fast会一直等于1, 因为 1的平方 等于1, 之后就坐等slow追上了
  2. 死循环, 跑圈, slow 最终会碰上 fast

只要判断碰上时是不是等于 1 , 就可以知道 快不快乐

 [image.png](https://pic.leetcode-cn.com/5b07abd406556c8346e9485f5b8cd5c305246688a5621af4d19a2ddc8145dd6e-image.png)








