//给你一个字符串 s，找到 s 中最长的回文子串。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
// 
//
// 示例 2： 
//
// 
//输入：s = "cbbd"
//输出："bb"
// 
//
// 示例 3： 
//
// 
//输入：s = "a"
//输出："a"
// 
//
// 示例 4： 
//
// 
//输入：s = "ac"
//输出："a"
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 1000 
// s 仅由数字和英文字母（大写和/或小写）组成 
// 
// Related Topics 字符串 动态规划 
// 👍 3456 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let startIndex = 0; let endIndex = 0;
    const calc = (index1, index2) => {
        while (index1 > 0 && index2 < s.length - 1) {
            if (s[index1 - 1] === s[index2 + 1]) {
                index1 --;
                index2 ++;
            } else {
                break
            }
        }
        if (index2 - index1 > endIndex - startIndex) {
            endIndex = index2;
            startIndex = index1;
        }
    } ;
    for (let i = 0; i < s.length; i ++) {
        calc(i,i)
        if (s[i] === s[i + 1]) {
            calc(i, i + 1);
        }
    }
    return s.slice(startIndex, endIndex + 1)

};
//leetcode submit region end(Prohibit modification and deletion)
