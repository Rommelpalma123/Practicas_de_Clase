const server = require('./src/app');

server.listen(procces.env.PORT, ()=>{
    console.log(`server run on ${procces.env.PORT}`);
} )