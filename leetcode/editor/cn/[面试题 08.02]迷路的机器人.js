//设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。设计一种算法，寻找机器人从左上角
//移动到右下角的路径。 
//
// 
//
// 网格中的障碍物和空位置分别用 1 和 0 来表示。 
//
// 返回一条可行的路径，路径由经过的网格的行号和列号组成。左上角为 0 行 0 列。如果没有可行的路径，返回空数组。 
//
// 示例 1: 
//
// 输入:
//[
//  [0,0,0],
//  [0,1,0],
//  [0,0,0]
//]
//输出: [[0,0],[0,1],[0,2],[1,2],[2,2]]
//解释: 
//输入中标粗的位置即为输出表示的路径，即
//0行0列（左上角） -> 0行1列 -> 0行2列 -> 1行2列 -> 2行2列（右下角） 
//
// 说明：r 和 c 的值均不超过 100。 
// Related Topics 动态规划 
// 👍 45 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
    let list = [];
    if (obstacleGrid.length === 0) {
        return  list
    }
    let i = obstacleGrid.length - 1; let j =  obstacleGrid[0].length - 1;
    let dfs = (arr, x, y) => {
        if (x < 0 || y < 0 || obstacleGrid[x][y] === 1 || list.length > 0) {
            return
        }
        arr.push([x, y]);
        if (x === 0 && y === 0) {
            list = arr.reverse();
            return;
        }
        obstacleGrid[x][y] = 1;
        dfs(arr.slice(), x - 1, y);
        dfs(arr.slice(), x, y - 1)
    };
    dfs([], i, j);
    return list
};
//leetcode submit region end(Prohibit modification and deletion)
