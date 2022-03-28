import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  avatar: String,
  name: String,
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
