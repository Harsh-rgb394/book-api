const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const bodyparser=require("body-parser");
const ConnectDB=require("./config/db");

const PORT=process.env.PORT ||5000;
const app=express();

// for connectinos and dotenv file
dotenv.config(); 
ConnectDB();


// middlewares used 
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.send("first api");

// })
// default route for user login and register 
app.use("/user",require("./routes/router"));
app.use("/borrower",require("./routes/brouter"));


app.listen(PORT,()=>{
    console.log(`erver is running on ${PORT}`);
})