//现在有一棵树，一只松鼠和一些坚果。位置由二维网格的单元格表示。你的目标是找到松鼠收集所有坚果的最小路程，且坚果是一颗接一颗地被放在树下。松鼠一次最多只能携带
//一颗坚果，松鼠可以向上，向下，向左和向右四个方向移动到相邻的单元格。移动次数表示路程。 
//
// 输入 1: 
//
// 输入: 
//高度 : 5
//宽度 : 7
//树的位置 : [2,2]
//松鼠 : [4,4]
//坚果 : [[3,0], [2,5]]
//输出: 12
//解释:
//​​​​​
// 
//
// 注意: 
//
// 
// 所有给定的位置不会重叠。 
// 松鼠一次最多只能携带一颗坚果。 
// 给定的坚果位置没有顺序。 
// 高度和宽度是正整数。 3 <= 高度 * 宽度 <= 10,000。 
// 给定的网格至少包含一颗坚果，唯一的一棵树和一只松鼠。 
// 
// Related Topics 数学 
// 👍 21 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
    let total = 0; let min = Infinity;
    for (let i = 0; i < nuts.length; i ++) {
        total += (Math.abs(nuts[i][0] - tree[0]) + Math.abs(nuts[i][1] - tree[1])) * 2
    }
    for (let i = 0; i < nuts.length; i ++) {
        let num = total
        - (Math.abs(nuts[i][0] - tree[0]) + Math.abs(nuts[i][1] - tree[1]))
        + (Math.abs(squirrel[0] - nuts[i][0]) + Math.abs(squirrel[1] - nuts[i][1]))
        min = Math.min(min, num)
    };
    return min
};
//leetcode submit region end(Prohibit modification and deletion)
