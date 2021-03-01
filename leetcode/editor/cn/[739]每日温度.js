//请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
// 
//
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2
//, 1, 1, 0, 0]。 
//
// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。 
// Related Topics 栈 哈希表 
// 👍 650 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = [];
    let indexStack = [];
    let result = [];
    for (let i = T.length - 1; i >= 0; i --) {
        if (stack.length === 0) {
            result.push(0);
            indexStack.push(i);
            stack.push(T[i]);
        } else {
            if (stack[stack.length - 1] <= T[i]) {
                while (stack[stack.length - 1] <= T[i]) {
                    stack.pop();
                    indexStack.pop();
                }
                if (indexStack.length === 0) {
                    result.push(0)
                } else {
                    result.push(indexStack[indexStack.length - 1] - i)
                }
                stack.push(T[i]);
                indexStack.push(i);
            } else {
                indexStack.push(i);
                stack.push(T[i]);
                result.push(1)
            }
        }
    }
    return result.reverse()
};
//leetcode submit region end(Prohibit modification and deletion)
