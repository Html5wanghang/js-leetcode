//给你一个字符串 S，返回只含 单一字母 的子串个数。 
//
// 示例 1： 
//
// 输入： "aaaba"
//输出： 8
//解释： 
//只含单一字母的子串分别是 "aaa"， "aa"， "a"， "b"。
//"aaa" 出现 1 次。
//"aa" 出现 2 次。
//"a" 出现 4 次。
//"b" 出现 1 次。
//所以答案是 1 + 2 + 4 + 1 = 8。
// 
//
// 示例 2: 
//
// 输入： "aaaaaaaaaa"
//输出： 55
// 
//
// 
//
// 提示： 
//
// 
// 1 <= S.length <= 1000 
// S[i] 仅由小写英文字母组成。 
// 
// Related Topics 数学 字符串 
// 👍 18 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    let num = 0; let total = 0;
    for (let i = 0; i <= S.length; i ++) {
        if (S[i] === S[i - 1]) {
            num ++
        } else {
            total += (num * (num + 1)) / 2;
            num = 1;
        }
    }
    return total
};
//leetcode submit region end(Prohibit modification and deletion)
