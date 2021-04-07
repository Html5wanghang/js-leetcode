//给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。 
//
// 示例 1: 
//
// 
//输入: [2,2,3,4]
//输出: 3
//解释:
//有效的组合是: 
//2,3,4 (使用第一个 2)
//2,3,4 (使用第二个 2)
//2,2,3
// 
//
// 注意: 
//
// 
// 数组长度不超过1000。 
// 数组里整数的范围为 [0, 1000]。 
// 
// Related Topics 数组 
// 👍 165 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => {
        return a - b;
    })
    let total = 0;
    for (let i = nums.length - 1; i >= 0; i --) {
        let start = 0; let end = i - 1;
        while (start < end) {
            if (nums[start] + nums[end] > nums[i]) {
                total += end - start;
                end --;
            } else {
                start ++;
            }
        }
    }
    return total
};
//leetcode submit region end(Prohibit modification and deletion)
