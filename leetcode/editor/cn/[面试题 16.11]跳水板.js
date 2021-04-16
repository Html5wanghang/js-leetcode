//你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方
//法，生成跳水板所有可能的长度。
//
// 返回的长度需要从小到大排列。
//
// 示例 1
//
// 输入：
//shorter = 1
//longer = 2
//k = 3
//输出： [3,4,5,6]
//解释：
//可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。
//
// 提示：
//
//
// 0 < shorter <= longer
// 0 <= k <= 100000
//
// Related Topics 递归 记忆化
// 👍 84 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let result = [];
    if (k === 0) {
      return result
    }
    if (shorter === longer) {
      return [shorter * k]
    }
    for (let i = 0; i <= k; i ++) {
      let num = (longer * i) +  (shorter * (k - i));
      // if (!result.includes(num)) {
        result.push(num)
      // }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
