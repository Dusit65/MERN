const express = require('express') 
const app = express() 

app.get('/',(req, res)=>{
    res.send('<h1>Home Page</h1>')
})

app.get('/hello',(req, res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/thailand/welcome',(req, res)=>{
    res.send('<h1>Welcome</h1>')
})



app.listen(3000, ()=>{
    console.log("Server is running on port 3000....");
}) 