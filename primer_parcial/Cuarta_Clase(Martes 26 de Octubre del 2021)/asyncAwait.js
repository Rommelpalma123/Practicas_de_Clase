
// declaramos un arreglo llamado book donde damos atributos como id, title y idauthor
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

// creamos otro arreglo llamado authors asi mismo le damoa atributos como el id y name
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

// creamos una funcion de tipo asincronica la cual la llamamos search_book_by_id 
async function search_book_by_id(id){

    // creamos una variable book luego le damos el valor del arrglo para buscar un libro por su id
    const book = books.find((book) => book.id === id);
    if(!book)
    {
        // creamos otra variable para generar un error en caso que no se encuentre el libro 
        const error = new Error();
        // enviamos un mensaje de error 
        error.message= "book no found";
        throw error;
    }
    // si no hoy ningun problema se retorna un libro 
    return book;
}

books.forEach( async (book) =>{

    const bookk = await search_Book_by_id(1);
})

// creamos una funcion de tipo asincronica la cual la llamamos search_author_by_id 
async function search_author_by_id(id){

    // creamos una variable author luego le damos el valor del arrglo para buscar un author por su id
    const author = authors.find((author) =>{ return author.id === id;
    })

    if(!author)
    {
        // creamos otra variable para generar un error en caso que no se encuentre el libro 
        const error = new Error();
        error.message = "author no found";
        throw error;
    }
    return author;

}

// creamos una funcion anonima para generar errrores 
(async () => 
{
    try {

        // en el try es donde se va a ejecutar todo, decimos que en search_book_by_id busque un libro definido
        const book = await search_book_by_id(1);
        // tambine hacemos una busqueda en el arrglo de books para buscar el id del autor 
        const author = await search_author_by_id(book.idauthor)
        // guardamos los valoren en la variable author 
        book.author = author;
        // imprimimos libro y autor i id
        console.log(book);

    // con el catch enviaremos el error, en caso de no encontrar el libro 
    } catch (error) {
        console.log(error.message);
    }
})();