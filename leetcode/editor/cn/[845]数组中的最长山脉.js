//我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
//
//
// B.length >= 3
// 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B
//[B.length - 1]
//
//
// （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
//
// 给出一个整数数组 A，返回最长 “山脉” 的长度。
//
// 如果不含有 “山脉” 则返回 0。
//
//
//
// 示例 1：
//
// 输入：[2,1,4,7,3,2,5]
//输出：5
//解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
//
//
// 示例 2：
//
// 输入：[2,2,2]
//输出：0
//解释：不含 “山脉”。
//
//
//
//
// 提示：
//
//
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000
//
// Related Topics 双指针
// 👍 181 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let start = 0;
    let end = 0;
    let max = 0;
    let num = 0;
    let isUp = false;
    let isDown = false;
    while (end < arr.length) {
        if (start === end) {
            end ++
        } else if (start < end) {
            if (arr[end] > arr[end -1 ]) {
                if (isUp && isDown) {
                    isDown = false;
                    start = end - 1;
                } else if (isUp && !isDown) {
                    end ++
                } else if (!isUp) {
                    isUp = true;
                    end ++;
                }
            } else if (arr[end] < arr[end - 1]) {
                if (isUp && isDown) {
                    // console.log(end, start,111)
                    max = Math.max(max, end - start + 1);
                    end ++
                } else if (isUp && !isDown) {
                    isDown = true;
                    // console.log(end, start,222)

                    max = Math.max(max, end - start + 1);
                    end ++
                } else {
                    start = end;
                }
            } else {
                start = end;
                isUp = false;
                isDown = false
            }
        }
    }
    return max;
};
//leetcode submit region end(Prohibit modification and deletion)
