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

const{iaddModel}=require("./iaddModel")

app.post("/adminadd",async(req,res)=>{
    const idata=req.body
    const ob=new iaddModel(idata)
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

app.get("/adminadd",async(req,res)=>{
    iaddModel.find((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
            res.send(data)
        }
    })
})
app.listen(3000,()=>{console.log("Server running at http://localhost:3000")

})