//有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。 
//
// 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。 
//
// 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。 
//
// 请返回封闭岛屿的数目。 
//
// 
//
// 示例 1： 
//
// 
//
// 输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1
//,0,1],[1,1,1,1,1,1,1,0]]
//输出：2
//解释：
//灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。 
//
// 示例 2： 
//
// 
//
// 输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
//输出：1
// 
//
// 示例 3： 
//
// 输入：grid = [[1,1,1,1,1,1,1],
//             [1,0,0,0,0,0,1],
//             [1,0,1,1,1,0,1],
//             [1,0,1,0,1,0,1],
//             [1,0,1,1,1,0,1],
//             [1,0,0,0,0,0,1],
//             [1,1,1,1,1,1,1]]
//输出：2
// 
//
// 
//
// 提示： 
//
// 
// 1 <= grid.length, grid[0].length <= 100 
// 0 <= grid[i][j] <=1 
// 
// Related Topics 深度优先搜索 
// 👍 67 👎 0

// [
//     [0,0,1,0,0],
//     [0,1,0,1,0],
//     [0,1,1,1,0]]
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
//

var closedIsland = function(grid) {
    let num = 0;
    let dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
            return false;
        }
        if (grid[x][y] === 1) {
            return true
        } else if (grid[x][y] === 0) {
            if (x !== 0 && y !== 0
                && x !== grid.length - 1 && y !== grid[0].length - 1) {
                grid[x][y] = -1;
                let result1 = dfs(x + 1,y );
                let result2 = dfs(x - 1,y);
                let result3 = dfs(x,y +1);
                let result4 = dfs(x, y - 1)
                return result1 && result2 && result3 && result4
            } else {
                return false
            }

        } else if (grid[x][y] === -1 ){
            return x !== 0 && y !== 0
                && x !== grid.length && y !== grid[0].length
        }
    }
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === 0) {
                if (dfs(i,j)) {
                    console.log(i,j)
                    num ++
                }
            }
        }
    }
    return num
};
//leetcode submit region end(Prohibit modification and deletion)
