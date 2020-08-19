//对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
//
// 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
//
//
//
// 示例：
//
// 输入: 28
//输出: True
//解释: 28 = 1 + 2 + 4 + 7 + 14
//
//
//
//
// 提示：
//
// 输入的数字 n 不会超过 100,000,000. (1e8)
// Related Topics 数学
// 👍 68 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num <= 1) {
    return false;
  }
  let j = Math.floor(Math.sqrt(num));
  let k = 1;
  if (j === num / j) {
    k += j;
    j--
  }

  while (j > 1) {
    if (num % j === 0) {
      k += j;
      k += num / j;
      j --;
    } else {
      j--
    }
  }
  return k === num;
};
//leetcode submit region end(Prohibit modification and deletion)
