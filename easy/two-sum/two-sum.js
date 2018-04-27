/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//我的 初步ES5写法
// 思路是从数组的第一个数开始，和索引后面的数依次相加，如果两数之和 和 输入目标相等，就把索引放在临时数组返回回来
var twoSum = function(nums, target) {
  var tempArr = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        tempArr = tempArr.concat([i, j])
      }
    }
  }
  return tempArr
};
twoSum([1, 3, 4, 6], 10);