//从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任
//意数字。A 不能视为 14。
//
//
//
// 示例 1:
//
// 输入: [1,2,3,4,5]
//输出: True
//
//
//
// 示例 2:
//
// 输入: [0,0,1,2,5]
//输出: True
//
//
//
// 限制：
//
// 数组长度为 5
//
// 数组的数取值为 [0, 13] .
// 👍 80 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    if (nums.length !== 5) {
        return false
    }
    const arr = nums.filter((cat) => {
        return cat !== 0;
    });
    return (Math.max(...arr) - Math.min(...arr) <= 4) && arr.length === new Set(arr).size;
};
//leetcode submit region end(Prohibit modification and deletion)
