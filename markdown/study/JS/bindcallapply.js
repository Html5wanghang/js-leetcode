function Count (a, b) {
    return a + b;
}

Function.prototype.MyApply =  function (context, argument) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    if (typeof context[fn] !== 'function') {
        throw new Error('Wrong')
    }
    const result = context[fn](...argument);
    delete context[fn];
    return result;
}

Function.prototype.MyCall = function (context, ...argument) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    if (typeof context[fn] !== 'function') {
        throw new Error('Wrong')
    }
    const result = context[fn](...argument);
    delete context[fn];
    return result;
}

Function.prototype.MyBind = function (context, ...argument) {
    context = context || window;
    const fn = this;
    if (typeof fn !== 'function') {
        throw new Error('Wrong');
    }
    return function () {
        return fn.apply(context, argument)
    }
}
console.log(Count.MyApply({'a': 1}, [1,2]))
console.log(Count.MyCall({}, 1,2));
console.log(Count.MyBind({}, 1,3)())