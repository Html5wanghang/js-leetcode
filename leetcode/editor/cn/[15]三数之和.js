//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
// 
//
// 示例 2： 
//
// 
//输入：nums = []
//输出：[]
// 
//
// 示例 3： 
//
// 
//输入：nums = [0]
//输出：[]
// 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 3000 
// -105 <= nums[i] <= 105 
// 
// Related Topics 数组 双指针 
// 👍 3121 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length - 1;
    const result = [];
    nums.sort((a,b) => {
        return a - b;
    })
    // console.log(nums)
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== nums[i - 1]) {
            let start = i + 1;
            let end = len;
            let arr = []
            while (start < end) {

                if (nums[start] + nums[end] === - nums[i]) {
                    if (!arr.includes(nums[start])) {
                        result.push([nums[i],nums[start], nums[end]]);
                        arr.push(nums[start])
                    }
                    start ++;
                    end --;
                } else if (nums[start] + nums[end] > - nums[i]) {
                    end --;
                } else {
                    start ++;
                }
            }
        }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
