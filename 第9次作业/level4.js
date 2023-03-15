Array.prototype.myMap = function (fn) {
    let new_arr = []
    for (let i = 0; i < this.length; i++) {
        new_arr[i] = fn(this[i])
    }
    return new_arr
}
let fn1 = function (a) {
    return a * a

}
console.log([1, 2, 3].myMap(fn1))

Array.prototype.myReduce = function (fn, a) {
    let res
    if (!a) {
        res = this[0]
        for (let i = 1; i < this.length; i++) {
            res = fn(res, this[i])
        }
        return res
    } else {
        res = a
        for (let i = 0; i < this.length; i++) {
            res = fn(res, this[i])
        }
        return res
    }
}
let fn2 = function (a, b) {
    return a + b
}
console.log([1, 2, 3].myReduce(fn2))
console.log([1, 2, 3].myReduce(fn2, 4))

Array.prototype.myFilter = function (fn) {
    let new_arr = []
    let j=0
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])==this[i]) {
            new_arr[j] = fn(this[i])
            j++
        }
    }
    return new_arr
}
let fn3 = function (a) {
    if (a > 6) {
        return a
    }else{
        return false
    }

}
console.log([1, 2, 3, 6,7, 8].myFilter(fn3))