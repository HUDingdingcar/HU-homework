//自己实现的push函数
function push(arr, arg) {
    arr[arr.length] = arg
}

Array.prototype.myPush = function (arg) {
    this[this.length] = arg
}

const a = [1, 2, 3], b = [4, 5]
a.myPush(6)
console.log(a);
push(b, 6)
console.log(b);

//数组扁平化
function myFlat(arr) {
    let newArr = [];
    arr.forEach(v => {
        if (v instanceof Array) newArr.push(...myFlat(v));
        else newArr.push(v)
    })
    return newArr;
}
const arr = [1, 2, [3, 4], [5, [6, 7], 8], 9]
console.log(myFlat(arr));

