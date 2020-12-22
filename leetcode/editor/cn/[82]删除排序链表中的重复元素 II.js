//给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
//
// 示例 1:
//
// 输入: 1->2->3->3->4->4->5
//输出: 1->2->5
//
//
// 示例 2:
//
// 输入: 1->1->1->2->3
//输出: 2->3
// Related Topics 链表
// 👍 413 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = new ListNode(0);
  let tempNode = node;
  let headNode = head;
  let set = new Set();
  while (headNode !== null) {
    if (headNode.next !== null) {
      if (headNode.val !== headNode.next.val && !set.has(headNode.val)) {
        tempNode.next = new ListNode(headNode.val);
        tempNode = tempNode.next;
      } else {
        set.add(headNode.val);
      }
    } else {
      if (!set.has(headNode.val)) {
        tempNode.next = new ListNode(headNode.val);
        tempNode = tempNode.next;
      }
    }
    headNode = headNode.next;
  };
  return node.next;
};
//leetcode submit region end(Prohibit modification and deletion)
