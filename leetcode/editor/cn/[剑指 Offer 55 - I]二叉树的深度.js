//输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
//
// 例如：
//
// 给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
//
//
//
// 提示：
//
//
// 节点总数 <= 10000
//
//
// 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tre
//e/
// Related Topics 树 深度优先搜索
// 👍 102 👎 0


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
var maxDepth = function(root) {
    let max = 0;
    if (root === null) {
        return max
    }
    const dfs = (node, num) => {
        const newNum = num + 1;
        if (node.left) {
            dfs(node.left, newNum)
        }
        if (node.right) {
            dfs(node.right, newNum)
        }
        max = Math.max(max, newNum)
    };
    dfs(root, 0);
    return max
};
//leetcode submit region end(Prohibit modification and deletion)
