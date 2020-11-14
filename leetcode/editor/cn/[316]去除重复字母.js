//给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。 
//
// 注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct
//-characters 相同 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "bcabc"
//输出："abc"
// 
//
// 示例 2： 
//
// 
//输入：s = "cbacdcbc"
//输出："acdb" 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 104 
// s 由小写英文字母组成 
// 
// Related Topics 栈 贪心算法 字符串 
// 👍 267 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const arr = [];
    for (let i = 0; i < s.length; i ++) {
        if (!arr.includes(s[i])) {
            if (arr.length > 0) {
                if (s[i] > arr[arr.length - 1]) {
                    arr.push(s[i])
                } else {
                    if (s.indexOf(arr[arr.length - 1], i) === -1) {
                        arr.push(s[i])
                    } else {
                        arr.pop();
                        i--;
                    }
                }
            } else {
                arr.push(s[i])
            }

        }
    };
    return arr.join('')
};
//leetcode submit region end(Prohibit modification and deletion)
