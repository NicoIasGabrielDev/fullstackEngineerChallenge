const express = require('express');
const { getAverageConsumeByCompany, getTotalEmissionPerYear, getTop5Companies, getTotalSectorConsume } = require("../controllers/indicators.controller");
const router = express.Router();

/**
 * @swagger
 * /indicators/emission-per-year:
 *   get:
 *     summary: Returns total C02 emission per year
 *     tags: [Indicators]
 *     responses:
 *       200:
 *         description: Sucess
 */
router.get('/emission-per-year', getTotalEmissionPerYear);

/**
 * @swagger
 * /indicators/top-five-emission-companies:
 *   get:
 *     summary: Returns the top 5 companies that emit the most
 *     tags: [Indicators]
 *     responses:
 *       200:
 *         description: Sucess
 */
router.get('/top-five-emission-companies', getTop5Companies);
/**
 * @swagger
 * /indicators/total-sector-consume:
 *   get:
 *     summary: Returns total consume of each sector
 *     tags: [Indicators]
 *     responses:
 *       200:
 *         description: Sucess
 */
router.get('/total-sector-consume', getTotalSectorConsume);
/**
 * @swagger
 * /indicators/average-consume-by-company:
 *   get:
 *     summary: Returns average consume by company
 *     tags: [Indicators]
 *     responses:
 *       200:
 *         description: Sucess
 */
router.get('/average-consume-by-company', getAverageConsumeByCompany);

module.exports = router;