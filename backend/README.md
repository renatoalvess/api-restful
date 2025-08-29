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

### 1. POST /employee

### Criação de Funcionário

Esta rota é usada para cadastrar um novo funcionário no sistema.

- **Método:** `POST`
- **URL:** `URL: http://localhost:3000/employee`
- **Corpo da Requisição (Body):**
   ```bash
   {
      "nome": "Roberto",
      "cpf": "313.456.783-00",
      "email": "roberto.alves@gmail.com",
      "contato":"88997979797"
   }

**Respostas:**
- **Status 201 Created:** Retorna o funcionário criado.
   ```bash
   {
      "message": "Funcionário criado com sucesso!",
      "employee": {
         "fieldCount": 0,
         "affectedRows": 1,
         "insertId": 9,
         "info": "",
         "serverStatus": 2,
         "warningStatus": 0,
         "changedRows": 0
      }
   }

- **Status 400 Bad Request:** Campos obrigatórios não fornecidos.
   ```bash
   {
      "message": "O campo nome é obrigatório."
   }

- **Status 409 Conflict:** CPF já cadastrado.
   ```bash
   {
      "message": "O CPF informado já está cadastrado."
   }

### 2. GET /employee

### Buscar Todos os Funcionários
  
Esta rota é usada para buscar todos os funcionários cadastrados no sistema.
  
- **Método:** `GET`
- **URL:** `URL: http://localhost:3000/employee/buscar`
- **Corpo da Requisição (Body): Nenhum
  
**Respostas:**
- **Status 200 OK: Retorna uma lista com todos os funcionários cadastrados.
   ```bash
   [
      {
         "id": 6,
         "nome": "Harisson Senior Dev",
         "cpf": "333.456.789-00",
         "contato": "88997979797",
         "email": "harisson.alves@gmail.com",
         "created_at": "2025-08-14T00:43:26.000Z"
      },
      {
         "id": 5,
         "nome": "José Valbério Tibério",
         "cpf": "555.456.789-00",
         "contato": "8824242424",
         "email": "valberio.gold@gmail.com",
         "created_at": "2025-08-14T00:43:13.000Z"
      },
      {
         "id": 1,
         "nome": "Renato Alves",
         "cpf": "123.456.789-00",
         "contato": "88997979797",
         "email": "renato.alves@gmail.com",
         "created_at": "2025-08-07T01:27:41.000Z"
      }
   ]  
  
- **Status 500 Internal Server Error: Ocorreu um erro ao buscar os funcionários.
   ```bash
   {
      "Ocorreu um erro ao buscar os funcionários."
   }

### 3. PUT /employee/id

### Atualização de Funcionário
  
Esta rota é usada para modificar um funcionário já cadastrado no sistema.
  
- **Método:** `PUT`
- **URL:** `URL: http://localhost:3000/employee/8`
- **Corpo da Requisição (Body):**
   ```bash
   {
      "nome": "Roberto Silva da Costa",
      "cpf": "313.456.789-00",
      "contato": "88997979797",
      "email": "roberto.alves@gmail.com"
   }
  
**Respostas:**
- **Status 200 OK:** Funcionário atualizado com sucesso.
   ```bash  
   {
      "message": "Funcionário atualizado com sucesso!"
   }  

- **Status  404 Not Found:** Funcionário não encontrado com o ID fornecido.
   ```bash  
   {
      "message": "Funcionário não encontrado."
   }

- **Status 500 Internal Server Error:**  Erro interno do servidor durante a atualização.

### 4. DELETE /employee/id

### Excluir um Funcionário
  
Esta rota é usada para remover um funcionário do sistema pelo seu ID.

- **Método:** `DELETE`
- **URL:** `http://localhost:3000/employee/8`
- **Parâmetros da URL: id: (inteiro, obrigatório) O ID do funcionário a ser deletado.

**Respostas:**
- **Status 200 OK: Retorna uma mensagem de sucesso após a deleção.
   ```bash
   {
      "message": "Funcionário deletado com sucesso."
   }

- **Status 400 Bad Request: O ID não foi fornecido na URL.
   ```bash  
   {
      "message": "Funcionário não encontrado."
   }

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

## Possíveis usos da nossa API

Nossa API pode ser utilizada por empresas, organizações e desenvolvedores para facilitar a gestão de funcionários. Ela permite cadastrar, consultar e atualizar dados de colaboradores de forma rápida e segura, podendo ser integrada a sistemas internos de RH, aplicativos de controle de acesso ou plataformas de automação de processos. Com isso, negócios ganham agilidade, reduzem erros manuais e melhoram a organização das informações, tornando o gerenciamento de pessoas mais eficiente.

## Colaboradores

| <img src="https://avatars.githubusercontent.com/u/170210459?v=4" width="100px;"><br>**[Renato Alves](https://github.com/renatoalvess)** | <img src="https://avatars.githubusercontent.com/u/179520057?v=4" width="100px;"><br>**[Harisson Alencar](https://github.com/harissonalen)** | <img src="https://avatars.githubusercontent.com/u/179228881?v=4" width="100px;"><br>**[José Valbério](https://github.com/JoseValberio)** |
|:---:|:---:|:---:|
