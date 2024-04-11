// const express = require("express")
//  const app = express();
//  const path = require("path");
//  const port = 8000;
//  const staticpath = path.join(__dirname,"public1");

//    app.use(express.static(staticpath));

//   //  app.set("view engine","hbs")

//   //  app.get("",(req,res)=>{
//   //   res.render("index")
//   //  })
//  app.get("/",(req,res)=>{
//     // res.send("Hello from express  server and acreated by mukulgupta ")
//    res.sendFile(path.join(__dirname, "public1", "first.html"));
// // res.end()

//  })
// app.get("/about",(req,res)=>
// {
//     res.send("hello from about side ")
// })
//  app.listen(port,()=>{
//     console.log(`listening at port ${port}`);
//     console.log(path.join(__dirname,"public1","first.html"));      

//  })













//  dynammically data used 


// const express = require("express")
//  const app = express();
//  const path = require("path");
//  const port = 8000;
// const { register } = require("module");
// //  const staticpath = path.join(__dirname,"public1");
//  const views1path = path.join(__dirname,"/template/views1");

//   //  app.use(express.static(staticpath));
//    app.set("views",views1path)

//    app.set("view engine","hbs")

//    app.get("/",(req,res)=>{
//     res.render("index",{
//       name:"  mukul gupta is dynamacally rendering page and this is mca student" });
//    })
//  app.get("/",(req,res)=>{
//     // res.send("Hello from express  server and acreated by mukulgupta ")
//   //  res.sendFile(path.join(__dirname, "public1", "first.html"));
// // res.end()

//  })
// app.get("/about",(req,res)=>
// {
//     // res.send("hello from about side ")
//     res.render("about")
// })
//  app.listen(port,()=>{
//     console.log(`listening at port ${port}`);
//     // console.log(path.join(__dirname,"public1","first.html"));      
//     console.log(path.join(__dirname,"/template/views1"));

//  })
 
 
















const express = require("express")
 const app = express();
 const path = require("path");
 const port = 8000;
  const hbs = require("hbs");
const { register } = require("module");
//  const staticpath = path.join(__dirname,"public1");
 const views1path = path.join(__dirname,"/template/views1");
const partialpath = path.join(__dirname,"/template/partials")

  //  app.use(express.static(staticpath));
     hbs.registerPartials(partialpath)
   app.set("views",views1path)

   app.set("view engine","hbs")

   app.get("/",(req,res)=>{
    res.render("index",{
      name:"  mukul gupta is dynamacally rendering page and this is mca student" });
   })
 app.get("/",(req,res)=>{
    // res.send("Hello from express  server and acreated by mukulgupta ")
  //  res.sendFile(path.join(__dirname, "public1", "first.html"));
// res.end()

 })
app.get("/about",(req,res)=>
{
    // res.send("hello from about side ")
    res.render("about")
})

      // 404 errr page  with
 app.get("*",(req,res)=>{
  res.render("404",{
    errors:"page couldnt be found"
  })
 })


   
 app.listen(port,()=>{
    console.log(`listening at port ${port}`);
    // console.log(path.join(__dirname,"public1","first.html"));      
    console.log(path.join(__dirname,"/template/views1"));

 })








//  using partials     &&&&&  using  "*" for 404 error page

//  const express = require("express")
//  const app = express();
//  const path = require("path");
//  const port = 8000;
//   const hbs = require("hbs");
// const { register } = require("module");
// //  const staticpath = path.join(__dirname,"public1");
//  const views1path = path.join(__dirname,"/template/views1");
// const partialpath = path.join(__dirname,"/template/partials")

//   //  app.use(express.static(staticpath));
//      hbs.registerPartials(partialpath)
//    app.set("views",views1path)

//    app.set("view engine","hbs")

//    app.get("/",(req,res)=>{
//     res.render("index",{
//       name:"  mukul gupta is dynamacally rendering page and this is mca student" });
//    })
//  app.get("/",(req,res)=>{
//     // res.send("Hello from express  server and acreated by mukulgupta ")
//   //  res.sendFile(path.join(__dirname, "public1", "first.html"));
// // res.end()

//  })
// app.get("/about",(req,res)=>
// {
//     // res.send("hello from about side ")
//     res.render("about")
// })

//       // 404 errr page  with
//  app.get("*",(req,res)=>{
//   res.render("404",{
//     errors:"page couldnt be found"
//   })
//  })


   
//  app.listen(port,()=>{
//     console.log(`listening at port ${port}`);
//     // console.log(path.join(__dirname,"public1","first.html"));      
//     console.log(path.join(__dirname,"/template/views1"));

//  })








