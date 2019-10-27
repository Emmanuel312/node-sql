const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')
const connection = new Sequelize(databaseConfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

Address.associate(connection.models)
User.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection