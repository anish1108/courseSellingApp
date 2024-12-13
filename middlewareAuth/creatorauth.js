
const jwt = require("jsonwebtoken")
const {CREATOR_JWT_SECRET} = require("../config")

async function creatorauth(req, res, next) {
    const token = req.headers.token;
    
    const decoded = await jwt.verify(token, CREATOR_JWT_SECRET)
    console.log(decoded)
    if(decoded){
        req.userId = decoded.id;
        next()
    }
    else{
        res.json({
            message:"wrong cred"
        })
    }

}

module.exports={
    creatorauth
}