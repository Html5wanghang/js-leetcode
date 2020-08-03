//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
//
//
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
//
// 示例:
//
// 输入: 5
//输出:
//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//]
// Related Topics 数组
// 👍 332 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }
  let row = 1;
  let arr = [[1]]

  while (row < numRows) {
    let tempArr = [1];
    for (let i = 0; i < arr[row - 1].length - 1; i ++) {
      tempArr.push(arr[row - 1][i] + arr[row - 1][i + 1])
    }
    tempArr.push(1);
    arr.push(tempArr);
    row++;
  }

  return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
