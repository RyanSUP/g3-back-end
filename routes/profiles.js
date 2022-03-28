import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)
router.post('/:id', checkAuth, profilesCtrl.join)
router.post('/:id', checkAuth, profilesCtrl.add)
router.delete('/:id', checkAuth, profilesCtrl.delete)


export { router }
