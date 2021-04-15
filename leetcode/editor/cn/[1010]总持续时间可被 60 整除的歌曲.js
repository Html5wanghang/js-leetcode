//在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
//
// 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足 i < j 且有 (time[i] + tim
//e[j]) % 60 == 0。
//
//
//
// 示例 1：
//
// 输入：[30,20,150,100,40]
//输出：3
//解释：这三对的总持续时间可被 60 整数：
//(time[0] = 30, time[2] = 150): 总持续时间 180
//(time[1] = 20, time[3] = 100): 总持续时间 120
//(time[1] = 20, time[4] = 40): 总持续时间 60
//
//
// 示例 2：
//
// 输入：[60,60,60]
//输出：3
//解释：所有三对的总持续时间都是 120，可以被 60 整数。
//
//
//
//
// 提示：
//
//
// 1 <= time.length <= 60000
// 1 <= time[i] <= 500
//
// Related Topics 数组
// 👍 143 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map =  new Map(); let total = 0;
    for (let i = 0; i < time.length; i ++) {
      let num = time[i] % 60;
      map.set(
        num,
        map.has(num) ? map.get(num) + 1 : 1
      )
    }
    map.forEach((value, key) => {
      if (key < 30 && key > 0) {
          if (map.has(60 - key)) {
            total += map.get(key) * map.get(60 - key)
          }
      } else if (key === 30 || key === 0) {
          total += (map.get(key) * (map.get(key) - 1)) / 2
      }
    })
    return total
};
//leetcode submit region end(Prohibit modification and deletion)
