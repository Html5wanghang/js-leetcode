//输入一个字符串，打印出该字符串中字符的所有排列。 
//
// 
//
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 
//
// 
//
// 示例: 
//
// 输入：s = "abc"
//输出：["abc","acb","bac","bca","cab","cba"]
// 
//
// 
//
// 限制： 
//
// 1 <= s 的长度 <= 8 
// Related Topics 回溯算法 
// 👍 155 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let arr = [];
    if (s.length === 0) {
        return [];
    }
    let dfs = (string, str) => {
        if (str.length === s.length) {
            arr.push(str);
            return;
        }
        let set = new Set();
        for (let i = 0; i < string.length; i ++) {
            if (set.has(string[i])) {
                continue
            }
            let Arr = string.split('');
            Arr.splice(i, 1);
            let newString = Arr.join('');
            let result = str + string[i];
            dfs(newString,result);
            set.add(string[i])
        }
    };
    dfs(s, '');
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
