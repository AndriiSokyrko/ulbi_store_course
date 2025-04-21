const {Device} = require('../models/models');
const uuid = require('uuid')
const path = require('path')
const apiError = require('../error/apiErrors')
class DeviceController{
    async create(req, res, next) {
        try{
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname,'..','static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        } catch (e){
            next(apiError.badRequest(e.message))
        }

    }

    async getAll(req,res) {
        const devices = await Device.findAll()
        return res.json(devices)
    }
    async getOne(req,res) {
        const devices = await Device.find(req.body)
        return res.json(devices)
    }
    async deleteById(req,res) {
        // const id = parseInt(req.params.id)
        const devices = await Device.destroy(req.body.id)
        return res.status(200).message({message:'Ok'})
    }
}

module.exports = new DeviceController()