//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
//二叉树：[3,9,20,null,null,15,7],
//
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层序遍历结果：
//
//
//[
//  [3],
//  [9,20],
//  [15,7]
//]
//
// Related Topics 树 广度优先搜索
// 👍 819 👎 0


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    const bfs = (list) => {
        if (list.length === 0) {
            return
        }
        let arr = []; let nextList = [];
        for (let i = 0; i < list.length; i ++) {
            arr.push(list[i].val);
            if (list[i].left) {
                nextList.push(list[i].left)
            }
            if (list[i].right) {
                nextList.push(list[i].right)
            }
        };
        result.push(arr);
        bfs(nextList);
    };
    bfs([root]);
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
