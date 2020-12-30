// 维护一个最小堆，满足任意的 arr[i] < arr[2 * i + 1] || arr[i] < arr[2 * i + 2]
let MinHeap = function () {
  this.heap = [];
  this.push = (num) => {
    this.heap.push(num);
    let len = this.heap.length - 1;
    while (len > 0 && this.heap[len] < this.heap[(len - 1) >> 1]) {
      [this.heap[len], this.heap[(len - 1) >> 1]] = [this.heap[(len - 1) >> 1], this.heap[len]];
      len = (len - 1) >> 1
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
    if (this.heap[index] > this.heap[leftIndex]) {
      index = leftIndex;
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      index = rightIndex;
    }
    if (temp !== index) {
      [this.heap[temp], this.heap[index]] = [this.heap[index], this.heap[temp]];
      this.swap(index);
    }
  }
};

let minHeap = new MinHeap();
minHeap.push(6)
minHeap.push(7)
minHeap.push(4)
minHeap.push(3)
minHeap.push(1)
minHeap.push(2)
minHeap.push(18)

minHeap.removeHead();
console.log(minHeap.heap)
// [ 1, 3, 4, 7, 18, 6 ]
