import { Router } from "express";
import * as groupsCtrl from '../controllers/groups.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', groupsCtrl.index)
router.get('/:id', groupsCtrl.show)


router.use(decodeUserFromToken)
router.post('/', checkAuth, groupsCtrl.create)
router.post('/:id/profiles', checkAuth, groupsCtrl.join)
router.post('/:id/gatherings', checkAuth, groupsCtrl.addGathering)
router.delete('/:id', checkAuth, groupsCtrl.deleteGroup)

export { router }