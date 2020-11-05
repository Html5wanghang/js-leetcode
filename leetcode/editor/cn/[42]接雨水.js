//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Mar
//cos 贡献此图。
//
// 示例:
//
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
//输出: 6
// Related Topics 栈 数组 双指针
// 👍 1745 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} stack
 * @return {number}
 */
var getNum = function (stack) {
  let num = 0;
  for (let i = 1; i < stack.length - 1; i++) {
    num += stack[0] - stack[i];
  };
  stack.splice(0, stack.length - 1);
  return num
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let stack = [];
  let num = 0;
  for (let i = 0; i < height.length; i++){
    if (stack.length === 0 ) {
      if (height[i] !== 0) {
        stack.push(height[i])
      }
    } else {
      stack.push(height[i])
      if (height[i] >= stack[0]) {
        num += getNum(stack);
      }
    }
  }
  if (stack.length > 2) {
    stack.reverse();
    num += trap(stack);
  }
  return num;
};
//leetcode submit region end(Prohibit modification and deletion)
