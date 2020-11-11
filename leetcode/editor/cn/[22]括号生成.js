//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
//
//
//
// 示例：
// 输入：n = 2
//输出：[
//       "(())",
//       "()()"
//     ]
// 输入：n = 3
//输出：[
//       "((()))",
//       "(()())",
//       "(())()",
//       "()(())",
//       "()()()"
//     ]
//
// Related Topics 字符串 回溯算法
// 👍 1406 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let arr = ['()'];
  let set = new Set(arr);
  let map = new Map();
  let j = 1;
  while (j < n) {
    const tempArr = Array.from(set);
    map.set(j, new Set(tempArr));
    set.clear();
    tempArr.forEach((cat) => {
      set.add('()'.concat(cat));
      set.add(cat.concat('()'));
      set.add('('.concat(cat).concat(')'));
      for (let i = 1; i <= cat.length / 2; i++) {
        let str = cat.slice(0, i * 2);
        if (map.get(i).has(str)) {
          set.add('('.concat(cat.slice(0, 2 * i)).concat(')').concat(cat.slice(2 * i)))
        }
      }
    })
    j++;
  };
  return Array.from(set);
};
//leetcode submit region end(Prohibit modification and deletion)
// (())(())这种在为
// let b = new Set(["()()()()","(()()())","()(()())","(()())()","((()()))","()()(())","()(())()","(()(()))","(())()()","((())())","()((()))","((()))()","(((())))"]);
// let a = new Set(["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]);
// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference)

