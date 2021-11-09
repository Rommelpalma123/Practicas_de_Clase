// creacion de arreglos o arrays

const headers = [

    {
        id: 1,
        name: 'Cuarto normal',
        idroom: 1
    },
    {
        id: 2,
        name: 'Cuarto con piscina',
        idroom:2
    },
    {
        id: 3,
        name: 'Cuarto con aire acondicionado',
        idroom:3
    }
]

const rooms = [

    {
        id: 1,
        name: '15',
        idheader: 1
    },
    {
        id: 2,
        name: '12',
        idheader: 2
    },
    {
        id: 3,
        name: '19',
        idheader:3
    }
]

const peoples = [

    {
        id: 1,
        name: 'Pedro Miguel',
        idroom: 1
    },
    {
        id: 2,
        name: 'Juan Andres',
        idroom:2
    },
    {
        id: 3,
        name: 'Julio Verne',
        idroom:3
    }
]


/*
aplicaion de promesas 
function found_Reservation(id){

    return new Promise((resolve, reject) => {

        const people = peoples.find((people) =>  people.id === id);

    if( !people)
    {
        const error = new Error();
        error.message = "client not found";
        reject(error);
    }
    resolve(people);

    });
    
} 
console.log(found_Reservation(1));*/


async function found_Reservation(id){

    const people = peoples.find((people) =>  people.id === id);
    if( !people)
    {
        const error = new Error();
        error.message = "client not found";
        throw error;
    }
    return people;
} 


async function found_room(id){

    // creamos una variable author luego le damos el valor del arrglo para buscar un author por su id
    const room = rooms.find((room) =>{ return room.id === id;
    })

    if(!room)
    {
        // creamos otra variable para generar un error en caso que no se encuentre el libro 
        const error = new Error();
        error.message = "room no found";
        throw error;
    }
    return room;

}


async function found_headers(id){

    // creamos una variable author luego le damos el valor del arrglo para buscar un author por su id
    const header = headers.find((header) =>{ return header.id === id})

    if(!header)
    {
        // creamos otra variable para generar un error en caso que no se encuentre el libro 
        const error = new Error();
        error.message = "header no found";
        throw error;
    }
    return header;
}



/*peoples.forEach( async (people) =>{

    const bookk = await found_Reservation(1);
    console.log(bookk);
})*/
(async () => 
{
    try {

        // en el try es donde se va a ejecutar todo, decimos que en search_book_by_id busque un libro definido
        const people = await found_Reservation(1);
        const room = await found_room(people.idroom);
        const header = await found_headers(room.idheader);
        people.room = header;
        console.log(people);
    // con el catch enviaremos el error, en caso de no encontrar el libro 
    }catch (err) 
    {
        console.log(err.message="Client not fount now");
    }
})();