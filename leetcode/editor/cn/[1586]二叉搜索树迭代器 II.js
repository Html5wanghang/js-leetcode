//实现二叉搜索树（BST）的中序遍历迭代器 BSTIterator 类：
//
//
// BSTIterator(TreeNode root) 初始化 BSTIterator 类的实例。二叉搜索树的根节点 root 作为构造函数的参数传入。内部
//指针使用一个不存在于树中且小于树中任意值的数值来初始化。
// boolean hasNext() 如果当前指针在中序遍历序列中，存在右侧数值，返回 true ，否则返回 false 。
// int next() 将指针在中序遍历序列中向右移动，然后返回移动后指针所指数值。
// boolean hasPrev() 如果当前指针在中序遍历序列中，存在左侧数值，返回 true ，否则返回 false 。
// int prev() 将指针在中序遍历序列中向左移动，然后返回移动后指针所指数值。
//
//
// 注意，虽然我们使用树中不存在的最小值来初始化内部指针，第一次调用 next() 需要返回二叉搜索树中最小的元素。
//
// 你可以假设 next() 和 prev() 的调用总是有效的。即，当 next()/prev() 被调用的时候，在中序遍历序列中一定存在下一个/上一个元素
//。
//
// 进阶：你可以不提前遍历树中的值来解决问题吗？
//
//
//
// 示例 1:
//
//
//
// 输入
//["BSTIterator", "next", "next", "prev", "next", "hasNext", "next", "next", "ne
//xt", "hasNext", "hasPrev", "prev", "prev"]
//[[[7, 3, 15, null, null, 9, 20]], [null], [null], [null], [null], [null], [nul
//l], [null], [null], [null], [null], [null], [null]]
//输出
//[null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]
//
//解释
//// 划线的元素表示指针当前的位置。
//BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]); // 当
//前状态为 <u> </u> [3, 7, 9, 15, 20]
//bSTIterator.next(); // 状态变为 [<u>3</u>, 7, 9, 15, 20], 返回 3
//bSTIterator.next(); // 状态变为 [3, <u>7</u>, 9, 15, 20], 返回 7
//bSTIterator.prev(); // 状态变为 [<u>3</u>, 7, 9, 15, 20], 返回 3
//bSTIterator.next(); // 状态变为 [3, <u>7</u>, 9, 15, 20], 返回 7
//bSTIterator.hasNext(); // 返回 true
//bSTIterator.next(); // 状态变为 [3, 7, <u>9</u>, 15, 20], 返回 9
//bSTIterator.next(); // 状态变为 [3, 7, 9, <u>15</u>, 20], 返回 15
//bSTIterator.next(); // 状态变为 [3, 7, 9, 15, <u>20</u>], 返回 20
//bSTIterator.hasNext(); // 返回 false
//bSTIterator.hasPrev(); // 返回 true
//bSTIterator.prev(); // 状态变为 [3, 7, 9, <u>15</u>, 20], 返回 15
//bSTIterator.prev(); // 状态变为 [3, 7, <u>9</u>, 15, 20], 返回 9
//
//
//
//
// 提示:
//
//
// 树中节点个数的范围是 [1, 105] 。
// 0 <= Node.val <= 106
// 最多调用 105 次 hasNext、 next、 hasPrev 和 prev 。
//
// Related Topics 栈 树 设计 二叉搜索树 二叉树 迭代器
// 👍 7 👎 0


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
 */
var BSTIterator = function(root) {
    this.stack = [];
    let dfs = (node) => {
        if (node.left) {
            dfs(node.left)
        }
        this.stack.push(node.val)
        if (node.right) {
            dfs(node.right)
        }
    };
    dfs(root);
    this.idx = -1;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.idx !== this.stack.length - 1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.idx ++;
    return this.stack[this.idx];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
    return this.idx > 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
    this.idx --;
    return this.stack[this.idx];
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
//leetcode submit region end(Prohibit modification and deletion)
