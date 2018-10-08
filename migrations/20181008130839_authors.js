exports.up = function(knex, Promise) {
    //run knex:migrate latest to create new table in database

    return knex.schema.createTable('authors', (author) => {
      author.increments('id')
      author.string('first_name')
      author.string('last_name')
      author.string('author_bio', 1000)
      author.string('portrait_url', 1000)
    })

};

exports.down = function(knex, Promise) {
  //run knex:migrate rollback to remove table from database
  return knex.schema.dropTableIfExists('authors')
};
