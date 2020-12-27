//给定一个非空的整数数组，返回其中出现频率前 k 高的元素。 
//
// 
//
// 示例 1: 
//
// 输入: nums = [1,1,1,2,2,3], k = 2
//输出: [1,2]
// 
//
// 示例 2: 
//
// 输入: nums = [1], k = 1
//输出: [1] 
//
// 
//
// 提示： 
//
// 
// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。 
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。 
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。 
// 你可以按任意顺序返回答案。 
// 
// Related Topics 堆 哈希表 
// 👍 597 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let arr = [];
    for (let i = 0; i < nums.length; i ++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    let swap = (arr,index) => {
        let temp = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (map.get(arr[index]) > map.get(arr[left]) ) {
            index = left
        }
        if (map.get(arr[index]) > map.get(arr[right])) {
            index = right
        }
        if (index !== temp) {
            [arr[index], arr[temp]] = [arr[temp], arr[index]];
            swap(arr, index);
        }
    }
    map.forEach((value,key) => {
        if (arr.length < k) {
            arr.push(key);
            let len = arr.length - 1;
            while (len !== 0 && map.get(arr[(len - 1) >> 1]) > map.get(arr[len])) {
                [arr[(len - 1) >> 1], arr[len]] = [arr[len], arr[(len - 1) >> 1]];
                len = (len - 1) >> 1;
            }
        } else {
            if (value > map.get(arr[0])) {
                arr[0] = key;
                swap(arr,0)
            }
        }
    })

    return arr;
};

// leetcode submit region end(Prohibit modification and deletion)
