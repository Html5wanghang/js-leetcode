//给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。 
//
// 找到所有出现两次的元素。 
//
// 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？ 
//
// 示例： 
//
// 
//输入:
//[4,3,2,7,8,2,3,1]
//
//输出:
//[2,3]
// 
// Related Topics 数组 
// 👍 338 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let list = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            list.push(Math.abs(nums[i]))
        } else {
            nums[Math.abs(nums[i]) - 1] = - nums[Math.abs(nums[i]) - 1];
        }
    }
    return list
};
//leetcode submit region end(Prohibit modification and deletion)
