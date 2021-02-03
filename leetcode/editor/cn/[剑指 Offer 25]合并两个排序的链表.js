//输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。 
//
// 示例1： 
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4 
//
// 限制： 
//
// 0 <= 链表长度 <= 1000 
//
// 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/ 
// Related Topics 分治算法 
// 👍 81 👎 0


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
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode(0);
    let tempA = l1; let tempB = l2; let temp = list;
    while (tempA !== null && tempB !== null) {
        if (tempA.val >= tempB.val) {
            temp.next = new ListNode(tempB.val);
            tempB = tempB.next;
        } else {
            temp.next = new ListNode(tempA.val);
            tempA = tempA.next;
        }
        temp = temp.next;
    }
    if (tempA === null && tempB !== null) {
        temp.next = tempB;
    }
    if (tempA !== null && tempB === null ) {
        temp.next = tempA;
    }
    return list.next
};
//leetcode submit region end(Prohibit modification and deletion)
