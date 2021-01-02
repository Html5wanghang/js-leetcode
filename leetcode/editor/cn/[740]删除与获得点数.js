//给定一个整数数组 nums ，你可以对它进行一些操作。 
//
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] +
// 1 的元素。 
//
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。 
//
// 示例 1: 
//
// 
//输入: nums = [3, 4, 2]
//输出: 6
//解释: 
//删除 4 来获得 4 个点数，因此 3 也被删除。
//之后，删除 2 来获得 2 个点数。总共获得 6 个点数。
// 
//
// 示例 2: 
//
// 
//输入: nums = [2, 2, 3, 3, 3, 4]
//输出: 9
//解释: 
//删除 3 来获得 3 个点数，接着要删除两个 2 和 4 。
//之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
//总共获得 9 个点数。
// 
//
// 注意: 
//
// 
// nums的长度最大为20000。 
// 每个整数nums[i]的大小都在[1, 10000]范围内。 
// 
// Related Topics 动态规划 
// 👍 211 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    nums.sort((a,b) => {
        return a - b;
    })
    let num = - Infinity;
    let arr = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === num) {
            arr.push(arr.pop() + nums[i]);
        } else {
            if (nums[i] - num >= 2) {
                arr.push(0)
            }
            num = nums[i];
            arr.push(nums[i])
        }
    }
    let dp = [0,0];
    for (let j = 0; j < arr.length; j ++) {
        dp[j + 2] = Math.max(dp[j + 1], dp[j] + arr[j]);
    }
    return dp.pop()
};
//leetcode submit region end(Prohibit modification and deletion)
