//给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
//
// 案例 1:
//
//
//输入:
//    5
//   / \
//  3   6
// / \   \
//2   4   7
//
//Target = 9
//
//输出: True
//
//
//
//
// 案例 2:
//
//
//输入:
//    5
//   / \
//  3   6
// / \   \
//2   4   7
//
//Target = 28
//
//输出: False
//
//
//
// Related Topics 树
// 👍 234 👎 0


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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let arr = [];
    if (root === null) {
      return false
    }
    const dfs = (node) => {
      if (node.left) {
        dfs(node.left)
      }
      arr.push(node.val)
      if (node.right) {
        dfs(node.right)
      }
    }
    dfs(root)

    let i = 0; let j = arr.length - 1;
    while (i < j) {
      if (arr[i] + arr[j] < k) {
        i ++
      } else if (arr[i] + arr[j] > k) {
        j --
      } else {
        return true
      }
    }
    return false
};
//leetcode submit region end(Prohibit modification and deletion)
