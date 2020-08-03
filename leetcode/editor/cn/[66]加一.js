//给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
//
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
//
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//
// 示例 1:
//
// 输入: [1,2,3]
//输出: [1,2,4]
//解释: 输入数组表示数字 123。
//
//
// 示例 2:
//
// 输入: [4,3,2,1]
//输出: [4,3,2,2]
//解释: 输入数组表示数字 4321。
//
// Related Topics 数组
// 👍 516 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const length = digits.length;
  // console.log(length);
  for (let i = length - 1; i >= 0;  i--) {
    // console.log(i, digits[i])
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  if( digits[0] === 0) {
    digits.unshift(1);
  }
  return digits
};
// plusOne([0]);
//leetcode submit region end(Prohibit modification and deletion)
