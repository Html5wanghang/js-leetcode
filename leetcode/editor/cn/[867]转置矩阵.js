    //给定一个矩阵 A， 返回 A 的转置矩阵。
//
// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。 
//
// 
//
// 示例 1： 
//
// 
//输入：[[1,2,3],[4,5,6],[7,8,9]]
//输出：[[1,4,7],[2,5,8],[3,6,9]]
// 
//
// 示例 2： 
//
// 
//输入：[[1,2,3],[4,5,6]]
//输出：[[1,4],[2,5],[3,6]]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= A.length <= 1000 
// 1 <= A[0].length <= 1000 
// 
// Related Topics 数组 
// 👍 143 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    if (matrix.length === 0) {
        return []
    }
    let result = [];
    let m = matrix.length; let n = matrix[0].length;
    for (let i = 0; i < n; i ++) {
        result.push([]);
        for (let j = 0; j < m; j ++) {
            result[i][j] = matrix[j][i]
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
