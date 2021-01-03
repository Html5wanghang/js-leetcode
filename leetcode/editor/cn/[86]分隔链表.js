//给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。 
//
// 你应当保留两个分区中每个节点的初始相对位置。 
//
// 
//
// 示例： 
//
// 
//输入：head = 1->4->3->2->5->2, x = 3
//输出：1->2->2->4->3->5
// 
// Related Topics 链表 双指针 
// 👍 336 👎 0


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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let node = new ListNode(0);
    let temp = node;
    let node1 = new ListNode(0);
    let temp1 = node1;
    while (head !== null) {
        if (head.val < x) {
            temp.next = new ListNode(head.val);
            temp = temp.next;
        } else {
            temp1.next = new ListNode(head.val);
            temp1 = temp1.next;
        }
        head = head.next;
    };
    temp.next = node1.next;
    return node.next;
};
//leetcode submit region end(Prohibit modification and deletion)
