const { UserData } = require("../models/userData");

module.exports.postDataController = async(req,res)=>{
    try{
        const {name,email,subject,message} = req.body;
        if(!name || !email || !subject || !message){
            return res.status(200).json({
              success : false,
              message : "enter valid data"  
            })
        }
        const data = UserData.create({name,email,subject,message});
        return res.status(200).json({
            success : true,
            message :"your information has been recieved thank you",
            data : data,
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message :"not able to store data",
            error : error.message,
        })
    }
}