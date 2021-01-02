//给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。 
//
// 在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，且当 i >= 0 时 
//C[i+A.length] = C[i]） 
//
// 此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1, 
//k2 <= j 其中 k1 % A.length = k2 % A.length） 
//
// 
//
// 示例 1： 
//
// 输入：[1,-2,3,-2]
//输出：3
//解释：从子数组 [3] 得到最大和 3
// 
//
// 示例 2： 
//
// 输入：[5,-3,5]
//输出：10
//解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
// 
//
// 示例 3： 
//
// 输入：[3,-1,2,-1]
//输出：4
//解释：从子数组 [2,-1,3] 得到最大和 2 + (-1) + 3 = 4
// 
//
// 示例 4： 
//
// 输入：[3,-2,2,-3]
//输出：3
//解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
// 
//
// 示例 5： 
//
// 输入：[-2,-3,-1]
//输出：-1
//解释：从子数组 [-1] 得到最大和 -1
// 
//
// 
//
// 提示： 
//
// 
// -30000 <= A[i] <= 30000 
// 1 <= A.length <= 30000 
// 
// Related Topics 数组 
// 👍 132 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let dpMax = [];
    let dpMin = [];
    let max = - Infinity; let min = Infinity; let total = 0;
    for (let i = 0; i < A.length; i++) {
        if (dpMax[i - 1] !== undefined) {
            dpMax[i] = Math.max(dpMax[i - 1] + A[i], A[i]);
            max = Math.max(max, dpMax[i])
        } else {
            dpMax[i] = A[i];
            max = A[i];
        }
        if ( i > 0 && i < A.length - 1) {
            if (dpMin[i - 2] !== undefined) {
                dpMin[i - 1] = Math.min(dpMin[i - 2] + A[i], A[i]);
                min = Math.min(min,dpMin[i - 1])
            } else {
                dpMin[i - 1] = A[i];
                min = A[i];
            }
        }
        total += A[i];
    }
    return Math.max(max, total - min);
};
//leetcode submit region end(Prohibit modification and deletion)
