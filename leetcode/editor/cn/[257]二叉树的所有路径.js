//给定一个二叉树，返回所有从根节点到叶子节点的路径。 
//
// 说明: 叶子节点是指没有子节点的节点。 
//
// 示例: 
//
// 输入:
//
//   1
// /   \
//2     3
// \
//  5
//
//输出: ["1->2->5", "1->3"]
//
//解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3 
// Related Topics 树 深度优先搜索 
// 👍 430 👎 0


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let arr = [];
    if (root === null) {
        return arr
    }
    let dfs = (node,list) => {
        let nodeList = list.concat(node.val);
        if (node.left === null && node.right === null) {
            arr.push(nodeList.join('->'))
        }
        if (node.left !== null) {
            dfs(node.left, nodeList)
        }
        if (node.right !== null) {
            dfs(node.right, nodeList)
        }
    };
    dfs(root,[])
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
