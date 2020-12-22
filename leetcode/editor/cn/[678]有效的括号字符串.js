//给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则： 
//
// 
// 任何左括号 ( 必须有相应的右括号 )。 
// 任何右括号 ) 必须有相应的左括号 ( 。 
// 左括号 ( 必须在对应的右括号之前 )。 
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。 
// 一个空字符串也被视为有效字符串。 
// 
//
// 示例 1: 
//
// 
//输入: "()"
//输出: True
// 
//
// 示例 2: 
//
// 
//输入: "(*)"
//输出: True
// 
//
// 示例 3: 
//
// 
//输入: "(*))"
//输出: True
// 
//
// 注意: 
//
// 
// 字符串大小将在 [1，100] 范围内。 
// 
// Related Topics 字符串 
// 👍 186 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
    let leftStack = [];
    let anyStack = [];
    let arr = s.split('');
    for (let i = 0;i < s.length; i ++) {
        if (s[i] === '(') {
            leftStack.push(i);
        } else if (s[i] === ')') {
            if (leftStack.length > 0) {
                arr[leftStack[leftStack.length - 1]] = '';
                leftStack.pop();
                arr[i] = '';
            } else {
                if (anyStack.length > 0) {
                    arr[anyStack[anyStack.length - 1]] = '';
                    anyStack.pop();
                    arr[i] = '';
                } else {
                    return false;
                }
            }
        } else {
            anyStack.push(i);
        }
    }
    if (leftStack.length > anyStack.length) {
        return false
    } else {
        let result = true;
        while (leftStack.length > 0) {
            if (leftStack[leftStack.length - 1] > anyStack[anyStack.length - 1]) {
                result =false;
                break
            } else {
                leftStack.pop();
                anyStack.pop();
            }
        };
        return result
    }

};
//leetcode submit region end(Prohibit modification and deletion)
