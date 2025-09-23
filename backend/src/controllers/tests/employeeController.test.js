const employeeController = require('../employeeController');
const employeeModel = require('../../models/employeeModel');

// Mock employeeModel
jest.mock('../../models/employeeModel');

describe('employeeController', () => {
  describe('createEmployee', () => {
    it('deve criar um funcionário com sucesso', async () => {
      const req = {
        body: {
          nome: 'Test User',
          email: 'test@example.com',
          cpf: '12345678901',
          contato: '123456789'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const newEmployee = {
        id: 1,
        ...req.body
      };

      employeeModel.findByCpf.mockResolvedValue(null);
      employeeModel.createEmployee.mockResolvedValue(newEmployee);

      await employeeController.createEmployee(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Funcionário criado com sucesso!',
        employee: newEmployee
      });
    });

    // Testa Campo 'nome' ausente96+

    
    it('deve retornar 400 se o campo nome estiver ausente', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          cpf: '12345678901',
          contato: '123456789'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await employeeController.createEmployee(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'O campo nome é obrigatório.'
      });
    });
  });

  // Próximos testes

});