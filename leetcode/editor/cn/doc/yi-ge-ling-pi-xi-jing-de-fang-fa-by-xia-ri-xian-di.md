### 解题思路
**回文数是对称的**
**能构成回文数的条件可以是里面数量为奇数的字符数目不超过一个。**
**换句话说就是一串字符串里面最多只有一个字符他的数量是奇数，超过一个就不可能构成回文数**

### 方案一：统计字符串内各个不同字符的数目，找到字数数量集合奇数量的个数，判断是否超过一个

- 构建Map对象用于存放字符串数量
- 循环我们的字符串数组，并且放入Map里面，如果Map内已经有了，则它的对应数量+1
- 得到字符数量Map，进行foreach循环，统计里面数量是奇数的个数（除二取余 余数不为0）
- 如果奇数个数大于1，则不是，false
- 如果奇数个数小于1（1或者0），则true
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const nums = s.split('')
    let arrMap = new Map()
    for (let i = 0; i< nums.length; i++){
       if(arrMap.has(nums[i])){
           arrMap.set(nums[i],arrMap.get(nums[i])+1)
       }else{
           arrMap.set(nums[i],1)
       }
    }
    // 判断map里面数量为奇数的字符数目 若大于1 则返回false
    let oddNum = 0
    arrMap.forEach((v,key)=>{
        // 如果数量为奇数，则记录一次
        if(v%2==1){
            oddNum+=1
        }
    })
    if (oddNum<=1) return true;
    return false
};
```