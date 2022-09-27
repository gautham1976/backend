const Mongoose=require("mongoose")
const signupModel=Mongoose.model("Signups",Mongoose.Schema({
    signusername:String,
    signemail:String,
    signphone:String,
    signpassword:String,
    signconfirmpass:String
}))

module.exports={signupModel}