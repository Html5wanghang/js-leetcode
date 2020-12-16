//给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。
//
// 示例:
//假设 words = ["practice", "makes", "perfect", "coding", "makes"]
//
// 输入: word1 = “coding”, word2 = “practice”
//输出: 3
//
//
// 输入: word1 = "makes", word2 = "coding"
//输出: 1
//
//
// 注意:
//你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。
// Related Topics 数组
// 👍 45 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
  let lastWord1 = null;
  let lastWord2 = null;
  let result = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      lastWord1 = i;
      if (lastWord2 !== null) {
        result = Math.min(result, Math.abs(lastWord1 - lastWord2))
      }
    } else if (words[i] === word2) {
      lastWord2 = i;
      if (lastWord1 !== null) {
        result = Math.min(result, Math.abs(lastWord1 - lastWord2))
      }
    }
  };
  return result
};
//leetcode submit region end(Prohibit modification and deletion)
