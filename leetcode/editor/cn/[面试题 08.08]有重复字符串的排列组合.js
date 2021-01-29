//有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。
//
// 示例1:
//
//  输入：S = "qqe"
// 输出：["eqq","qeq","qqe"]
//
//
// 示例2:
//
//  输入：S = "ab"
// 输出：["ab", "ba"]
//
//
// 提示:
//
//
// 字符都是英文字母。
// 字符串长度在[1, 9]之间。
//
// Related Topics 回溯算法
// 👍 34 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  let arr = S.split('');
  let visited = Array(S.length).fill(false);
  let result = [];
  let dfs = (list2, vList, list3) => {
    if (list2.length === S.length) {
      result.push(list2.join(''));
      return
    }
    for (let i = 0; i < arr.length; i ++) {
      if (!vList[i] && !list3.includes(arr[i])) {
        vList[i] = true;
        let newArr = list2.concat(arr[i]);
        list3.push(arr[i]);
        dfs(newArr, vList, [])
        vList[i] = false;
      }
    }
  }
  dfs([], visited, []);
  return result
};
//leetcode submit region end(Prohibit modification and deletion)
