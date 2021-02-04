//给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如
//同俄罗斯套娃一样。
//
// 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
//
// 说明:
//不允许旋转信封。
//
// 示例:
//
// 输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
//输出: 3
//解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
//
// Related Topics 二分查找 动态规划
// 👍 267 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    } else if (a[0] < b[0]) {
      return -1
    } else {
      return b[1] - a[1]
    }
  })
  let dp = []; let max = 0;
  for (let i = 0; i < envelopes.length; i ++) {
      dp[i] = 1;
      for (let j = 0; j < i; j ++) {
        if (envelopes[i][1] > envelopes[j][1]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
      max = Math.max(max, dp[i])
  }
  return max;
};
//leetcode submit region end(Prohibit modification and deletion)
