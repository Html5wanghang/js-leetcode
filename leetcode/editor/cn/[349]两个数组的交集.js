//给定两个数组，编写一个函数来计算它们的交集。
//
//
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//输出：[2]
//
//
// 示例 2：
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出：[9,4]
//
//
//
// 说明：
//
//
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
//
// Related Topics 排序 哈希表 双指针 二分查找


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let map = new Map();
  let set = new Set();
  for(let i = 0; i< nums1.length; i ++) {
    if (!map.has(nums1[i])){
      map.set(nums1[i], null)
    }
  }
  for (let j = 0; j< nums2.length; j ++) {
    if (map.has(nums2[j])) {
      set.add(nums2[j])
    }
  }
  return Array.from(set);
};
//leetcode submit region end(Prohibit modification and deletion)
