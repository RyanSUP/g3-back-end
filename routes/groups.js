import { Router } from "express";
import * as groupsCtrl from '../controllers/groups.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.post('/', groupsCtrl.create)


export { router }