//给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
//
// 注意:
//
//
// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
//
//
// 示例 1:
//
//
//输入: [ [1,2], [2,3], [3,4], [1,3] ]
//
//输出: 1
//
//解释: 移除 [1,3] 后，剩下的区间没有重叠。
//
//
// 示例 2:
//
//
//输入: [ [1,2], [1,2], [1,2] ]
//
//输出: 2
//
//解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
//
//
// 示例 3:
//
//
//输入: [ [1,2], [2,3] ]
//
//输出: 0
//
//解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
//
// Related Topics 贪心算法
// 👍 304 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  intervals.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  });
  let num = 0;
  let start = 0;
  for (let i = 1; i < intervals.length; i ++) {
    if (intervals[i][0] < intervals[start][1]) {
      num ++
    } else {
      start = i;
    }
  };
  return num
};
//leetcode submit region end(Prohibit modification and deletion)
