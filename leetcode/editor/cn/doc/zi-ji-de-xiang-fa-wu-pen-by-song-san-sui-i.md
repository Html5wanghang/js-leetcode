### 解题思路
因为只存在一个不重复的数字其他都两两出现，所以进行排序后，相同的数字必定是连续的，所以只要判断是否连续
### 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a, b) => {
        return a-b
    })
    for (let i = 0; i<nums.length;i+=2){
        if (nums[i] != nums[i+1]) {
            return nums[i]
        }
    }
};
```