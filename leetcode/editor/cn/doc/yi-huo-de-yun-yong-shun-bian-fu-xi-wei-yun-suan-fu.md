> 题解视频可能发在我的b站号：[天使爆破组](https://space.bilibili.com/12996839)。欢迎关注，在录每日一题中
---
---
### 审题
某个元素只出现 1 次，其余元素都出现 2 次

### 时间复杂度O(n)，空间复杂度O(1)
只操作 nums 数组本身，不使用额外空间

### n ^ n === 0 且 n ^ 0 === n
- 并且，异或遵循交换律
- [4,1,2,1,2] 将数字全部异或运算一遍：
- 4 ^ 1 ^ 2 ^ 1 ^ 2 => 1 ^ 1 ^ 2 ^ 2 ^ 4  => 0 ^ 2 ^ 2 ^ 4 => 2 ^ 2 ^ 4 => 0 ^ 4 => 4
- 出现 2 次的数字在异或中都抵消了，最后得出只出现 1 次的数

### code
```js
var singleNumber = (nums) => {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}
```
### 顺便复习一下位运算符吧
 [微信截图_20200514084749.png](https://pic.leetcode-cn.com/b4e49eb827b46e241555886bb42c71b3909d9253a1ddba81c01ffbbdb0110e20-%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200514084749.png)
