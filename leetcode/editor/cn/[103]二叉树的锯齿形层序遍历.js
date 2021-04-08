//给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
//给定二叉树 [3,9,20,null,null,15,7],
//
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回锯齿形层序遍历如下：
//
//
//[
//  [3],
//  [20,9],
//  [15,7]
//]
//
// Related Topics 栈 树 广度优先搜索
// 👍 416 👎 0


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
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return []
    }
    let result = [];
    let bfs = (list, isRight) => {
        let arr = []; let nextList = [];
        for (let i = 0; i < list.length; i ++) {
            arr.push(list[i].val);
            if (list[i].left) {
                nextList.push(list[i].left)
            }
            if (list[i].right) {
                nextList.push(list[i].right)
            }
        }
        if (isRight) {
            arr.reverse();
        }
        result.push(arr);
        if (nextList.length !== 0) {
            bfs(nextList, !isRight)
        }
    };
    bfs([root], false)
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
