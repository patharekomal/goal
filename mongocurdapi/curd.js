const express =require('express');
const dbConnect =require('./mongo_conn');

const app=express();

app.use(express.json());

//get API
app.get("/",async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})


//post API
app.post("/",async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("Data inserted successfully");
})

//put API
app.put("/:name",async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data Updated successfully");
})

//Delete API
app.delete("/:name",async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name});
    res.send("Data Deleted successfully");
})


app.listen(8000);