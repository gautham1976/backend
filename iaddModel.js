const Mongoose=require("mongoose")
const iaddModel=Mongoose.model("iadds",Mongoose.Schema({
    iaddname:String,
    iadddetail:String,
    iaddref:String
}))

module.exports={iaddModel}