//给你一个整数数组 digits，你可以通过按任意顺序连接其中某些数字来形成 3 的倍数，请你返回所能得到的最大的 3 的倍数。 
//
// 由于答案可能不在整数数据类型范围内，请以字符串形式返回答案。 
//
// 如果无法得到答案，请返回一个空字符串。 
//
// 
//
// 示例 1： 
//
// 输入：digits = [8,1,9]
//输出："981"
// 
//
// 示例 2： 
//
// 输入：digits = [8,6,7,1,0]
//输出："8760"
// 
//
// 示例 3： 
//
// 输入：digits = [1]
//输出：""
// 
//
// 示例 4： 
//
// 输入：digits = [0,0,0,0,0,0]
//输出："0"
// 
//
// 
//
// 提示： 
//
// 
// 1 <= digits.length <= 10^4 
// 0 <= digits[i] <= 9 
// 返回的结果不应包含不必要的前导零。 
// 
// Related Topics 数学 动态规划 
// 👍 50 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    let oneArr = []; let twoArr = [];
    const pushItem = (list, num) => {
        if (list.length === 2) {
            if (num < list[1]) {
                list[1] = num;
                if (list[0] > list[1]) {
                    [list[0], list[1]] = [list[1], list[0]]
                }
            }
        } else if (list.length === 1) {
            list.push(num);
            if (list[0] > list[1]) {
                [list[0], list[1]] = [list[1], list[0]]
            }
        } else if (list.length === 0) {
            list.push(num)
        }
    };
    digits.sort((a,b) => {
        return b - a;
    })
    let total = 0;
    for (let i = 0; i < digits.length; i ++) {
        if (digits[i] % 3 === 1) {
            total += 1;
            pushItem(oneArr, digits[i])
        } else if (digits[i] % 3 === 2) {
            total += 2;
            pushItem(twoArr, digits[i])
        }
    }
    total = total % 3;
    if (total === 1) {
        if (oneArr.length === 0) {
            let idx1 = digits.indexOf(twoArr[0]);
            digits.splice(idx1, 1);
            let idx2 = digits.indexOf(twoArr[1]);
            digits.splice(idx2, 1);
        } else {
            let idx = digits.indexOf(oneArr[0]);
            digits.splice(idx, 1);
        }
    } else if (total === 2) {
        if (twoArr.length === 0) {
            let idx1 = digits.indexOf(oneArr[0]);
            digits.splice(idx1,1);
            let idx2 = digits.indexOf(oneArr[1]);
            digits.splice(idx2, 1)
        } else {
            let idx = digits.indexOf(twoArr[0]);
            digits.splice(idx,1)
        }
    }
    return digits.join('').startsWith('0') ? '0' : digits.join('')

};
//leetcode submit region end(Prohibit modification and deletion)
