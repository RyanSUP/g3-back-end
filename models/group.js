import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gatheringSchema = new Schema({
  name: {type: String},
  location: {type: String},
  date: {type: String}, 
}, {
  timestamps: true
})

const groupSchema = new Schema({
  name: {type: String},
  image: {type: String},
  manager: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  gatherings: [gatheringSchema],
  profiles: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
}, {
  timestamps: true
})



const Group = mongoose.model('Group', groupSchema)

export {Group}