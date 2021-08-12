const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise (callback) {
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.resolve = function (v) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = v;
    }
  }
  this.reject = function (e) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = e;
    }
  }
  try {
    callback(this.resolve, this.reject)
  } catch (e) {
    this.reject(this.value);
  }
}

MyPromise.prototype.then = function (resolve, reject) {
  if (this.status === PENDING) {

  } else if (this.status === FULFILLED) {
    typeof resolve === 'function'  && resolve(this.value)
  } else if (this.status === REJECTED) {
    typeof reject === 'function' && reject(this.reason)
  }
}

MyPromise((resolve, reject) => {
  resolve(1);
}).then((e) => {
  console.log(e)
})
