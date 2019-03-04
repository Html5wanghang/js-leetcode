/**
 * @param {number[]} num
 * @param {number} target
 * @return {number[]}
 */
//我的 初步ES5写法
// 思路是从数组的第一个数开始，和索引后面的数依次相加，如果两数之和 和 输入目标相等，就把索引放在临时数组返回回来
var twoSum = function (num, target) {
    var tempArr = [];
    for (var i = 0; i < num.length; i++) {
        for (var j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                tempArr = tempArr.concat([i, j])
            }
        }
    }
    return tempArr
};
twoSum([1, 3, 4, 6], 10);

// 优解思路，只做一次循环
let twoSumBest = (num, target) => {
    let obj = {};
    for (let i = 0; i < num.length; i++) {
        let temp = target - num[i];
        if (obj.hasOwnProperty(temp)) {
            //这里加了return 以后，如果执行了这里,for循环以后的语句不会执行
            return [temp, num[i]]
        } else {
            obj[num[i]] = temp;
            console.log(obj)
        }
    }
    //如果没有则是找不到
    throw new Error("no")
};
twoSumBest([1, 3, 4, 6], 4);