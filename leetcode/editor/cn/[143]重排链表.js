//给定一个单链表 L：L0→L1→…→Ln-1→Ln ， 
//将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→… 
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。 
//
// 示例 1: 
//
// 给定链表 1->2->3->4, 重新排列为 1->4->2->3. 
//
// 示例 2: 
//
// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3. 
// Related Topics 链表 
// 👍 515 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 1 2 3 4  31  null 2
// 1 2 3 4 5 31 52 null 3
var reorderList = function(head) {
    const arr = [];
    let temp = head;
    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }
    let tempNode = head;
    let num = 0;
    let start = 0; let end = arr.length - 1;
    while (num < arr.length) {
        if (num % 2 === 0) {
            tempNode.val = arr[start];
            start ++
        } else {
            tempNode.val= arr[end];
            end --;
        }
        num ++
        tempNode = tempNode.next
    }
   // return node.next

};
//leetcode submit region end(Prohibit modification and deletion)
