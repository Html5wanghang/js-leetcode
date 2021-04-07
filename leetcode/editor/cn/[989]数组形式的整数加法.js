//对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。 
//
// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。 
//
// 
//
// 
// 
//
// 示例 1： 
//
// 输入：A = [1,2,0,0], K = 34
//输出：[1,2,3,4]
//解释：1200 + 34 = 1234
// 
//
// 示例 2： 
//
// 输入：A = [2,7,4], K = 181
//输出：[4,5,5]
//解释：274 + 181 = 455
// 
//
// 示例 3： 
//
// 输入：A = [2,1,5], K = 806
//输出：[1,0,2,1]
//解释：215 + 806 = 1021
// 
//
// 示例 4： 
//
// 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
//输出：[1,0,0,0,0,0,0,0,0,0,0]
//解释：9999999999 + 1 = 10000000000
// 
//
// 
//
// 提示： 
//
// 
// 1 <= A.length <= 10000 
// 0 <= A[i] <= 9 
// 0 <= K <= 10000 
// 如果 A.length > 1，那么 A[0] != 0 
// 
// Related Topics 数组 
// 👍 143 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const strA = A.join(''); const strB = String(K);
    let isMore = false;
    let i = strA.length - 1; let j = strB.length - 1;
    let result = [];
    while (i >= 0 || j >= 0) {
        let num1 = i < 0 ? 0 : Number(strA[i]);
        let num2 = j < 0 ? 0 : Number(strB[j]);
        let total = num1 + num2;
        if (isMore) {
            total += 1;
        }
        if (total >= 10) {
            isMore = true;
            total -= 10;
        } else {
            isMore = false
        }
        result.push(total);
        i --;
        j --;
    }
    if (isMore) {
        result.push(1);
    }
    return  result.reverse();
};
//leetcode submit region end(Prohibit modification and deletion)
