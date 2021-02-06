//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。 
//
// 
//
// 提示： 
//
// 
// num1 和num2 的长度都小于 5100 
// num1 和num2 都只包含数字 0-9 
// num1 和num2 都不包含任何前导零 
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式 
// 
// Related Topics 字符串 
// 👍 295 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1; let j = num2.length - 1; let isMore = false;
    let total = 0; let str = ''
    while (i >= 0 || j >= 0) {
        total = 0;
        if (isMore) {
            total += 1
        }
        if (i >= 0) {
            total += Number(num1[i])
        }
        if (j >= 0) {
           total += Number(num2[j])
        }
        if (total >= 10) {
            str = String(total - 10) + str;
            isMore = true
        } else {
            str = String(total) + str;
            isMore = false;
        }
        i --;
        j --;
    }
    if (isMore) {
        str = '1' + str;
    }
    return str
};
//leetcode submit region end(Prohibit modification and deletion)
