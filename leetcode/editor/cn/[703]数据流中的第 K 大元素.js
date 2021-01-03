//设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。 
//
// 请实现 KthLargest 类： 
//
// 
// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。 
// int add(int val) 返回当前数据流中第 k 大的元素。 
// 
//
// 
//
// 示例： 
//
// 
//输入：
//["KthLargest", "add", "add", "add", "add", "add"]
//[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
//输出：
//[null, 4, 5, 5, 8, 8]
//
//解释：
//KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
//kthLargest.add(3);   // return 4
//kthLargest.add(5);   // return 5
//kthLargest.add(10);  // return 5
//kthLargest.add(9);   // return 8
//kthLargest.add(4);   // return 8
// 
//
// 
//提示：
//
// 
// 1 <= k <= 104 
// 0 <= nums.length <= 104 
// -104 <= nums[i] <= 104 
// -104 <= val <= 104 
// 最多调用 add 方法 104 次 
// 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素 
// 
// Related Topics 堆 设计 
// 👍 179 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    let MinHeap = function () {
        this.list = [];
        this.push = (num) => {
            this.list.push(num);
            let len = this.list.length - 1;
            while (len > 0 && this.list[len] < this.list[(len - 1) >> 1]) {
                [this.list[len], this.list[(len - 1) >> 1]] = [this.list[(len - 1) >> 1], this.list[len]];
                len = (len - 1) >> 1
            }
        };
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
            if (this.list[index] > this.list[leftIndex]) {
                index = leftIndex;
            }
            if (this.list[index] > this.list[rightIndex]) {
                index = rightIndex;
            }
            if (temp !== index) {
                [this.list[temp], this.list[index]] = [this.list[index], this.list[temp]];
                this.swap(index);
            }
        }
    };
    this.heap  = new MinHeap();
    this.size = k;
    this.add = (num) => {
        if (this.heap.list.length < this.size) {
            this.heap.push(num)
        } else if (num > this.heap.list[0]) {
            this.heap.list[0] = num
            this.heap.swap(0);
        }
        return this.heap.list[0]
    }
    for (let i = 0; i < nums.length; i ++) {
        this.add(nums[i])
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.add(val)
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
//leetcode submit region end(Prohibit modification and deletion)
