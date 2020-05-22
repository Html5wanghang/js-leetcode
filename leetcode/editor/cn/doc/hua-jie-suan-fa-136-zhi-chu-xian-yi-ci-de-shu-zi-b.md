### 思路

- 标签：位运算
- 本题根据题意，线性时间复杂度 *O(n)*，很容易想到使用 Hash 映射来进行计算，遍历一次后结束得到结果，但是在空间复杂度上会达到 *O(n)*，需要使用较多的额外空间
- 既满足时间复杂度又满足空间复杂度，就要提到位运算中的异或运算 XOR，主要因为异或运算有以下几个特点：
  - 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
  - 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
  - XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
- 故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
- 时间复杂度：*O(n)*，空间复杂度：*O(1)*

### 代码

```Java []
class Solution {
    public int singleNumber(int[] nums) {
        int ans = 0;
        for(int num: nums) {
            ans ^= num;
        }
        return ans;
    }
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};
```

### 画解

  [frame_00001.png](https://pic.leetcode-cn.com/7d1bd50370f8f2b60d7215ca12f2f5ac4f3cca801f68e4ef1053e8e3180ce74b-frame_00001.png)  [frame_00002.png](https://pic.leetcode-cn.com/ab397765b568b8547a9c4ef4b256a92e64b7cab698aa0cb656bb8285131524aa-frame_00002.png)  [frame_00003.png](https://pic.leetcode-cn.com/c7c3577c968692e02c0eb9baa8cb699575bb2338bd6023ced8e00508767ea8ec-frame_00003.png)  [frame_00004.png](https://pic.leetcode-cn.com/1b03b163501fecf12048ef8224a7c2c694af2289b5e071633f1fa7ef28b12b79-frame_00004.png)  [frame_00005.png](https://pic.leetcode-cn.com/e9dee5d4e1db6b4c4da0d0b430494d948140b8783181055234b9513252ad7c86-frame_00005.png) 