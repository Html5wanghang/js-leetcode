//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [1,1,2]
//输出：
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
// 
//
// 示例 2： 
//
// 
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 8 
// -10 <= nums[i] <= 10 
// 
// Related Topics 回溯算法 
// 👍 570 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let arr = [];
    let dfs = (list1, list2, list3) => {
        // console.log(list1,list2)
        if (list2.length === nums.length) {
            arr.push(list2);
        } else {
            for (let i = 0; i < list1.length; i ++) {
                if (!list3.includes(list1[i])) {
                    let copy = list1.slice();
                    copy.splice(i, 1);
                    let newList2 = list2.concat(list1[i]);
                    list3.push(list1[i]);

                    dfs(copy, newList2, [])
                }

            }
        }
    };
    dfs(nums, [],[])
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
