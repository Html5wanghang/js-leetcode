//找出数组中重复的数字。
//
//
//在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请
//找出数组中任意一个重复的数字。
//
// 示例 1：
//
// 输入：
//[2, 3, 1, 0, 2, 5, 3]
//输出：2 或 3
//
//
//
//
// 限制：
//
// 2 <= n <= 100000
// Related Topics 数组 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let obj = {}
  for (let i = 0 ; i < nums.length; i ++ ) {
    if( String(nums[i]) in obj) {
      return nums[i]
    } else {
      obj[nums[i]] = null;
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)

//把值作为哈希属性存储，依次遍历，如在哈希上，则返回
