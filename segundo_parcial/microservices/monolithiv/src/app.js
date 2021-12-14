const express = require('express');
const app = express();

const response = 
{
    data:[],
    services:"all services",
    arquitecture:"monolithiv"
}

app.use((req, res, next) => {

    response.data=[];
    next();
})

app.get('/api/v1/user', (req,res) =>{

    response.data.push("alex", "sara", "ayme");
    return res.send(response);
} )

app.get('/api/v1/books', (req,res) =>{

    response.data.push("javascript", "patrones", "antipatrones");
    res.send(response);
})

module.export = app;
