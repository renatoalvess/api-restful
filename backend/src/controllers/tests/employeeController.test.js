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

  describe('findEmployee', () => {
    it('deve buscar todos os funcionários', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const employees = [
        { id: 1, nome: 'Test User 1', email: 'test1@example.com', cpf: '11111111111', contato: '111111111' },
        { id: 2, nome: 'Test User 2', email: 'test2@example.com', cpf: '22222222222', contato: '222222222' }
      ];

      employeeModel.findEmployee.mockResolvedValue(employees);

      await employeeController.findEmployee(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(employees);
    });
  });

  describe('findById', () => {
    it('deve retornar 404 ao tentar buscar um funcionário que não existe', async () => {
      const req = {
        params: { id: 999 }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      employeeModel.findById.mockResolvedValue(null);

      await employeeController.findById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Funcionário não encontrado.'
      });
    });
  });

  describe('updateEmployee', () => {
    it('deve atualizar um funcionário com sucesso', async () => {
      const req = {
        params: { id: 1 },
        body: {
          nome: 'Test User Updated',
          email: 'test.updated@example.com',
          cpf: '12345678901',
          contato: '987654321'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      employeeModel.findById.mockResolvedValue({ id: 1, ...req.body });
      employeeModel.updateEmployee.mockResolvedValue({ affectedRows: 1 });

      await employeeController.updateEmployee(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Funcionário atualizado com sucesso!'
      });
    });

    it('deve retornar 400 se algum campo estiver faltando', async () => {
      const req = {
        params: { id: 1 },
        body: {
          nome: 'Test User Updated'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      employeeModel.findById.mockResolvedValue({ id: 1 });

      await employeeController.updateEmployee(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'O campo email é obrigatório.'
      });
    });
  });

});