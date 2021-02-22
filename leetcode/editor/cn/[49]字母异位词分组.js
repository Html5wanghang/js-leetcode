//给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
//
// 示例:
//
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
//输出:
//[
//  ["ate","eat","tea"],
//  ["nat","tan"],
//  ["bat"]
//]
//
// 说明：
//
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//
// Related Topics 哈希表 字符串
// 👍 660 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let list = [];
    for (let i = 0; i < strs.length; i ++) {
        let arr = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j ++) {
            arr[strs[i][j].codePointAt(0) - 97] ++;
        }
        let str = arr.join('/');
        if (map.has(str)) {
            map.set(str, map.get(str).concat(strs[i]))
        } else {
            map.set(str, [strs[i]])
        }
    }
    map.forEach((value) => {
        list.push(value)
    })
    return list
};
//leetcode submit region end(Prohibit modification and deletion)
