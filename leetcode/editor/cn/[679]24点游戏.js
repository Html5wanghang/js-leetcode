//你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。 
//
// 示例 1: 
//
// 输入: [4, 1, 8, 7]
//输出: True
//解释: (8-4) * (7-1) = 24
// 
//
// 示例 2: 
//
// 输入: [1, 2, 1, 2]
//输出: False
// 
//
// 注意: 
//
// 
// 除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。 
// 每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允
//许的。 
// 你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。 
// 
// Related Topics 深度优先搜索 
// 👍 265 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    let result = false;
    let dfs = (arr) => {
        if (result) {
            return
        }
        if (arr.length === 1 && Math.abs(24 - arr[0]) < 0.01) {
            result = true;
            return;
        }
        for (let i = 0; i < arr.length; i ++) {
            for (let j = i + 1; j < arr.length; j ++) {
                let list = [];
                for (let k = 0; k < arr.length; k ++) {
                    if (k !== i && k !== j) {
                        list.push(arr[k])
                    }
                }
                let resultArr = [];
                resultArr.push(arr[i] * arr[j]);
                resultArr.push(arr[i] + arr[j]);
                if (arr[j] !== 0) {
                    resultArr.push(arr[i] / arr[j]);
                }
                if (arr[i] !== 0) {
                    resultArr.push(arr[j] / arr[i]);
                }
                resultArr.push(arr[i] - arr[j]);
                resultArr.push(arr[j] - arr[i]);
                for (let m = 0; m < resultArr.length; m ++) {
                    let newList = list.concat(resultArr[m]);
                    dfs(newList);
                }
            }
        }
    };
    dfs(nums)
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
