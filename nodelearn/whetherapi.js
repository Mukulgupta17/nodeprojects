const fs = require("fs")
const http = require("http");
const requests= require("requests");
const homefile = fs.readFileSync("whether.html","utf-8")
 const replaceval = (tempvalue,orgvalue)=>{
    let temperature = tempvalue.replace("{%Mintempvalue%}",orgvalue.main.temp_min)
     temperature = tempvalue.replace("{%Maxtempvalue%}",orgvalue.main.temp_max)


 }
const server = http.createServer((req,res)=>{
if(req.url==="/"){
    requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=61a9c863e5bba7b03d9bd9376600ede3")
    .on("data",(chunk)=>{
        const objdata =  JSON.parse(chunk)
        const arrobj = [objdata]
        console.log(arrobj);
        const realtimedata = arrobj.map((val)=>
            replaceval(homefile,val)).join(" ");
        
        // res.write(realtimedata)
        console.log(realtimedata);
    })
    .on("end",(err)=>{
        if(err) return console.log(`errors on connections ${err}`);
        res.end()
    })
}

})

server.listen(8000,"127.0.0.1");




