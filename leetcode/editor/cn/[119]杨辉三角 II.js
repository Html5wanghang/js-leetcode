//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
//
//
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
//
// 示例:
//
// 输入: 3
//输出: [1,3,3,1]
//
//
// 进阶：
//
// 你可以优化你的算法到 O(k) 空间复杂度吗？
// Related Topics 数组
// 👍 267 👎 0
1331
14641

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let dp = [];
  let index = -1 - rowIndex;
  while (index < 0) {
    for (let i = dp.length - 1; i > 0; i --) {
        dp[i] = dp[i] + dp[i - 1]
    }
    dp.push(1);
    index ++;
  }
  return dp
};
//leetcode submit region end(Prohibit modification and deletion)
