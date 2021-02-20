//给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal",
// "Silver Medal", "Bronze Medal"）。
//
// (注：分数越高的选手，排名越靠前。)
//
// 示例 1:
//
//
//输入: [5, 4, 3, 2, 1]
//输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
//解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and
//"Bronze Medal").
//余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
//
// 提示:
//
//
// N 是一个正整数并且不会超过 10000。
// 所有运动员的成绩都不相同。
//
// 👍 70 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let newArr = score.slice(); let map = new Map();
  newArr.sort((a, b) => {
    return b - a
  });
  for (let i = 0; i < newArr.length; i ++ ) {
    if (i === 0) {
      map.set(newArr[i], 'Gold Medal')
    } else if (i === 1) {
      map.set(newArr[i], 'Silver Medal')
    } else if (i === 2) {
      map.set(newArr[i], 'Bronze Medal')
    } else {
      map.set(newArr[i], String(i+ 1))
    }
  }
  for (let i = 0; i < score.length; i ++) {
    score[i] = map.get(score[i])
  }
  return score
};
//leetcode submit region end(Prohibit modification and deletion)
