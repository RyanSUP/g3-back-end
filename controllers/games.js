import { Game } from '../models/game.js'


function index (req, res) {
  Game.find({})
  .then(games => {
    res.json(games)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  index
}