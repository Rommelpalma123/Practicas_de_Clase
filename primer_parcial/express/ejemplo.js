const http = require('http'); // requerimos la libreira para http 
const fs = require('fs'); // requerimos la libreira para fs

const express = require('express'); // requerimos la libreira para express
const cors = require('cors'); // requerimos la libreira para cors
const path = require('path'); // requerimos la libreira para path

const puerto = 8080; // declaramos el puerto en el cual se trabajara 

const index = fs.readFileSync('./index.html'); // guardamos dentro de variables al llamdo de paginas html con readFileSync
const about = fs.readFileSync('./about.html');
const error = fs.readFileSync('./error.html');

const paginaError = path.join(__dirname,"./error.html"); // creamos una pagina global de error en caso de no encontrar alguna ruta

const server = express(); // creamos funciones para express
server.use(cors()).use(express.json()); // usamos cors y express 

server.get('/', (req, res) => {

    res.write(index) // creamos la ruta principal el el cual llamamos al archivo html definido como index
}) 

server.get('/about', (req, res) =>{ 

    res.write(about) // creamos la ruta llamada about en el cual llamamos al archivo html definido como about
})

/*server.get('/error', (req, res) =>{ 

    res.write(error)
})*/

server.use((req, res, next) =>
{
    res.status(400).sendFile(paginaError); // defimos una pagina cuando no se encuntre una ruta lo que mostrara es un mensaje que no se encontro la pagina
})

server.listen(puerto, () =>  // definimos por que puerto va a salir toda la informacion 
{
    console.log(`runnign port http://localhost:${puerto}`) // mostramos puerto por consola 
})




/*http.createServer( (request, response) => {

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
*/