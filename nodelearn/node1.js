//  const fs = require("fs")

//  fs.writeFileSync("read.txt","hi this is mukul gupta")
//  fs.appendFileSync("read.txt","i am percuing mca")


//    const bufdta =fs.readFileSync("read.txt")
// //    console.log(bufdta);
//    const   orgdata= bufdta.toString();
//    console.log(orgdata);
//     fs.renameSync("read.txt","write.txt")

// ASYNC function  creating files and read 
    // 
    // 
// fs.writeFile( "mca.txt","i am jitian and percuing mca ",(err)=>{
//     console.log(err);

// })
// fs.readFile( "write.txt","UTF-8",(err,data)=>{
//     console.log(err);
//     console.log(data);
// });


// make folder with async  function 
// 
// fs.mkdir("mybio.txt",(err)=>{
//     console.log(err);
// })
// fs.writeFile("mybio.txt/mytext.txt","this is my first aync function ",(err)=>{
//     console.log(err);
// })

// fs.appendFile( "mybio.txt/mytext.txt","this is second line i want to join in file",(err)=>{
//     console.log(err);
// });

// fs.readFile( "mybio.txt/mytext.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

// fs.unlink( "mca.txt",(err)=>{
//     console.log(err);
// })





//   creating own web server 
// const http = require("http");
// const name = "mukul gupta"
// const server = http.createServer((req,res)=>{
//     res.end(`hi im from server side an dmy name is this....  ${name}`)
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port 8000");
// })




// make our own event 
// how to make events 

// const EventEmitter = require("events")

// const event = new EventEmitter()

// event.on( "Myname",()=>{
//     console.log("my name is mukul gupta");
// })
// event.on( "Myname",()=>{
//     console.log("my name is  anvesha ");
// })
// event.on( "Myname",()=>{
//     console.log("my name is  gupta");
// })
// event.emit("Myname")

// event.on( "checkpage",(sc,msg)=>{
//         console.log(`status code is ${sc} messge is ${msg}`);
//     })

//  event.emit("checkpage",200,"ok")


const http = require("http")
const server = http.createServer()
const fs = require("fs")

server.on("request",(req,res)=>{
    const  rstream = fs.createReadStream("write.txt");

    // rstream.on("data",(chunkdata)=>{
    //    res.write(chunkdata)
    // })
    // rstream.end("end",()=>{
    //          res.end()
    // })
    // rstream.error("error",(err)=>{
    //     console.log(err);
    //     res.end("file not found ")
    // })
    rstream.pipe(res)
})
server.listen(8000,"127.0.0.1")
 







//CHALK
//VALIDATOR
//NODEMON  ("PACKAGE INSTALL")