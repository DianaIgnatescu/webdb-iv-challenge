const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile').development;
const helpers = require('./helpers');

const db = knex(knexConfig);
const server = express();
server.use(express.json());

server.get('/dishes', async (req, res) => {
  const result = await helpers.getDishes(db);
  res.status(200).json(result);
});

server.get('/dishes/:id', async (req, res) => {
  const { id } = req.params;
  const result = await helpers.getDish(db, id);
  res.status(200).json(result);
});

server.get('/recipes', async (req, res) => {
  const result = await helpers.getRecipes(db);
  res.status(200).json(result);
});

server.post('/dishes', async (req, res) => {
  const dish = req.body;
  const result = await helpers.addDish(db, dish);
        res.status(201).json(result);
});

server.post('/recipes', async (req, res) => {
  const recipe = req.body;
  const result = await helpers.addRecipe(db, recipe);
  res.status(201).json(result);
});

const port = 5000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
