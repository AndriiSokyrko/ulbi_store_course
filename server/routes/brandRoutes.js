const Router = require('express')
const router = new Router()

router.get('/',(req, res)=> {
    res.json({message: 'brand get'})
})
router.post('/',(req, res)=>{
    res.json({message:'brand post'})
})

module.exports = router