//给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。 
//
// 示例: 
//
// MovingAverage m = new MovingAverage(3);
//m.next(1) = 1
//m.next(10) = (1 + 10) / 2
//m.next(3) = (1 + 10 + 3) / 3
//m.next(5) = (10 + 3 + 5) / 3
// 
//
// 
// Related Topics 设计 队列 
// 👍 50 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.list = [];
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.list.push(val);
    if (this.list.length > this.size) {
        let num = this.list.shift();
        this.total = this.total - num + val;
        return this.total / this.size
    } else {
        this.total = this.total + val;
        return this.total/ this.list.length
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
//leetcode submit region end(Prohibit modification and deletion)
