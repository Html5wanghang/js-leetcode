//给你一个链表数组，每个链表都已经按升序排列。
//
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
//
//
//
// 示例 1：
//
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
//输出：[1,1,2,3,4,4,5,6]
//解释：链表数组如下：
//[
//  1->4->5,
//  1->3->4,
//  2->6
//]
//将它们合并到一个有序链表中得到。
//1->1->2->3->4->4->5->6
//
//
// 示例 2：
//
// 输入：lists = []
//输出：[]
//
//
// 示例 3：
//
// 输入：lists = [[]]
//输出：[]
//
//
//
//
// 提示：
//
//
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] 按 升序 排列
// lists[i].length 的总和不超过 10^4
//
// Related Topics 堆 链表 分治算法
// 👍 1067 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0]
  }
  let mergeTwoLists = function (l1, l2) {
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
  let i = 1;
  let node = lists[0];
  while (i < lists.length) {
    node = mergeTwoLists(node, lists[i]);
    i++
  }
  return node
};
//leetcode submit region end(Prohibit modification and deletion)
