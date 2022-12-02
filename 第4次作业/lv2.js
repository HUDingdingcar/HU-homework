const fn = function (name) {
    this.name=name;
}
let stu=new fn('JACK');
console.log(stu.name); 