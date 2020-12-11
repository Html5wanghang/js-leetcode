//给你一个字符串 S，请你删去其中的所有元音字母（ 'a'，'e'，'i'，'o'，'u'），并返回这个新字符串。
//
//
//
// 示例 1：
//
// 输入："leetcodeisacommunityforcoders"
//输出："ltcdscmmntyfrcdrs"
//
//
// 示例 2：
//
// 输入："aeiou"
//输出：""
//
//
//
//
// 提示：
//
//
// S 仅由小写英文字母组成。
// 1 <= S.length <= 1000
//
// Related Topics 字符串
// 👍 10 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  let str = '';
  for (let i = 0; i < S.length; i ++) {
    if (!['a', 'e','i', 'o', 'u'].includes(S[i])) {
      str += S[i]
    }
  }
  return str;
};
//leetcode submit region end(Prohibit modification and deletion)
