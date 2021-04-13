//指定年份 Y 和月份 M，请你帮忙计算出该月一共有多少天。
//
//
//
// 示例 1：
//
// 输入：Y = 1992, M = 7
//输出：31
//
//
// 示例 2：
//
// 输入：Y = 2000, M = 2
//输出：29
//
//
// 示例 3：
//
// 输入：Y = 1900, M = 2
//输出：28
//
//
//
//
// 提示：
//
//
// 1583 <= Y <= 2100
// 1 <= M <= 12
//
// 👍 7 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function(Y, M) {
    let hash = new Map([[1,31],[3,31], [4,30], [5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]]);
    if (M !== 2) {
      return hash.get(M)
    } else if (Y % 4 === 0 && !(Y % 400 !== 0 && Y % 100 === 0 )) {
      return 29
    } else {
      return 28
    }
};
//leetcode submit region end(Prohibit modification and deletion)
