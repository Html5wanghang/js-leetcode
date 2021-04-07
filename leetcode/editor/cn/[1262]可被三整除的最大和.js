//给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和。 
//
// 
// 
//
// 
//
// 示例 1： 
//
// 输入：nums = [3,6,5,1,8]
//输出：18
//解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。 
//
// 示例 2： 
//
// 输入：nums = [4]
//输出：0
//解释：4 不能被 3 整除，所以无法选出数字，返回 0。
// 
//
// 示例 3： 
//
// 输入：nums = [1,2,3,4,4]
//输出：12
//解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 4 * 10^4 
// 1 <= nums[i] <= 10^4 
// 
// Related Topics 动态规划 
// 👍 118 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let total = 0;
    let oneArr = []; let twoArr = [];
    const pushItem = (list, num) => {
        if (list.length === 2) {
            if (num < list[1]) {
                list[1] = num;
                if (list[0] > list[1]) {
                    [list[0], list[1]] = [list[1], list[0]]
                }
            }
        } else if (list.length === 1) {
            list.push(num);
            if (list[0] > list[1]) {
                [list[0], list[1]] = [list[1], list[0]]
            }
        } else if (list.length === 0) {
            list.push(num)
        }
    }
    for (let i = 0; i < nums.length; i ++ ) {
        if (nums[i] % 3 === 1) {
            pushItem(oneArr, nums[i])
        } else if (nums[i] % 3 === 2) {
            pushItem(twoArr, nums[i])
        }
        total += nums[i]
    }
    if (total % 3 === 0) {
        return total
    } else if (total % 3 === 1) {
        if (oneArr.length === 0) {
            return total - twoArr[0] - twoArr[1]
        } else if (twoArr.length < 2) {
            return total - oneArr[0]
        } else {
            return Math.max(total - twoArr[0] - twoArr[1], total - oneArr[0])
        }
    } else if (total % 3 === 2) {
        if (twoArr.length === 0) {
            return total - oneArr[0] - oneArr[1]
        } else if (oneArr.length < 2) {
            return total - twoArr[0]
        } else {
            return Math.max(total - oneArr[0] - oneArr[1], total - twoArr[0])
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
