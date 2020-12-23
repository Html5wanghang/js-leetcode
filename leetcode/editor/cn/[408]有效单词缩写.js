//给一个 非空 字符串 s 和一个单词缩写 abbr ，判断这个缩写是否可以是给定单词的缩写。
//
// 字符串 "word" 的所有有效缩写为：
//
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1",
// "w1r1", "1o2", "2r1", "3d", "w3", "4"]
//
// 注意单词 "word" 的所有有效缩写仅包含以上这些。任何其他的字符串都不是 "word" 的有效缩写。
//
// 注意:
//假设字符串 s 仅包含小写字母且 abbr 只包含小写字母和数字。
//
// 示例 1:
//
// 给定 s = "internationalization", abbr = "i12iz4n":
//
//函数返回 true.
//
//
//
//
// 示例 2:
//
// 给定 s = "apple", abbr = "a2e":
//
//函数返回 false.
//
//
//
// Related Topics 字符串
// 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let m = 0;
  let abbrArr = [];
  for (let i = 0; i < abbr.length; i++) {
    if (abbr[i] >= 'a' && abbr[i] <= 'z')  {
      abbrArr.push(abbr[i])
    } else {
      if (abbrArr.length === 0) {
        if (abbr[i] === '0') {
          return false
        }
        abbrArr.push(abbr[i])
      } else {
        if (abbrArr[abbrArr.length - 1] >= 'a' && abbrArr[abbrArr.length - 1] <= 'z') {
          if (abbr[i] === '0') {
            return false
          }
          abbrArr.push(abbr[i])
        } else {
          let str = abbrArr.pop();
          str += abbr[i];
          abbrArr.push(str);
        }
      }
    }
  };
  for (let j = 0; j < abbrArr.length; j ++) {
    if (abbrArr[j] >= 'a' && abbrArr[j] <= 'z')  {
      if (word[m] !== abbrArr[j]) {
        return false;
      } else {
        m ++;
      }
    }  else {
      m += Number(abbrArr[j])
    }
  };
  return m === word.length;
};
//leetcode submit region end(Prohibit modification and deletion)
