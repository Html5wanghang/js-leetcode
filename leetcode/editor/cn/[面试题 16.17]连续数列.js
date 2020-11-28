//给定一个整数数组，找出总和最大的连续数列，并返回总和。 
//
// 示例： 
//
// 输入： [-2,1,-3,4,-1,2,1,-5,4]
//输出： 6
//解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 
//
// 进阶： 
//
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。 
// Related Topics 数组 分治算法 动态规划 
// 👍 56 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = new Map();
    let result = nums[0];
    dp.set(-1, 0)
    for (let i = 0; i < nums.length; i ++) {
        let max = dp.get(i - 1) <= 0 ? nums[i] : nums[i] + dp.get(i - 1);
        dp.set(i, max);
        result = Math.max(result, max);
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
