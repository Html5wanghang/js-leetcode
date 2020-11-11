//写一个程序，输出从 1 到 n 数字的字符串表示。
//
// 1. 如果 n 是3的倍数，输出“Fizz”；
//
// 2. 如果 n 是5的倍数，输出“Buzz”；
//
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
//
// 示例：
//
// n = 15,
//
//返回:
//[
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
//]
//
// 👍 75 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i < n + 1; i ++) {
    const first = i % 3 === 0;
    const second = i % 5 === 0;
    if ( first && second) {
      arr.push('FizzBuzz');
    } else if (first && !second) {
      arr.push('Fizz');
    } else if (!first && second ) {
      arr.push('Buzz');
    } else {
      arr.push(String(i));
    }
  }
  return arr
};
//leetcode submit region end(Prohibit modification and deletion)
