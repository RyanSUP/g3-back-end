import { Group } from "../models/group.js";

//we need to also set the manager of the group to the user who is logged in
//then push the profile of the logged in user to the group
//AND push the group into the profile of the logged in user
function create(req, res) {
  // console.log(req.user.profile)
  // req.body.manager = req.user.profile
  Group.create(req.body)
  .then(group => res.json(group))
  .catch(err => res.json(err))
}

export {
  create
}