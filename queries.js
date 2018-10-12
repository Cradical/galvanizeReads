const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {

    //READ ALL

    listAllAuthors() {
        return database('authors')
    },

    listAllBooks() {
        return database('books')
    },

    listAllBooksAndAuthors(){
        return database('authors')
        .from('authors')
        .orderBy('authors.id', 'asc')
        .fullOuterJoin('books_authors', 'authors.id', 'books_authors.author_id') 
        .fullOuterJoin('books', 'books.id', 'books_authors.book_id') 
    },

    getByTitle(book){
        return database('books').where('id', id)
    },

    //CREATE
    addAuthor(newAuthor){
        return database('authors').insert(newAuthor).returning('*')
    },

    addBook(newBook) {
        return database('books').insert(newBook).returning('*')
    },

    //UPDATE

    //DELETE
    deleteAuthorById(id){
        return database('authors').where('id', id).del()
    }

}
