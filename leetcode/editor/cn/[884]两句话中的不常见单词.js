//给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
//
// 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
//
// 返回所有不常用单词的列表。
//
// 您可以按任何顺序返回列表。
//
//
//
//
//
//
// 示例 1：
//
// 输入：A = "this apple is sweet", B = "this apple is sour"
//输出：["sweet","sour"]
//
//
// 示例 2：
//
// 输入：A = "apple apple", B = "banana"
//输出：["banana"]
//
//
//
//
// 提示：
//
//
// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A 和 B 都只包含空格和小写字母。
//
// Related Topics 哈希表
// 👍 62 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const arrA = A.split(' ');
  const arrB = B.split(' ');
  const arr = [];
  let obj = {};
  for (let i = 0; i < arrA.length; i ++) {
    if (arrA[i] in obj) {
      obj[arrA[i]] ++
    } else {
      obj[arrA[i]] = 1
    }
  }
  for (let j = 0; j < arrB.length; j ++) {
    if (arrB[j] in obj) {
      obj[arrB[j]] ++
    } else {
      obj[arrB[j]] = 1
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      arr.push(key);
    }
  }
  return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
