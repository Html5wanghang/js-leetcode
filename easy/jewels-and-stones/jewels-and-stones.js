/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var startLength = S.length;
  var tempStr = S;
  var JLength = J.length;
  var result;
  var removeStr = function(str, target) {
    var targetNoStr = false;
    var temp = target;
    while (targetNoStr == false) {
      var index = temp.indexOf(str);
      if (index == -1) {
        targetNoStr = true
      } else {
        var arr = temp.split("");
        arr.splice(index, 1);
        temp = arr.join("");
      }
    }
    return temp
  };
  for (var i = 0; i < JLength; i++) {
    tempStr = removeStr(J.charAt(i), tempStr);
    var tempLength = tempStr.length;
    result = startLength - tempLength;
  }
  return result;
};
numJewelsInStones("ab", "ababababcdcdfab");