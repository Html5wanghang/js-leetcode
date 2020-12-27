//给定两个以升序排列的整形数组 nums1 和 nums2, 以及一个整数 k。 
//
// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2。 
//
// 找到和最小的 k 对数字 (u1,v1), (u2,v2) ... (uk,vk)。 
//
// 示例 1: 
//
// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
//输出: [1,2],[1,4],[1,6]
//解释: 返回序列中的前 3 对数：
//     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// 
//
// 示例 2: 
//
// 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
//输出: [1,1],[1,1]
//解释: 返回序列中的前 2 对数：
//     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
// 
//
// 示例 3: 
//
// 输入: nums1 = [1,2], nums2 = [3], k = 3 
//输出: [1,3],[2,3]
//解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
// 
// Related Topics 堆 
// 👍 144 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let map = new Map();
    let arr = [];
    let swap = (arr,index) => {
        let temp = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (arr[left] && arr[index][0] + arr[index][1] < arr[left][0] + arr[left][1] ) {
            index = left
        }
        if (arr[right] && arr[index][0] + arr[index][1] < arr[right][0] + arr[right][1]) {
            index = right
        }

        if (index !== temp) {
            [arr[index], arr[temp]] = [arr[temp], arr[index]];
            swap(arr, index);
        }
    }
    for (let i = 0; i < nums1.length; i ++) {
        for (let j = 0; j < nums2.length; j ++) {
            if (arr.length < k) {
                arr.push( [nums1[i], nums2[j]])
                 let len = arr.length - 1;
                while (len !== 0 && arr[len] && arr[len][0] + arr[len][1] > arr[(len - 1) >> 1][0] + arr[(len - 1) >> 1][1]) {
                    [arr[len], arr[(len - 1) >> 1]] = [arr[(len - 1) >> 1], arr[len]];
                    len = (len - 1) >> 1;
                }
            } else {
                if ( nums1[i] + nums2[j] < arr[0][0] + arr[0][1]) {
                    arr[0] = [nums1[i], nums2[j]];
                    swap(arr, 0)
                }
            }
        }
    };
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
