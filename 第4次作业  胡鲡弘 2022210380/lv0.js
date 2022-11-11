const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student', { year: 2022 }],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
let [h1, h2, h3] = ['play', 'run', 'sing'];
const { name, hobby, address: { home: HOME }, title } = stu;
let [, YEAR] = title;
const{year}=YEAR;
console.log(name)
console.log(h1, h2, h3)
console.log(HOME)
console.log(year)  