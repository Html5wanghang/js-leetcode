//给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
//
// 如果小数部分为循环小数，则将循环的部分括在括号内。
//
// 如果存在多个答案，只需返回 任意一个 。
//
// 对于所有给定的输入，保证 答案字符串的长度小于 104 。
//
//
//
// 示例 1：
//
//
//输入：numerator = 1, denominator = 2
//输出："0.5"
//
//
// 示例 2：
//
//
//输入：numerator = 2, denominator = 1
//输出："2"
//
//
// 示例 3：
//
//
//输入：numerator = 2, denominator = 3
//输出："0.(6)"
//
//
// 示例 4：
//
//
//输入：numerator = 4, denominator = 333
//输出："0.(012)"
//
//
// 示例 5：
//
//
//输入：numerator = 1, denominator = 5
//输出："0.2"
//
//
//
//
// 提示：
//
//
// -231 <= numerator, denominator <= 231 - 1
// denominator != 0
//
// Related Topics 哈希表 数学
// 👍 224 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator < 0 && denominator < 0) {
      return fractionToDecimal(-1 * numerator, - 1 * denominator)
    } else if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0) ) {
      return '-' + fractionToDecimal(Math.abs(numerator), Math.abs(denominator))
    }
    let str = ''; let hash = new Map(); let tempStr = ''
    if (numerator === 0) {
      return '0'
    }
    if (numerator >= denominator) {
      let num = Math.floor(numerator / denominator);
      if (num === numerator / denominator) {
        return String(num)
      }
      str += `${num}.`;
    } else {
      str += '0.'
    }
    numerator = numerator % denominator * 10; let idx = 0;
    while (numerator !== 0) {
        if (hash.has(numerator)) {
          if (hash.get(numerator) === 0) {
            str += `(${tempStr})`;
          } else {
            str += `${tempStr.slice(0, hash.get(numerator))}(${tempStr.slice(hash.get(numerator), tempStr.length)})`
          }
          break
        } else {
          hash.set(numerator, idx)
        }
        if (numerator < denominator) {
          numerator = numerator * 10;
          tempStr += '0'
        } else {
          tempStr += String(Math.floor(numerator / denominator));
          numerator = numerator % denominator * 10;
        }
        idx ++;
    }
    if (numerator === 0) {
      return str + tempStr
    }
    return str;
};
//leetcode submit region end(Prohibit modification and deletion)
