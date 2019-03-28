const knex = require('knex');
const knexConfig = require('./knexfile').development;

const getDishes = async (db) => {
  return db('dishes');
};

const addDish = (db, dish) => {
  return db('dishes')
      .insert(dish)
      .then((ids) => (ids[0]));
};

const getDish = async (db, id) => {
  return db('dishes').where({ id: id });
};

const getRecipes = async (db) => {
  return db('recipes');
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
