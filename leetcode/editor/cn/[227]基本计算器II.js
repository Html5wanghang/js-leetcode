//实现一个基本的计算器来计算一个简单的字符串表达式的值。
//
// 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格 。 整数除法仅保留整数部分。
//
// 示例 1:
//
// 输入: "3+2*2"
//输出: 7
//
//
// 示例 2:
//
// 输入: " 3/2 "
//输出: 1
//
// 示例 3:
//
// 输入: " 3+5 / 2 "
//输出: 5
//
//
// 说明：
//
//
// 你可以假设所给定的表达式都是有效的。
// 请不要使用内置的库函数 eval。
//
// Related Topics 栈 字符串
// 👍 244 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let numStack = [];
  let symbolStack = [];
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === ' ' ){
      continue
    }
    if (['+','-','*', '/'].includes(s[i])) {
      symbolStack.push(s[i]);
    } else {
      let str = s[i];
      let j = i;
      while (!['+','-','*','/',' '].includes(s[j + 1]) && j + 1 < s.length) {
        str += s[j + 1];
        j++;
      }
      i = j;
      let num = Number(str);
      if (numStack.length === 0) {
        numStack.push(num);
      } else if (symbolStack[symbolStack.length - 1] === '*'){
        let newNum = numStack.pop();
        symbolStack.pop();
        num = newNum * num;
        numStack.push(num);
      } else if (symbolStack[symbolStack.length - 1] === '/') {
        let newNum = numStack.pop();
        symbolStack.pop();
        num = Math.floor(newNum / num);
        numStack.push(num);
      } else {
        numStack.push(num);
      }
    }
  }
  numStack.reverse();
  symbolStack.reverse();
  while (numStack.length !== 1) {
    let num1 = numStack.pop();
    let num2 = numStack.pop();
    let code = symbolStack.pop();
    if (code === '+') {
      let num = num1 + num2;
      numStack.push(num);
    } else {
      let num = num1 - num2;
      numStack.push(num);
    }

  }
  return numStack[0]

};
//leetcode submit region end(Prohibit modification and deletion)
