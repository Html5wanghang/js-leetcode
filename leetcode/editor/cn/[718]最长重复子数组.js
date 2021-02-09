//给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。 
//
// 
//
// 示例： 
//
// 输入：
//A: [1,2,3,2,1]
//B: [3,2,1,4,7]

//输出：3
//解释：
//长度最长的公共子数组是 [3, 2, 1] 。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= len(A), len(B) <= 1000 
// 0 <= A[i], B[i] < 100 
// 
// Related Topics 数组 哈希表 二分查找 动态规划 
// 👍 377 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let dp = [];
    let max = - Infinity;
    for (let i = 0; i <= A.length; i ++) {
        dp.push([]);
        for (let j = 0; j <= B.length; j ++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = 0;
            }
            max = Math.max(max, dp[i][j])
        }
    }

    return max
};
//leetcode submit region end(Prohibit modification and deletion)
