const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId


const UserSchema = new Schema({
    username: String,
    email: {type:String, unique: true },
    password: String,
    role: String
})

const creatorSchema = new Schema({
    name:String,
    username: String,
    email: String,
    password: String,
    role: String
})

const coursesSchema = new Schema({
    title:String,
    description: String,
    image: String,
    price: Number,
    creatorId:ObjectId
    
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const Usermodel = mongoose.model("User", UserSchema);
const Creatormodel = mongoose.model("Creator", creatorSchema)
const Coursemodel = mongoose.model("Course", coursesSchema)
const PurchaseSchemamodel = mongoose.model("PurchaseSchema", purchaseSchema)

module.exports={
    Usermodel,
    Creatormodel,
    Coursemodel,
    PurchaseSchemamodel
}