
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('recipes').insert([
      { name: 'Pasta al Limone' },
      { name: 'Seasoned Grilled Cheese' },
      { name: 'Lemon Dill Pasta' }
    ]);
};
