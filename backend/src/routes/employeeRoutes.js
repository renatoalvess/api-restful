const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para cadastrar um funcionário
router.post('/', employeeController.createEmployee);

module.exports = router;