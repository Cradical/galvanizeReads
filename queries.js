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

    listAllBooksWithAuthors(){
        return database('books_authors')
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
    updateAuthor( author_bio){
        return database('authors').update
    }


}
