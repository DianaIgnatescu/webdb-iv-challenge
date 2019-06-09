
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tex-Mex', dish_id: 1 },
        {name: 'Grannys', dish_id: 1},
        {name: 'Pepperoni', dish_id: 2},
        {name: 'Spaghetti Bolognese', dish_id: 3},
        {name: 'Fettuccine Alfredo', dish_id: 3},
        {name: 'Quattro Formaggio', dish_id: 2}
      ]);
    });
};
