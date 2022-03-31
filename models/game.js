import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
  bga_id: {type: String},
  name: {type: String},
  description_preview: {type: String},
  thumb_url: {type: String},
  image_url: {type: String},
  min_players: {type: Number},
  max_players: {type: Number},
  min_playtime: {type: Number},
  max_playtime: {type: Number},
  min_age: {type: Number},
  players: {type: String},
  playtime: {type: String},

}, {
  timestamps: true
})

const Game = mongoose.model('Game', gameSchema)

export {Game}
