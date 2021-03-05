//请设计一个类，使该类的构造函数能够接收一个单词列表。然后再实现一个方法，该方法能够分别接收两个单词 word1 和 word2，并返回列表中这两个单词之间的
//最短距离。您的方法将被以不同的参数调用 多次。
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
// 注意:
//你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。
// Related Topics 设计 哈希表
// 👍 37 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.hash = new Map();
  for (let i = 0; i < words.length; i ++) {
    if (this.hash.has(words[i])) {
      this.hash.set(words[i], this.hash.get(words[i]).concat(i))
    } else {
      this.hash.set(words[i], [i])
    }
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let min = Infinity;
  const list1 = this.hash.get(word1);
  const list2 = this.hash.get(word2);
  for (let i = 0; i < list1.length; i ++) {
    for (let j = 0; j < list2.length; j ++) {
      min = Math.min(min, Math.abs(list2[j] - list1[i]))
    }
  }
  return min
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
//leetcode submit region end(Prohibit modification and deletion)
