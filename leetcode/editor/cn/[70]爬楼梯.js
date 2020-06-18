//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
// 注意：给定 n 是一个正整数。
//
// 示例 1：
//
// 输入： 2
//输出： 2
//解释： 有两种方法可以爬到楼顶。
//1.  1 阶 + 1 阶
//2.  2 阶
//
// 示例 2：
//
// 输入： 3
//输出： 3
//解释： 有三种方法可以爬到楼顶。
//1.  1 阶 + 1 阶 + 1 阶
//2.  1 阶 + 2 阶
//3.  2 阶 + 1 阶
//

// 输入： 4
//输出： 5
//解释： 有三种方法可以爬到楼顶。
//1.  1 阶 + 1 阶 + 1 阶 + 1阶
//2.  1 阶 + 2 阶 + 1阶
//3.  2 阶 + 1 阶 + 1阶
//4.  2 阶 + 2阶
//5   1 阶 + 1 阶 + 2阶
// Related Topics 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) {
      return 1
    } else if (n === 2) {
      return 2
    } else {
      let a = 1;
      let b = 2;
      let start = 3;
      while (start !== n) {
        let temp = b;
        b = a + b;
        a = temp;
        start ++
      }
      return b + a;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
