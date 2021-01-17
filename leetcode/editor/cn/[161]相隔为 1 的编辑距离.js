//给定两个字符串 s 和 t，判断他们的编辑距离是否为 1。 
//
// 注意： 
//
// 满足编辑距离等于 1 有三种可能的情形： 
//
// 
// 往 s 中插入一个字符得到 t 
// 从 s 中删除一个字符得到 t 
// 在 s 中替换一个字符得到 t 
// 
//
// 示例 1： 
//
// 输入: s = "ab", t = "acb"
//输出: true
//解释: 可以将 'c' 插入字符串 s 来得到 t。
// 
//
// 示例 2: 
//
// 输入: s = "cab", t = "ad"
//输出: false
//解释: 无法通过 1 步操作使 s 变为 t。 
//
// 示例 3: 
//
// 输入: s = "1203", t = "1213"
//输出: true
//解释: 可以将字符串 s 中的 '0' 替换为 '1' 来得到 t。 
// Related Topics 字符串 
// 👍 62 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let num = s.length - t.length;
    let i = 0;
    let j = 0;
    let total = 0;
    if (num > 1 || num < -1) {
        return false
    }
    while (i < s.length || j < t.length) {
        if (s[i] === t[j]) {
            i ++;
            j ++;
        } else if (total === 1) {
            total ++;
            break
        } else {
            if (num === 1) {
                i ++;
            } else if (num === 0) {
                i ++;
                j ++;
            } else {
                j ++;
            }
            total++;
        }
    }
    return total === 1
};
//leetcode submit region end(Prohibit modification and deletion)
