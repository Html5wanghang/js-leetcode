//给定两个用链表表示的整数，每个节点包含一个数位。 
//
// 这些数位是反向存放的，也就是个位排在链表首部。 
//
// 编写函数对这两个整数求和，并用链表形式返回结果。 
//
// 
//
// 示例： 
//
// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
//输出：2 -> 1 -> 9，即912
// 
//
// 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢? 
//
// 示例： 
//
// 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
//输出：9 -> 1 -> 2，即912
// 
// Related Topics 链表 数学 
// 👍 44 👎 0


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
    let result = new ListNode(0);
    let next = false;
    let value1, value2;
    let temp = result;
    while (l1 !== null || l2 !== null) {
        if (l1 === null) {
            value1 = 0;
        } else  {
            value1 = l1.val;
            l1 = l1.next;
        }
        if (l2 === null) {
            value2 = 0
        } else {
            value2 = l2.val;
            l2 = l2.next;
        }
        if (next) {
            let val = value1 + value2 >= 9 ? value1 + value2 - 9 : value1 + value2 + 1;
            next = value1 + value2 >= 9;
            temp.next = new ListNode(val);
            temp = temp.next;
        } else {
            let val = value1 + value2 > 9 ? value1 + value2 - 10 : value1 + value2;
            next = value1 + value2 > 9;
            temp.next = new ListNode(val);
            temp = temp.next;
        }
    }
    if (next) {
        temp.next = new ListNode(1);
    }
    return result.next
};
//leetcode submit region end(Prohibit modification and deletion)
