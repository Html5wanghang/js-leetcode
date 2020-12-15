//给出一个区间的集合，请合并所有重叠的区间。
//
//
//
// 示例 1:
//
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
//输出: [[1,6],[8,10],[15,18]]
//解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//
//
// 示例 2:
//
// 输入: intervals = [[1,4],[4,5]]
//输出: [[1,5]]
//解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
//
// 注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。
//
//
//
// 提示：
//
//
// intervals[i][0] <= intervals[i][1]
//
// Related Topics 排序 数组
// 👍 728 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => {
    return b[0] - a[0]
  })
  let result = [];

  while (intervals.length > 1) {
    if (intervals[intervals.length - 1][1] >= intervals[intervals.length - 2][0]) {
      let arr0 = intervals.pop();
      let arr1 = intervals.pop();
      intervals.push([arr0[0], Math.max(arr0[1],arr1[1])]);
    } else {
      let arr = intervals.pop();
      result.push(arr);
    }
  };
  if (intervals.length === 1) {
    result.push(intervals[0])
  }
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
