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

// Busca todos os funcionários
  async findEmployee() {
      const [rows] = await connection.execute('SELECT * FROM employee ORDER BY nome ASC');
      return rows;
  },

// Busca um funcionário pelo ID
  async findById(id) {
    const query = `SELECT * FROM employee WHERE id = ?`;
    const [rows] = await connection.execute(query, [id]);
    return rows[0] || null; 
  },

  // Atualiza um funcionário
  async updateEmployee(id, data) {
    const { nome, cpf, email, contato } = data;
    const query = `UPDATE employee SET nome = ?, cpf = ?, email = ?, contato = ? WHERE id = ? `;
    const [result] = await connection.execute(query, [nome, cpf, email, contato, id]);
    return result;
  },

};

module.exports = employeeModel;