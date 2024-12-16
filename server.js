var http=require('http')
 
var server;
 
server=http.createServer((req,res)=>{
 
    if(req.url=="/"){
 
        res.write("<h1>Landing Page</h1>")
    
    }
   
    else if(req.url=="/home")
    {
        res.write("<h1>Home Page</h1>")
    }
    else if(req.url=="/about")
    {
        res.write("<h1>About Page</h1>")
    }
})
 
 
server.listen(4200,()=>{
    console.log("Http Server is waiting for the client request")
})