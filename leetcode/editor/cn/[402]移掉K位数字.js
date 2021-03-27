//给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。 
//
// 注意: 
//
// 
// num 的长度小于 10002 且 ≥ k。 
// num 不会包含任何前导零。 
// 
//
// 示例 1 : 
//
// 
//输入: num = "1432219", k = 3
//输出: "1219"
//解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
// 
//
// 示例 2 : 
//
// 
//输入: num = "10200", k = 1
//输出: "200"
//解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 
//
// 示例 3 : 
//
// 
//输入: num = "10", k = 2
//输出: "0"
//解释: 从原数字移除所有的数字，剩余为空就是0。
// 
// Related Topics 栈 贪心算法 
// 👍 535 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = []; let idx = 0;
    if (num.length <= k) {
        return '0'
    }
    while (k > 0 && idx < num.length) {
        while (num[idx] < stack[stack.length - 1]) {
            if (k > 0) {
                k --;
                stack.pop();
            } else {
                break
            }
        }
        if (k === 0) {
            break
        }
        if ((num[idx] === '0' && stack.length !== 0) || num[idx] !== '0') {
            stack.push(num[idx]);
        }
        idx ++;
    }
    if (k === 0) {
        let newStr = stack.join('') + num.slice(idx);
        let index = 0;
        while (newStr[index] === '0') {
            index ++;
        }
        if (index === newStr.length) {
            return '0'
        } else {
            return newStr.slice(index);
        }

    } else {
        return stack.slice(0, stack.length - k).join('')
    }
};
//leetcode submit region end(Prohibit modification and deletion)
