const express = require('express');
const { Connection, Request } = require("tedious");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const config = {
    authentication: {
        options: {
            userName: "admin-habbiner",
            password: "Mudar123**"
        },
        type: "default"
    },
    server: "banco-fatec.database.windows.net",
    options: {
        database: "banco-fatec",
        encrypt: true,
        trustServerCertificate: false
    }
};

async function executeStatement(query) {
    return new Promise((resolve, reject) => {
        const connection = new Connection(config);

        connection.on("connect", (err) => {
            if (err) {
                reject(err);
                return;
            }

            const rows = [];
            const request = new Request(query, (err, rowCount) => {
                if (err) {
                    connection.close();
                    reject(err);
                    return;
                }

                console.log(`${rowCount} linhas retornadas.`);
                connection.close();
                resolve(rows);
            });

            request.on('row', columns => {
                rows.push(columns);
            });

            connection.execSql(request);
        });

        connection.connect();
    });
}

// Rota para a página principal
app.get('/', (req, res) => {
    res.status(200).send("Conexão bem-sucedida ao banco de dados");
});

// Rota para execução do SELECT * FROM Login
app.get('/login', async (req, res) => {
    try {
        const results = await executeStatement('SELECT * FROM Login');
        console.log(`Resultados da consulta na tabela Login:`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});

// Rota para execução do SELECT * FROM TamanhoPeca
app.get('/tamanho-peca', async (req, res) => {
    try {
        const results = await executeStatement('SELECT * FROM TamanhoPeca');
        console.log(`Resultados da consulta na tabela TamanhoPeca:`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});

// Rota para execução do SELECT * FROM CorPeca
app.get('/cor-peca', async (req, res) => {
    try {
        const results = await executeStatement('SELECT * FROM CorPeca');
        console.log(`Resultados da consulta na tabela CorPeca:`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});

// Rota para execução do SELECT * FROM CadastroProduto
app.get('/cadastro-produto', async (req, res) => {
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

// Rota POST para a tabela Login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = `INSERT INTO Login (email, senha) VALUES ('${email}', '${senha}')`;
    executeStatement(query, (err) => {
        if (err) {
            res.status(500).send('Erro ao inserir na tabela Login.');
        } else {
            res.status(200).send('Dados inseridos com sucesso na tabela Login.');
        }
    });
});

// Rota POST para a tabela TamanhoPeca
app.post('/tamanho-peca', (req, res) => {
    const { nome_tamanho } = req.body;
    const query = `INSERT INTO TamanhoPeca (nome_tamanho) VALUES ('${nome_tamanho}')`;
    executeStatement(query, (err) => {
        if (err) {
            res.status(500).send('Erro ao inserir na tabela TamanhoPeca.');
        } else {
            res.status(200).send('Dados inseridos com sucesso na tabela TamanhoPeca.');
        }
    });
});

// Rota POST para a tabela CorPeca
app.post('/cor-peca', (req, res) => {
    const { nome_cor } = req.body;
    const query = `INSERT INTO CorPeca (nome_cor) VALUES ('${nome_cor}')`;
    executeStatement(query, (err) => {
        if (err) {
            res.status(500).send('Erro ao inserir na tabela CorPeca.');
        } else {
            res.status(200).send('Dados inseridos com sucesso na tabela CorPeca.');
        }
    });
});

// Rota POST para a tabela CadastroProduto
app.post('/cadastro-produto', (req, res) => {
    const { nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca } = req.body;
    const query = `
        INSERT INTO CadastroProduto (nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca)
        VALUES ('${nome_peca}', ${valor_peca}, '${categoria_peca}', '${descricao_peca}', '${codigo_peca}', ${qtd_estoque}, ${id_tamanho_peca}, '${img_peca}', ${id_color_peca})
    `;
    executeStatement(query, (err) => {
        if (err) {
            res.status(500).send('Erro ao inserir na tabela CadastroProduto.');
        } else {
            res.status(200).send('Dados inseridos com sucesso na tabela CadastroProduto.');
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando na porta ${port}`);
});
