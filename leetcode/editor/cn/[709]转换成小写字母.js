//实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
//
//
//
// 示例 1：
//
//
//输入: "Hello"
//输出: "hello"
//
// 示例 2：
//
//
//输入: "here"
//输出: "here"
//
// 示例 3：
//
//
//输入: "LOVELY"
//输出: "lovely"
//
// Related Topics 字符串
// 👍 125 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let stringHash = {
    "A": 'a',
    "B": 'b',
    "C": 'c',
    "D": 'd',
    "E": 'e',
    "F": 'f',
    "G": 'g',
    "H": 'h',
    "I": 'i',
    "J": 'j',
    "K": 'k',
    "L": 'l',
    "M": 'm',
    "N": 'n',
    "O": 'o',
    "P": 'p',
    "Q": 'q',
    "R": 'r',
    "S": 's',
    "T": 't',
    "U": 'u',
    "V": 'v',
    "W": 'w',
    "X": 'x',
    "Y": 'y',
    "Z": 'z',
  };
  for(let i = 0; i <str.length; i ++) {
    if (str[i] in stringHash) {
      str = str.replace(str[i], stringHash[str[i]]);
    }
  }
  return str;
};
//leetcode submit region end(Prohibit modification and deletion)
