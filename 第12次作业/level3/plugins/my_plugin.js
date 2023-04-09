let fs = require("fs");
class MyPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(complier) {
    complier.hooks.emit.tapAsync(
      "MyPlugin",
      (compilation, cb) => {
        let file = fs.readdirSync(this.options.path);

        fs.writeFile("./file_name.md", file.toString(), function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("success");
        });
      },
    );
  }
}
module.exports = MyPlugin;
