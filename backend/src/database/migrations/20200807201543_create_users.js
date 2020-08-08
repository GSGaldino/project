
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('power').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
