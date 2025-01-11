const {USER_JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")

async function userauth(req, res, next){
    console.log("userauth")
    const token = req.headers.token;
    // const token = localStorage.getItem("token")
    console.log(token)
    const decoded = await jwt.verify(token, USER_JWT_SECRET)
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
    userauth
}