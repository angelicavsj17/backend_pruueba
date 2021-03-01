'use strict';

const express = require('express');
const carsControll = require('../controllers/carsController');
const router = express.Router();

router.get('/cars', carsControll.getAllCars)
router.get('/car/:id', carsControll.getCar)
router.post('/car', carsControll.addCar)
router.put('/car/:id', carsControll.updatCar)
router.delete('/car/:id', carsControll.deleteCar)

module.exports = {
    routes: router
}