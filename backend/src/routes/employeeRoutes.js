const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para cadastrar um funcionário
router.post('/', employeeController.createEmployee);

// Rota para buscar todos os funcionários
router.get('/buscar', employeeController.findEmployee);

// Rota para atualizar um funcionário pelo ID
router.put('/:id', employeeController.updateEmployee);

// Rota para buscar um funcionário pelo ID
router.get('/:id', employeeController.findById);

// Rota para deletar um funcionário pelo ID
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;