//请判断一个链表是否为回文链表。
//
// 示例 1:
//
// 输入: 1->2
//输出: false
//
// 示例 2:
//
// 输入: 1->2->2->1
//输出: true
//
//
// 进阶：
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
// Related Topics 链表 双指针
// 👍 826 👎 0


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    let i = 0; let j = arr.length - 1;
    let result = true;
    while (i < j) {
        if (arr[i] === arr[j]) {
            i ++;
            j --;
        } else {
            result = false;
            break
        }
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
