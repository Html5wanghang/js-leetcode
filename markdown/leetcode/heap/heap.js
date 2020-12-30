
// 维护一个堆，判断传入的条件，默认为最大堆，传min为最小堆
let Heap  = function  (type) {
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
let maxHeap = new Heap();
maxHeap.push(6)
maxHeap.push(7)
maxHeap.push(4)
maxHeap.push(3)
maxHeap.push(1)
// maxHeap.push(2)
maxHeap.push(18)

maxHeap.removeHead();
console.log(maxHeap.heap)
// [ 7, 6, 4, 3, 1, 2 ]
let minHeap = new Heap('min');
minHeap.push(6)
minHeap.push(7)
minHeap.push(4)

minHeap.push(3)
minHeap.push(1)
minHeap.push(2)

minHeap.push(18)
minHeap.removeHead();
// minHeap.removeHead();
//
// minHeap.removeHead();

console.log(minHeap.heap);
minHeap.removeHead();
console.log(minHeap.heap);

 // console.log [ 1, 3, 6, 7, 4, 18 ]
