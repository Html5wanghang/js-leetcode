//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。 
//
// 示例 1: 
//
// 
//输入: "aba"
//输出: True
// 
//
// 示例 2: 
//
// 
//输入: "abca"
//输出: True
//解释: 你可以删除c字符。
// 
//
// 注意: 
//
// 
// 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。 
// 
// Related Topics 字符串 
// 👍 316 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let isValid = (str) => {
        let i = 0; let j = str.length - 1;
        while (i < j) {
            if (str[i] === str[j]) {
                i ++;
                j --
            } else {
                return false
            }
        }
        return true;
    }
    let i = 0; let j = s.length - 1;
    while (i < j) {
        if (s[i] === s[j]) {
            i ++;
            j --;
        } else {
            return isValid(s.slice(i + 1, j + 1)) || isValid(s.slice(i, j))
        }
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
