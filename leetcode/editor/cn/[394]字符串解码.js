//给定一个经过编码的字符串，返回它解码后的字符串。
//
// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
//
// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
//
// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
//
//
//
// 示例 1：
//
// 输入：s = "3[a]2[bc]"
//输出："aaabcbc"
//
//
// 示例 2：
//
// 输入：s = "3[a2[c]]"
//输出："accaccacc"
//
//
// 示例 3：
//
// 输入：s = "2[abc]3[cd]ef"
//输出："abcabccdcdcdef"
//
//
// 示例 4：
//
// 输入：s = "abc3[cd]xyz"
//输出："abccdcdcdxyz"
//
// Related Topics 栈 深度优先搜索
// 👍 596 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  for(let i = 0 ; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push('[')
    } else if (s[i] === ']') {
      let str = '';
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str;
      }
      stack.pop();
      let num = stack.pop();
      str = str.repeat(num);
      stack.push(str);
    } else if (s[i] >= '0' && s[i] <= '9') {
      let str = '';
      while (s[i] >= '0' && s[i] <= '9') {
        str += s[i];
        i ++
      }
      i --;
      stack.push(Number(str))
    } else {
      let str = '';
      while (s[i] >= 'a' && s[i] <= 'z') {
        str += s[i];
        i ++
      }
      i --;
      stack.push(str);
    }
  };
  return stack.join('')
};
//leetcode submit region end(Prohibit modification and deletion)
