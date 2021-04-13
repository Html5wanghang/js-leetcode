//给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面
//的字符构成。如果可以构成，返回 true ；否则返回 false。 
//
// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。) 
//
// 
//
// 示例 1： 
//
// 
//输入：ransomNote = "a", magazine = "b"
//输出：false
// 
//
// 示例 2： 
//
// 
//输入：ransomNote = "aa", magazine = "ab"
//输出：false
// 
//
// 示例 3： 
//
// 
//输入：ransomNote = "aa", magazine = "aab"
//输出：true
// 
//
// 
//
// 提示： 
//
// 
// 你可以假设两个字符串均只含有小写字母。 
// 
// Related Topics 字符串 
// 👍 142 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length)  {
        return false
    } else {
        let result = true
        let hash = new Map ();
        for (let i = 0; i < magazine.length; i ++) {
            hash.set(magazine[i], hash.has(magazine[i]) ? hash.get(magazine[i]) + 1 : 1)
        }
        for (let i = 0; i < ransomNote.length; i ++) {
            if (hash.get(ransomNote[i]) >= 1) {
                hash.set(ransomNote[i], hash.get(ransomNote[i]) - 1 )
            } else {
                result = false;
                break
            }
        }
        return result
    }
};
//leetcode submit region end(Prohibit modification and deletion)
