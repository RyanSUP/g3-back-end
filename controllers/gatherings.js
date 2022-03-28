import { Gathering } from "../models/gathering.js";

function create(req, res) {
  console.log('gathering route')
  Gathering.create(req.body)
  .then(gathering => res.json(gathering))
  .catch(err => res.json(err))
}

export {
  create
}