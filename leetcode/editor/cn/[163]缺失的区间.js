//给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。
//
// 示例：
//
// 输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
//输出: ["2", "4->49", "51->74", "76->99"]
//
// Related Topics 数组
// 👍 40 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const result = [];
    let idx = 0; let start = lower;
    while (idx < nums.length) {
      if (nums[idx] === start) {
        start ++;
        idx ++;
      } else {
        let end = nums[idx] - 1;
        if (start === end) {
          result.push(`${start}`)
        } else {
          result.push(`${start}->${end}`)
        }
        start = nums[idx] + 1
        idx ++;
      }
    }
    if (start < upper) {
      result.push(`${start}->${upper}`)
    } else if (start === upper) {
      result.push(`${start}`)
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
