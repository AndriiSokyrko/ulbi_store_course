const apiError = require('../error/apiErrors')
class UserController {
    async registration(req,res) {
    return res.json({message: 'registration'})
    }

    async login(req,res) {
        return  res.json({message: 'login'})

    }

    async auth(req, res, next) {
        const {id} = req.query
        if(!id){
            return next(apiError.badRequest('no Id'))
        }

        return res.json(id)
    }
}

module.exports = new UserController()