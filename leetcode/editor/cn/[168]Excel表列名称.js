//给定一个正整数，返回它在 Excel 表中相对应的列名称。 
//
// 例如， 
//
//     1 -> A
//    2 -> B
//    3 -> C
//    ...
//    26 -> Z
//    27 -> AA
//    28 -> AB 
//    ...
// 
//
// 示例 1: 
//
// 输入: 1
//输出: "A"
// 
//
// 示例 2: 
//
// 输入: 28
//输出: "AB"
// 
//
// 示例 3: 
//
// 输入: 701
//输出: "ZY"
// 
// Related Topics 数学 
// 👍 328 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let str = '';
    while (columnNumber > 0) {
        let num = columnNumber % 26;
        if (columnNumber % 26 === 0) {
            str = 'Z' + str;
            columnNumber = columnNumber / 26 - 1;
        }  else {
            str = String.fromCharCode(96 + num).toLocaleUpperCase() + str;
            columnNumber -= num;
            columnNumber /= 26
        }
    }
    return str
};
//leetcode submit region end(Prohibit modification and deletion)
