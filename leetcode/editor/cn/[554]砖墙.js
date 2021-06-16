//你的面前有一堵矩形的、由 n 行砖块组成的砖墙。这些砖块高度相同（也就是一个单位高）但是宽度不同。每一行砖块的宽度之和相等。
//
// 你现在要画一条 自顶向下 的、穿过 最少 砖块的垂线。如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你不能沿着墙的两个垂直边缘之一画线，这样显然是没
//有穿过一块砖的。
//
// 给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线 穿过的
//砖块数量最少 ，并且返回 穿过的砖块数量 。
//
//
//
// 示例 1：
//
//
//输入：wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
//输出：2
//
//
// 示例 2：
//
//
//输入：wall = [[1],[1],[1]]
//输出：3
//
//
//
// 提示：
//
//
// n == wall.length
// 1 <= n <= 104
// 1 <= wall[i].length <= 104
// 1 <= sum(wall[i].length) <= 2 * 104
// 对于每一行 i ，sum(wall[i]) 是相同的
// 1 <= wall[i][j] <= 231 - 1
//
// Related Topics 哈希表
// 👍 239 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let hash = new Map ();
    for (let i = 0; i < wall.length; i ++) {
        let total = 0;
        for (let j = 0; j < wall[i].length; j ++) {
            total += wall[i][j];
            hash.set(total, hash.has(total) ? hash.get(total) + 1 : 1)
        }
        hash.delete(total)
    }
    let arr = [...hash];
    arr.sort((a,b) => {
        return a[1] - b[1]
    })
    return arr.length === 0 ? wall.length : wall.length - arr[arr.length - 1][1]
};
//leetcode submit region end(Prohibit modification and deletion)
