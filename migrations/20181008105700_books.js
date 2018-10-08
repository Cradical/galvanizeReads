
exports.up = function(knex, Promise) {
      //run knex:migrate latest to create new table in database

      return knex.schema.createTable('books', (book) => {
        book.increments('id')
        book.string('book_title')
        book.string('book_genre')
        book.string('book_description')
        book.unique('book_cover_url')
      })

};

exports.down = function(knex, Promise) {
    //run knex:migrate rollback to remove table from database
    return knex.schema.dropTableIfExists('books')
};
