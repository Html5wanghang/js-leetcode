//n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
//
//
//
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
//
//
//
// 示例 1：
//
//
//输入：n = 4
//输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
//解释：如上图所示，4 皇后问题存在两个不同的解法。
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：[["Q"]]
//
//
//
//
// 提示：
//
//
// 1 <= n <= 9
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
//
//
//
// Related Topics 回溯算法
// 👍 730 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let arr = [];
  let list = [];
  for (let i = 0; i < n; i ++) {
    list.push(i);
  }

  let dfs = (arr1, arr2) => {
    if (arr2.length === n) {
      let newList = [];
      for (let i = 0; i < arr2.length; i ++) {
        let arr = Array(n).fill('.');
        arr[arr2[i]] = 'Q'
        newList.push(arr.join(''));
      }
      arr.push(newList);
    }
    for (let i = 0; i < arr1.length; i ++) {
      if (arr2.length === 0) {
        let arr1copy = arr1.slice();
        let item = arr1copy.splice(i, 1);
        let arr2new = arr2.concat(item);
        dfs(arr1copy, arr2new);
      } else {
        let result = arr2.some((value, index) => {
          return Math.abs(value - arr1[i]) === Math.abs(index - arr2.length);
        })
        if (!result) {
          let arr1copy = arr1.slice();
          let item = arr1copy.splice(i, 1);
          let arr2new = arr2.concat(item);
          dfs(arr1copy, arr2new);
        }
      }
    }
  };
  dfs(list, [])
  return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
