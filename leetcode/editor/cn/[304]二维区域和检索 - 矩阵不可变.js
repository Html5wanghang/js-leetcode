//给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
//
//
//上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
//
//
//
// 示例：
//
//
//给定 matrix = [
//  [3, 0, 1, 4, 2],
//  [5, 6, 3, 2, 1],
//  [1, 2, 0, 1, 5],
//  [4, 1, 0, 1, 7],
//  [1, 0, 3, 0, 5]
//]
//
//sumRegion(2, 1, 4, 3) -> 8
//sumRegion(1, 1, 2, 2) -> 11
//sumRegion(1, 2, 2, 4) -> 12
//
//
//
//
// 提示：
//
//
// 你可以假设矩阵不可变。
// 会多次调用 sumRegion 方法。
// 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。
//
// Related Topics 动态规划
// 👍 240 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.dp = [];
    for (let i = 0; i < matrix.length; i ++) {
      this.dp.push([]);
      let num = 0;
      for (let j = 0; j < matrix[i].length; j ++) {
        num += matrix[i][j]
        if (i === 0 ) {
          this.dp[i][j] = num
        } else {
          this.dp[i][j] = this.dp[i - 1][j] + num
        }
      }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (row1 === 0 && col1 === 0) {
    return this.dp[row2][col2]
  } else if (row1 === 0 && col1 !== 0) {
    return this.dp[row2][col2] - this.dp[row2][col1 - 1]
  } else if (row1 !== 0 && col1 === 0) {
    return this.dp[row2][col2] - this.dp[row1 - 1][col2]
  } else {
    return this.dp[row2][col2] - this.dp[row1 - 1][col2] - this.dp[row2][col1 - 1] + this.dp[row1 - 1][col1 - 1]
  }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
//leetcode submit region end(Prohibit modification and deletion)
