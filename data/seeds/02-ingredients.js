
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    { name: 'Lemon juice' },
    { name: 'Dill' },
    { name: 'Pasta' },
    { name: 'Parmasan' },
    { name: 'Cheddar' },
    { name: 'Lemon zest' },
    { name: 'Salt' },
    { name: 'Pepper' },
    { name: 'Oregano' },
    { name: 'Butter' },
    { name: 'Cream' },
    { name: 'Sourdough bread' }
  ]);
};
