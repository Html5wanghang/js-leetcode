//给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。 
//
// 说明: 叶子节点是指没有子节点的节点。 
//
// 示例: 
//给定如下二叉树，以及目标和 sum = 22， 
//
//               5
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
// [
//   [5,4,11,2],
//   [5,8,4,5]
//]
// 
// Related Topics 树 深度优先搜索 
// 👍 409 👎 0


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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let arr = [];
    if (root === null) {
        return arr
    }
    let dfs = (node, list, total) => {
        list = list.concat(node.val);
        total += node.val;
        if (total === sum && node.left === null && node.right === null) {
            arr.push(list);
        }
        if (node.left !== null) {
            dfs(node.left, list, total)
        }
        if (node.right !== null) {
            dfs(node.right, list, total)
        }
    };
    dfs(root, [], 0);
    return arr
};
//leetcode submit region end(Prohibit modification and deletion)
