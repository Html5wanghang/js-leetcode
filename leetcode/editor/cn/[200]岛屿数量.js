//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。 
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。 
//
// 此外，你可以假设该网格的四条边均被水包围。 
//
// 
//
// 示例 1： 
//
// 
//输入：grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]
//输出：1
// 
//
// 示例 2： 
//
// 
//输入：grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//输出：3
// 
//
// 
//
// 提示： 
//
// 
// m == grid.length 
// n == grid[i].length 
// 1 <= m, n <= 300 
// grid[i][j] 的值为 '0' 或 '1' 
// 
// Related Topics 深度优先搜索 广度优先搜索 并查集 
// 👍 972 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0
    }
    let num = 0;
    let x = grid.length; let y = grid[0].length;
    let dfs = (idx1, idx2) => {

        if (idx1 < 0 || idx1 >= x || idx2 < 0 || idx2 >= y) {
            return
        }
        if (grid[idx1][idx2] === '1') {
            grid[idx1][idx2] = '0';
            dfs(idx1 + 1, idx2);
            dfs(idx1 - 1, idx2);
            dfs(idx1, idx2 + 1);
            dfs(idx1, idx2 - 1);
        }
    }
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                num ++
            }
        }
    }
    return num;
};
//leetcode submit region end(Prohibit modification and deletion)
