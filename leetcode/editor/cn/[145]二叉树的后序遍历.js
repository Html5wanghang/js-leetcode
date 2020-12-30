//给定一个二叉树，返回它的 后序 遍历。 
//
// 示例: 
//
// 输入: [1,null,2,3]  
//   1
//    \
//     2
//    /
//   3 
//
//输出: [3,2,1] 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 
// 👍 497 👎 0


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
var postorderTraversal = function(root) {
    let postorder = function (root, res) {
        if (root.left !== null) {
            postorder(root.left, res);
        }
        if (root.right !== null) {
            postorder(root.right, res);
        };
        res.push(root.val);
    }
    let res = [];
    if (root !== null) {
        postorder(root,res)
    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
