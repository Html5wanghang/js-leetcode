//给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
//
//
// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
//
//
//
//
// 示例 1：
//
// 输入： "()"
//输出： 1
//
//
// 示例 2：
//
// 输入： "(())"
//输出： 2
//
//
// 示例 3：
//
// 输入： "()()"
//输出： 2
//
//
// 示例 4：
//
// 输入： "(()(()))"
//输出： 6
//
//
//
//
// 提示：
//
//
// S 是平衡括号字符串，且只含有 ( 和 ) 。
// 2 <= S.length <= 50
//
// Related Topics 栈 字符串
// 👍 154 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let stack = [];
  let num = 0;
  for (let i = 0 ; i< S.length; i ++) {
    if (S[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        stack.push(1);
      } else {
        let temp = stack.pop();
        let num = 0;
        while (temp !== '(') {
          num += temp;
          temp = stack.pop();
        }
        stack.push(2 * num)

      }
    } else {
      stack.push('(')
    }
  }
  for (let i = 0 ; i < stack.length; i++) {
    num += stack[i]
  }
  return num;
};
//leetcode submit region end(Prohibit modification and deletion)
