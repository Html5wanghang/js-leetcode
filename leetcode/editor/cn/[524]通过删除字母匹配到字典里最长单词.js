//给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符
//串。如果答案不存在，则返回空字符串。 
//
// 示例 1: 
//
// 
//输入:
//s = "abpcplea", d = ["ale","apple","monkey","plea"]
//
//输出: 
//"apple"
// 
//
// 示例 2: 
//
// 
//输入:
//s = "abpcplea", d = ["a","b","c"]
//
//输出: 
//"a"
// 
//
// 说明: 
//
// 
// 所有输入的字符串只包含小写字母。 
// 字典的大小不会超过 1000。 
// 所有输入的字符串长度不会超过 1000。 
// 
// Related Topics 排序 双指针 
// 👍 136 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort((a, b) => {
        if (a.length === b.length) {
            return a > b ? 1 : -1
        }else {
            return b.length - a.length;
        }
    })
    const check = (str) => {
        let i = 0; let j = 0;
        while (i < s.length && j < str.length) {
            if (s[i] === str[j]) {
                i ++;
                j ++;
            } else {
                i++;
            }
        }
        return j === str.length
    }
    for (let i = 0; i < dictionary.length; i ++) {
        if (check(dictionary[i])) {
            return dictionary[i]
        }
    }
    return ''
};
//leetcode submit region end(Prohibit modification and deletion)
