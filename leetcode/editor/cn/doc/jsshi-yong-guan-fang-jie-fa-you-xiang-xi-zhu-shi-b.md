```
var RandomizedSet = function () {
    // this.set = new Set()
    //存放值
    this.set = []
    //表示数组中的对应的值的下标是多少
    //用哈希表的键(key)存储val 用值(value)存储这个值在数组中的下标index
    //然后删除的时候就可以根据val找到数组里面的下标 然后在数组中进行删除
    //比如说当我想要找数组里面的10 就可以通过setMap[10]来找到数组中对应的下标然后删除 不需要遍历
    this.setMap = {}
};

RandomizedSet.prototype.insert = function (val) {
    //如果已经有这个值了就返回false
    if (typeof (this.setMap[val]) !== "undefined") return false
    //在表中记录插入的值在数组中的下标
    this.setMap[val] = this.set.length
    //在数组中添加这个值
    this.set.push(val)
    return true
};

RandomizedSet.prototype.remove = function (val) {
    //如果没有这个值就返回false
    if (typeof (this.setMap[val]) === "undefined") return false;
    // move the last element to the place idx of the element to delete
    // 得到最后一个数的下标
    let lastIndex = this.set.length - 1
    //得到数组中最后一个数
    let lastNum = this.set[lastIndex]
    // 找到要删除的值的下标
    let deleteIndex = this.setMap[val]
    // 用最后一个数代替要删除的值
    this.set[deleteIndex] = lastNum
    // 在表中把最后一个数的位置设置为要删除的值的位置
    this.setMap[lastNum] = deleteIndex
    // 删除最后一个值
    this.set.pop()
    delete this.setMap[val]
    return true;
};

RandomizedSet.prototype.getRandom = function () {
    let size = this.set.length
    //返回一个0到set的长度之间的随机数
    let random = Math.floor(Math.random() * size)
    //以随机数为下标返回
    return this.set[random]
};
```
