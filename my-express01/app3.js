const express = require('express') 
const routepages = require('./routes/routepages') 
const app = express() 

app.use('/', routepages)




app.listen(4000, ()=>{
    //เมื่อserver startจะแจ้งเตือน
    console.log("Server app3.js is running on port 4000....");
}) 