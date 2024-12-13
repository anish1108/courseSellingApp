
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./Routes/userRoute")
const homeRoute = require("./Routes/homeRoute")
const creatorRoute = require("./Routes/creatorRoute");
require('dotenv').config()



app.use(express.json())
app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/creator",creatorRoute);

app.listen(3000,async function(){
    console.log("port started")
    await mongoose.connect(process.env.MONGOOSE_URL)
})

