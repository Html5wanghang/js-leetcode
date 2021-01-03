//给定链表 head 和两个整数 m 和 n. 遍历该链表并按照如下方式删除节点: 
//
// 
// 开始时以头节点作为当前节点. 
// 保留以当前节点开始的前 m 个节点. 
// 删除接下来的 n 个节点. 
// 重复步骤 2 和 3, 直到到达链表结尾. 
// 
//
// 在删除了指定结点之后, 返回修改过后的链表的头节点. 
//
// 进阶问题: 你能通过就地修改链表的方式解决这个问题吗? 
//
// 
//
// 示例 1: 
//
// 
//
// 输入: head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3
//输出: [1,2,6,7,11,12]
//解析: 保留前(m = 2)个结点,  也就是以黑色节点表示的从链表头结点开始的结点(1 ->2).
//删除接下来的(n = 3)个结点(3 -> 4 -> 5), 在图中以红色结点表示.
//继续相同的操作, 直到链表的末尾.
//返回删除结点之后的链表的头结点. 
//
// 示例 2: 
//
// 
//
// 输入: head = [1,2,3,4,5,6,7,8,9,10,11], m = 1, n = 3
//输出: [1,5,9]
//解析: 返回删除结点之后的链表的头结点. 
//
// 示例 3: 
//
// 输入: head = [1,2,3,4,5,6,7,8,9,10,11], m = 3, n = 1
//输出: [1,2,3,5,6,7,9,10,11]
// 
//
// 示例 4: 
//
// 输入: head = [9,3,7,7,9,10,8,2], m = 1, n = 2
//输出: [9,7,8]
// 
//
// 
//
// 提示: 
//
// 
// 1 <= 链表结点数 <= 10^4. 
// [1 <= 链表的每一个结点值 <=10^6]. 
// 1 <= m,n <= 1000 
// 
// Related Topics 链表 
// 👍 9 👎 0


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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let node = new ListNode(0);
    let temp = node;
    let index = 0;
    while (head !== null) {
        if (index % (m + n) < m ) {
            temp.next = new ListNode(head.val);
            temp  = temp.next;
        }
        head = head.next;
        index ++;
        if (index === m + n) {
            index = 0;
        }
    }
    return node.next;
};
// 2,3

// 1, 2
// 3, 4, 5
// 6,7
// 8, 9,10
//leetcode submit region end(Prohibit modification and deletion)
