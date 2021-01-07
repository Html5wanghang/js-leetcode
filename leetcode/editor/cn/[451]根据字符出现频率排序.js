//给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
//
// 示例 1:
//
//
//输入:
//"tree"
//
//输出:
//"eert"
//
//解释:
//'e'出现两次，'r'和't'都只出现一次。
//因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
//
//
// 示例 2:
//
//
//输入:
//"cccaaa"
//
//输出:
//"cccaaa"
//
//解释:
//'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
//注意"cacaca"是不正确的，因为相同的字母必须放在一起。
//
//
// 示例 3:
//
//
//输入:
//"Aabb"
//
//输出:
//"bbAa"
//
//解释:
//此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
//注意'A'和'a'被认为是两种不同的字符。
//
// Related Topics 堆 哈希表
// 👍 199 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i ++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  let arr = [...map].sort((a,b) => {
    return a[1] - b[1]
  });
  let str = '';
  for (let i = arr.length - 1; i >= 0; i --) {
    str += arr[i][0].repeat(arr[i][1])
  };
  return str;
};
//leetcode submit region end(Prohibit modification and deletion)
