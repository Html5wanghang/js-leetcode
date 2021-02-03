//给你两个二进制字符串，返回它们的和（用二进制表示）。
//
// 输入为 非空 字符串且只包含数字 1 和 0。
//
//
//
// 示例 1:
//
// 输入: a = "11", b = "1"
//输出: "100"
//
// 示例 2:
//
// 输入: a = "1010", b = "1011"
//输出: "10101"
//
//
//
// 提示：
//
//
// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。
//
// Related Topics 数学 字符串
// 👍 554 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1; let j = b.length - 1;
  let str = ''; let isMore = false;
  let num = 0;
  while (i >= 0 || j >= 0 ) {
    if (a[i] === '1') {
      num ++
    }
    if (b[j] === '1') {
      num ++
    }
    if (isMore) {
      num ++;
    }
    if (num === 3) {
      str = '1' + str;
      isMore = true;
    } else if (num === 2) {
      str = '0' + str;
      isMore = true;
    } else if (num === 1) {
      str = '1' + str;
      isMore = false;
    } else if (num === 0) {
      str = '0' + str;
      isMore = false;
    }
    num = 0;
    i --;
    j --;
  }
  if (isMore) {
    str = '1' + str;
  }
  return str;
};
//leetcode submit region end(Prohibit modification and deletion)
