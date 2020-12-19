//给定一个包含 非负数 的数组和一个目标 整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为 n*k，其
//中 n 也是一个整数。 
//
// 
//
// 示例 1： 
//
// 输入：[23,2,4,6,7], k = 6
//输出：True
//解释：[2,4] 是一个大小为 2 的子数组，并且和为 6。
// 
//
// 示例 2： 
//
// 输入：[23,2,6,4,7], k = 6
//输出：True
//解释：[23,2,6,4,7]是大小为 5 的子数组，并且和为 42。
// 
//
// 
//
// 说明： 
//
// 
// 数组的长度不会超过 10,000 。 
// 你可以认为所有数字总和在 32 位有符号整数范围内。 
// 
// Related Topics 数学 动态规划 
// 👍 195 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) {
        return false;
    };
    let map = new Map(); let sum = 0;
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i];
        if (k !== 0) {
            sum = sum % k;
        }
        if (sum === 0 && i > 0) {
            return true
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true
            }
        } else {
            map.set(sum, i)
        }
    };
    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
