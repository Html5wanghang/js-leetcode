//给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和
//。假定每组输入只存在唯一答案。 
//
// 
//
// 示例： 
//
// 输入：nums = [-1,2,1,-4], target = 1
//输出：2
//解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 
//
// 
//
// 提示： 
//
// 
// 3 <= nums.length <= 10^3 
// -10^3 <= nums[i] <= 10^3 
// -10^4 <= target <= 10^4 
// 
// Related Topics 数组 双指针 
// 👍 729 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min = Infinity;
    nums.sort((a,b) => {
        return a - b;
    })
    for (let i = 0; i < nums.length; i ++) {
        let start = i + 1;
        let end = nums.length - 1;
        let num = target - nums[i]
        while (start < end) {
            if (nums[start] + nums[end] === num) {
                min = target;
                break;
            } else if (nums[start] + nums[end] > num) {
                if (nums[start] + nums[end] + nums[i] - target < Math.abs(target - min)) {
                    min = nums[start] + nums[end] + nums[i];
                }
                end --;
            } else {
                if (target - nums[start] - nums[end] - nums[i] < Math.abs(target - min) ) {
                    min = nums[start] + nums[end] + nums[i]
                }
                start ++
            }
        }
        if (min === target) {
            break
        }
    }
    return min
};
//leetcode submit region end(Prohibit modification and deletion)
