//给定一个包含了一些 0 和 1 的非空二维数组 grid 。 
//
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 
//0（代表水）包围着。 
//
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。) 
//
// 
//
// 示例 1: 
//
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 
//
// 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。 
//
// 示例 2: 
//
// [[0,0,0,0,0,0,0,0]] 
//
// 对于上面这个给定的矩阵, 返回 0。 
//
// 
//
// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。 
// Related Topics 深度优先搜索 数组 
// 👍 436 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let dfs = (x,y) => {
        let newNum = 0;
        if (grid[x][y] === 1) {
            grid[x][y] = -1;
            newNum ++
            if (x + 1 < grid.length && grid[x + 1][y] === 1) {
                newNum += dfs(x + 1, y)
            }
            if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                newNum += dfs(x - 1, y)
            }
            if (grid[x][y + 1] === 1) {
                newNum += dfs(x, y + 1)
            }
            if (grid[x][y - 1] === 1) {
                newNum += dfs(x , y - 1)
            }
        }
        return newNum
    }
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(i,j))
            }
        }
    }
    return max
};
//leetcode submit region end(Prohibit modification and deletion)
