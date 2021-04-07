//给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。 
//
// 若可行，输出任意可行的结果。若不可行，返回空字符串。 
//
// 示例 1: 
//
// 
//输入: S = "aab"
//输出: "aba"
// 
//
// 示例 2: 
//
// 
//输入: S = "aaab"
//输出: ""
// 
//
// 注意: 
//
// 
// S 只包含小写字母并且长度在[1, 500]区间内。 
// 
// Related Topics 堆 贪心算法 排序 字符串 
// 👍 304 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let hash = new Map(); let result = '';
    for (let i = 0; i < S.length; i ++) {
        hash.set(S[i], hash.has(S[i]) ? hash.get(S[i]) + 1: 1);
    }
    let list = [...hash];
    list.sort((a,b) => {
        return b[1] - a[1]
    });
    let max = list[0][1];
    if (max > (S.length + 1 ) / 2) {
        return result;
    }
    while (list.length > 0) {
        // console.log( result, list.join(''))
        if (list.length > 1) {
            let idx = list.length - 1;
            result += list[0][0]
            result += list[idx][0];
            list[0][1] --;
            list[idx][1] --;
            if (list[idx][1] === 0 ) {
                list.pop()
            }
            if (list.length >= 2 ) {
                if (list[0][1] === 0) {
                    list.shift();
                } else if (list[0][1] < list[1][1]) {
                    list.sort((a,b) => {
                        return b[1] - a[1]
                    });
                }
            } else {
                if (list[0][1] === 0) {
                    list.shift();
                }
            }

        } else {
            result += list[0][0];
            break
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
