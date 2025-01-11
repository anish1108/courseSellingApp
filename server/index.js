
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./Routes/userRoute")
const homeRoute = require("./Routes/homeRoute")
const creatorRoute = require("./Routes/creatorRoute");
require('dotenv').config()
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/creator",creatorRoute);

app.listen(3000,async function(){
   
    await mongoose.connect(process.env.MONGOOSE_URL)
    console.log("port started")
})

