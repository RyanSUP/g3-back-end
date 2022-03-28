import { Router } from "express";
import * as groupsCtrl from '../controllers/groups.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', groupsCtrl.index)
router.get('/:id', groupsCtrl.show)

router.use(decodeUserFromToken)
router.post('/', checkAuth, groupsCtrl.create)
router.post('/:id', checkAuth, groupsCtrl.join)

export { router }