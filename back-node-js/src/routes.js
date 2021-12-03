const express = require('express');

const ActivityController = require('./controlers/ActivityControl')

const routes = express.Router();

routes.get('/activity', ActivityController.index);
routes.post('/activity', ActivityController.store);
routes.put('/activity/:activity_id', ActivityController.update);
routes.delete('/activity/:activity_id', ActivityController.delete);


module.exports = routes;