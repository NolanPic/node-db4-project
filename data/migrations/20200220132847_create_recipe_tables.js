

exports.up = function (knex) {

    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().index();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned() // non-negative
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE') // update this id when source is updated
            .onDelete('CASCADE'); // delete this record when recipe is deleted

        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            // VALUES FOR .onDelete() AND .onUpdate()
            //----------------------------------------------------------------------------//
            // The .onDelete() and .onUpdate() methods allow us to control how the database
            // handles delete and update requests for records with primary keys that are
            // used (or "referred to") by child tables. The following values can be passed
            // in to .onDelete() and .onUpdate():
            //
            //   * RESTRICT - this is the default if you don't call .onDelete() or
            //     .onUpdate(). You may choose to call those methods and pass 'RESTRICT'
            //     anyway, just to make it clear that you intend for that to be the behavior
            //     (as opposed to just forgetting what the default behavior is, or
            //     unknowingly accepting the default.)
            //   * CASCADE - this causes the database to find and delete all records in
            //     child tables that reference the primary record being deleted. The delete
            //     request in the primary table is "cascaded" to all child tables that
            //     reference the priamary record's key. This is the most destructive option.
            //
            //   * SET NULL - this causes the database to find all records in child tables
            //     that reference the primary record being deleted, and to set their foreign
            //     key field values to "null" (for the foreign key that references the
            //     record being deleted.) This helps ensure that there are no child records
            //     refer to the primary record being deleted. NOTE: This coul have
            //     unintended consequences if you have defined a foreign key field as
            //     .notNullable()... be careful!
            //   * NO ACTION - this causes the database to allow the deletion of the primary
            //     record, without taking any other action.  THIS WILL BREAK REFERENTIAL
            //     INTEGRITY!!! You will have records in child tables that are referring to
            //     a record in a parent table *that does not exist*. There should be rare,
            //     if any, cases where this is appropriate.    
            //
            // Here, we set the delete and update behavior for parent tables to 'CASCADE'. 
            //
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); // delete this record when ingredient is deleted
        
        tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function (knex) {

    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
