const express = require('express');
const app = express();

const response = {
    data:[],
    services:"book service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get('/api/v2/books', (req, res) => {

    
    response.data.push("javascript guIa definitiva","patrones JavaScript","Antipatrones STUPID");
    console.log(`get book data`) 
    return res.send(response);
})

module.exports = app;