import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gatheringSchema = new Schema({
  name: {type: String},
  location: {type: String},
  date: {type: String}, 
}, {
  timestamps: true
})

const Gathering = mongoose.model('Gathering', gatheringSchema)

export {Gathering}