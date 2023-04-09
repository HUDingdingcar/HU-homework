const path = require("path");
const MyPlugin = require('./plugins/my_plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new MyPlugin({
      path: './dist',
      
    }),
  ],

  
};
