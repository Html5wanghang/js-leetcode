//给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。 
//
// 说明：解集不能包含重复的子集。 
//
// 示例: 
//
// 输入: [1,2,2]
//输出:
//[
//  [2],
//  [1],
//  [1,2,2],
//  [2,2],
//  [1,2],
//  []
//] 
// Related Topics 数组 回溯算法 
// 👍 375 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let arr = [];
    nums.sort((a, b) => {
        return a - b;
    })
    let dfs = (num, list1, list2) => {
        if (num <= nums.length) {
            arr.push(list1);
        }
        for (let i = num; i < nums.length; i ++) {
            if (!list2.includes(nums[i])) {
                let newNum = i + 1;
                let newList1 = list1.concat(nums[i]);
                list2.push(nums[i])
                dfs(newNum, newList1, []);
            }
        }
    };
    dfs(0,[], []);
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
