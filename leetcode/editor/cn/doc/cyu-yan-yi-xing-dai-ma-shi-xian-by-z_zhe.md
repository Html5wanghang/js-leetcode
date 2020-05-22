### 解题思路
用个递归，一行代码搞定

### 代码

```c
int singleNumber(int* nums, int numsSize){
    return numsSize==1?nums[0]:(singleNumber(nums+1,numsSize-1)^nums[0]);
}
```