
exports.up = function(knex) {
  return (
      knex.schema
      .createTable('user', tbl =>{
          tbl.increments('id')
          tbl.string('userName')
            .unique()
            .notNullable();
        tbl.string('password')
            .notNullable();
      })
  )
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExist('user')
};
