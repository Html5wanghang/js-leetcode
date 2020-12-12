//给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
//
// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
//
//
//
// 示例 1：
//
//
//
// 输入：text = "nlaebolko"
//输出：1
//
//
// 示例 2：
//
//
//
// 输入：text = "loonbalxballpoon"
//输出：2
//
//
// 示例 3：
//
// 输入：text = "leetcode"
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= text.length <= 10^4
// text 全部由小写英文字母组成
//
// Related Topics 哈希表 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let obj = {
    "b": 0,
    "a": 0,
    "l": 0,
    "o": 0,
    "n": 0
  };
  let min = 0;
  for (let i = 0; i < text.length; i ++) {
    if(text[i] in obj) {
      if (text[i] === 'l' || text[i] === 'o') {
        obj[text[i]] += 0.5;
      } else {
        obj[text[i]] += 1;
      }
    }
  }

  const arr = Object.values(obj).sort(function (a, b) {
    return a - b;
  });
  return Math.floor(arr[0]);
};
//leetcode submit region end(Prohibit modification and deletion)
