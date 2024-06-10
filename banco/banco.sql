-- Tabela Login
CREATE TABLE Login (
    email VARCHAR(255) PRIMARY KEY,
    senha VARCHAR(100) NOT NULL
);

-- Tabela Tamanho de Peca
CREATE TABLE TamanhoPeca (
    id_tamanho INT IDENTITY(1,1) PRIMARY KEY,
    nome_tamanho VARCHAR(50)
);

-- Tabela Cor de Peca
CREATE TABLE CorPeca (
    id_color INT IDENTITY(1,1) PRIMARY KEY,
    nome_cor VARCHAR(50)
);

-- Tabela Cadastro de Produto
CREATE TABLE CadastroProduto (
    id_peca INT IDENTITY(1,1) PRIMARY KEY,
    nome_peca VARCHAR(255) NOT NULL,
    valor_peca DECIMAL(10, 2) NOT NULL,
    categoria_peca VARCHAR(100),
    descricao_peca TEXT,
    codigo_peca VARCHAR(50),
    qtd_estoque INT DEFAULT 0,
    id_tamanho_peca INT,
    img_peca VARCHAR(255),
    id_color_peca INT,
    FOREIGN KEY (id_tamanho_peca) REFERENCES TamanhoPeca(id_tamanho),
    FOREIGN KEY (id_color_peca) REFERENCES CorPeca(id_color)
);

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
            |   id_peca (PK)      |    +----------------------------------+          |
            |   nome_peca         |    | id_peca (PK)                                |
            |   valor_peca        |    | nome_peca                                   |
            |   categoria_peca    |    | valor_peca                                  |
            |   descricao_peca    |    | categoria_peca                              |
            |   codigo_peca       |    | descricao_peca                              |
            |   qtd_estoque       |    | codigo_peca                                 |
            |   id_tamanho_peca   +--> | qtd_estoque                                 |
            |   img_peca          |    | id_tamanho_peca (FK reference               |
            |   id_color_peca     +--> |   TamanhoPeca(id_tamanho))                  |
            +---------------------+    | img_peca                                    |
                                       | id_color_peca (FK references                |
                                       |   CorPeca(id_color))                        |
                                       +---------------------------------------------+
