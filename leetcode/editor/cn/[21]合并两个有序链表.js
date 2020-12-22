//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例：
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
//
// Related Topics 链表
// 👍 1446 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(0);
    let tempNode = node;
    while (l1 !== null && l2 !== null) {
      if (l1.val >= l2.val) {
        tempNode.next = new ListNode(l2.val);
        tempNode = tempNode.next;
        l2 = l2.next
      } else {
        tempNode.next = new ListNode(l1.val);
        tempNode = tempNode.next;
        l1 = l1.next
      }
    }
    if (l1 === null) {
      tempNode.next = l2
    }
    if (l2 === null) {
      tempNode.next = l1;
    }
    return node.next;
};
//leetcode submit region end(Prohibit modification and deletion)
