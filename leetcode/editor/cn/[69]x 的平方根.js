//实现 int sqrt(int x) 函数。 
//
// 计算并返回 x 的平方根，其中 x 是非负整数。 
//
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。 
//
// 示例 1: 
//
// 输入: 4
//输出: 2
// 
//
// 示例 2: 
//
// 输入: 8
//输出: 2
//说明: 8 的平方根是 2.82842..., 
//     由于返回类型是整数，小数部分将被舍去。
// 
// Related Topics 数学 二分查找 
// 👍 579 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0; let end = x;
    let middle = (start + end) >> 1;
    if (x === 1 || x === 0) {
        return x
    }
    while (start <= end) {
        middle = (start + end) >> 1;
        let midNum = middle * middle;
        if (midNum === x) {
            return middle
        }
        if (midNum > x) {
            end = middle - 1;
        }
        if (midNum < x ) {
            start = middle + 1;
        }
    }
    if (middle * middle > x) {
        return middle - 1;
    } else {
        return middle
    }
};
//leetcode submit region end(Prohibit modification and deletion)
