const express = require('express')

const app = express()
const port = 5000;

app.get('/', (req, res)=>{
    res.status = 200;
    res.send("Hello");
})

app.listen(port, ()=>{
    console.log(`App successfully ran on port-${port}`)
})