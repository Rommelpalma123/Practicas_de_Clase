
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

async function search_book_by_id(id){

    const book = books.find((book) => book.id === id);
    if(!book)
    {
        const error = new Error();
        error.message= "book no found";
        throw error;
    }
    return book;
}

books.forEach( async (book) =>{

    const bookk = await search_Book_by_id(1);
})


async function search_author_by_id(id){

    const author = authors.find((author) =>{ return author.id === id;
    })

    if(!author)
    {
        const error = new Error();
        error.message = "author no found";
        throw error;
    }
    return author;

}

(async () => 
{
    try {

        const book = await search_book_by_id(1);
        const author = await search_author_by_id(book.idauthor)
        book.author = author;
        console.log(book);

    } catch (error) {
        console.log(error.message);
    }
    
})();