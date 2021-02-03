//给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
//
// 说明：不要使用任何内置的库函数，如 sqrt。
//
// 示例 1：
//
// 输入：16
//输出：True
//
// 示例 2：
//
// 输入：14
//输出：False
//
// Related Topics 数学 二分查找
// 👍 189 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true
  }
  let start = 1;
  let end = num;
  let result = false;
  while (start < end) {
    let middle = (start + end) >> 1;
    let middleNum = Math.pow(middle, 2 );
    if (middleNum === num) {
      result = true;
      break;
    } else if (middleNum > num) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return result
};
// isPerfectSquare(9)
//leetcode submit region end(Prohibit modification and deletion)
