//你和朋友玩一个叫做「翻转游戏」的游戏，游戏规则：给定一个只有 + 和 - 的字符串。你和朋友轮流将 连续 的两个 "++" 反转成 "--"。 当一方无法进
//行有效的翻转时便意味着游戏结束，则另一方获胜。
//
// 请你写出一个函数，来计算出第一次翻转后，字符串所有的可能状态。
//
//
//
// 示例：
//
// 输入: s = "++++"
//输出:
//[
//  "--++",
//  "+--+",
//  "++--"
//]
//
//
// 注意：如果不存在可能的有效操作，请返回一个空列表 []。
// Related Topics 字符串
// 👍 24 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  let arr = []; let num = 0; let idx = s.indexOf('++', num)
  while (idx !== -1) {
    let str = s.slice(0, idx) + '--' + s.slice(idx + 2);
    arr.push(str);
    num = idx + 1;
    idx = s.indexOf('++', num);
  }
  return arr
};
//leetcode submit region end(Prohibit modification and deletion)
