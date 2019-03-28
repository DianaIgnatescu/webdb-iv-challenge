const knex = require('knex');
const knexConfig = require('./knexfile').development;

const getDishes = async (db) => {
  return db('dishes');
  // const result = await db('dishes').select('name');
  // const dishes = result.map(result => result.name);
  // return dishes;
};

const addDish = (db, dish) => {
  return db('dishes')
      .insert(dish)
      .then((ids) => (ids[0]));
};

const getDish = async (db, id) => {
  return db('dishes').where({ id });
};

const getRecipes = async (db) => {
  return db('recipes');
  // const result = await db('recipes').select('name', 'dish_id');
  // const recipes = result.map(result => result.name);
  // return recipes;
};

const addRecipe = (db, recipe) => {
  return db('recipes')
      .insert(recipe)
      .then(ids => ( ids[0]));
};

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};
