//中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。
//
// 请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。
//
//
//
// 示例 1:
//
// 输入: num = "69"
//输出: true
//
//
// 示例 2:
//
// 输入: num = "88"
//输出: true
//
// 示例 3:
//
// 输入: num = "962"
//输出: false
//
// 示例 4：
//
// 输入：num = "1"
//输出：true
//
// Related Topics 哈希表 数学
// 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let i = 0; let j = num.length - 1;
  while (i < j) {
    if (['69','96','11','00','88'].includes(num[i] + num[j])) {
      i ++;
      j --;
    } else {
      return false;
    }
  }
  if (i === j) {
    return ['0', '1','8'].includes(num[i])
  } else {
    return true
  }
};
//leetcode submit region end(Prohibit modification and deletion)
