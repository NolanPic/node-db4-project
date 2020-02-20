
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 2,
      quantity_unit: 'tbsp'
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 12,
      quantity_unit: 'oz'
    },
    {
      recipe_id: 1,
      ingredient_id: 4,
      quantity: 3.5,
      quantity_unit: 'oz'
    },
    {
      recipe_id: 1,
      ingredient_id: 6,
      quantity: 1,
      quantity_unit: 'tbsp'
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: null,
      quantity_unit: 'to taste'
    },
    {
      recipe_id: 1,
      ingredient_id: 8,
      quantity: null,
      quantity_unit: 'to taste'
    },
    {
      recipe_id: 1,
      ingredient_id: 10,
      quantity: 4,
      quantity_unit: 'tbsp'
    },
    {
      recipe_id: 1,
      ingredient_id: 11,
      quantity: 0.75,
      quantity_unit: 'cup'
    },

    {
      recipe_id: 2,
      ingredient_id: 2,
      quantity: 3,
      quantity_unit: 'pinches'
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
      quantity: 2,
      quantity_unit: 'slices'
    },
    {
      recipe_id: 2,
      ingredient_id: 9,
      quantity: 1,
      quantity_unit: 'pinch'
    },
    {
      recipe_id: 2,
      ingredient_id: 10,
      quantity: null,
      quantity_unit: null
    },
    {
      recipe_id: 2,
      ingredient_id: 12,
      quantity: 2,
      quantity_unit: 'slices'
    },
  ]);
};
