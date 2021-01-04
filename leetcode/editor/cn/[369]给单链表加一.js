//用一个 非空 单链表来表示一个非负整数，然后将这个整数加一。
//
// 你可以假设这个整数除了 0 本身，没有任何前导的 0。
//
// 这个整数的各个数位按照 高位在链表头部、低位在链表尾部 的顺序排列。
//
// 示例:
//
// 输入: [1,2,3]
//输出: [1,2,4]
//
// Related Topics 递归 链表
// 👍 54 👎 0


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
 * @return {ListNode}
 */
var plusOne = function(head) {
  let stack = [];
  let temp = head;
  let tempNode = null;
  while (temp !== null) {
    stack.push(temp.val);
    temp = temp.next;
  }
  let floor = true;
  while (stack.length > 0) {
    let num = stack.pop();
    if (floor && num === 9) {
      let node = new ListNode(0);
      node.next = tempNode;
      tempNode = node;
    } else if (floor && num !== 9) {
      floor = false;
      let node = new ListNode(num + 1);
      node.next = tempNode;
      tempNode = node;
    } else {
      let node = new ListNode(num);
      node.next = tempNode;
      tempNode = node;
    }
  }
  if (floor) {
    let node = new ListNode(1);
    node.next = tempNode;
    tempNode = node;
  };
  return tempNode
};
//leetcode submit region end(Prohibit modification and deletion)
