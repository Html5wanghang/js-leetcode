//给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
//
//
//
// 示例 1：
//
//
//输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
//输出：32
//
//
// 示例 2：
//
//
//输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
//输出：23
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [1, 2 * 104] 内
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// 所有 Node.val 互不相同
//
// Related Topics 树 深度优先搜索 递归
// 👍 189 👎 0


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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let total = 0;
    const dfs = (node) => {
      if (node.val >= low && node.val <= high) {
        total += node.val;
        if (node.left) {
          dfs(node.left)
        }
        if (node.right) {
          dfs(node.right)
        }
      } else if (node.val > high) {
        if (node.left) {
          dfs(node.left)
        }
      } else if (node.val < low) {
        if (node.right) {
          dfs(node.right)
        }
      }
    };
    dfs(root);
    return total;
};
//leetcode submit region end(Prohibit modification and deletion)
