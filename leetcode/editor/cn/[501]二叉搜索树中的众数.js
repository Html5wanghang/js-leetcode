//给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
//
// 假定 BST 有如下定义：
//
//
// 结点左子树中所含结点的值小于等于当前结点的值
// 结点右子树中所含结点的值大于等于当前结点的值
// 左子树和右子树都是二叉搜索树
//
//
// 例如：
//给定 BST [1,null,2,2],
//
//    1
//    \
//     2
//    /
//   2
//
//
// 返回[2].
//
// 提示：如果众数超过1个，不需考虑输出顺序
//
// 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
// Related Topics 树
// 👍 292 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
      let result = [];
      let hash = new Map();
      let max = 1;
      const dfs = (node) => {
        if (node.left) {
          dfs(node.left)
        }
        if (hash.has(node.val)) {
          hash.set(node.val,hash.get(node.val) + 1)
          max = Math.max(hash.get(node.val), max)
        } else {
          hash.set(node.val, 1)
        }
        if (node.right) {
          dfs(node.right)
        }
      };
      dfs(root);
      hash.forEach((value,key) => {
        if (value === max) {
          result.push(key)
        }
      })
      return result
};
//leetcode submit region end(Prohibit modification and deletion)
