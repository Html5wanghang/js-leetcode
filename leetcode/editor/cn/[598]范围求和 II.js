//给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。
//
// 操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素
// M[i][j] 的值都增加 1。
//
// 在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。
//
// 示例 1:
//
//
//输入:
//m = 3, n = 3
//operations = [[2,2],[3,3]]
//输出: 4
//解释:
//初始状态, M =
//[[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
//
//执行完操作 [2,2] 后, M =
//[[1, 1, 0],
// [1, 1, 0],
// [0, 0, 0]]
//
//执行完操作 [3,3] 后, M =
//[[2, 2, 1],
// [2, 2, 1],
// [1, 1, 1]]
//
//M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
//
//
// 注意:
//
//
// m 和 n 的范围是 [1,40000]。
// a 的范围是 [1,m]，b 的范围是 [1,n]。
// 操作数目不超过 10000。
//
// Related Topics 数学
// 👍 52 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let min1 = m;
  let min2 = n;
  for (let i = 0; i < ops.length; i ++) {
    min1 = min1 > ops[i][0] ? ops[i][0] : min1;
    min2 = min2 > ops[i][1] ? ops[i][1] : min2;
  }
  return min1 * min2;
};
//leetcode submit region end(Prohibit modification and deletion)
