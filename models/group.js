import mongoose from 'mongoose'

const Schema = mongoose.Schema

const groupSchema = new Schema({
  name: {type: String},
  image: {type: String},
  manager: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  gatherings: [{ type: Schema.Types.ObjectId, ref: "Gathering" }],
  profiles: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
}, {
  timestamps: true
})

const Group = mongoose.model('Group', groupSchema)

export {Group}