const connection = require('../../config/connection');

const employeeModel = {

  // Cria um funcionário
  async createEmployee(data) {
    const { nome, cpf, email, contato } = data;
    const query = `INSERT INTO employee (nome, cpf, email, contato) VALUES (?, ?, ?, ?)`;
    const [result] = await connection.execute(query, [nome, cpf, email, contato]);
    return result; 
  },

  // Busca por um CPF
  async findByCpf(cpf) {
    const query = `SELECT * FROM employee WHERE cpf = ?`;
    const [rows] = await connection.execute(query, [cpf]);
    return rows[0] || null; 
  },

};

module.exports = employeeModel;