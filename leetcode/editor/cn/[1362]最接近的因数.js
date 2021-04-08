//给你一个整数 num，请你找出同时满足下面全部要求的两个整数：
//
//
// 两数乘积等于 num + 1 或 num + 2
// 以绝对差进行度量，两数大小最接近
//
//
// 你可以按任意顺序返回这两个整数。
//
//
//
// 示例 1：
//
// 输入：num = 8
//输出：[3,3]
//解释：对于 num + 1 = 9，最接近的两个因数是 3 & 3；对于 num + 2 = 10, 最接近的两个因数是 2 & 5，因此返回 3 & 3
//。
//
//
// 示例 2：
//
// 输入：num = 123
//输出：[5,25]
//
//
// 示例 3：
//
// 输入：num = 999
//输出：[40,25]
//
//
//
//
// 提示：
//
//
// 1 <= num <= 10^9
//
// Related Topics 数学
// 👍 19 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    const getArr = (num1) => {
      let numSqrt = Math.floor(Math.sqrt(num1));
      for (let i = numSqrt; i > 0; i -- ) {
        if (num1 % i === 0) {
          return [i, num1 / i]
        }
      }
    }
    let arr1 = getArr(num + 1);
    let arr2 = getArr(num + 2);
    if (Math.abs(arr1[0] - arr1[1]) > Math.abs(arr2[0] - arr2[1])) {
      return arr2
    } else {
      return arr1
    }
};
//leetcode submit region end(Prohibit modification and deletion)
