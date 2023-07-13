const express = require('express');
const { postDataController } = require('../controllers/postData');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("this is home page of new route");
})

router.post("/postData",postDataController);

module.exports.router = router;