//给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。 
//
// word1 和 word2 是有可能相同的，并且它们将分别表示为列表中两个独立的单词。 
//
// 示例: 
//假设 words = ["practice", "makes", "perfect", "coding", "makes"]. 
//
// 输入: word1 = “makes”, word2 = “coding”
//输出: 1
// 
//
// 输入: word1 = "makes", word2 = "makes"
//输出: 3
// 
//
// 注意: 
//你可以假设 word1 和 word2 都在列表里。 
// Related Topics 数组 
// 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    let min = Infinity; let lastIndex = -1;
    for (let i = 0; i < words.length; i ++) {
        if (words[i] === word1 || words[i] === word2) {
            if (word1 === word2) {
                if (lastIndex !== - 1) {
                    min = Math.min(min, i - lastIndex)
                }
                lastIndex = i;
            } else {
                if (words[i] === words[lastIndex] || lastIndex === - 1) {
                    lastIndex = i;
                } else {
                    min = Math.min(min, i - lastIndex);
                    lastIndex = i;
                }
            }

        }
    }
    return min
};
//leetcode submit region end(Prohibit modification and deletion)
