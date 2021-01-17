//找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。 
//
// 说明： 
//
// 
// 所有数字都是正整数。 
// 解集不能包含重复的组合。 
// 
//
// 示例 1: 
//
// 输入: k = 3, n = 7
//输出: [[1,2,4]]
// 
//
// 示例 2: 
//
// 输入: k = 3, n = 9
//输出: [[1,2,6], [1,3,5], [2,3,4]]
// 
// Related Topics 数组 回溯算法 
// 👍 248 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr = [];
    if (n > 45) {
        return arr
    }
    let dfs = (dfsArr, num, total) => {
        for (let i = num + 1; i <= 9; i++) {
            let list = dfsArr.concat(i);
            let _total = total + i;
            if (_total === n && list.length === k) {
                arr.push(list);
                i = 10;
                break;
            }
            if (_total > n || list.length > k) {
                i = 10;
                break;
            }
            dfs(list, i, _total)
        }
    };
    dfs([], 0, 0);
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
