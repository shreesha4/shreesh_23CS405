const express=require('express')
const app=express()
const port=5000;
app.use('/myapi',(req,res)=>{
    res.send("hello world");
})
app.listen(port,()=>{
    console.log('sever listening to 5000');
})
