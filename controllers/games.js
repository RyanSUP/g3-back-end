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

const pruneGameObject =(gameObj) => (
  { 
    bga_id: gameObj.id,
    name: gameObj.name, 
    description_preview: gameObj.description_preview,
    image_url: gameObj.image_url,
    thumb_url: gameObj.image_url,
  }
)

const create = (req, res) => {
  let prunedGame = pruneGameObject(req.body)
  Game.findOne( {bga_id: prunedGame.bga_id} )
  .then(game => {
    if(!game) {
      Game.create(prunedGame)
      .then(() => console.log('CACHE SUCCESSFUL', prunedGame.bga_id))
    } else {
      console.log(`${prunedGame.bga_id} (${prunedGame.name}) is already cached`)
    }
    return res.json(game)
  })
  .catch(error => console.log(error, `ERROR CACHING ${prunedGame.bga_id} (${prunedGame.name})`))
}

export {
  index,
  create,
}