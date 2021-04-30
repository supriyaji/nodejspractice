const fs = require("fs");

const bioData = {
    name : "supriya",
    age : 26,
    channel: "thapa technical",
};

const jsonData = JSON.stringify(bioData);
//fs.writeFile('json1.json', jsonData, (err) =>{
  //  console.log("done");
//});

fs.readFile("json1.json", "utf-8", (err, data)=>{
  //  console.log(data);
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});