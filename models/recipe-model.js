const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes').select('*');
}

function getShoppingList(recipe_id) {
    return db('ingredients i')
        .join('recipe_ingredients r', 'i.id', 'r.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .select('i.id', 'i.name', 'r.quantity', 'r.quantity_unit');
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where('recipe_id', recipe_id);
}
