// Iniciar express
const express = require ('express');
const createTableEmployee = require('./scripts/createTableEmployee');
const app = express();
const PORT = process.env.PORT || 3000;

// Config JSON response
app.use(express.json())

// Load routes
const employeeRoutes = require('./routes/employeeRoutes');

// Use routes
app.use('/employee', employeeRoutes);

// Inicia o servidor somente após criar a tabela no banco
async function iniciarServidor() {
    try {
        // Função para criar a tabela employee no database
        await createTableEmployee();

        // Iniciar servidor
        app.listen(3000,() => console.log(`Servidor rodando na porta http://localhost:${PORT}`));
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
    }
}

iniciarServidor();

module.exports = app;