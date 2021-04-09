//爱丽丝有一手（hand）由整数数组给定的牌。
//
// 现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
//
// 如果她可以完成分组就返回 true，否则返回 false。
//
//
//
// 注意：此题目与 1296 重复：https://leetcode-cn.com/problems/divide-array-in-sets-of-k-co
//nsecutive-numbers/
//
//
//
//
//
//
// 示例 1：
//
//
//输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
//输出：true
//解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
//
// 示例 2：
//
//
//输入：hand = [1,2,3,4,5], W = 4
//输出：false
//解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
//
//
//
// 提示：
//
//
// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length
//
// Related Topics Ordered Map
// 👍 98 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0 ) {
        return false
    }
    hand.sort((a, b) => {
        return a - b
    })
    let result = true;
    while (hand.length > 0) {
        let start = hand[0];
        let num = start + W;
        while (start < num) {
            let idx = hand.indexOf(start);
            if (idx === -1) {
                result = false;
                break
            } else {
                hand.splice(idx, 1)
            }
            start ++
        }
        if (result === false) {
            break
        }
    }
    return hand.length === 0
};
//leetcode submit region end(Prohibit modification and deletion)
