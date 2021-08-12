//给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。
//
// 有效的表达式需遵循以下约定：
//
//
// "t"，运算结果为 True
// "f"，运算结果为 False
// "!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
// "&(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
// "|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）
//
//
//
//
// 示例 1：
//
// 输入：expression = "!(f)"
//输出：true
//
//
// 示例 2：
//
// 输入：expression = "|(f,t)"
//输出：true
//
//
// 示例 3：
//
// 输入：expression = "&(t,f)"
//输出：false
//
//
// 示例 4：
//
// 输入：expression = "|(&(t,f,t),!(t))"
//输出：false
//
//
//
//
// 提示：
//
//
// 1 <= expression.length <= 20000
// expression[i] 由 {'(', ')', '&', '|', '!', 't', 'f', ','} 中的字符组成。
// expression 是以上述形式给出的有效表达式，表示一个布尔值。
//
// Related Topics 栈 递归 字符串
// 👍 49 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

var getArr = (str) => {
  let arr = [-1];
  let idx = 0;
  for (let i = 0; i < str.length; i ++ ) {
    if (str[i] === ',' && idx === 0) {
      arr.push(i)
    } else if (str[i] === '(') {
      idx ++
    } else if (str[i] === ')') {
      idx --;
    }
  }
  let result = [];
  for (let i = 0; i < arr.length - 1; i ++) {
    result.push(str.slice(arr[i] + 1, arr[i + 1]))
  }
  result.push(str.slice(arr[arr.length -1] + 1));
  // console.log(str,'str',result, 'result' )
  return result;
}
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {

    if (expression === 't') {
      return true;
    } else if (expression === 'f') {
      return false
    } else if (expression.startsWith('!')) {
      let str = expression.slice(2, -1);
      return !parseBoolExpr(str)
    } else if (expression.startsWith('&')) {
      let str = expression.slice(2, -1);
      let result = true; let arr = getArr(str)
      // console.log(arr,'arr1')

      for (let i = 0; i < arr.length; i ++) {
        if (!parseBoolExpr(arr[i])) {
          result = false;
          break
        }
      }
    return result
    } else if (expression.startsWith('|')) {
      let str = expression.slice(2, -1);
      let result = false; let arr = getArr(str)
      // console.log(arr,'arr2')
      for (let i = 0; i < arr.length; i ++) {
        if (parseBoolExpr(arr[i])) {
          result = true;
          break
        }
      }
      return result
    }
};
//leetcode submit region end(Prohibit modification and deletion)
