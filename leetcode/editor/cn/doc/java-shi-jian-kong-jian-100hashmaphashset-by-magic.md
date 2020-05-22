[周赛156](https://leetcode-cn.com/contest/weekly-contest-156) 的第一题，难得参加一次。

- 时间：3 ms，超越 100%
- 空间：30 多M，超越 100%

大致看了一下题解（中英文版），基本都是使用 Map + Set 的方式解决，我也一样。
1. 因为不到结束无法知道每个数字的出现次数，必须先扫一遍。此时为了存取效率 Map 是最优选择（本题范围不大，也可以用 array）。
2. 之后进行判重，无疑 Set 变成了最理想的结构，只需取出 Map 的所有 value 逐个插入即可。

```java
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        Set<Integer> set = new HashSet<Integer>();
        
        // 记录出现次数
        for(int data :arr) {
            if (map.get(data) == null) map.put(data, 1);
            else map.put(data, map.get(data) + 1);
        }
        
        // 验证重复值
        for(Integer i : map.values()) {
            if (!set.add(i)) return false;
        }
        return true;
    }
}
```

在细节上，有一些不同的解法大致是这样：
1. 记录出现次数时采用 getOrDefault 方法，可以避免一次判断，简化代码：`map.put(a, map.getOrDefault(a, 0) + 1);`，
2. 直接使用 map.values 初始化 HashSet，相当于获得了去重了结果，再比较 HashSet 的长度是否小于 map.values 的长度。不过，这种做法必须等到全部数据进入 Set 才知道结果，不能一遇到重复就立即分辨出来。

其他解法：
- 换汤不换药，把 map 替换为数组，因为题目范围只有 2000 才能这么操作，相当于也支持随机存取，复杂度不变。[Java array + set beat 100%](https://leetcode.com/problems/unique-number-of-occurrences/discuss/392918/Java-array-%2B-set-beat-100)
- 对原数组进行排序，这样的话，每读完一个数就立即能知道出现次数。但是，排序导致复杂度上升。[Java sort & set ,1ms ,faster than 99%](https://leetcode.com/problems/unique-number-of-occurrences/discuss/394168/Java-sort-and-set-1ms-faster-than-99)
