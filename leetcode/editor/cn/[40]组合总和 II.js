//给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。 
//
// candidates 中的每个数字在每个组合中只能使用一次。 
//
// 说明： 
//
// 
// 所有数字（包括目标数）都是正整数。 
// 解集不能包含重复的组合。 
// 
//
// 示例 1: 
//
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
//所求解集为:
//[
//  [1, 7],
//  [1, 2, 5],
//  [2, 6],
//  [1, 1, 6]
//]
// 
//
// 示例 2: 
//
// 输入: candidates = [2,5,2,1,2], target = 5,
//所求解集为:
//[
//  [1,2,2],
//  [5]
//] 
// Related Topics 数组 回溯算法 
// 👍 478 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => {
        return a - b;
    })
    let arr = [];
    let dfs = (list1, list2,num, total) => {
        if (total === target) {
            arr.push(list1);
        } else if (total < target){
            for (let i = num; i < candidates.length; i ++) {
                if (!list2.includes(candidates[i])) {
                    let newTotal = total + candidates[i];
                    let newList1 = list1.concat(candidates[i]);a
                    let newNum = i + 1;
                    list2.push(candidates[i]);
                    dfs(newList1, [], newNum, newTotal)
                }
            }
        }

    };
    dfs([], [], 0,0)
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
