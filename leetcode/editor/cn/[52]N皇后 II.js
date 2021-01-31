//n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。 
//
// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。 
//
// 
//
// 
// 
// 示例 1： 
//
// 
//输入：n = 4
//输出：2
//解释：如上图所示，4 皇后问题存在两个不同的解法。
// 
//
// 示例 2： 
//
// 
//输入：n = 1
//输出：1
// 
//
// 
//
// 提示： 
//
// 
// 1 <= n <= 9 
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。 
// 
// 
// 
// Related Topics 回溯算法 
// 👍 228 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let num = 0;
    let dfs = (list) => {
        if (list.length === n) {
            num ++;
        } else {
            for (let i = 0; i < n; i ++) {
                if (!list.includes(i)) {
                    let result = list.some((value, index) => {
                        return Math.abs(list.length - index) === Math.abs(i - value);
                    })
                    if (!result) {
                        let newList = list.concat(i);
                        dfs(newList);
                    }
                }
            }
        }
    };
    dfs([])
    return num
};
//leetcode submit region end(Prohibit modification and deletion)
