
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', tbl =>{
    users.increments('id')
    users.string('username')
    .notNullable()
    .unique();
    users.string('password')
    .notNullable()
  })
};

exports.down = function(knex) {
return knex.schema
.dropTableIfExists('users')  
};
