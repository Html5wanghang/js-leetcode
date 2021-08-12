//给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。
//
// 重复出现的子串要计算它们出现的次数。
//
//
//
// 示例 1 :
//
//
//输入: "00110011"
//输出: 6
//解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
//
//请注意，一些重复出现的子串要计算它们出现的次数。
//
//另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
//
//
// 示例 2 :
//
//
//输入: "10101"
//输出: 4
//解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
//
//
//
//
// 提示：
//
//
// s.length 在1到50,000之间。
// s 只包含“0”或“1”字符。
//
// Related Topics 字符串
// 👍 366 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let oneNum = 0; let zeroNum = 0; let total = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '0') {
            if (s[i - 1] === '0') {
                zeroNum ++;
            } else {
                if (zeroNum !== oneNum) {
                    total += Math.min(zeroNum, oneNum)

                }
                zeroNum = 1;
            }
            if (zeroNum === oneNum) {
                total += zeroNum;
            } else if (zeroNum > oneNum) {
                oneNum = 0
            }
        } else {
            if (s[i - 1] === '1') {
                oneNum ++;
            } else {
                if (zeroNum !== oneNum) {
                    total += Math.min(zeroNum, oneNum)

                }
                oneNum = 1;
            }
            if (zeroNum === oneNum) {
                total += zeroNum;
            } else if (zeroNum < oneNum) {
                zeroNum = 0
            }
        }
    }
    if (oneNum === zeroNum) {
        return total;
    } else {
        return total + Math.min(oneNum, zeroNum)
    }
};
//leetcode submit region end(Prohibit modification and deletion)
