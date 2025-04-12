const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
router.get('/',typeController.geAll)
router.post('/',typeController.create)
module.exports = router