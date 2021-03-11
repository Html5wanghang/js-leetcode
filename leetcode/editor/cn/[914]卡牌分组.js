//给定一副牌，每张牌上都写着一个整数。 
//
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组： 
//
// 
// 每组都有 X 张牌。 
// 组内所有的牌上都写着相同的整数。 
// 
//
// 仅当你可选的 X >= 2 时返回 true。 
//
// 
//
// 示例 1： 
//
// 输入：[1,2,3,4,4,3,2,1]
//输出：true
//解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// 
//
// 示例 2： 
//
// 输入：[1,1,1,2,2,2,3,3]
//输出：false
//解释：没有满足要求的分组。
// 
//
// 示例 3： 
//
// 输入：[1]
//输出：false
//解释：没有满足要求的分组。
// 
//
// 示例 4： 
//
// 输入：[1,1]
//输出：true
//解释：可行的分组是 [1,1]
// 
//
// 示例 5： 
//
// 输入：[1,1,2,2,2,2]
//输出：true
//解释：可行的分组是 [1,1]，[2,2]，[2,2]
// 
//
// 
//提示： 
//
// 
// 1 <= deck.length <= 10000 
// 0 <= deck[i] < 10000 
// 
//
// 
// Related Topics 数组 数学 
// 👍 217 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let hash = new Map ();
    for (let i = 0; i < deck.length; i ++) {
        if (hash.has(deck[i])) {
            hash.set(deck[i], hash.get(deck[i]) + 1);
        } else {
            hash.set(deck[i], 1)
        }
    }
    const getNum = (a, b) => {
        return a === 0 ? b : getNum(b % a, a)
    };
    let list = [...hash];
    let num = list[0][1];
    for (let i = 1; i < list.length; i ++) {
        if (num === 1) {
            return false
        } else {
            num = getNum(num, list[i][1])
        }
    }
    return num >= 2;
};
//leetcode submit region end(Prohibit modification and deletion)
