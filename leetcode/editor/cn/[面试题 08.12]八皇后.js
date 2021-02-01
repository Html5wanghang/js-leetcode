//设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整
//个棋盘的那两条对角线。 
//
// 注意：本题相对原题做了扩展 
//
// 示例: 
//
//  输入：4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释: 4 皇后问题存在如下两个不同的解法。
//[
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],
//
// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
// 
// Related Topics 回溯算法 
// 👍 64 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let arr = [];
    let dfs = (list) => {
        if (list.length === n) {
            let newList = [];
            for (let i = 0; i < list.length; i ++) {
                let arr = Array(n).fill('.');
                arr[list[i]] = 'Q'
                newList.push(arr.join(''));
            }
            arr.push(newList)
        } else {
            for (let i = 0; i < n; i ++) {
                if (!list.includes(i)) {
                    let result = list.some((value, key) => {
                        return Math.abs(key - list.length) === Math.abs(value - i);
                    });
                    if (!result) {
                        let list1 = list.concat(i);
                        dfs(list1);
                    }
                }
            }
        }
    };
    dfs( [])
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
