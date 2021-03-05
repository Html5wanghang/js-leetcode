//中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。
//
// 找到所有长度为 n 的中心对称数。
//
// 示例 :
//
// 输入:  n = 2
//输出: ["11","69","88","96"]
//
// Related Topics 递归 数学
// 👍 54 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  let result = [''];
  if (n % 2 === 1) {
    n --;
    result = ['1','0', '8']
  }
  const str = [
    ['1','1'],
    ['8','8'],
    ['6','9'],
    ['9','6'],
    ['0', '0']
  ]
  while (n > 0) {
    let temp = [];
    for (let i = 0; i < result.length; i ++) {
      for (let j = 0; j < str.length; j ++) {
        if (n !== 2) {
          temp.push(
            str[j][0] + result[i] +  str[j][1]
          )
        } else {
          if (j !== str.length - 1) {
            temp.push(
              str[j][0] + result[i] +  str[j][1]
            )
          }
        }

      }
    }
    result = temp;
    n -= 2
  }
  return result
};
//leetcode submit region end(Prohibit modification and deletion)
