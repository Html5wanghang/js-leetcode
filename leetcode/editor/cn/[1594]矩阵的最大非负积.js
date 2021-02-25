//给你一个大小为 rows x cols 的矩阵 grid 。最初，你位于左上角 (0, 0) ，每一步，你可以在矩阵中 向右 或 向下 移动。
//
// 在从左上角 (0, 0) 开始到右下角 (rows - 1, cols - 1) 结束的所有路径中，找出具有 最大非负积 的路径。路径的积是沿路径访问的单
//元格中所有整数的乘积。
//
// 返回 最大非负积 对 109 + 7 取余 的结果。如果最大积为负数，则返回 -1 。
//
// 注意，取余是在得到最大积之后执行的。
//
//
//
// 示例 1：
//
// 输入：grid = [[-1,-2,-3],
//             [-2,-3,-3],
//             [-3,-3,-2]]
//输出：-1
//解释：从 (0, 0) 到 (2, 2) 的路径中无法得到非负积，所以返回 -1
//
//
// 示例 2：
//
// 输入：grid = [[1,-2,1],
//             [1,-2,1],
//             [3,-4,1]]
//输出：8
//解释：最大非负积对应的路径已经用粗体标出 (1 * 1 * -2 * -4 * 1 = 8)
//
//
// 示例 3：
//
// 输入：grid = [[1, 3],
//             [0,-4]]
//输出：0
//解释：最大非负积对应的路径已经用粗体标出 (1 * 0 * -4 = 0)
//
//
// 示例 4：
//
// 输入：grid = [[ 1, 4,4,0],
//             [-2, 0,0,1],
//             [ 1,-1,1,1]]
//输出：2
//解释：最大非负积对应的路径已经用粗体标出 (1 * -2 * 1 * -1 * 1 * 1 = 2)
//
//
//
//
// 提示：
//
//
// 1 <= rows, cols <= 15
// -4 <= grid[i][j] <= 4
//
// Related Topics 贪心算法 动态规划
// 👍 22 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
  let dp = []; let max , min; const num = Math.pow(10,9) + 7;
  for (let i = 0; i < grid.length; i ++) {
    dp.push([]);
    for (let j = 0; j < grid[i].length; j ++) {
      if (i === 0 && j === 0) {
        dp[i][j] = [grid[i][j]]
      } else if (i === 0 && j !== 0) {
        dp[i][j] = [dp[i][j - 1][0] * grid[i][j] % num]
      } else if (i !== 0 && j === 0) {
        dp[i][j] = [dp[i - 1][j][0] * grid[i][j] % num]
      } else {
        max = - Infinity; min = Infinity
        for (let k = 0 ; k < dp[i - 1][j].length; k ++) {
          max = Math.max(max, dp[i - 1][j][k] * grid[i][j])
          min = Math.min(min, dp[i - 1][j][k] * grid[i][j])
        }
        for (let m = 0; m < dp[i][j - 1].length; m ++) {
          max = Math.max(max, dp[i][j - 1][m] * grid[i][j]);
          min = Math.min(min, dp[i][j - 1][m] * grid[i][j]);
        }
        dp[i][j] = [min, max]
      }
    }
  }
  let arr = dp[dp.length - 1][dp[dp.length - 1].length - 1];
  if (arr[arr.length - 1] >= 0) {
    return arr[arr.length - 1] % num
  } else {
    return -1
  }
};

//leetcode submit region end(Prohibit modification and deletion)
