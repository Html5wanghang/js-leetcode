/**
 * @param {any[]} nums
 * @return {any[]}
 */
let flat1 = function (nums) {
  return nums.join(',').split(',');
};
console.log(flat1([[1,[2]],[3],[4]]));

/**
 * @param {any[]} nums
 * @return {any[]}
 */
let result = [];
let flat2 = function (nums) {
  for (let i = 0; i < nums.length; i ++) {
    if (typeof nums[i] !== "number") {
      flat2(nums[i]);
    } else {
      result.push(nums[i])
    }
  }
  return result
};
console.log(flat2([[1,[2,[0]]],[3],[4]]));
