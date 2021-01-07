//给定一个非负整数数组，你最初位于数组的第一个位置。
//
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
//
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
//
// 示例:
//
// 输入: [2,3,1,1,4]
//输出: 2
//解释: 跳到最后一个位置的最小跳跃数是 2。
//     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
//
//
// 说明:
//
// 假设你总是可以到达数组的最后一个位置。
// Related Topics 贪心算法 数组
// 👍 793 👎 0
// [2,3,1,1,1,1,1,1,1,1,4] 11
// [3,5,4,5,6,7,8,9,10,11,15]

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0;
  let end = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i ++) {
    max = Math.max(nums[i] + i, max)
    if (i === end) {
      end = max;
      count ++;
    }
  };
  return count
};
//leetcode submit region end(Prohibit modification and deletion)
