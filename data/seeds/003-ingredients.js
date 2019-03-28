
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Fresh cream', quantity: 1, recipe_id: 5},
        {name: 'Flour', quantity: 1, recipe_id: 3},
        {name: 'Cheese', quantity: 4, recipe_id: 6},
        {name: 'Tomato sauce', quantity: 2, recipe_id: 4},
        {name: 'Pepperoni', quantity: 3, recipe_id: 3},
        {name: 'Lettuce', quantity: 1, recipe_id: 1}
      ]);
    });
};
