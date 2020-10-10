//给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
//
// 示例 1:
//
//
//输入: [1,2,3]
//输出: 6
//
//
// 示例 2:
//
//
//输入: [1,2,3,4]
//输出: 24
//
//
// 注意:
//
//
// 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
// 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
//
// Related Topics 数组 数学
// 👍 178 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let arr = nums.sort((a, b ) => {return b - a});
    let newArr = arr.filter((cat) => {
      return cat !== 0;
    })
    if (newArr.length < 3) {
      return 0
    }
    let num = Math.max(
      newArr[0] * newArr [1] * newArr[2],
      newArr[0] * newArr[newArr.length -1] * newArr[newArr.length-2],
    );
    if (newArr.length === arr.length) {
      return num;
    }
    return Math.max(num, 0)
};
//leetcode submit region end(Prohibit modification and deletion)
