//给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
//
//
//
// 示例：
//
// 输入：
//
//   1
//    \
//     3
//    /
//   2
//
//输出：
//1
//
//解释：
//最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
//
//
//
//
// 提示：
//
//
// 树中至少有 2 个节点。
// 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
//相同
//
// Related Topics 树
// 👍 248 👎 0


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
var getMinimumDifference = function(root) {
    const arr = []; let min = Infinity
    let dfs = (node) => {
        if (node.left) {
          dfs(node.left)
        }
        arr.push(node.val)
        if (node.right) {
          dfs(node.right)
        }
    }
    dfs(root)
    for (let i = 1; i < arr.length; i ++) {
      if (arr[i] - arr[i - 1] < min) {
        min = arr[i] - arr[i - 1]
      }
    }
    return min
};
//leetcode submit region end(Prohibit modification and deletion)
