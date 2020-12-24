//实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
//
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
//
// 必须 原地 修改，只允许使用额外常数空间。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[1,3,2]
//
//
// 示例 2：
//
//
//输入：nums = [3,2,1]
//输出：[1,2,3]
//
//
// 示例 3：
//
//
//输入：nums = [1,1,5]
//输出：[1,5,1]
//
//
// 示例 4：
//
//
//输入：nums = [1]
//输出：[1]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
//
// Related Topics 数组
// 👍 883 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let start, end;
  for (let i = nums.length - 1; i > 0; i--) {
      let j = i - 1;
      let k = nums.length - 1;
      let result = false;
      while ( k > j) {
        if (nums[k] > nums[j]) {
          result = true;
          break;
        } else {
          k --;
        }
      }
    if (result) {
        start = j;
        end = k;
        break;
      }
  };
  if (!start && !end) {
    nums.reverse();
  } else {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    for (let i = start + 1; i < nums.length; i ++) {
      for (let j = i + 1; j < nums.length; j ++) {
        if (nums[i] > nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
        }
      }
    }
  };
};
//leetcode submit region end(Prohibit modification and deletion)
