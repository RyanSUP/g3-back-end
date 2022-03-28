import { Router } from "express";
import * as gatheringsCtrl from '../controllers/gatherings.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// router.get('/', groupsCtrl.index)
// router.get('/:id', groupsCtrl.show)


router.use(decodeUserFromToken)
router.post('/', checkAuth, gatheringsCtrl.create)
// router.post('/:id', checkAuth, groupsCtrl.join)

export { router }