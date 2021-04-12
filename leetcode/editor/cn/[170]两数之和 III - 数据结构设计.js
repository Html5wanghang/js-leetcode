//设计一个接收整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。
//
// 实现 TwoSum 类：
//
//
// TwoSum() 使用空数组初始化 TwoSum 对象
// void add(int number) 向数据结构添加一个数 number
// boolean find(int value) 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 true ；否则，返回 fal
//se 。
//
//
//
//
// 示例：
//
//
//输入：
//["TwoSum", "add", "add", "add", "find", "find"]
//[[], [1], [3], [5], [4], [7]]
//输出：
//[null, null, null, null, true, false]
//
//解释：
//TwoSum twoSum = new TwoSum();
//twoSum.add(1);   // [] --> [1]
//twoSum.add(3);   // [1] --> [1,3]
//twoSum.add(5);   // [1,3] --> [1,3,5]
//twoSum.find(4);  // 1 + 3 = 4，返回 true
//twoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false
//
//
//
// 提示：
//
//
// -105 <= number <= 105
// -231 <= value <= 231 - 1
// 最多调用 5 * 104 次 add 和 find
//
// Related Topics 设计 哈希表
// 👍 42 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.list = []
  this.hash = new Map()
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.list.push(number);
  this.hash.set(number, this.hash.has(number) ? this.hash.get(number) + 1 : 1)
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (let i = 0; i < this.list.length; i ++) {
    if (value === 2 * this.list[i] ) {
      if (this.hash.get(this.list[i]) > 1) {
        return true
      }
    } else if (this.hash.has(value - this.list[i])) {
      return true
    }
  }
  return false
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
//leetcode submit region end(Prohibit modification and deletion)
