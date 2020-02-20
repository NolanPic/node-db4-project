
exports.up = function(knex) {
    return knex.schema.alterTable('recipe_ingredients', tbl => {
        tbl.float('quantity');
        tbl.string('quantity_unit', 25);
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('recipe_ingredients', tbl => {
        tbl.dropColumn('quantity');
        tbl.dropColumn('quantity_unit');
    });
};
