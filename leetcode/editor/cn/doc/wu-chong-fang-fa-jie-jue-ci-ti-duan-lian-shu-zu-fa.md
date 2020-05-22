```

```js
var detectCapitalUse = function (word) {
    let temp = '';
    for (let i = 0; i < word.length; i++) {
        let num = word[i].charCodeAt(0);
        num <= 90 ? temp += '1' : temp += '0';
    }
    const trueArr = [''.padEnd(word.length, 1), ''.padEnd(word.length, 0), '1'.padEnd(word.length, 0)];
    // 方法1：数组方法：filter
    // return trueArr.filter(item => item === temp).length !== 0;
    // 方法2：数组方法some，次快
    // return trueArr.some(item => item === temp);
    // 方法3：数组方法includes：最快
    // return trueArr.includes(temp);
    // 方法4：for循环1
    // for (const [index, value] of trueArr.entries()) {
    //     if (value === temp) return true;
    //     if (index === trueArr.length - 1) return false;
    // }
    // 方法5：for循环2
    // for (let i = 0; i < trueArr.length; i++) {
    //     if (trueArr[i] === temp) return true;
    //     if (i === trueArr.length - 1) return false;
    // }
    // 方法5：正则:只需要如下一行代码
    // return /^([a-z]+)*|^([A-Z]+)*|^([A-Z][a-z]*)$/.test(word)



};

```
tips:
1. [String.propertype.padend()用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
2. a-z的码点范围是：97-122；A-Z的码点范围是：65-90；
