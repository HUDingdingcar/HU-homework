//way 1
let obj = new Object();
obj.name = 'hu';
obj.age = 18;
console.log(obj);
//way 2
let obj = {
    name: 'hu',
    age: 18

}
console.log(obj);
//way 3
function per(name, age) {
    this.name = name;
    this.age = age;
    
}
const person = new per('hu', 18);
console.log(person);