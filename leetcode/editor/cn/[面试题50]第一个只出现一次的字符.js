//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//
// 示例:
//
// s = "abaccdeff"
//返回 "b"
//
//s = ""
//返回 " "
//
//
//
//
// 限制：
//
// 0 <= s 的长度 <= 50000
// Related Topics 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = Object.create(null);
  for(let i = 0; i < s.length;  i ++) {
    if (s[i] in map) {
      map[s[i]] = false;
    } else {
      map[s[i]] = true;
    }
  }
  for (let j in map) {
    if (map[j]) {
      return j;
    }
  }
  return " ";
};
//leetcode submit region end(Prohibit modification and deletion)
// 结题思路：
// 将值依次存储在哈希里，如果已存在，则为false，不存在，则为true，遍历哈希，寻找第一个为true的值
