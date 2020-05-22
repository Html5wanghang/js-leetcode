/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
return S.split('').filter(item => J.split('').indexOf(item)!== -1).length
};