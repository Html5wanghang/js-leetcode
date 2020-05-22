执行用时 :60 ms, 在所有 JavaScript 提交中击败了82.26%的用户
内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let obj = {};
  for(let i=0; i<s.length; i++){
    let char = s[i];
    if(obj[char])
      delete obj[char]
    else
      obj[char] = 1;
  }
  return Object.keys(obj).length <= 1;
};  
```
