#### 方法 1：计数

**想法和算法**

直接计数元素的个数。利用 `HashMap` 或者数组，这里使用 `HashMap`。

然后，元素数量超过 1 的就是答案。

```Java []
class Solution {
    public int repeatedNTimes(int[] A) {
        Map<Integer, Integer> count = new HashMap();
        for (int x: A) {
            count.put(x, count.getOrDefault(x, 0) + 1);
        }

        for (int k: count.keySet())
            if (count.get(k) > 1)
                return k;

        throw null;
    }
}
```

```Python []
class Solution(object):
    def repeatedNTimes(self, A):
        count = collections.Counter(A)
        for k in count:
            if count[k] > 1:
                return k
```

**复杂度分析**

* 时间复杂度：*O(N)*，其中 *N* 是 `A` 的长度。
* 空间复杂度：*O(N)*。

#### 方法 2：比较

**想法和算法**

一旦找到一个重复元素，那么一定就是答案。我们称这个答案为*主要元素*。

考虑所有长度为 4 的子序列，在子序列中一定至少含有两个主要元素。

这是因为：

* 长度为 2 的子序列中都是主要元素，或者；
* 每个长度为 2 的子序列都恰好含有 1 个主要元素，这意味着长度为 4 的子序列一定含有 2 个主要元素。

因此，只需要比较所有距离为 1，2 或者 3 的邻居元素即可。

```Java []
class Solution {
    public int repeatedNTimes(int[] A) {
        for (int k = 1; k <= 3; ++k)
            for (int i = 0; i < A.length - k; ++i)
                if (A[i] == A[i+k])
                    return A[i];

        throw null;
    }
}
```

```Python []
class Solution(object):
    def repeatedNTimes(self, A):
        for k in xrange(1, 4):
            for i in xrange(len(A) - k):
                if A[i] == A[i+k]:
                    return A[i]
```

**复杂度分析**

* 时间复杂度：*O(N)*，其中 *N* 是 `A` 的长度。
* 空间复杂度：*O(1)*。