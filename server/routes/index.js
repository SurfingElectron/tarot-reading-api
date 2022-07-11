//Routing for tarot card API requests 
import express from 'express';
const router = express.Router();

//Importing data-handling functions from models folder
import {
  getRandomCards
} from '../models/cards.js'


// GET a number of random cards
router.get('/random?n={n}', async (req, res) => {
  const numCards = Number(req.params.n);
  const cards = await getRandomCards(numCards);

  let response = {
    success: true,
    payload: cards,
  };
  return response;

});

export default cardRouter;
