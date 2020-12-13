//编写一个函数，以字符串作为输入，反转该字符串中的元音字母。 
//
// 
//
// 示例 1： 
//
// 输入："hello"
//输出："holle"
// 
//
// 示例 2： 
//
// 输入："leetcode"
//输出："leotcede" 
//
// 
//
// 提示： 
//
// 
// 元音字母不包含字母 "y" 。 
// 
// Related Topics 双指针 字符串 
// 👍 133 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let strArr = ['a','e','i','o','u','A','E','I','O','U']
    let arr = s.split('');
    let i = 0; let j = s.length - 1;
    while (i < j) {
       if (!strArr.includes(s[i])) {
           i ++;
       } else if (!strArr.includes(s[j])) {
           j --;
       } else {
           [arr[i],arr[j]] = [arr[j], arr[i]];
           i ++;
           j --;
       }

    }
    return arr.join('')
};

//leetcode submit region end(Prohibit modification and deletion)
