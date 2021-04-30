const path = require("path");

//console.log(path.dirname('C:/Users/maa/Desktop/nodejs/nodeCH/PathModule/path.js'));

//console.log(path.extname('C:/Users/maa/Desktop/nodejs/nodeCH/PathModule/path.js'));

//console.log(path.basename('C:/Users/maa/Desktop/nodejs/nodeCH/PathModule/path.js'));

//console.log(path.parse('C:/Users/maa/Desktop/nodejs/nodeCH/PathModule/path.js'));
//console.log()

const mypath = path.parse('C:/Users/maa/Desktop/nodejs/nodeCH/PathModule/path.js');
console.log(mypath.root);

