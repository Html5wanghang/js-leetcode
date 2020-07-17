//给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
//
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
//
//
//
// 示例 1：
//
// 输入：
//  s = "barfoothefoobarman",
//  words = ["foo","bar"]
//输出：[0,9]
//解释：
//从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
//输出的顺序不重要, [9,0] 也是有效答案。
//
//
// 示例 2：
//
// 输入：
//  s = "wordgoodgoodgoodbestword",
//  words = ["word","good","best","word"]
//输出：[]
//
// Related Topics 哈希表 双指针 字符串
// 👍 297 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let result = [];
  if (words.length === 0 || s.length === 0) {
    return result;
  }
  let totalLength = words[0].length * words.length;
  let obj = {};
  for (let i = 0; i < words.length; i ++) {
    if (words[i] in obj) {
      obj[words[i]] ++;
    } else {
      obj[words[i]] = 1;
    }
  }
  for (let j = 0; j <= s.length - totalLength; j ++) {
    let newObj = new Object({...obj});
    for (let k = 0; k < words.length; k ++) {
      let word = s.slice(j + k * words[0].length, j + (k + 1) * words[0].length);
      if (word in newObj) {
        if (newObj[word] === 1) {
          delete newObj[word]
        } else {
          newObj[word] --
        }
      } else {
        break;
      }
    }
    if (Object.keys(newObj).length === 0) {
      result.push(j);
    }
  }
  return result
};


//leetcode submit region end(Prohibit modification and deletion)
