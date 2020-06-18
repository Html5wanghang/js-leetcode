//给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
//
//
//
//
//
//
//
// 示例：
//
// 输入: ["Hello", "Alaska", "Dad", "Peace"]
//输出: ["Alaska", "Dad"]
//
//
//
//
// 注意：
//
//
// 你可以重复使用键盘上同一字符。
// 你可以假设输入的字符串将只包含字母。
// Related Topics 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let obj = {q:0,w:0,e:0,r:0,t:0,y:0,u:0,i:0,o:0,p:0,Q:0,W:0,E:0,R:0,T:0,Y:0,U:0,I:0,O: 0,P:0,
    a:1,s:1,d:1,f:1,g:1,h:1,j:1,k:1,l:1,A:1,S:1,D:1,F:1,G:1,H:1,J:1,K:1,L:1,
    z:2,x:2,c:2,v:2,b:2,n:2,m:2,Z:2,X:2,C:2,V:2,B:2,N:2,M:2
  };
  return words.filter(word => {
    for (let i = 0; i < word.length; i++) {
      let first = obj[word[0]];
      if (obj[word[i]] !== first) {
        return false
      }
    }
    return true
  });

};
//leetcode submit region end(Prohibit modification and deletion)
