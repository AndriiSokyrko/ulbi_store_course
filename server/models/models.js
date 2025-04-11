const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role: {type: DataTypes.STRING, default:'USER'}
})

const Bascket = sequelize.define('bascket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const BascketDevice = sequelize.define('bascket_device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Device = sequelize.define('device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0 },
    img: {type: DataTypes.STRING, allowNull: false},
})
const type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})
const brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})
const rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  allowNull:false},
})
const DeviceInfo = sequelize.define('device_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,  allowNull:false},
    descripton: {type: DataTypes.STRING,  allowNull:false},
})

