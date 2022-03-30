import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)
router.put('/:id', checkAuth, profilesCtrl.picture)
router.post('/:id/groups', checkAuth, profilesCtrl.join)
router.post('/:id/games', checkAuth, profilesCtrl.add)
router.delete('/:id/games', checkAuth, profilesCtrl.delete)


export { router }
