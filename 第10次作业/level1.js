let cowsay=require("cowsay")
console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "xx",
  T : "U "
}));
function get_cows(error, cow_names) {
  if (error) {
      console.log(error)
  }
  else if (cow_names) {
      console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);


let emoji=require("emoji-random")
console.log(emoji.random())
console.log(11)

const figlet = require('figlet');
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('erro');
        return;
    }
    console.log(data)
});