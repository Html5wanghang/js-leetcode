#  解法1：
##  整体思路：
将长度较短的链表在末尾补零使得两个连表长度相等，再一个一个元素对其相加（考虑进位）

##  具体步骤：
1. 获取两个链表所对应的长度
2. 在较短的链表末尾补零
3. 对齐相加考虑进位

###  实现代码：

```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int len1=1;//记录l1的长度
        int len2=1;//记录l2的长度
        ListNode* p=l1;
        ListNode* q=l2;
        while(p->next!=NULL)//获取l1的长度
        {
            len1++;
            p=p->next;
        }
        while(q->next!=NULL)//获取l2的长度
        {
            len2++;
            q=q->next;
        }
        if(len1>len2)//l1较长，在l2末尾补零
        {
            for(int i=1;i<=len1-len2;i++)
            {
                q->next=new ListNode(0);
                q=q->next;
            }
        }
        else//l2较长，在l1末尾补零
        {
            for(int i=1;i<=len2-len1;i++)
            {
                p->next=new ListNode(0);
                p=p->next;
            }
        }
        p=l1;
        q=l2;
        bool count=false;//记录进位
        ListNode* l3=new ListNode(-1);//存放结果的链表
        ListNode* w=l3;//l3的移动指针
        int i=0;//记录相加结果
        while(p!=NULL&&q!=NULL)
        {
            i=count+p->val+q->val;
            w->next=new ListNode(i%10);
            count=i>=10?true:false;
            w=w->next;
            p=p->next;
            q=q->next;
        }
        if(count)//若最后还有进位
        {
            w->next=new ListNode(1);
            w=w->next;
        }
        return l3->next; 
    }
};
```

#  解法2：
##  整体思路：
不对齐补零，若链表不为空则用sum(代表每个位的和的结果)加上，考虑进位。

##  实现代码：

```
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* head=new ListNode(-1);//存放结果的链表
        ListNode* h=head;//移动指针
        int sum=0;//每个位的加和结果
        bool carry=false;//进位标志
        while(l1!=NULL||l2!=NULL)
        {
            sum=0;
            if(l1!=NULL)
            {
                sum+=l1->val;
                l1=l1->next;
            }
            if(l2!=NULL)
            {
                sum+=l2->val;
                l2=l2->next;
            }
            if(carry)
                sum++;
            h->next=new ListNode(sum%10);
            h=h->next;
            carry=sum>=10?true:false;
        }
        if(carry)
        {
            h->next=new ListNode(1);
        }
        return head->next;
    }
};
```
**觉得本文对你有帮助，点个赞噢谢谢**

