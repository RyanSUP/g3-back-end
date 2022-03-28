import { Group } from "../models/group.js";

//we need to also set the manager of the group to the user who is logged in
//then push the profile of the logged in user to the group
//AND push the group into the profile of the logged in user
function create(req, res) {
  console.log(req.user.profile)
  req.body.manager = req.user.profile
  Group.create(req.body)
  .then(group => res.json(group))
  .catch(err => res.json(err))
}

function index(req, res) {
  Group.find({})
  .then(groups => res.json(groups))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
function show(req, res) {
  Group.findById(req.params.id)
  .populate('profiles')
  .then(group => res.json(group))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function join(req, res) {
  Group.findById(req.params.id)
  .then(group => {
    group.profiles.push(req.user.profile)
    group.save()
    .then(udpatedProfile => res.json(udpatedProfile))
  })
  .catch(error => console.log(error))
}

export {
  create,
  index,
  show,
  join
}