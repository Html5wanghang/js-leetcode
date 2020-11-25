//给定两个整数 A 和 B，返回任意字符串 S，要求满足：
//
//
// S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
// 子串 'aaa' 没有出现在 S 中；
// 子串 'bbb' 没有出现在 S 中。
//
//
//
//
// 示例 1：
//
// 输入：A = 1, B = 2
//输出："abb"
//解释："abb", "bab" 和 "bba" 都是正确答案。
//
//
// 示例 2：
//
// 输入：A = 4, B = 1
//输出："aabaa"
//
//
//
// 提示：
//
//
// 0 <= A <= 100
// 0 <= B <= 100
// 对于给定的 A 和 B，保证存在满足要求的 S。
//
// Related Topics 贪心算法
// 👍 52 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let str = '';
  while (A !== 0 || B !== 0) {
    if (A - B >= 2) {
      str += 'aa';
      if (B > 0) {
        str += 'b';
        B--;
      }
      A -= 2;
    } else if (A - B === 1) {
      str += 'a';
      if (B > 0) {
        str += 'b';
        B--;
      }
      A --;
    } else if (A === B) {
      if (B > 0) {
        str += 'ab';
        A--;
        B--;
      }
    } else if (A - B === -1) {
      str += 'b';
      if (A > 0) {
        str += 'a';
        A--;
      }
      B --;
    } else if (A - B  <= -2) {
      str += 'bb';
      if (A > 0) {
        str += 'a';
        A--;
      }
      B -= 2;
    }
  }
  return str;
};
//leetcode submit region end(Prohibit modification and deletion)
