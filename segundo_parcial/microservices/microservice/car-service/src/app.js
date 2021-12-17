const express = require('express');
const app = express();

const response = {
    data:[],
    services:"car service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get('/api/v2/cars', (req, res) => {

    
    response.data.push("Versa","BMW", "Kia");
    console.log(`get car data`) 
    return res.send(response);
})

module.exports = app;