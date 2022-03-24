import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
  name: {type: String},
  description_preview: {type: String},
  thumb_url: {type: String},
  image_url: {type: String},
}, {
  timestamps: true
})

const Game = mongoose.model('Game', gameSchema)

export {Game}