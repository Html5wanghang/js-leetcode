//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
//
//
// 示例 2:
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
//
//
// 说明:
//
// 所有输入只包含小写字母 a-z 。
// Related Topics 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 ) return '';
  let str = strs[0];
  for (let i = 0; i < str.length; i ++) {
    if (!strs.every((cat) => {
      return cat[i] === str[i]
    })) {
      return str.substr(0, i)
    }
  }
  return str
};
//leetcode submit region end(Prohibit modification and deletion)
