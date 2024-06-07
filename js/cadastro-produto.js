const { createApp } = Vue;

createApp({
    data() {
        return {};
    },
    methods: {
        cadastrarProduto() {
            var nome = document.getElementById('nome').value;
            var valor = document.getElementById('valor').value;
            var categoria = document.getElementById('categoria').value;
            var descricao = document.getElementById('descricao').value;
            var codigo_peca = document.getElementById('codigo_peca').value;
            var total_estoque = document.getElementById('total_estoque').value;

            // Capturando o valor selecionado no tamanhoPeca
            var tamanhoPeca = document.getElementById('tamanhoPeca').value;

            if (tamanhoPeca == 1) {
                console.log('Tamanho P')
            } else if (tamanhoPeca == 2) {
                console.log('Tamanho M')
            } else if (tamanhoPeca == 3) {
                console.log('Tamanho G')
            } else {
                console.log('Tamanho GG')
            }

            var produto = {
                nome: nome,
                valor: valor,
                categoria: categoria,
                descricao: descricao,
                codigo_peca: codigo_peca,
                total_estoque: total_estoque,
                tamanhoPeca: tamanhoPeca
            };

            //console.log(JSON.stringify(produto));
        }
    }
}).mount("#app");
