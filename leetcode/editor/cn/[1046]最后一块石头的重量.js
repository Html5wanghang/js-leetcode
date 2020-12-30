//有一堆石头，每块石头的重量都是正整数。
//
// 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
//
//
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
//
//
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
//
//
//
// 示例：
//
// 输入：[2,7,4,1,8,1]
//输出：1
//解释：
//先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
//再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
//接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
//最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
//
//
//
// 提示：
//
//
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000
//
// Related Topics 堆 贪心算法
// 👍 96 👎 0

//leetcode submit region begin(Prohibit modification and deletion)

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
/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    let Heap = new MaxHeap();
    for (let i = 0; i < stones.length; i ++) {
        Heap.push(stones[i]);
    }
    while (Heap.heap.length > 1) {
        let a = Heap.removeHead();
        let b = Heap.removeHead();
        if (a !== b) {
            Heap.push(a - b);
        }
    }
    return Heap.heap.length === 0 ? 0 : Heap.heap[0]
};
//leetcode submit region end(Prohibit modification and deletion)
