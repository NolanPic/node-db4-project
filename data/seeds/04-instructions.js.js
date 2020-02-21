
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    {
      recipe_id: 1,
      description: 'Boil and heavily salt water',
      order: 1
    },
    {
      recipe_id: 1,
      description: 'Cook pasta until al dente',
      order: 2
    },
    {
      recipe_id: 1,
      description: 'Begin sauce in separate pan with cream, and add 1tbsp butter until all butter is melted',
      order: 3
    },
  ]);
};
