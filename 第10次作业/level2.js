let PENDING = 'pending'
let FULFILLED = 'fulfilled'
let REJECTED = 'rejected'

function myPromise(executor) {
    this.PromiseState = PENDING
    this.PromiseResult = null
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let _this = this
    function resolve(value) {
        if (_this.PromiseState == PENDING) {
            _this.PromiseResult = FULFILLED
            _this.PromiseResult = value
            _this.onFulfilledCallbacks.forEach(callbacks => {
                callbacks(value)

            });
        }
    }
    function reject(value) {
        if (_this.PromiseState == PENDING) {
            _this.PromiseResult = REJECTED
            _this.PromiseResult = value
            _this.onRejectedCallbacks.forEach(callbacks => {
                callbacks(value)

            });
        }
    }
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
    return this;
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    let nextPromise
    let _this = this
    if (this.PromiseState == FULFILLED) {
        nextPromise = new myPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(onFulfilled(_this.PromiseResult))
                } catch (err) {
                    reject(err)
                }
            }, 0)

        })
        return nextPromise
    }
    if (this.PromiseState == REJECTED) {
        nextPromise = new myPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    reject(onRejected(_this.PromiseResult))
                } catch (err) {
                    reject(err)
                }
            }, 0)

        })
        return nextPromise
    }
    if (this.PromiseState == PENDING) {
        nextPromise = new myPromise((resolve, reject) => {

            _this.onFulfilledCallbacks.push(function () {
                setTimeout(() => {
                    try {
                        resolve(onFulfilled(_this.PromiseResult))
                    } catch (err) {
                        reject(err)
                    }
                }, 0)

            })
            _this.onRejectedCallbacks.push(function () {
                setTimeout(() => {
                    try {
                        reject(onRejected(_this.PromiseResult))
                    } catch (err) {
                        reject(err)
                    }
                }, 0)

            })
        })
        return nextPromise
    }
}



new myPromise((resolve, reject) => {
    console.log('我立即执行');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then((val) => {
        console.log('成功的值是：' + val);
        return ++val;
    })
    .then((val) => {
        console.log('我是链式调用输出' + val);
    });