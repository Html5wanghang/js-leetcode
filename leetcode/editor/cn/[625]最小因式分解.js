//给定一个正整数 a，找出最小的正整数 b 使得 b 的所有数位相乘恰好等于 a。 
//
// 如果不存在这样的结果或者结果不是 32 位有符号整数，返回 0。 
//
// 
//
// 样例 1 
//
// 输入： 
//
// 48 
// 
//
// 输出： 
//
// 68 
//
// 
//
// 样例 2 
//
// 输入： 
//
// 15
// 
//
// 输出： 
//
// 35 
//
// 
// Related Topics 递归 数学 
// 👍 25 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} a
 * @return {number}
 */
var smallestFactorization = function(a) {
    let num = 0; let idx = 0;
    if (a === 1) {
        return  1
    }
    for (let i = 9; i >= 2; i --) {
        if (a % i === 0) {
            if (idx === 0) {
                num = i
            } else {
                num = i * Math.pow(10, idx)+ num;
                if (num > Math.pow(2, 31) - 1) {
                    return 0
                }
            }
            a = a / i;
            i ++;
            idx ++;
        }
    }
    if (num === 0 || a > 10) {
        return 0
    } else {
        return num;
    }

};
//leetcode submit region end(Prohibit modification and deletion)
