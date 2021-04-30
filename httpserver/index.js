const http = require("http");
const fs = require("fs");



const server = http.createServer( (req,res) =>{

    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
    const objData = JSON.parse(data);

    //console.log(req.url);
    if (req.url =="/"){
        res.end("hello from the Home side");
    }else if (req.url == "/about"){
        res.end("hello from the other about side");
    } else if (req.url == "/userapi"){
        res.writeHead(200, { "content-type": "application/json"})
      res.end(objData[0].name);        
    }
    else if (req.url == "/contact"){
        res.write("hello from the contactUS side")
        res.end();
    } else {
        res.writeHead(404, {"Content-type": "text/html"} );
        res.end("<h1>404 error page. page doesnt exist </h1>")
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});