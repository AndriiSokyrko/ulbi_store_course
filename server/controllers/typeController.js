const {Type} = require('../models/models')
const ApiError = require('../error/apiErrors')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res) {
        const types = await Type.findAll()
        return res.json(types)
    }
    async getOne(req,res) {
        const types = await Type.find(req.body)
        return res.json(types)
    }
}

module.exports = new TypeController()