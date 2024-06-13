const express = require('express');
const { Connection, Request } = require("tedious");
const bodyParser = require('body-parser');
const path = require('path');

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

app.use(express.static(path.join(__dirname, '..')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/img', express.static(path.join(__dirname, '../img')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

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

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = `INSERT INTO Login (email, senha) VALUES ('${email}', '${senha}')`;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Dados inseridos com sucesso na tabela Login.');
        })
        .catch(err => {
            console.error('Erro ao inserir na tabela Login:', err);
            res.status(500).send('Erro ao inserir na tabela Login.');
        });
});

app.post('/validar-login', async (req, res) => {
    const { email, senha } = req.body;
    const query = `SELECT * FROM Login WHERE email = '${email}' AND senha = '${senha}'`;

    try {
        const results = await executeStatement(query);
        if (results.length > 0) {
            res.status(200).send('Login bem-sucedido!');
        } else {
            res.status(401).send('Credenciais inválidas!');
        }
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});

app.post('/cadastrar-usuario', async (req, res) => {
    const { email, senha } = req.body;
    const query = `INSERT INTO Login (email, senha) VALUES ('${email}', '${senha}')`;

    try {
        await executeStatement(query);
        console.log('Usuário cadastrado com sucesso.');
        res.status(200).send('Usuário cadastrado com sucesso.');
    } catch (err) {
        console.error('Erro ao cadastrar o usuário:', err);
        res.status(500).send('Erro ao cadastrar o usuário.');
    }
});



app.post('/tamanho-peca', (req, res) => {
    const { nome_tamanho } = req.body;
    const query = `INSERT INTO TamanhoPeca (nome_tamanho) VALUES ('${nome_tamanho}')`;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Dados inseridos com sucesso na tabela TamanhoPeca.');
        })
        .catch(err => {
            console.error('Erro ao inserir na tabela TamanhoPeca:', err);
            res.status(500).send('Erro ao inserir na tabela TamanhoPeca.');
        });
});

app.post('/cor-peca', (req, res) => {
    const { nome_cor } = req.body;
    const query = `INSERT INTO CorPeca (nome_cor) VALUES ('${nome_cor}')`;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Dados inseridos com sucesso na tabela CorPeca.');
        })
        .catch(err => {
            console.error('Erro ao inserir na tabela CorPeca:', err);
            res.status(500).send('Erro ao inserir na tabela CorPeca.');
        });
});

app.post('/cadastro-produto', (req, res) => {
    const { nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca } = req.body;
    const query = `
        INSERT INTO CadastroProduto (nome_peca, valor_peca, categoria_peca, descricao_peca, codigo_peca, qtd_estoque, id_tamanho_peca, img_peca, id_color_peca)
        VALUES ('${nome_peca}', ${valor_peca}, '${categoria_peca}', '${descricao_peca}', '${codigo_peca}', ${qtd_estoque}, ${id_tamanho_peca}, '${img_peca}', ${id_color_peca})
    `;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Dados inseridos com sucesso na tabela CadastroProduto.');
        })
        .catch(err => {
            console.error('Erro ao inserir na tabela CadastroProduto:', err);
            res.status(500).send('Erro ao inserir na tabela CadastroProduto.');
        });
});

app.get('/pedidos', async (req, res) => {
    try {
        const results = await executeStatement('SELECT * FROM Pedidos');
        console.log(`Resultados da consulta na tabela Pedidos:`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).send('Erro ao executar a consulta');
    }
});

app.post('/pedidos', (req, res) => {
    const { cliente_id, data_pedido, valor_total } = req.body;
    const query = `
        INSERT INTO Pedidos (cliente_id, data_pedido, valor_total)
        VALUES (${cliente_id}, '${data_pedido}', ${valor_total})
    `;
    executeStatement(query)
        .then(() => {
            res.status(200).send('Dados inseridos com sucesso na tabela Pedidos.');
        })
        .catch(err => {
            console.error('Erro ao inserir na tabela Pedidos:', err);
            res.status(500).send('Erro ao inserir na tabela Pedidos.');
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando na porta ${port}`);
});
