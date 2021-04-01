//给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。 
//
// 示例 1 : 
//
// 
//输入: 2736
//输出: 7236
//解释: 交换数字2和数字7。
// 
//
// 示例 2 : 
//
// 
//输入: 9973
//输出: 9973
//解释: 不需要交换。
// 
//
// 注意: 
//
// 
// 给定数字的范围是 [0, 108] 
// 
// Related Topics 数组 数学 
// 👍 157 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let strArr = String(num).split('');
    for (let i = 0; i < strArr.length; i ++) {
        let k = i;
        for (let j = i + 1; j < strArr.length; j ++) {
            if (strArr[j] > strArr[k] || (k !== i && strArr[j] === strArr[k])) {
                k = j;
            }
        }
        if (k !== i) {
            [strArr[k],strArr[i]] = [strArr[i], strArr[k]];
            break
        }
    }
    return Number(strArr.join(''));
};
//leetcode submit region end(Prohibit modification and deletion)
