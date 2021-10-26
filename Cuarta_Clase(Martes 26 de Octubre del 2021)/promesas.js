// declaramos un arreglo llamado books donde damos atributos como id, title y idauthor
const books = [

    {
        id: 1,
        title: 'Sistemas Distribuidos Nodejs',
        idauthor: 1
    },
    {
        id: 2,
        title: 'Aprendiendo JS',
        idauthor: 2
    },
    {
        id: 3,
        title: 'Clean Code JS',
        idauthor: 3
    }
]
// declaramos un arreglo llamado authors donde damos atributos como id, title y idauthor
const authors = [

    {
        id: 1,
        name: 'Pedro Miguel'
    },
    {
        id: 2,
        name: 'Juan Andres'
    },
    {
        id: 3,
        name: 'Julio Verne'
    }
]

// creamos una funcion para buscar libros y damos un parametro el cual es id 
function search_Book_by_id(id)
{
    // Ahora estamos trabajando con promesas las cuales me van a retornar un valor si es que existe ese id del libro 
    return new Promise((resolve, reject) => 
    {
        // creamos una variable donde daremos el arrgle books y se buscara el id del libro
        const book = books.find((book) => book.id === id);
        if(!book) 
        { 
            // creamos un error en caso de no encontrar el libro 
            const error = new Error();
            error.message= "Book not found";
            reject(error)
        }
        // si se encuentra el libro retornado el valor del libro
        resolve(book);
    })
}


// creamos una funcion para buscar autor y damos un parametro el cual es book
function search_author_by_id(book)
{
    // Ahora estamos trabajando con promesas las cuales me van a retornar un valor si es que existe ese id del libro 
    return new Promise((resolve, reject) => 
    {
        // creamos una variable donde daremos el arrgle authors y se buscara el id dentro del arreglo books 
        const author = authors.find((author) => {
            return author.id === book.idauthor
        })
        if(!author){

            // creamos un error donde se conprueba si es q existe un idauthor dentro del arreglo books 
            const error = new Error();
            error.message = "Author not found";
            // si no se cumple saltara el error que no fue encontrado el isauthor
            reject(error);
        }
        // si todo se cumple se guardara los valoren en author y se retornara el valor que se busca
        book.author = author;
        resolve(book);    
    })
}

// damos un id de libro el cual es el 2 y decimos que nos retorne el valor del libro si es que se encuentra
search_Book_by_id(2).then((book) => {
    return search_author_by_id(book);
// con el then y catch se puede controlar errores en las promesas
}).then ((book) => {   
    
    console.log(book)
// si no se encuentra el libro saldra un error que no se encontro el libro 
}).catch((error) => {

    console.log(error.message);
});