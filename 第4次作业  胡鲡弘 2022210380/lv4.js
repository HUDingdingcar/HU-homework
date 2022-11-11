/*obj1={
    name:'hu',
    age:18
}
obj2={...obj1}
console.log(obj2);*/


/*let per1 = {
    name: 'hu',
    age: 18,
    address: {
        city: 'cq'
    }
}
let per2 = {};
for (const i in per1) {
    per2[i] = per1[i];
}
console.log(per2);*/

let per1 = {
    name: 'hu',
    age: 18,
    address: {
        city: 'cq'
    }
}
let per2={
    name:'hlh',
    sex:'female'
}
let per=Object.assign({},per2,per1);
console.log(per);

