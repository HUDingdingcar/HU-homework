//way1
/*let arr = [1,[2,3],[4,5,[6,7,8]],9];
arr2=arr.join(',');
console.log(arr2.split());*/
//way2
let arr= [1,[2,3],[4,5,[6,7,8]],9];
let arr2=arr.toString();
let arr3=arr2.split();
console.log(arr3);