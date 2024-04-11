// w to live stream  orweb page 
const fs = require("fs")
const http = require("http")
const server = http.createServer()

server.on( "request",(req,res)=>{ 
    fs.readFile("write.txt",(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());

    })
})
server.listen(8000,"127.0.0.1")


// whether api key 
// 61a9c863e5bba7b03d9bd9376600ede3
    //    linkn  
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=61a9c863e5bba7b03d9bd9376600ede3

