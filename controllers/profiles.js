import { Game } from '../models/game.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .populate('games')
  .populate('groups')
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('games')
  .populate('groups')
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function add(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.games.push(req.body)
    profile.save()
    .then(udpatedProfile => res.json(udpatedProfile))
  })
  .catch(error => console.log(error))
}

function deleteGame(req, res) {
  console.log('DELETE GAME')
  Profile.findById(req.params.id)
  .then(profile => {
    profile.games.remove(req.body._id)
    profile.save()
  })
}

function join(req, res) {
  console.log('made the route')
  Profile.findById(req.params.id)
  .then(profile => {
    profile.groups.push(req.body)
    profile.save()
    .then(udpatedProfile => res.json(udpatedProfile))
  })
  .catch(error => console.log(error))
}

function jankyJoin(managerId, group) {
  Profile.findById(managerId)
  .then(profile => {
    profile.groups.push(group)
    profile.save()
    .then(udpatedProfile => {
      return udpatedProfile
    })
  })
  .catch(error => console.log(error))
}

export { 
  index, 
  show,
  add,
  deleteGame as delete,
  join,
  jankyJoin,
}


// function deleteGame(req, res) {
//   console.log('routes') 
//   console.log(req.body)
//   Profile.findById(req.params.id)

//   .then(profile => {
//   console.log(profile.games)
//     Game.findByIdAndDelete()
//   })  
//   .catch(err => {
//     res.status(500).json(err)
//   })
// }