### 解题思路


### 代码

```java
class Solution {
    public String[] findWords(String[] words) {
//大小写都维护，省去调用转换大小写的api，消耗时间
        String[] voc = new String[]{"QWERTYUIOPqwertyuiop","ASDFGHJKLasdfghjkl","ZXCVBNMzxcvbnm"};
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < words.length; i++) {
//flag记录每个单词的第一个字符所对应的数组下标
            int flag = -1;
            if (voc[0].indexOf(words[i].charAt(0))>=0){
                flag = 0;
            }else if (voc[1].indexOf(words[i].charAt(0))>=0){
                flag = 1;
            }else if (voc[2].indexOf(words[i].charAt(0))>=0){
                flag= 2;
            }
//根据flag作为数组下标判断当前字符是否符合当前单词
            for (int j = 0; j < words[i].length(); j++) {
                if (voc[flag].indexOf(words[i].charAt(j))<0){
                    flag = -1;
                    break;
                }
            }
//记录完全符合的数组下标
            if (flag>=0){
                list.add(i);
            }
        }
//根据下标list生成数组
        String[] strings = new String[list.size()];
        for (int i = 0; i < list.size(); i++) {
            strings[i] = words[list.get(i)];
        }
        return strings;
    }
}
```