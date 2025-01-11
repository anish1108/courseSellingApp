require('dotenv').config()

USER_JWT_SECRET = process.env.USER_JWT_SECRET
CREATOR_JWT_SECRET = process.env.CREATOR_JWT_SECRET

module.exports={
    USER_JWT_SECRET,
    CREATOR_JWT_SECRET
}