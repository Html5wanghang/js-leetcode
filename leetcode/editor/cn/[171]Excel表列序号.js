//给定一个Excel表格中的列名称，返回其相应的列序号。 
//
// 例如， 
//
//     A -> 1
//    B -> 2
//    C -> 3
//    ...
//    Z -> 26
//    AA -> 27
//    AB -> 28 
//    ...
// 
//
// 示例 1: 
//
// 输入: "A"
//输出: 1
// 
//
// 示例 2: 
//
// 输入: "AB"
//输出: 28
// 
//
// 示例 3: 
//
// 输入: "ZY"
//输出: 701 
//
// 致谢： 
//特别感谢 @ts 添加此问题并创建所有测试用例。 
// Related Topics 数学 
// 👍 211 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    for (let i = 0; i < columnTitle.length; i ++) {
        num += Math.pow(26, columnTitle.length - i - 1) * (columnTitle[i].charCodeAt(0) - 64);
    }
    return num
};
//leetcode submit region end(Prohibit modification and deletion)
