# API RESTful - Projeto Integrado - Universidade Federal do Cariri (UFCA)
API RESTful simples com quatro rotas (CRUD), desenvolvida com Node.js, Express e MySQL.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) (gerenciado pelo Node.js)
- MySQL: Você precisará de um servidor MySQL local para o banco de dados.
- MySQL Workbench (ou similar): Para criar o banco de dados manualmente.

## Configuração do Banco de Dados
Esta API não cria o banco de dados para você. Você deve criá-lo manualmente no seu servidor MySQL.

Abra o MySQL Workbench (ou qualquer cliente MySQL de sua preferência).

- Execute o seguinte comando SQL para criar o banco de dados:
    ```bash
    CREATE DATABASE IF NOT EXISTS capivara_api;

## Configuração das Credenciais
- Crie um arquivo .env na pasta raiz do seu projeto (backend/) e adicione suas credenciais do banco de dados. Este arquivo é crucial para a conexão da sua API com o MySQL.
    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha
    DB_NAME=capivara_api

## Como Instalar e Rodar o Projeto
1. Clone este repositório:
   ```bash
   https://github.com/renatoalvess/api-restful

2. Acesse o diretório do projeto:
   ```bash
   cd backend

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   npm start

- A tabela employee será criada no banco de dados que você configurou.

5. Acesse no navegador:
   ```bash
   http://localhost:3000


## Rotas da API
A API possui as seguintes rotas:

1. POST /employee
- Descrição: Cria um novo funcionário.
URL: http://localhost:3000/employee

Método: POST
- Exemplo do Corpo da Requisição no Bruno Api (JSON):
    ```bash
    {
        "nome": "Renato ALves",
        "cpf": "123.456.789-00",
        "email": "renato@email.com",
        "contato": "88991234567"
    }

2. GET /employee

3. PUT /employee

4. DELETE /employee

## Testando com o Bruno API
O projeto já inclui um arquivo bruno.json.

1. Abra o Bruno API.
2. Clique em "Open Collection" e selecione a pasta raiz do seu projeto (backend/).
3. A coleção "UFCA-api-restful" será carregada automaticamente, e você poderá testar as rotas facilmente.

## Como Contribuir como colaborador
1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature

3. Faça as alterações desejadas e commit:
   ```bash
   git commit -m "Adiciona nova feature"

4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature

5. Abra um Pull Request.

## possiveis usos da nossa API

Nossa API pode ser utilizada por empresas, organizações e desenvolvedores para facilitar a gestão de funcionários. 
Ela permite cadastrar, consultar e atualizar dados de colaboradores de forma rápida e segura, podendo ser integrada a 
sistemas internos de RH, aplicativos de controle de acesso ou plataformas de automação de processos. Com isso, 
negócios ganham agilidade, reduzem erros manuais e melhoram a organização das informações, tornando o gerenciamento 
de pessoas mais eficiente. 
