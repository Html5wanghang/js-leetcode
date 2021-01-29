//二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。
//
// 每个 LED 代表一个 0 或 1，最低位在右侧。
//
//
//
// 例如，上面的二进制手表读取 “3:25”。
//
// 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
//
//
//
// 示例：
//
// 输入: n = 1
//返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "
//0:32"]
//
//
//
// 提示：
//
//
// 输出的顺序没有要求。
// 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
// 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
// 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
//
// Related Topics 位运算 回溯算法
// 👍 219 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let hours = [1,2,4,8]; let minutes = [1,2,4,8,16,32];
    let getHours = Array(hours.length ).fill([]);
    let getMinutes = Array(minutes.length).fill([]);
    let dfsHours = (n, list, total) => {
        if (total >= 12) {
            return
        }
        if (n === hours.length) {
            getHours[list.length] = getHours[list.length].concat(String(total));
            return;
        }
        let newIndex = n + 1;
        let newTotal = total;
        dfsHours(newIndex, list, newTotal);
        let newTotal2 = total + hours[n];
        let newList = list.concat(hours[n]);
        dfsHours(newIndex, newList, newTotal2)
    };
    dfsHours(0, [], 0);
    let dfsMinutes = (n, list, total) => {
        if (total >= 60) {
            return
        }
        if (n === minutes.length) {
            if (total < 10) {
                total = '0' + total;
            } else {
                total = String(total);
            }

            getMinutes[list.length] = getMinutes[list.length].concat(total);
            return;
        }
        let newIndex = n + 1;
        let newTotal = total;
        dfsMinutes(newIndex, list, newTotal);
        let newTotal2 = total + minutes[n];
        let newList = list.concat(minutes[n]);
        dfsMinutes(newIndex, newList, newTotal2)
    };
    dfsMinutes(0, [], 0);
    let arr = [];
    for (let i = 0; i <= num; i ++) {
        if (i < getHours.length && (num - i) < getMinutes.length) {
            let hoursArr = getHours[i];
            let minutesArr = getMinutes[num - i];
            for (let j = 0; j < hoursArr.length; j ++) {
                for (let k = 0; k < minutesArr.length; k ++) {
                    let str = hoursArr[j] + ':' + minutesArr[k];
                    arr.push(str)
                }
            }
        }
    }
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
