

```javascript
var findRepeatNumber = function(nums) {
    /*
    /* 法一：
            数组排完序后，相等的数就会相邻。
            于是循环直接比较就好，遇到相等的就返回该值。
    */
    nums.sort();
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]) return nums[i];
    }
    
};

```
```javascript

var findRepeatNumber = function(nums) {
    /*
    *法二：
        用对象来存储某个数是否出现过，如果第一次出现就添加属性标识为true，否则就直接返回
    */
    
    
    var flag={};
    for(var i=0;i<nums.length;i++){
        if(!flag[nums[i]]) flag[nums[i]]=true;
        else return nums[i];
    }
};
```
