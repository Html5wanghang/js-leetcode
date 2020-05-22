```js
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let newS=S;
    for(let i=0;i<J.length;i++){
       newS= newS.replace(new RegExp(J[i],'g'),"");
    }
    return S.length-newS.length
};
```