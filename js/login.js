const { createApp } = Vue;

createApp({
    data() {
        return {};
    },
    methods: {
        loginConta() {
            this.postDadosLogin();
        },
        criarConta() {
            this.cadastrarUsuario();
        },
        cadastrarUsuario() {
            var criar_email = document.getElementById('criar_email').value;
            var criar_senha = document.getElementById('criar_senha').value;
            var confirmar_senha = document.getElementById('confirmar_senha').value;

            if (criar_senha === confirmar_senha && criar_senha !== '') {
                console.log(`criar_email: ${criar_email}, criar_senha: ${criar_senha}, confirmar_senha: ${confirmar_senha}`);
                fetch('/cadastrar-usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: criar_email, senha: criar_senha })
                })
                    .then(response => {
                        if (response.ok) {
                            // Usuário criado com sucesso, redirecionar para a tela de login
                            console.log('Usuário criado com sucesso');
                            window.location.href = "index.html";
                        } else {
                            alert('Erro ao criar usuário. Tente novamente.');
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao cadastrar usuário:', error);
                        alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
                    });
            } else {
                alert('As senhas não conferem ou o campo está vazio');
            }
        },
        postDadosLogin() {
            var email = document.getElementById('email').value;
            var senha = document.getElementById('senha').value;

            // Enviar dados de login para o servidor
            fetch('/validar-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, senha: senha })
            })
                .then(response => {
                    if (response.ok) {
                        // Login bem-sucedido, redirecionar ou fazer outras ações
                        console.log("Login bem-sucedido!");
                        window.location.href = "home.html"; // Redirecionar para a próxima página
                    } else {
                        // Tratar caso de falha de login
                        console.log("Credenciais inválidas!");
                        alert("Credenciais inválidas! Por favor, verifique seu email e senha.");
                        console.log(JSON.stringify({email: email, senha: senha}));
                    }
                })
                .catch(error => {
                    console.error('Erro ao tentar fazer login:', error);
                    alert("Erro ao tentar fazer login. Por favor, tente novamente mais tarde.");
                });
        }
    }
}).mount("#app");
