//实验室里正在进行一项实验。为了确保数据的准确性，同时使用 两个 传感器来采集数据。您将获得2个数组 sensor1 and sensor2，其中 senso
//r1[i] 和 sensor2[i] 分别是两个传感器对第 i 个数据点采集到的数据。
//
// 但是，这种类型的传感器有可能存在缺陷，它会导致 某一个 数据点采集的数据（掉落值）被丢弃。
//
// 数据被丢弃后，所有在其右侧的数据点采集的数据，都会被向左移动一个位置，最后一个数据点采集的数据会被一些随机值替换。可以保证此随机值不等于掉落值。
//
//
// 举个例子, 如果正确的数据是 [1,2,3,4,5] ， 此时 3 被丢弃了, 传感器会返回 [1,2,4,5,7] (最后的位置可以是任何值, 不仅仅是
// 7).
//
//
// 可以确定的是，最多有一个 传感器有缺陷。请返回这个有缺陷的传感器的编号 （1 或 2）。如果任一传感器 没有缺陷 ，或者 无法 确定有缺陷的传感器，则返回
// -1 。
//
//
//
// 示例 1：
//
//
//输入：sensor1 = [2,3,4,5], sensor2 = [2,1,3,4]
//输出：1
//解释：传感器 2 返回了所有正确的数据.
//传感器2对第二个数据点采集的数据，被传感器1丢弃了，传感器1返回的最后一个数据被替换为 5 。
//
// 示例 2：
//
//
//输入：sensor1 = [2,2,2,2,2], sensor2 = [2,2,2,2,5]
//输出：-1
//解释：无法判定拿个传感器是有缺陷的。
//假设任一传感器丢弃的数据是最后一位，那么，另一个传感器就能给出与之对应的输出。
//
//
// 示例 3：
//
//
//输入：sensor1 = [2,3,2,2,3,2], sensor2 = [2,3,2,3,2,7]
//输出：2
//解释：传感器 1 返回了所有正确的数据.
//传感器 1 对第四个数据点的采集数据，被传感器2丢失了, 传感器 2 返回的最后一个数据被替换为 7 。
//
//
//
//
// 提示：
//
//
// sensor1.length == sensor2.length
// 1 <= sensor1.length <= 100
// 1 <= sensor1[i], sensor2[i] <= 100
//
// Related Topics 数组
// 👍 2 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function(sensor1, sensor2) {
  let start = 0;
  while (sensor1[start] === sensor2[start] && start < sensor1.length) {
    start ++;
  }
  if (start >= sensor1.length - 1) {
    return -1
  } else {
    const result1 = sensor1.slice(start, sensor1.length - 1).join() === sensor2.slice(start + 1, sensor1.length ).join();
    const result2 = sensor1.slice(start + 1, sensor1.length).join() === sensor2.slice(start, sensor1.length - 1).join();
    if (result1 && result2) {
      return -1;
    } else if (result1 && !result2){
      return 1;
    } else if (!result1 && result2) {
      return 2;
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)
