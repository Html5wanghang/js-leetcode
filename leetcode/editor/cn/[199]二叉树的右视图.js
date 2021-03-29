//给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。 
//
// 示例: 
//
// 输入: [1,2,3,null,5,null,4]
//输出: [1, 3, 4]
//解释:
//
//   1            <---
// /   \
//2     3         <---
// \     \
//  5     4       <---
// 
// Related Topics 树 深度优先搜索 广度优先搜索 递归 队列 
// 👍 435 👎 0


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
var rightSideView = function(root) {
    let result = [];
    if (root === null) {
        return result
    }
    const bfs = (list) => {
        if (list.length === 0) {
            return
        }
        let arr = [];
        for (let i = 0; i < list.length; i ++) {
            if (list[i].left) {
                arr.push(list[i].left)
            }
            if (list[i].right) {
                arr.push(list[i].right)
            }
        }
        result.push(list[list.length - 1].val)
        bfs(arr);
    }
    bfs([root])
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
