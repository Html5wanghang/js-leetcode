//给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
//请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
//
//
//
// 示例：
//
// matrix = [
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
//],
//k = 8,
//
//返回 13。
//
//
//
//
// 提示：
//你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2 。
// Related Topics 堆 二分查找
// 👍 504 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

let swap = (arr, index) => {
  let temp = index;
  let leftIndex = index * 2 + 1;
  let rightIndex = index * 2 + 2;
  if (arr[index] < arr[leftIndex]) {
    index = leftIndex
  }
  if (arr[index] < arr[rightIndex]) {
    index = rightIndex
  }
  if (index !== temp) {
    [arr[index],arr[temp]] = [arr[temp], arr[index]];
    swap(arr,index);
  }
}
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// 维护最大堆
var kthSmallest = function(matrix, k) {
  let arr = [];
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if (arr.length < k){
        arr.push(matrix[i][j]);
        let len = arr.length - 1;
        while (len !== 0 && arr[len] > arr[(len - 1) >> 1]) {
          [arr[len],arr[(len - 1) >> 1]] = [arr[(len - 1) >> 1], arr[len]];
          len = (len - 1) >> 1;
        }
      } else {
        if (matrix[i][j] < arr[0]) {
          arr[0] = matrix[i][j];
          swap(arr, 0)
        }
      }
    }
  };
  return arr[0]
};
//leetcode submit region end(Prohibit modification and deletion)
