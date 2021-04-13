//给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。
//
// 注意：
//
//
// 给定的目标值 target 是一个浮点数
// 题目保证在该二叉搜索树中只会存在一个最接近目标值的数
//
//
// 示例：
//
// 输入: root = [4,2,5,1,3]，目标值 target = 3.714286
//
//    4
//   / \
//  2   5
// / \
//1   3
//
//输出: 4
//
// Related Topics 树 二分查找
// 👍 78 👎 0


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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    const arr = [];
    const dfs = (node) => {
      if (node.left) {
        dfs(node.left)
      }
      arr.push(node.val)
      if (node.right) {
        dfs(node.right)
      }
    }
    dfs(root);
    let start = 0; let end = arr.length - 1;
    let middle = (start + end) >> 1;
    let result = root.val;
    while (start < end) {
        middle = (start + end) >> 1;
        if (arr[middle] > target) {
            end = middle
        } else if (arr[middle] < target) {
            start = middle + 1
        } else {
            result = target;
            break
        }
    }
    if (result === target) {
      return target
    }
    // console.log(start,end,middle)
    if (start === 0) {
      result = arr[start]
    } else {
      if (Math.abs(target - arr[start]) >= Math.abs(target - arr[start - 1])) {
        return arr[start - 1]
      } else {
        return arr[start]
      }
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
