/**
 * @param {number} x
 * @return {boolean}
 */
//join(separator)
// 	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
var isPalindrome = function(x) {
  var result = false;
  var tempString = x.toString();
  var resultString = tempString.split('').reverse().join("");
  if (tempString === resultString) {
    result = true;
  }
  return result;
};
isPalindrome(-1451);