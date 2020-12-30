//如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数
//值排序之后中间两个数的平均值。
//
// 例如，
//
// [2,3,4] 的中位数是 3
//
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5
//
// 设计一个支持以下两种操作的数据结构：
//
//
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
//
//
// 示例 1：
//
// 输入：
//["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
//[[],[1],[2],[],[3],[]]
//输出：[null,null,null,1.50000,null,2.00000]
//
//
// 示例 2：
//
// 输入：
//["MedianFinder","addNum","findMedian","addNum","findMedian"]
//[[],[2],[],[3],[]]
//输出：[null,null,2.00000,null,2.50000]
//
//
//
// 限制：
//
//
// 最多会对 addNum、findMedian 进行 50000 次调用。
//
//
// 注意：本题与主站 295 题相同：https://leetcode-cn.com/problems/find-median-from-data-strea
//m/
// Related Topics 堆 设计
// 👍 87 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  let Heap = function (type) {
    this.heap = [];
    const isMin = type === 'min'
    this.push = (num) => {
      this.heap.push(num);
      let len = this.heap.length - 1;
      if (isMin) {
        while (len > 0 && this.heap[len] < this.heap[(len - 1) >> 1]) {
          [this.heap[len], this.heap[(len - 1) >> 1]] = [this.heap[(len - 1) >> 1], this.heap[len]];
          len = (len - 1) >> 1
        }
      } else {
        while (len > 0 && this.heap[len] > this.heap[(len - 1) >> 1]) {
          [this.heap[len], this.heap[(len - 1) >> 1]] = [this.heap[(len - 1) >> 1], this.heap[len]];
          len = (len - 1) >> 1
        }
      }
    };

    this.removeHead = () => {
      if (this.heap.length !== 0) {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        let num = this.heap.pop();
        this.swap(0)
        return num;
      }
    }

    this.swap = (index) => {
      let temp = index;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let conditionLeft, conditionRight;
      if (isMin) {
        conditionLeft = this.heap[index] > this.heap[leftIndex];
      } else {
        conditionLeft = this.heap[index] < this.heap[leftIndex];
      }
      if (conditionLeft) {
        index = leftIndex;
      }
      if (isMin) {
        conditionRight = this.heap[index] > this.heap[rightIndex]
      } else {
        conditionRight = this.heap[index] < this.heap[rightIndex]
      }
      if (conditionRight) {
        index = rightIndex;
      }
      if (temp !== index) {
        [this.heap[temp], this.heap[index]] = [this.heap[index], this.heap[temp]];
        this.swap(index);
      }

    };
  }
  this.minHeap = new Heap('min');
  this.maxHeap = new Heap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.maxHeap.push(num);
  if (this.maxHeap.heap.length - this.minHeap.heap.length >= 1) {
    let max = this.maxHeap.removeHead();
    this.minHeap.push(max);
    if (this.minHeap.heap.length - this.maxHeap.heap.length >= 1) {
      let min = this.minHeap.removeHead();
      this.maxHeap.push(min);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.maxHeap.heap.length === this.minHeap.heap.length) {
    return (this.maxHeap.heap[0] + this.minHeap.heap[0]) / 2
  } else {
    return this.maxHeap.heap[0]
  }

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
//leetcode submit region end(Prohibit modification and deletion)
