function Person() {
    this.name = 'zs'
}
Person.prototype.myCall = function () {
    //this.name='ls'
    console.log('I am ' + this.name);
}
let p = new Person();
p.myCall();
let p2 = {
    name: 'ww'
}
p.myCall.call(p2)

