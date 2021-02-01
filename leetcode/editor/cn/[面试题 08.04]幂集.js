//幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。 
//
// 说明：解集不能包含重复的子集。 
//
// 示例: 
//
//  输入： nums = [1,2,3]
// 输出：
//[
//  [3],
//  [1],
//  [2],
//  [1,2,3],
//  [1,3],
//  [2,3],
//  [1,2],
//  []
//]
// 
// Related Topics 位运算 数组 回溯算法 
// 👍 46 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = [];
    nums.sort((a, b) => {
        return a - b
    })
    let dfs = (num, list1, list2) => {
        if (num <= nums.length) {
            arr.push(list1);
        }
        for (let i = num; i < nums.length; i++) {
            if (!list2.includes(nums[i])) {
                list2.push(nums[i]);
                let newNum = i + 1;
                let newList1 = list1.slice().concat(nums[i]);
                dfs(newNum, newList1, []);
            }
        }

    }
    dfs(0,[], [])
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
