//给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
//
// 如果数组中不存在目标值 target，返回 [-1, -1]。
//
// 进阶：
//
//
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//
//
//
//
// 示例 1：
//
//
//输入：nums = [5,7,7,8,8,10], target = 8
//输出：[3,4]
//
// 示例 2：
//
//
//输入：nums = [5,7,7,8,8,10], target = 6
//输出：[-1,-1]
//
// 示例 3：
//
//
//输入：nums = [], target = 0
//输出：[-1,-1]
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
//
// Related Topics 数组 二分查找
// 👍 856 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = 0; let end = nums.length; let middle = (start + end) >> 1;
  while (start < end) {
    middle = (start + end) >> 1;
    if (nums[middle] > target) {
      end = middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      break
    }
  }
  if (start === end) {
    return [-1, -1]
  } else {
    start = middle;
    end = middle;
    while (nums[start] === target) {
      start --
    }
    while (nums[end] === target) {
      end ++
    }
    return [start + 1, end - 1]
  }
};
//leetcode submit reion end(Prohibit modification and deletion)
