//我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。 
//
// （这里，平面上两点之间的距离是欧几里德距离。） 
//
// 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。 
//
// 
//
// 示例 1： 
//
// 输入：points = [[1,3],[-2,2]], K = 1
//输出：[[-2,2]]
//解释： 
//(1, 3) 和原点之间的距离为 sqrt(10)，
//(-2, 2) 和原点之间的距离为 sqrt(8)，
//由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
//我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
// 
//
// 示例 2： 
//
// 输入：points = [[3,3],[5,-1],[-2,4]], K = 2
//输出：[[3,3],[-2,4]]
//（答案 [[-2,4],[3,3]] 也会被接受。）
// 
//
// 
//
// 提示： 
//
// 
// 1 <= K <= points.length <= 10000 
// -10000 < points[i][0] < 10000 
// -10000 < points[i][1] < 10000 
// 
// Related Topics 堆 排序 分治算法 
// 👍 214 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let map = new Map();
    let arr = [];
    let swap = (arr,index) => {
        let temp = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (map.get(arr[index]) < map.get(arr[left]) ) {
            index = left
        }
        if (map.get(arr[index]) < map.get(arr[right])) {
            index = right
        }
        if (index !== temp) {
            [arr[index], arr[temp]] = [arr[temp], arr[index]];
            swap(arr, index);
        }
    }
    for (let i = 0; i < points.length; i ++) {
        let value = points[i][0] * points[i][0] + points[i][1] * points[i][1];
        map.set(points[i], value);
        if (arr.length < K) {
            arr.push(points[i]);
            let len = arr.length - 1;
            while (len !== 0 && map.get(arr[len]) > map.get(arr[(len - 1) >> 1])) {
                [arr[len], arr[(len - 1) >> 1]] = [arr[(len - 1) >> 1], arr[len]]
                len = (len - 1) >> 1
            }
        } else {
            if (value < map.get(arr[0])) {
                arr[0] = points[i];
                swap(arr, 0);
            }
        }
    };
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
