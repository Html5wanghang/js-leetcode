## 思路
先将成对出现的字符选择出来，比如输出的字符串为 abbbbbcccdd，那么有：
* 成对的字符：bb,bb,cc,dd
* 单个的字符：a,b,c

我们可以按照从中心向两边插入的方式构造回文串，如下图：
 [insert.png](https://pic.leetcode-cn.com/763370dbbb2096ddb68dec9ad4214447b397b8e6eeed80494c44b58bc061e776-insert.png)

如果有单个出现的字符串，可以任选一个插入到回文串中间位置，如下图：
 [last.png](https://pic.leetcode-cn.com/bfb73c9d384b657dac86455c876f3016d11ccd90cc9c60281a4d75560d176a9a-last.png)

最长回文串构造完成。

观察上面的构造过程，可以发现最后会剩余若干个出现奇数次的字符。那么答案就变成了统计有多少种字符出现了奇数次，我们可以用哈希来解决这个问题，如下图：
 [hash.png](https://pic.leetcode-cn.com/2c2fcc7c7d77427057b28524aab29854216b2ca476925207cebd504ca6259c2f-hash.png)

这样我们只需遍历一次 hash 数组，统计奇数的个数，然后做一次减法即可。

```
class Solution {
public:
    int longestPalindrome(string s) {
        int hashCount[52] = {0};
        for(string::size_type i = 0; i < s.size(); i++) {
            if('a' <= s[i] && s[i] <= 'z') {
                hashCount[s[i]-'a']++;
            } else {
                hashCount[s[i]-'A'+26]++;
            }
        }
        int sum = 0;
        for(int i = 0; i < 52; i++) {
            if((sum&1) && (hashCount[i]&1)) {
                sum += hashCount[i]-1;
            } else {
                sum += hashCount[i];
            }
        }
        return sum;
    }
};
```
 [qrcode_for_gh_6e5f8557b1f8_258.jpg](https://pic.leetcode-cn.com/a414f8db2279250634c11d08a721b8e361fb4266f265c8afc8092188b5ae0b88-qrcode_for_gh_6e5f8557b1f8_258.jpg)
扫码关注 HelloNebula 及时获取高质题解~