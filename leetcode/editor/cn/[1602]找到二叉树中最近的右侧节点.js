//给定一棵二叉树的根节点 root 和树中的一个节点 u ，返回与 u 所在层中距离最近的右侧节点，当 u 是所在层中最右侧的节点，返回 null 。 
//
// 示例 1: 
//
// 
//
// 输入: root = [1,2,3,null,4,5,6], u = 4
//输出: 5
//解释: 节点 4 所在层中，最近的右侧节点是节点 5。
// 
//
// 示例 2: 
//
// 
//
// 输入: root = [3,null,4,2], u = 2
//输出: null
//解释: 2 的右侧没有节点。
// 
//
// 示例 3: 
//
// 输入: root = [1], u = 1
//输出: null
// 
//
// 示例 4: 
//
// 输入: root = [3,4,2,null,null,null,1], u = 4
//输出: 2
// 
//
// 
//
// 提示: 
//
// 
// 树中节点个数的范围是 [1, 105] 。 
// 1 <= Node.val <= 105 
// 树中所有节点的值是唯一的。 
// u 是以 root 为根的二叉树的一个节点。 
// 
// Related Topics 树 广度优先搜索 
// 👍 5 👎 0


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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    let result = null;
    const bfs = (list) => {
        if (list.length === 0 || result !== null) {
            return result
        }
        let newArr = [];
        for (let i = 0; i < list.length; i ++) {
            if (list[i].val === u.val) {
                if (i === list.length - 1) {
                    result = null;
                    newArr = [];
                    break
                } else {
                    result = list[i + 1]
                }
            } else {
                if (list[i].left) {
                    newArr.push(list[i].left)
                }
                if (list[i].right) {
                    newArr.push(list[i].right)
                }
            }
        }
        bfs(newArr)
    }
    bfs([root]);
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
