const http = require('http');
const fs = require('fs');
const express = require('express');

const puerto = 8080;


const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const error = fs.readFileSync('./error.html');

http.createServer( (request, response) => {

    const { url } = request;            
    if (url === "/") 
    {
        response.writeHead(200, { "Content-Type": "text/html"})
        response.write(index);
    } 
    else if ( url === "/about") 
    {    
        response.writeHead(200, { "Content-Type": "text/html"})
        response.write(about);
    }
    else
    {
        response.writeHead(404, { "Content-Type": "text/html"})
        response.write(error);
    }
}).listen( 8080, () => {
    console.log(`Servidor corriendo en el puerto:${puerto}`)
});
