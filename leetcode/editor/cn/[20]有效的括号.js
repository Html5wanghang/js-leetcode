//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
//输出: true
//
//
// 示例 2:
//
// 输入: "()[]{}"
//输出: true
//
//
// 示例 3:
//
// 输入: "(]"
//输出: false
//
//
// 示例 4:
//
// 输入: "([)]"
//输出: false
//
//
// 示例 5:
//
// 输入: "{[]}"
//输出: true
// Related Topics 栈 字符串
// 👍 1912 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const obj = {
    ")": '(',
    "}": '{',
    "]": '['
  };
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      if (arr.length === 0)  {
        return false;
      } else if (arr[arr.length - 1] !== obj[s[i]]) {
        return false
      } else {
        arr.pop();
      }
    } else {
      arr.push(s[i])
    }
  }
  return arr.length === 0;
};
//leetcode submit region end(Prohibit modification and deletion)
