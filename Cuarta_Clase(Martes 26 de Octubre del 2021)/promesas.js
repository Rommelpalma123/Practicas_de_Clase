
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
function search_Book_by_id(id)
{
    return new Promise((resolve, reject) => 
    {
        const book = books.find((book) => book.id === id);
        if(!book) 
        {
            const error = new Error();
            error.message= "Book not found";
            reject(error)
        }
        resolve(book);
    })
}



function search_author_by_id(book)
{
    return new Promise((resolve, reject) => 
    {
        const author = authors.find((author) => {
            return author.id === book.idauthor
        })
        if(!author){

            const error = new Error();
            error.message = "Author not found";
            reject(error);
        }
        book.author = author;
        resolve(book);    
    })
}

search_Book_by_id(2).then((book) => {
    return search_author_by_id(book);

}).then ((book) => {   
    
    console.log(book)

}).catch((error) => {

    console.log(error.message);
});