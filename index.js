const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/about'){
        res.end("about page");
    }else if(req.url === 'contact'){
        res.end("<h1>contact page</h1>")
    }else if(req.url === "/"){
        res.end("<h1>home page</h1>")
    }else{
        res.end("<h3>page not found 404 </h3>");
    }
});


// modules in nodejs are two types :-- 1. built in modules and 2. created  modules 3. 3rd party modules...

server.listen(5000,()=>{
    console.log(`server is working on 5000 `);
});