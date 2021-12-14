
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

function search_Book_by_id (id, callback) 
{
    const book = books.find( (book) =>  book.id === id );

    if(!book)
    {
        const error = new Error();
        error.message = "Book not found"
        return callback(error);
    }
    callback(null, book);
}

function search_author_by_id (id, callback)
{
    const author = authors.find((author) =>{
        return author.id === id
    });
    if(!author)
    {
        const error = new Error();
        error.message = "The author of this book does not exist"
        return callback(error);
    } 
    return callback(null, author);
}

search_Book_by_id(3, (err, book ) => {

    if(err) 
    {
        console.log(err.message);
        return ; 
    }
    search_author_by_id( book.idauthor, (err, author ) => {

        book.author = author;
        delete book.idauthor;
        console.log(book);
    });
})