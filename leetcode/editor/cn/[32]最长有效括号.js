//给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。 
//
// 示例 1: 
//
// 输入: "(()"
//输出: 2
//解释: 最长有效括号子串为 "()"
// 
//
// 示例 2: 
//
// 输入: ")()())"
//输出: 4
//解释: 最长有效括号子串为 "()()"
// 
// Related Topics 字符串 动态规划 
// 👍 1124 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = [];
    let dp = [];
    let index = [];
    let max = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '(') {
            arr.push('(');
            dp.push(i);
        } else if (arr[arr.length - 1] === '(') {
            index.push(i);
            index.push(dp.pop());
            arr.pop();
        }
    }
    index.sort((a, b) => {
        return a - b;
    });
    let data = [];

    for (let i = 0; i < index.length; i ++) {
        if (index[i] === index[i - 1] + 1) {
            data[i] = data[i - 1] + 1;
            max = Math.max(max, data[i])
        } else {
            data[i] = 1
        }
    }
    return max;
};
//leetcode submit region end(Prohibit modification and deletion)
