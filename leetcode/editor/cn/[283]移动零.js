//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。 
//
// 示例: 
//
// 输入: [0,1,0,3,12]
//输出: [1,3,12,0,0] 
//
// 说明: 
//
// 
// 必须在原数组上操作，不能拷贝额外的数组。 
// 尽量减少操作次数。 
// 
// Related Topics 数组 双指针 
// 👍 882 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length - 1; i ++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j ++) {
                if (nums[j] !== 0 ) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    break
                }
            }
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
