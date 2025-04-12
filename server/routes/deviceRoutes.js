const Router = require('express')
const router = new Router()

router.get('/',(req, res)=> {
    res.json({message: 'device get'})
})
router.get('/:id',(req, res)=> {
    res.json({message: 'device get id'})
})
router.post('/',(req, res)=> {
    res.json({message: 'device post'})
})
module.exports = router