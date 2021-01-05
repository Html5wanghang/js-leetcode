//给定一个 没有重复 数字的序列，返回其所有可能的全排列。
//
// 示例:
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]
// Related Topics 回溯算法
// 👍 1061 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let arr = [];
  let dfs = (dfsArr, dfsResult) => {
    if (dfsResult.length === nums.length) {
      arr.push(dfsResult);
      return;
    }
    for (let i = 0; i < dfsArr.length; i ++) {
      let Arr = dfsArr.slice(0, i).concat(dfsArr.slice(i + 1));
      let result =  dfsResult.concat([dfsArr[i]]);
      dfs(Arr,result)
    }
  };
  dfs(nums, []);
  return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
