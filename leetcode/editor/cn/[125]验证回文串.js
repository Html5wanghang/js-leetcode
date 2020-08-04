//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
//
// 输入: "A man, a plan, a canal: Panama"
//输出: true
//
//
// 示例 2:
//
// 输入: "race a car"
//输出: false
//
// Related Topics 双指针 字符串
// 👍 258 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length < 2) {
    return true
  }
  let i = 0;
  let j = s.length - 1;
  let result = true;
  const reg = /[a-zA-Z0-9]/
  while (i < j && result) {
    if (!reg.test(s[i])) {
      i++;
    } else if (!reg.test(s[j])) {
      j--;
    } else {
      if (s[i] === s[j] || s[i].toLowerCase() === s[j].toLowerCase()) {
        i++;
        j--;
      } else {
        result = false;
      }
    }
  }
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
