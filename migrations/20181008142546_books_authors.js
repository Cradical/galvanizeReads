
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books_authors', (table) =>{
        // table.increments('id')
        table.integer('book_id').unsigned()
        table.foreign('book_id').references('books.id').onDelete('cascade')
        table.integer('author_id').unsigned()
        table.foreign('author_id').references('authors.id').onDelete('cascade')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books_authors')
  };