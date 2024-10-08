# Meu Maranhão API

Esta API fornece informações sobre atrativos turísticos, cidades e regiões do estado do Maranhão. A API foi desenvolvida usando Node.js, Express e Prisma ORM, com MongoDB como banco de dados, e foi implantada no Vercel.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para executar código JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para criar o servidor e gerenciar rotas.
- **Prisma ORM**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados MongoDB.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações sobre atrativos, cidades e regiões.
- **Vercel**: Plataforma de hospedagem utilizada para o deploy da API.

## Estrutura do Projeto

O projeto contém as seguintes pastas e arquivos principais:

- **`src/controllers`**: Contém os controladores para manejar as requisições HTTP.
- **`src/routes`**: Contém as definições das rotas para atrativos, cidades e regiões.
- **`src/services`**: Contém as lógicas de serviço para interagir com o banco de dados.

## Funcionalidades

A API oferece as seguintes funcionalidades:

### Listar Atrativos

**Endpoint**: `GET /atrativos`

- **Descrição**: Retorna uma lista de todos os atrativos turísticos.
- **Respostas**:
  - `200 OK`: Retorna uma lista de atrativos turísticos.
  - `500 Internal Server Error`: Se ocorrer um erro durante a busca dos atrativos.

### Buscar Atrativo por ID

**Endpoint**: `GET /atrativos/:id`

- **Descrição**: Retorna um atrativo turístico específico pelo seu ID.
- **Respostas**:
  - `200 OK`: Retorna o atrativo correspondente ao ID fornecido.
  - `404 Not Found`: Se o atrativo com o ID fornecido não for encontrado.
  - `500 Internal Server Error`: Se ocorrer um erro durante a busca do atrativo.

### Listar Cidades

**Endpoint**: `GET /cidades`

- **Descrição**: Retorna uma lista de todas as cidades cadastradas.
- **Respostas**:
  - `200 OK`: Retorna uma lista de cidades.
  - `500 Internal Server Error`: Se ocorrer um erro durante a busca das cidades.

### Buscar Cidade por ID

**Endpoint**: `GET /cidades/:id`

- **Descrição**: Retorna uma cidade específica pelo seu ID.
- **Respostas**:
  - `200 OK`: Retorna a cidade correspondente ao ID fornecido.
  - `404 Not Found`: Se a cidade com o ID fornecido não for encontrada.
  - `500 Internal Server Error`: Se ocorrer um erro durante a busca da cidade.

### Listar Cidades por Região

**Endpoint**: `GET /regiao/:id`

- **Descrição**: Retorna uma lista de cidades pertencentes a uma região específica.
- **Respostas**:
  - `200 OK`: Retorna uma lista de cidades da região correspondente ao ID fornecido.
  - `500 Internal Server Error`: Se ocorrer um erro durante a busca das cidades por região.

## Instalação

Para rodar esta API localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
