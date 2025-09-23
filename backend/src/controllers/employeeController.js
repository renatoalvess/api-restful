const employeeModel = require('../models/employeeModel');

const employeeController = {
  // Cria um funcionário
  async createEmployee(req, res) {
    try {
      const { nome, email, cpf, contato } = req.body;

      // Validações dos campos obrigatórios
      if (!nome) {
        return res.status(400).json({ message: 'O campo nome é obrigatório.'})
      }
      if (!email) {
        return res.status(400).json({ message: 'O campo email é obrigatório.'})
      }
      if (!cpf) {
        return res.status(400).json({ message: 'O campo cpf é obrigatório.'})
      }
      if (!contato) {
        return res.status(400).json({ message: 'O campo contato é obrigatório.'})
      }

      // Checa se o cpf já existe
      const checkCpf = await employeeModel.findByCpf(cpf);
      if (checkCpf) {
        return res.status(409).json({ message: 'O CPF informado já está cadastrado.'});
      }

      const data = { nome, email, cpf, contato };
      const newEmployee = await employeeModel.createEmployee(data);

      return res.status(201).json({
        message: 'Funcionário criado com sucesso!',
        employee: newEmployee,
      });
    } catch (err) {
      console.error('Erro ao criar funcionário:', err);
      return res.status(500).json({message: 'Ocorreu um erro ao criar o funcionário.',error: err.message,});
    }
  },

// Busca todos os funcionários
  async findEmployee(req, res) {
    try {
      const employees = await employeeModel.findEmployee();
      return res.status(200).json(employees);
    } catch (err) {
      console.error('Erro ao buscar funcionários:', err);
      return res.status(500).json({
        message: 'Ocorreu um erro ao buscar os funcionários.',
        error: err.message,
      });
    }
  },

  // Busca todos os funcionários
  async findById(req, res) {
    try {
      const { id } = req.params;

      // 2. Verifique se o funcionário existe
      const employee = await employeeModel.findById(id);
      if (!employee) {
        return res.status(404).json({ message: 'Funcionário não encontrado.' });
      }
      const employees = await employeeModel.findById(id);
      return res.status(200).json(employees);
    } catch (err) {
      console.error('Erro a buscar funcionário:', err);
      return res.status(500).json({
        message: 'Ocorreu um erro ao buscar o funcionário.',
        error: err.message,
      });
    }
  },

  // Atualiza um funcionário
  async updateEmployee(req, res) {
    try {
      const { id } = req.params;
      const { nome, cpf, email, contato } = req.body;

      // 1. Verifique se o ID e os dados foram fornecidos
      if (!id) {
        return res.status(400).json({ message: 'O ID do funcionário é obrigatório.' });
      }

      // 2. Verifique se o funcionário existe
      const employee = await employeeModel.findById(id);
      if (!employee) {
        return res.status(404).json({ message: 'Funcionário não encontrado.' });
      }

      // 3. Prepare os dados para atualização
      const data = { nome, cpf, email, contato };

      // Validações dos campos obrigatórios

      if (!nome) {
        return res.status(400).json({ message: 'O campo nome é obrigatório.'})
      }
      if (!email) {
        return res.status(400).json({ message: 'O campo email é obrigatório.'})
      }
      if (!cpf) {
        return res.status(400).json({ message: 'O campo cpf é obrigatório.'})
      }
      if (!contato) {
        return res.status(400).json({ message: 'O campo contato é obrigatório.'})
      }

      // 4. Atualiza o funcionário
      const result = await employeeModel.updateEmployee(id, data);
      
      // 5. Retorne a resposta de sucesso
      return res.status(200).json({ message: 'Funcionário atualizado com sucesso!' });

    } catch (err) {
      console.error('Erro ao atualizar funcionário:', err);
      return res.status(500).json({
        message: 'Ocorreu um erro ao atualizar o funcionário.',
        error: err.message,
      });
    }
  },

   // Deleta um funcionário
  async deleteEmployee(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'O ID do funcionário é obrigatório.' });
    }

    const employee = await employeeModel.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado.' });
    }

    const result = await employeeModel.deleteEmployee(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Funcionário não encontrado ou já deletado.' });
    }

    return res.status(200).json({ message: 'Funcionário deletado com sucesso.' });

  } catch (err) {
    console.error('Erro ao deletar funcionário:', err);
    return res.status(500).json({
      message: 'Ocorreu um erro ao deletar o funcionário.',
      error: err.message,
    });
  }
},

};

module.exports = employeeController;