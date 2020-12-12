//给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
//
// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
//
// 回文串不一定是字典当中的单词。
//
//
//
// 示例1：
//
// 输入："tactcoa"
//输出：true（排列有"tacocat"、"atcocta"，等等）
//
//
//
// Related Topics 哈希表 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */

var canPermutePalindrome = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (s[i] in map) {
      delete s[i];
    } else {
      map[s[i]] = null;
    }
  }
  return Object.keys(map).length <= 1;
};
//leetcode submit region end(Prohibit modification and deletion)
//  我的结题思路，回文串要满足，奇数的数量只能为0或1，偶数不限,遍历字符串，基数次出现有该字符串属性，偶数次出现没有该字符串属性，判断对象的属性长度，小于1则是回文数

