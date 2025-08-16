const connection = require("../../config/connection");

// Função para criar a tabela employee
async function createTableEmployee() {
    try {
        const conexao = await connection.getConnection();

        const createTableEmployee = `
            CREATE TABLE IF NOT EXISTS employee (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                cpf VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                contato VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await conexao.query(createTableEmployee);
        console.log('Tabela "employee" criada com sucesso!');
        conexao.release(); // Libera a conexão de volta ao pool
    } catch (err) {
        console.error('Erro ao criar tabela "usuarios":', err);
    }
}

module.exports = createTableEmployee;