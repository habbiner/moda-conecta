# 👗 Moda Conecta

Bem-vindo ao site Moda Conecta! Este projeto é uma aplicação web desenvolvida com Vue.js e Node.js que permite a criação e gestão de uma loja online para venda de vestimentas. O objetivo é disponibilizar os produtos de uma loja física em uma plataforma online acessível a qualquer pessoa com acesso à internet.

<hr>

# Índice 
* [Funcionalidades](#%EF%B8%8F-funcionalidades)
* [Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
* [Interface](#-interface)
* [Como Utilizar o Site Moda Conecta](#-como-utilizar-o-site-moda-conecta)
* [Estruturação do Banco de Dados](#-estruturação-do-banco-de-dados)
* [Como Clonar e Executar o Projeto](#-como-clonar-e-executar-o-projeto)
* [Design e Desenvolvimento do Projeto](#-design-e-desenvolvimento-do-projeto)
* [Licença](#licença)

<hr>

# 🖥️ Funcionalidades

* **Favoritos e Carrinho**: Adicione produtos aos favoritos ou ao carrinho para uma compra facilitada.
* **Detalhes do Produto**: Visualize informações detalhadas dos produtos, como tamanho, cor, descrição e avaliações.
* **Cadastro de Produtos**: Administre o catálogo de produtos com facilidade através do portal de administrador.
* **Cadastro de Usuários**: Gerencie usuários, incluindo administradores e clientes.
* **Login e Autenticação**: Sistema de login seguro com opções de recuperação de senha e login via redes sociais.
* **Feedback Visual**: Mensagens de erro personalizadas e animações para uma experiência de usuário agradável.

<hr>

# ⚙️ Tecnologias Utilizadas

- **Frontend**:
   - Vue.js: Framework JavaScript progressivo para a construção de interfaces de usuário.
   - HTML/CSS: Estrutura e estilo da aplicação.
- **Backend**:
   - Node.js: Ambiente de execução JavaScript para o servidor.
   - Express: Framework para construção de APIs.
- **Banco de Dados**:
   - Azure: Serviço de banco de dados na nuvem.
- **Hospedagem**:
   - Render: Hospedagem da API.
   - Netlify: Hospedagem da aplicação frontend.

<hr>

# 🎴 Interface

---

| Tela inicial                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------|
| ![Tela Inicial](img/home%20moda%20conecta.png)          |

| Tela de produtos       |  
|------------------------|  
| ![Tela de produtos](img/tela%20produto.png) |

---

| Detalhes do produto   |    Carrinho                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| ![Detalhes Produto](img/detalhe%20produto.png)       | ![Carrinho](#)               |

---

# 🧑‍💻 Como Utilizar o Site [Moda Conecta](https://moda-conecta.onrender.com/)

O site **Moda Conecta** permite que você busque e visualize informações detalhadas sobre vestimentas, bem como realize compras online. Siga as instruções abaixo para aproveitar todas as funcionalidades do site.

1. **Acessar o Site:**
   - Visite o site **[Moda Conecta](https://moda-conecta.onrender.com/)** para começar a explorar os produtos disponíveis.

2. **Busca e Navegação:**
   - Explore as opções do menu, como Loja, Promoções, Categorias e Produtos em Alta.
   - Adicione produtos aos favoritos ou ao carrinho para facilitar suas compras.

3. **Detalhes do Produto:**
   - Clique em um produto para ver detalhes como:
      - Nome
      - Valor
      - Descrição
      - Tamanhos disponíveis
      - Cor disponível
      - Código da peça
      - Quantidade disponível
      - Categoria
      - Imagem
      - Avaliações
   - Veja também itens relacionados na mesma página.

4. **Gerenciamento de Produtos (Admin):**
   - Acesse o portal de administrador para cadastrar novos produtos informando:
      - Nome do produto
      - Valor do produto
      - Descrição
      - Tamanhos disponíveis
      - Cor disponível
      - Código da peça
      - Quantidade disponível
      - Categoria
      - Imagem do produto

5. **Cadastro e Login:**
   - Registre-se como usuário fornecendo nome e senha.
   - Utilize opções de login via redes sociais ou recuperação de senha em caso de problemas de acesso.

6. **Carrinho e Pedidos:**
   - Visualize os produtos adicionados ao carrinho, modifique quantidades ou remova itens conforme necessário.
   - Acompanhe seus pedidos na seção "Meus Pedidos", onde você encontrará informações sobre data da compra, nome do produto, quantidade e opções de devolução.

### Benefícios Esperados
- **Aumento de vendas online:** Expansão do mercado para além da loja física.
- **Comodidade para o cliente:** Possibilidade de comprar de qualquer lugar e a qualquer hora.
- **Velocidade no pagamento:** Transações rápidas e sem filas.
- **Facilidade de acesso:** Plataforma intuitiva e de fácil navegação.
- **Disponibilidade de produtos:** Acesso a itens que podem não estar disponíveis em certas regiões.

<hr>

# 📊 Estruturação do Banco de Dados

A seguir, apresentamos a modelagem do banco de dados, incluindo o diagrama, tabelas e exemplos de CRUD utilizados.

## Diagrama de Banco de Dados

            +---------------------+          +---------------------+         +-------------------+
            |        Login        |          |     TamanhoPeca     |         |     CorPeca       |
            +---------------------+          +---------------------+         +-------------------+
            | email (PK)          |          | id_tamanho (PK)     |         | id_color (PK)     |
            | senha               |          | nome_tamanho        |         | nome_cor          |
            +---------------------+          +---------------------+         +-------------------+
                      |                                 |                            |
                      |                                 |                            |
                      |                +----------------+-----------------+          |
                      |                |                                  |          |
                      |                |                                  |          |
                      |                |                                  |          |
            +---------------------+    |         CadastroProduto          |          |
            |   id_peca (PK)      |    +----------------------------------+----------|
            |   nome_peca         |    | id_peca (PK)                     |
            |   valor_peca        |    | nome_peca                        |
            |   categoria_peca    |    | valor_peca                       |
            |   descricao_peca    |    | categoria_peca                   |
            |   codigo_peca       |    | descricao_peca                   |
            |   qtd_estoque       |    | codigo_peca                      |
            |   id_tamanho_peca   +--> | qtd_estoque                      |
            |   img_peca          |    | id_tamanho_peca (FK reference    |
            |   id_color_peca     +--> |   TamanhoPeca(id_tamanho))       |
            +---------------------+    | img_peca                         |
                                       | id_color_peca (FK references     |
                                       |   CorPeca(id_color))             |
                                       +----------------------------------+


## Tabelas do Banco de Dados

### Tabela: Login
| Coluna    | Tipo         | Descrição           |
|-----------|--------------|---------------------|
| email     | VARCHAR(255) | Chave primária.     |
| senha     | VARCHAR(100) | Senha do usuário.   |

### Tabela: TamanhoPeca
| Coluna        | Tipo         | Descrição           |
|---------------|--------------|---------------------|
| id_tamanho    | INT          | Chave primária.     |
| nome_tamanho  | VARCHAR(50)  | Nome do tamanho.    |

### Tabela: CorPeca
| Coluna    | Tipo         | Descrição           |
|-----------|--------------|---------------------|
| id_color  | INT          | Chave primária.     |
| nome_cor  | VARCHAR(50)  | Nome da cor.        |

### Tabela: CadastroProduto
| Coluna           | Tipo         | Descrição                            |
|------------------|--------------|--------------------------------------|
| id_peca          | INT          | Chave primária.                      |
| nome_peca        | VARCHAR(255) | Nome do produto.                     |
| valor_peca       | DECIMAL(10,2)| Valor do produto.                    |
| categoria_peca   | VARCHAR(100) | Categoria do produto.                |
| descricao_peca   | TEXT         | Descrição do produto.                |
| codigo_peca      | VARCHAR(50)  | Código da peça.                      |
| qtd_estoque      | INT          | Quantidade em estoque do produto.    |
| id_tamanho_peca  | INT          | Chave estrangeira referenciando TamanhoPeca.  |
| img_peca         | VARCHAR(255) | URL da imagem do produto.            |
| id_color_peca    | INT          | Chave estrangeira referenciando CorPeca.      |

## Exemplos de CRUD

### Cadastro produto (Create)

```javascript
app.post('/cadastro-produto', (req, res) => {
    const { nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca } = req.body;
    const query = `
        INSERT INTO CadastroProduto (nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca)
        VALUES ('${nome_peca}', ${valor_peca}, '${categoria_peca}', '${descricao_peca}', '${codigo_peca}', ${qtd_estoque}, ${id_tamanho_peca}, '${img_peca}', ${id_color_peca})
    `;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Produto cadastrado com sucesso.');
        })
        .catch(err => {
            console.error('Erro ao cadastrar produto:', err);
            res.status(500).send('Erro ao cadastrar produto.');
        });
});
```

### Consulta produto (Read)

```javascript
app.get('/produto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await executeStatement(`SELECT * FROM CadastroProduto WHERE id_peca = ${id}`);
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).send('Produto não encontrado.');
        }
    } catch (err) {
        console.error('Erro ao buscar produto:', err);
        res.status(500).send('Erro ao buscar produto.');
    }
});

app.get('/produto', async (req, res) => {
    try {
        const results = await executeStatement('SELECT * FROM CadastroProduto');
        console.log(`Resultados da consulta na tabela CadastroProduto:`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});
```

### Atualização produto (Update)

```javascript
app.put('/produto/:id', (req, res) => {
    const { nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE CadastroProduto
        SET nome_peca = '${nome_peca}', valor_peca = ${valor_peca}, categoria_peca = '${categoria_peca}', descricao_peca = '${descricao_peca}', codigo_peca = '${codigo_peca}', qtd_estoque = ${qtd_estoque}, id_tamanho_peca = ${id_tamanho_peca}, img_peca = '${img_peca}', id_color_peca = ${id_color_peca}
        WHERE id_peca = ${id}
    `;
    executeStatement(query)
        .then(() => {
            res.status(200).send(`Dados do produto com ID ${id} atualizados com sucesso.`);
        })
        .catch(err => {
            console.error('Erro ao atualizar dados do produto:', err);
            res.status(500).send('Erro ao atualizar dados do produto.');
        });
});
```

### Delete produto (Delete)

```javascript
app.delete('/produto/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM CadastroProduto WHERE id_peca = ${id}`;
    executeStatement(query)
        .then(() => {
            res.status(200).send(`Produto com ID ${id} excluído com sucesso.`);
        })
        .catch(err => {
            console.error('Erro ao excluir produto:', err);
            res.status(500).send('Erro ao excluir produto.');
        });
});
```
<hr>

# 📊 Configuração do Banco de Dados
O arquivo se encontra no caminho server/server.js com as seguintes configurações

```javascript
const config = {
    authentication: {
        options: {
            userName: "userName",
            password: "pass**"
        },
        type: "default"
    },
    server: "server.database.windows.net",
    options: {
        database: "server",
        encrypt: true,
        trustServerCertificate: false
    }
};
```

# 🚀 Como Clonar e Executar o Projeto
Siga os passos abaixo para clonar e executar o projeto localmente.

## Pré-requisitos
- Node.js instalado
- Git instalado

## Passos
1. **Clonar o repositório**
    ```bash
    git clone https://github.com/habbiner/moda-conecta.git
    cd moda-conecta
    ```

2. **Instalar dependências**
    ```bash
    npm install
    ```
   
3. **Executar o servidor**
    ```bash
    node server/server.js
    ```

## Acessar a aplicação
Abra o navegador e acesse http://localhost:8080

<hr>

# 🎨 Design e Desenvolvimento do Projeto

O design deste projeto foi criado no Figma ([Visualizar Figma](https://www.figma.com/design/nOKv25qWoFfauGl9TDUDsF/ModaConecta?node-id=0-1&t=erVDDNuwkbkSqaDl-1)) e o desenvolvimento foi realizado por:



- [Éllen Dias Farias](https://github.com/ellendias01)
- [Patrícia Nogueira Dias](https://github.com/poxapath)
- [Habbiner Soares de Andrade](https://github.com/habbiner)
- [Gabriel Fillip Ribeiro Ferreira](https://github.com/GabrielFillip)
- [Leonardo Cássio dos Santos](https://github.com/Leonardo-Cassio)

<hr>

