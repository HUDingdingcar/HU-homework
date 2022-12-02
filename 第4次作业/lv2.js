const fn = function (name) {
    this.name=name;
}
let stu=new fn('JACK');
//fn(stu)
console.log(stu.name); 