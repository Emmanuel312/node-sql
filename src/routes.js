const { Router } = require('express')
const routes = Router()
const UserController = require('./controllers/UserController')
const AddressesController = require('./controllers/AddressesController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')


routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses',  AddressesController.store)
routes.get('/users/:user_id/addresses',  AddressesController.index)

routes.post('/users/:user_id/techs',  TechController.store)
routes.get('/users/:user_id/techs',  TechController.index)
routes.delete('/users/:user_id/techs',  TechController.delete)

routes.get('/report',  ReportController.show)




module.exports = routes