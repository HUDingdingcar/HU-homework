class Animal{
    constructor(name,song){
      this.name=name
      this.song=song
    }
    getName(){
        return this.name;
    }
    say(){
        console.log(this.song)
    }
}
class Dog extends Animal{
     setName(name2){
        this.name=name2
     }
}
class Cat extends Animal{
    setName(name2){
        this.name=name2
     }
}
let dog=new Dog('狗','嗨害嗨');
let cat=new Cat('猫','玛卡巴卡');
console.log(dog);
console.log(cat);
dog.say();
let catname=cat.getName();
console.log(catname);
dog.setName('gou');
console.log(dog.name);