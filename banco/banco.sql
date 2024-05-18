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
