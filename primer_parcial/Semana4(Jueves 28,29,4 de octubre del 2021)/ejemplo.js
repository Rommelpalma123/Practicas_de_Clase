// llamamos al modulo de mongodb para podernos conectar a la base de dato 
const mongoose = require('mongoose');

// creamos variables pàra guardar nuestras cedenciales y acceder a la base de datos 
/*const user = 'Rommel';
const password = 'YqbfNtsodzQkKlAi';
const dbname = 'clases';*/

// creamos una variable donde damos la direccion en la nube de nuestras credenciales y poder conectarnos a mongodb
//const conection = `mongodb+srv://${user}:${password}@cluster0.asmcj.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// realizamon las peticiones a mongodb para podernos cenectar y utilizamos then y catch para ver si nos conectarmos o no 
// creamos una funcion anonima de tipo asincrona
(async () => {

    await mongoose.connect(conection,{ useNewUrlParser: true, useUnifiedTopology: true},)
    .then(()  => console.log('Connected to database mongodb'))
    .catch(e  => console.log('error connect to database',e))   

// hacemos una pequeña prueba donde creamos un atributo llamado nanme y cremos dependencia llamada prueba
    const user1 = mongoose.model("prueba", {name:String});          

// aqui estamos dandole a name el valor de rommel palma 
    const user2 = new user1({name:"roman palma"});

// guardamos el valor de user2 que es rommel palma, para verlo refrejado en mongodb
    const guardo = await user2.save();
    const request = await user1.find();
    console.log(request);
})();

