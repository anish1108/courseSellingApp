
const jwt = require("jsonwebtoken")
const {CREATOR_JWT_SECRET} = require("../config")

async function creatorauth(req, res, next) {
    
    const authhead = req.headers.authorization;
    if (!authhead) {
        res.json({
            message: "no authhead"
        })
    }
    console.log("authhead",authhead)
    const token = authhead.split(" ")[1];
    if(!token){
        res.json({
            message:"no token"
        })
    }
    console.log(token)
    try{
        const decoded = await jwt.verify(token, CREATOR_JWT_SECRET)
        console.log(decoded)
        if(decoded){
            req.userId = decoded.id;
            next()
        }
        else{
            console.log("autho failed 3")
            res.json({
                message:"wrong cred"
            })
        }
    } catch(e){
        console.log("autho failed")
        res.status(401).json({
            message:"wrong cred"    
    })
    
    }
}

module.exports={
    creatorauth
}