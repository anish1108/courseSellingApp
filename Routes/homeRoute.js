const express = require("express");
const router = express.Router();
const {Coursemodel} = require("../db")

router.get("/home",async function(req, res){
    const allcourses = await Coursemodel.find({});
    res.json({
        allcourses
    })
})



module.exports=router;