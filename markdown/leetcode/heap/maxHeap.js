
// 维护一个最大堆，满足任意的 arr[i] > arr[2 * i + 1] || arr[i] > arr[2 * i + 2]
let MaxHeap  = function  () {
  this.heap = [];
  this.push = (num) => {
    this.heap.push(num);
    let len = this.heap.length - 1;
    while (len > 0 && this.heap[len] > this.heap[(len - 1) >> 1]) {
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
    if (this.heap[index] < this.heap[leftIndex]) {
      index = leftIndex;
    }
    if (this.heap[index] < this.heap[rightIndex]) {
      index = rightIndex;
    }
    if (temp !== index) {
      [this.heap[temp], this.heap[index]] = [this.heap[index], this.heap[temp]];
      this.swap(index);
    }

  };
}

let maxHeap = new MaxHeap();
maxHeap.push(2)
maxHeap.push(7)
maxHeap.push(4)
maxHeap.push(1)
maxHeap.push(8)
maxHeap.push(1)

console.log(maxHeap.heap)
// [ 8, 7, 4, 1, 2, 1 ]
