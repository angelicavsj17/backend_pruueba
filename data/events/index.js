'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCars = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsCars = await pool.request().query(sqlQueries.carslist);
        return eventsCars.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(carsId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneCars = await pool.request()
                            .input('carsId', sql.Int, carsId)
                            .query(sqlQueries.carsbyId);
        return oneCars.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatCar = async (cardata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertCar = await pool.request()
                            .input('mark', sql.NVarChar(30), cardata.mark)
                            .input('hours_manufacturing', sql.Int, cardata.hours_manufacturing)
                            .input('quantity', sql.Int, cardata.quantity)
                            .input('date_creation', sql.DateTime, cardata.date_creation)
                            .query(sqlQueries.createCar);                            
        return insertCar.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCar = async (carsId, cardata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('carsId', sql.Int, carsId)
                        .input('mark', sql.NVarChar(30), cardata.mark)
                        .input('hours_manufacturing', sql.Int, cardata.hours_manufacturing)
                        .input('quantity', sql.Int, cardata.quantity)
                        .input('date_creation', sql.DateTime, cardata.date_creation)
                        .query(sqlQueries.updateCar);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCar = async (carsId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteCar = await pool.request()
                            .input('carsId', sql.Int, carsId)
                            .query(sqlQueries.deleteCar);
        return deleteCar.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCars,
    getById,
    creatCar,
    updateCar,
    deleteCar
}