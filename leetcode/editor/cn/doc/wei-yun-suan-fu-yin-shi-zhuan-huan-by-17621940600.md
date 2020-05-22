### 解题思路
**简单明了一看即懂**

### 代码

```javascript
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
     let result = new ListNode('head');
     let str = result;
     let val = 0 
     
    while(l1 || l2 || val ) {
        // 通过位运算符获取当前值 通过+=求和
        val += ~~(l1&&l1.val) + ~~(l2&&l2.val)  
        // 当前节点的val则为当前和的余数
        str.next = new ListNode(val % 10) 
        // 下一次循环的str
        str = str.next
        // 下一次循环的l1
        l1 = l1 && l1.next
        // 下一次循环的l2
        l2 = l2 && l2.next  
        // 如果本次循环的和大于9 则进位1 因为true为1 false为0可以直接代入使用
        val = val > 9
    }
  return result.next
};
```