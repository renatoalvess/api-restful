const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para cadastrar um funcionário
router.post('/', employeeController.createEmployee);

// Rota para buscar todos os funcionários
router.get('/buscar', employeeController.findEmployee);

module.exports = router;