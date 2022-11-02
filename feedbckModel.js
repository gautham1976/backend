const Mongoose=require("mongoose")
const feedbckModel=Mongoose.model("feedbacks",Mongoose.Schema({
    message:String
}))

module.exports={feedbckModel}