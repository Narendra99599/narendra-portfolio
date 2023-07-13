const express = require("express");
const { router } = require("./routes/userRoutes");
const { dbConnect } = require("./config/dbConnection");
require('dotenv').config();
const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// middle wares
app.use(express.json());
app.use('/api/v1',router);

let port = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("this is home page")
})


dbConnect();
app.listen(port,()=>{
    console.log("server started successfully");
})