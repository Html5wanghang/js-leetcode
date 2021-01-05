//给你一个整数 n，请返回长度为 n 、仅由元音 (a, e, i, o, u) 组成且按 字典序排列 的字符串数量。
//
// 字符串 s 按 字典序排列 需要满足：对于所有有效的 i，s[i] 在字母表中的位置总是与 s[i+1] 相同或在 s[i+1] 之前。
//
//
//
// 示例 1：
//
//
//输入：n = 1
//输出：5
//解释：仅由元音组成的 5 个字典序字符串为 ["a","e","i","o","u"]
//
//
// 示例 2：
//
//
//输入：n = 2
//输出：15
//解释：仅由元音组成的 15 个字典序字符串为
//["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"]
//注意，"ea" 不是符合题意的字符串，因为 'e' 在字母表中的位置比 'a' 靠后
//
//
// 示例 3：
//
//
//输入：n = 33
//输出：66045
//
//
//
//
// 提示：
//
//
// 1 <= n <= 50
//
// Related Topics 数学 动态规划 回溯算法
// 👍 32 👎 0

// 12345
//
//
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */


var countVowelStrings = function(n) {
  let dp = [[1,1,1,1,1]];
  let i = 1;
  while (i < n) {
    dp.push([]);
    for (let j = 0; j < 5; j ++) {
      if (j === 0) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
      }
    }
    i++
  }
  let sum = 0;
  for (let i = 0; i < dp[dp.length - 1].length; i ++) {
    sum += dp[dp.length - 1][i];
  }
  return sum
};
//leetcode submit region end(Prohibit modification and deletion)
