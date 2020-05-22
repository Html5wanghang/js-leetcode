> 题解视频我会发到我的b站，欢迎关注：[天使爆破组](https://space.bilibili.com/12996839)
---
## 保姆式题解来咯 ~ ready go ~ 
### 1、暴力直接法

  - 索引 i 和 j 确定出一个子数组
  - 穷举所有子数组，求和，等于 k 则 count++
  - 3 层循环，时间复杂度 O(n^3)
      - 遍历 i，从 0 到 末尾
      - 遍历 j，从 i 到 末尾
      - 遍历 i 到 j，累加求和
  - 结果超时了。但易于理解，可以进一步优化
    ```js
    var subarraySum = function (nums, k) {
      let count = 0
      for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
          let sum = 0
          for (let m = i; m <= j; m++) {
            sum += nums[m]
          }
          if (sum === k) count++
        }
      }
      return count
    };
    ```

### 2、方法升级：去除重复计算
  - 时间复杂度：O(n^2)
    - 重复计算发生在求和：
    - 上次求了 i 到 j - 1 的和，就没必要重复求 i 到 j 的和
    - 摒弃内层循环，用 sum 变量保存上次的求和，累加当前项
- 它依旧是穷举，但启迪我们一种【前缀和】的思想：
  - 对于从 i 到 j 的子数组，i 到 j - 1 项的求和——就是前缀和
  ```javascript
  var subarraySum = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      let sum = 0
      for (let j = i; j < nums.length; j++) {
        sum += nums[j]
        if (sum === k) count++
      }
    }
    return count
  };
  ```
### 方法3：引入前缀和 
  - **什么是前缀和：**
    - 从 **第 0 项** 到 **当前项** 的 **总和**
  - 如果用一个数组 prefixSum 表示：
    - prefixSum[x]：nums 的 第 0 到 第 x 项 的总和
*prefixSum[x] = nums[0] + nums[1] +…+nums[x]*
  - 所以有，nums 某一项 = 两个相邻 前缀和 之差：
*nums[x] = prefixSum[x] - prefixSum[x - 1]*
  - 所以有，nums 的 第 i 到 j 项 的总和：
*nums[i] +…+nums[j]=prefixSum[j] - prefixSum[i - 1]*

- 我们知道 i 当然可以为 0，此时 i - 1 为 - 1，我们让 prefixSum[-1] 为 0，此时：
 *nums[0] +…+nums[j]=prefixSum[j]*

### 题目等价转化：
- 从【有几种 i、j 组合，使得从第 i 到 j 项的子数组的求和 === k】


    ↓ ↓ ↓ 转化为  ↓ ↓ ↓

- 【有几种 i、j 组合，满足 i < j 且 prefixSum[ j ] - prefixSum[ i - 1 ] === k】
- 于是我们想求出 prefixSum 数组的每一项，再看哪些项相减 === k，统计 count 
- 但通式有 i、j 2 个变量，需要两层 for 循环，时间复杂度依旧是 O(n^2)

### 摈弃 prefixSum 数组，引入哈希表
  - 可以不用 prefixSum 数组吗？可以。
  - 因为我们不关心 **前缀和** 具体对应哪一项，只关心 **前缀和** 的值和 **出现次数**。
  - 用 prefixSum 变量，保存当前项的前缀和，存入 **map**
  - 这样 **map** 代替了 prefixSum 数组，记录出现过的 **前缀和** 和 **出现次数**
### 核心流程
  - **map** 存什么键值对：
    - 键： **前缀和**，从第 0 项到当前项的总和
    - 值： 这个 **前缀和** 值出现了几次

  - 遍历 nums 之前，我们预置边界情况 (即之前提到的 prefixSum[-1] = 0)：**map** 初始放入 **0:1** 键值对，即预设已经出现 1 次为 0 的前缀和
  - 遍历 nums 的每一项，求当前项的前缀和，存入 **map** 中
    - 之前没有存过，则存入，初始值为 1 
    - 之前存过，则对应值 +1，即出现次数 +1
  - **边存边查看 map** ，如果 **map** 中已存在 **key** 为 **当前前缀和** **- k** 
    - 说明存在 **【之前求出的前缀和】**，它的值满足 **【当前前缀和】**-**【之前求出的前缀和】** **=== k**
    - 把 **【之前求出的前缀和】** 出现的次数，累加给 **count** 计数器

### 一句话总结
根据 **当前前缀和**，在 **map** 中寻找【**相减 === k**】的 **目标前缀和**。目标前缀和是一个数值，出现这个数值可能不止 1 次，假设为 n 次，就等价于，找到 n 个连续子数组的求和 === k，**遍历 nums 数组每一项**，n 不断累加给 count，最后返回 count

### 代码
时间复杂度 O(n) 。空间复杂度 O(n)
```js
var subarraySum = (nums, k) => {
  if (nums.length === 0) return 0
  let map = { 0: 1 }
  let prefixSum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }
    if (map[prefixSum]) {
      map[prefixSum]++
    } else {
      map[prefixSum] = 1
    }
  }
  return count
}
```