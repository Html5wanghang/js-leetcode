//给你一个整数数组 nums，请你将该数组升序排列。
//
//
//
//
//
//
// 示例 1：
//
// 输入：nums = [5,2,3,1]
//输出：[1,2,3,5]
//
//
// 示例 2：
//
// 输入：nums = [5,1,1,2,0,0]
//输出：[0,0,1,1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000
//
// 👍 247 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i ++) {
        for (let j = 0; j < nums.length - i - 1; j ++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
};
//leetcode submit region end(Prohibit modification and deletion)
