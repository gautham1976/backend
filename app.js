const Express=require ("express")
const Mongoose=require ("mongoose")
const Bodyparser=require ("body-parser")
const Cors=require("cors")

const{signupModel}=require("./signupModel")
const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://ryuk:nellsworld1976@cluster0.g5chm.mongodb.net/Electronic_Music_Instruments?retryWrites=true&w=majority")

app.post("/signup",async(req,res)=>{
    const data=req.body
    const ob=new signupModel(data)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else{
            res.send(data)
        }
    })
})



app.post("/login", async(req, res) => {
    const request = req.body
    console.log(req.body)
    signupModel.findOne({ signusername: request. signusername }, (err, signdata) => {
        if (signdata) {
            if (signdata.signpassword == request.signpassword) {
                res.send({ "success": true, signdata: signdata });

            } else {
                res.send({ "success": "Invalid username or password!" });
            }
        } else {
            res.send({ "success": "No User Found!" });
        }
    })
})
const{iaddModel}=require("./iaddModel")


app.post("/adminadd",async(req,res)=>{
    const dataa=req.body
    const ob=new iaddModel(dataa)
    ob.save((error,idata)=>{
        if(error)
        {
            res.send("error occured")
        }
        else{
            res.send(idata)
        }
    })
})

app.get("/instdetail",async(req,res)=>{
    iaddModel.find((error,data2)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {

            res.send(data2)
        }
    })
})

app.get("/adminuserlist",async(req,res)=>{
    signupModel.find(
        (error,data)=>
    {
        if(error)
        {
            res.send(error)
        
        }
        else{
            res.send(data)
        }

    })

})
const { feedbckModel } = require("./feedbckModel")
app.post("/contact",async(req,res)=>{
    const feedbackdata=req.body
    console.log(req.body)
    const ob=new feedbckModel(feedbackdata)
    ob.save((error,fdata)=>{
        if(error)
        {
            res.send("error occured")
        }
        else{
            res.send(fdata)
        }
    })
})

app.get("/forgotpass",async(req,res)=>{
    feedbckModel.find(
        (error,data4)=>
        {
            if(error)
            {
                res.send(error)
            }
            else{
                res.send(data4)
            }
        }
    )
})

app.listen(3000,()=>{console.log("Server running at http://localhost:3000")

})