'use strict';

const carsData = require('../data/events');

const getAllCars = async (req, res, next) => {
    try {

        const carslist = await carsData.getCars();
        res.send(carslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCar = async (req, res, next) => {
    try {
        const carsId = req.params.id;
        const oneCars = await carsData.getById(carsId);
        res.send(oneCars);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCar = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await carsData.creatCar(data);
        console.log(insert, 'insertion')
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatCar = async (req, res, next) => {
    try {
        const carsId = req.params.id;
        const data = req.body;
        const updated = await carsData.updateCar(carsId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const carsId = req.params.id;
        const deletedCar = await carsData.deleteCar(carsId);
        console.log(deletedCar)
        res.send(deletedCar);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllCars,
    getCar,
    addCar,
    updatCar,
    deleteCar
   
}