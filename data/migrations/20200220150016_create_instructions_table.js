
exports.up = function(knex) {
    return knex.schema.createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE') // update this id when source is updated
            .onDelete('CASCADE'); 
        tbl.string('description', 512)
            .notNullable();
        tbl.integer('order')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions');
};
