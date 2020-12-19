//编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性： 
//
// 
// 每行中的整数从左到右按升序排列。 
// 每行的第一个整数大于前一行的最后一个整数。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
//输出：true
// 
//
// 示例 2： 
//
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
//输出：false
// 
//
// 示例 3： 
//
// 
//输入：matrix = [], target = 0
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// m == matrix.length 
// n == matrix[i].length 
// 0 <= m, n <= 100 
// -104 <= matrix[i][j], target <= 104 
// 
// Related Topics 数组 二分查找 
// 👍 289 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    if (matrix[matrix.length - 1].length === 0) {
        return false
    }
    if (matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] < target || matrix[0][0] > target) {
        return false
    }
    let startY = 0, startX = 0, endY = matrix.length - 1, endX = matrix.length > 0 ? matrix[0].length : 0, Y = 0, X = 0;
    while (startY < endY) {
        Y = (startY + endY) >> 1;
        if (matrix[Y][matrix[Y].length - 1] < target) {
            if (matrix[Y + 1][matrix[Y + 1].length - 1] < target) {
                startY = Y + 1;
            } else if (matrix[Y + 1][matrix[Y + 1].length - 1] > target) {
                Y += 1;
                break;
            } else {
                return true;
            }
        } else if (matrix[Y][matrix[Y].length - 1] > target) {
            if (Y === 0) {
                break
            }
            if (matrix[Y - 1][matrix[Y - 1].length - 1] < target) {
                break;
            } else if (matrix[Y - 1][matrix[Y - 1].length - 1] > target) {
                endY = Y;
            } else {
                return true;
            }
        } else {
            return true
        }
    }
    while (startX < endX) {
        X = (startX + endX) >> 1;
        if (matrix[Y][X] < target) {
            startX = X + 1;
        } else if (matrix[Y][X] > target) {
            endX = X;
        } else {
            return true
        }
    };
    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
