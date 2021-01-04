//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
//
//
//
// 示例：
// 输入：n = 2
//输出：[
//       "(())",
//       "()()"
//     ]
// 输入：n = 3
//输出：[
//       "((()))",
//       "(()())",
//       "(())()",
//       "()(())",
//       "()()()"
//     ]
//
// Related Topics 字符串 回溯算法
// 👍 1406 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let arr = [];
  let dfs = (left, right, str) => {
    if (left === 0 && right === 0) {
      arr.push(str);
      return
    }
    if (left > 0) {
      dfs(left - 1, right, str + '(')
    }
    if (right > left) {
      dfs(left, right - 1, str + ')')
    }
  };
  dfs(n,n,'');
  return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
// (())(())这种在为
// let b = new Set(["()()()()","(()()())","()(()())","(()())()","((()()))","()()(())","()(())()","(()(()))","(())()()","((())())","()((()))","((()))()","(((())))"]);
// let a = new Set(["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]);
// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference)

