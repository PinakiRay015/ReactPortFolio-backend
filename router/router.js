const express = require('express');
const createData = require('../controllers/controller');
const myRouter = express.Router();

myRouter.post('/api/data' , createData);

module.exports = myRouter;