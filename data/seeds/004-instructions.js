
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {value: 'Boil pasta, ', recipe_id: 4 },
        {value: 'Knead Dough', recipe_id: 3 },
        {value: 'Wash lettuce', recipe_id: 1 },
        {value: 'Chop onions', recipe_id: 1 },
        {value: 'Add butter', recipe_id: 5 }
      ]);
    });
};
