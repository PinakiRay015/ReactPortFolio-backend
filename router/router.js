const express = require('express');
const {createData , createPartner} = require('../controllers/controller');
const myRouter = express.Router();

myRouter.post('/api/data' , createData);
myRouter.post('/api/partner' , createPartner)

module.exports = myRouter;