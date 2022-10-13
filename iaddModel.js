const Mongoose=require("mongoose")
const iaddModel=Mongoose.model("iadds",Mongoose.Schema({
    iaddname:String,
    iadddetails:String,
    iaddref:String
}))

module.exports={iaddModel}