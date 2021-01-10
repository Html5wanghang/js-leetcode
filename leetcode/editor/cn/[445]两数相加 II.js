//给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。 
//
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。 
//
// 
//
// 进阶： 
//
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。 
//
// 
//
// 示例： 
//
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 8 -> 0 -> 7
// 
// Related Topics 链表 
// 👍 318 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 = [];
    let node2 = [];
    let temp = null;
    let next = false;
    while (l1 !== null) {
        node1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        node2.push(l2.val);
        l2 = l2.next;
    }
    while (node1.length !== 0 || node2.length !== 0) {
        let num1 = node1.pop();
        let num2 = node2.pop();
        let num;
        if (!num1) {
            num1 = 0
        }
        if (!num2) {
            num2 = 0
        }
        if (next) {
            num = num1 + num2 >= 9 ? num1 + num2 - 9 : num1 + num2 + 1;
            next = num1 + num2 >= 9
        } else {
            num = num1 + num2 >= 10 ? num1 + num2 - 10 : num1 + num2;
            next = num1 + num2 >= 10
        };
        let node = new ListNode(num);
        node.next = temp;
        temp = node;
    }
    if (next) {
        let node = new ListNode(1);
        node.next = temp;
        temp = node;
    };
    return temp
};
//leetcode submit region end(Prohibit modification and deletion)
