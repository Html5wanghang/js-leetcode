//反转一个单链表。 
//
// 示例: 
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL 
//
// 进阶: 
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ 
// Related Topics 链表 
// 👍 1425 👎 0


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
var reverseList = function(head) {
    let node = new ListNode(0);
    let temp = node;
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    while (arr.length > 0) {
        temp.next = new ListNode(arr.pop());
        temp = temp.next;
    }
    return node.next;
};
//leetcode submit region end(Prohibit modification and deletion)
