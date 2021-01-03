//设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。 
//
// 示例： 
//
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
//输出： [1,2,3,4]
// 
//
// 提示： 
//
// 
// 0 <= len(arr) <= 100000 
// 0 <= k <= min(100000, len(arr)) 
// 
// Related Topics 堆 排序 分治算法 
// 👍 35 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
let MaxHeap  = function  (size) {
    this.list = [];
    this.size = size;
    this.push = (num) => {
        if (this.list.length < this.size ) {
            this.pushNum(num);
        } else if (num < this.list[0]){
            this.removeHead();
            this.pushNum(num)
        }
    };
    this.pushNum = (num) => {
        this.list.push(num);
        let len = this.list.length - 1;
        while (len > 0 && this.list[len] > this.list[(len - 1) >> 1]) {
            [this.list[len], this.list[(len - 1) >> 1]] = [this.list[(len - 1) >> 1], this.list[len]];
            len = (len - 1) >> 1
        }
    }

    this.removeHead = () => {
        if (this.list.length !== 0) {
            [this.list[0], this.list[this.list.length - 1]] = [this.list[this.list.length - 1], this.list[0]];
            let num = this.list.pop();
            this.swap(0)
            return num;
        }
    }

    this.swap = (index) => {
        let temp = index;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        if (this.list[index] < this.list[leftIndex]) {
            index = leftIndex;
        }
        if (this.list[index] < this.list[rightIndex]) {
            index = rightIndex;
        }
        if (temp !== index) {
            [this.list[temp], this.list[index]] = [this.list[index], this.list[temp]];
            this.swap(index);
        }

    };
}

var smallestK = function(arr, k) {
    let maxHeap = new MaxHeap(k);
    for (let i = 0; i < arr.length; i ++) {
        maxHeap.push(arr[i]);
    }
    return maxHeap.list
};
//leetcode submit region end(Prohibit modification and deletion)
