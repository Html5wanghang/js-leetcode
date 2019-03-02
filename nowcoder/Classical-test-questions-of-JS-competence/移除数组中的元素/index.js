//自己的做法
function removeWithoutCopy(arr, item) {
  var newArr = [];
  arr.forEach(function (cat, index) {
    if (cat === item) {
      newArr.push(index);
    }
  });
  newArr.forEach(function (ca, idx) {
    arr.splice(ca - idx, 1)
  });
  return arr
}

removeWithoutCopy([1, 2, 34, 5, 6, 8, 1, 3, 1], 1);

//网上大牛的做法1
//把arr 看成一个队列，
// 如果 和比的数不相等，就push到最后，再删除数组的第一个元素
//如果相等，则直接删除数组的第一个元素
function removeWithoutCopyOne(arr, item) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[0] !== item) {
      arr.push(arr[0]);
    }
    arr.shift();
  }
  return arr;
}

removeWithoutCopyOne([1, 2, 34, 5, 6, 8, 1, 3, 1], 1);

//网上大牛的做法2
function removeWithoutCopyTwo(arr, item) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--
    }
  }
  console.log(arr);
  return arr;
}

removeWithoutCopyTwo([1, 2, 34, 5, 6, 8, 1, 3, 1], 1);