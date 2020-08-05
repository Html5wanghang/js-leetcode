//给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
//
//
//
//
//
//
// 示例 1：
//
// 输入："ab-cd"
//输出："dc-ba"
//
//
// 示例 2：
//
// 输入："a-bC-dEf-ghIj"
//输出："j-Ih-gfE-dCba"
//
//
// 示例 3：
//
// 输入："Test1ng-Leet=code-Q!"
//输出："Qedo1ct-eeLg=ntse-T!"
//
//
//
//
// 提示：
//
//
// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122
// S 中不包含 \ or "
//
// Related Topics 字符串
// 👍 55 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  if (S.length  === 1 ) {
    return S
  }
  let i = 0;
  let j = S.length - 1;
  const reg = /[a-zA-Z]/
  let StrArr = S.split('');
  while (i < j) {
    if (!reg.test(StrArr[i])) {
      i ++;
    }
    else if (!reg.test(StrArr[j])) {
      j --;
    } else {
      [StrArr[i], StrArr[j]] = [StrArr[j],StrArr[i]]
      i ++;
      j --;
    }
  }
  return StrArr.join('');
};
//leetcode submit region end(Prohibit modification and deletion)
