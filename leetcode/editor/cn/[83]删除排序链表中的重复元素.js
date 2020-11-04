//给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
//
// 示例 1:
//
// 输入: 1->1->2
//输出: 1->2
//
//
// 示例 2:
//
// 输入: 1->1->2->3->3
//输出: 1->2->3
// Related Topics 链表
// 👍 417 👎 0


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
  let res = head;
  while (res && res.next) {
    if (res.val === res.next.val) {
      res.next = res.next.next;
    } else {
      res = res.next;
    }
  }
  return head;
};
// var deleteDuplicates = function(head) {
//   let res = new ListNode(0);
//   let b = res;
//   let val;
//   while (head) {
//     if (val !== head.val) {
//       val = head.val;
//       b.next = new ListNode(head.val);
//       b = b.next;
//     }
//     head = head.next;
//   }
//   return res.next;
// };
//leetcode submit region end(Prohibit modification and deletion)
