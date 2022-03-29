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
  .populate({
    path: 'profiles',
    populate: { path: 'games' }
  })
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

function addGathering(req, res) {
  Group.findById(req.params.id)
  .then(group => {
    group.gatherings.push(req.body)
    group.save()
    .then(udpatedGroup => res.json(udpatedGroup))
  })
  .catch(error => console.log(error))
}

function deleteGathering(req, res) {
  console.log(req.params)
  Group.findById(req.params.groupId)
    .then(group => {
      console.log(group)
      group.gatherings.remove({ _id: req.params.gatheringId })
      group.save()
      return res.json(group)
    })
    .catch(err => {console.log(err)})
}

function deleteGroup(req, res){
    // Get all profiles from this group
  // For each profile, delete the group link
  Group.findByIdAndDelete(req.params.id)
  .then(group => {
    group.populate('profiles')
    .then(populatedGroupObject => {
      populatedGroupObject.profiles.forEach(profile => {
        profile.groups.remove({ _id: req.params.id})
        profile.save()
      })
      return res.json(group)
    })
  })
  .catch(error => console.log(error))
}

function updateGathering(req, res) {
  console.log(req.body)
  console.log(req.params.groupId)
  console.log(req.params.gathId)
  Group.findById(req.params.groupId)
  .then(group => {
    const gathering = group.gatherings.find(gathering => gathering._id.equals(req.params.gathId))

    gathering.name = req.body.name
    gathering.location = req.body.location
    gathering.date = req.body.date

    group.save()

    return res.json(group)
  })
  .catch(error => console.log(error))
}


export {
  create,
  index,
  show,
  join,
  addGathering,
  deleteGroup,
  deleteGathering,
  updateGathering
}