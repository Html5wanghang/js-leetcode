//从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
//
//
//
// 例如:
//给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
//
//
//
//
// 提示：
//
//
// 节点总数 <= 1000
//
//
// 注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-tra
//versal/
// Related Topics 树 广度优先搜索
// 👍 98 👎 0


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
      return []
    }
    let result = [];
    const bfs = (list) => {
      if (list.length === 0) {
        return
      }
      const newList = [];
      const valueList = [];
      for (let i = 0; i < list.length; i ++) {
          valueList.push(list[i].val);
          if (list[i].left) {
            newList.push(list[i].left)
          }
          if (list[i].right) {
            newList.push(list[i].right)
          }
      }
      result.push(valueList)
      bfs(newList)
    }
    bfs([root])
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
