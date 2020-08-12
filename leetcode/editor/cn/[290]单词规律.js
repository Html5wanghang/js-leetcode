//给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
//
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
//
// 示例1:
//
// 输入: pattern = "abba", str = "dog cat cat dog"
//输出: true
//
// 示例 2:
//
// 输入:pattern = "abba", str = "dog cat cat fish"
//输出: false
//
// 示例 3:
//
// 输入: pattern = "aaaa", str = "dog cat cat dog"
//输出: false
//
// 示例 4:
//
// 输入: pattern = "abba", str = "dog dog dog dog"
//输出: false
//
// 说明:
//你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
// Related Topics 哈希表
// 👍 180 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const newArr = str.split(' ');
    let result = true;
    let obj1 = {}, obj2 = {};
    if (pattern.length !== newArr.length) {
      return false;
    }
    for (let i = 0 ; i < pattern.length; i ++) {
      if (pattern[i] in obj1) {
        if (obj1[pattern[i]] !== newArr[i]) {
          result = false;
          break
        }
      } else if ( newArr[i] in obj2) {
        result = false;
        break
      }
      else {
        obj1[pattern[i]] = newArr[i];
        obj2[newArr[i]] = null;
      }
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
