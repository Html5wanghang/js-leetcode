//计算给定二叉树的所有左叶子之和。 
//
// 示例： 
//
// 
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24 
//
// 
// Related Topics 树 
// 👍 272 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let total = 0;
    if (root === null) {
        return total
    }
    let dfs = (node) => {
        if (node.left !== null && node.left.left === null && node.left.right === null) {
            total += node.left.val;
        }
        if (node.left !== null) {
            dfs(node.left)
        }
        if (node.right !== null) {
            dfs(node.right)
        }
    }
    dfs(root)
    return total;
};
//leetcode submit region end(Prohibit modification and deletion)
