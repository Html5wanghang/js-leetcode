//编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。
//分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。 
//
// 示例: 
//
// 输入: head = 3->5->8->5->10->2->1, x = 5
//输出: 3->1->2->10->5->5->8
// 
// Related Topics 链表 双指针 
// 👍 40 👎 0


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
    let start = new ListNode(0);
    let end = new ListNode(0);
    let startTemp = start; let endTemp = end;
    while (head !== null) {
        if (head.val >= x) {
            endTemp.next = new ListNode(head.val);
            endTemp = endTemp.next;
        } else {
            startTemp.next = new ListNode(head.val);
            startTemp = startTemp.next;
        }
        head = head.next
    }
    startTemp.next = end.next;
    return start.next
};
//leetcode submit region end(Prohibit modification and deletion)
