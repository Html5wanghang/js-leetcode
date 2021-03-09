//输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
//
//
//
// 示例:
//给定如下二叉树，以及目标和 target = 22，
//
//
//              5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \    / \
//        7    2  5   1
//
//
// 返回:
//
//
//[
//   [5,4,11,2],
//   [5,8,4,5]
//]
//
//
//
//
// 提示：
//
//
// 节点总数 <= 10000
//
//
// 注意：本题与主站 113 题相同：https://leetcode-cn.com/problems/path-sum-ii/
// Related Topics 树 深度优先搜索
// 👍 141 👎 0


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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const arr = [];
    if (root === null) {
      return arr
    }
    let dfs = (node, total, list) => {
      if (node === null) {
        if (total === target) {
          arr.push(list)
        }
      } else {
        if (node.left !== null) {
          dfs(node.left, total + node.val, list.concat(node.val));
        }
        if (node.right !== null) {
          dfs(node.right,total + node.val, list.concat(node.val));
        }
        if (node.left === null && node.right === null) {
          dfs(null, total + node.val, list.concat(node.val))
        }
      }
    };
    dfs(root, 0, []);
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
