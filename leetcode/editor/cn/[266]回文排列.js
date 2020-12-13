//给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串。 
//
// 示例 1： 
//
// 输入: "code"
//输出: false 
//
// 示例 2： 
//
// 输入: "aab"
//输出: true 
//
// 示例 3： 
//
// 输入: "carerac"
//输出: true 
// Related Topics 哈希表 
// 👍 33 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i ++) {
        if (set.has(s[i])) {
            set.delete(s[i])
        } else {
            set.add(s[i])
        }
    };
    return set.size <= 1;
};
//leetcode submit region end(Prohibit modification and deletion)
