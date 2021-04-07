//给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。 
//
// 
//
// 示例： 
//
// 
//输入：[1,12,-5,-6,50,3], k = 4
//输出：12.75
//解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 
//
// 
//
// 提示： 
//
// 
// 1 <= k <= n <= 30,000。 
// 所给数据范围 [-10,000，10,000]。 
// 
// Related Topics 数组 
// 👍 178 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let total = 0;
    for (let i = 0; i < k; i ++) {
        total += nums[i];
    }
    let max = total / k;
    for (let j = k; j < nums.length; j ++) {
        total += nums[j];
        total -= nums[j - k];
        if (nums[j] > nums[j - k]) {
            max = Math.max(max, total / k)
        }
    }
    return max

};
//leetcode submit region end(Prohibit modification and deletion)
