const tabelaDeTamanhos = {
    template: `
    <div class="div-img-tabela-tamanhos">
        <img src="/img/Tabela de medidas 1.png" width="100%" height="100%">
    </div>
    `
}

const informacoes = {
    template: `
    <div class="info">
        <h1>Calça Feminina Pina</h1>
        <ul>
            <li>Apresentam um corte moderno e detalhes de acabamento cuidadosamente elaborados.</li>
        </ul>
        <ul>
            <li>São versáteis, podendo ser usadas em eventos formais ou situações casuais.</li>
        </ul>
        <ul>
            <li>Consideradas uma opção eco-friendly devido ao uso de um tecido sustentável e de origem natural.</li>
        </ul>
    </div>
    `
}

const descricao = {
    template: `
    <div class="descricao">
        <h1>Calça Feminina Pina</h1>
        <p>As calças de pina são uma peça de vestuário
        distintiva e elegante, feitas de um tecido de alta qualidade
        . Pina é conhecido por sua durabilidade
        e suavidade ao toque, resultando em um ajuste confortável
        e luxuoso.</p>
    </div>
    `
}

const app = Vue.createApp({
    data() {
    return {
        componenteAtual: "informacoes",
        tamanhos: ['P', 'M', 'G'],
        tamanhoSelecionado: null,
        corSelecionada: null,
        sacolacheia: null,
        imagemPrincipal: "/img/Roupa 1.png",
        Imgsacola: "/img/Sacola.png",
        mostrarLista: false
    }
    },
    methods: {
        alterarPTabelaDeTamanhos() {
        this.componenteAtual = (this.componenteAtual === "tabelaDeTamanhos") ? "tabelaDeTamanhos" : "tabelaDeTamanhos"
    },

        alterarComponenteinfo() {
        this.componenteAtual = (this.componenteAtual === "informacoes") ? "informacoes" : "informacoes"
    },

        alterarPDescricao() {
        this.componenteAtual = (this.componenteAtual === "descricao") ? "descricao" : "descricao"
    },

        adicionarBorda(indice) {
        this.tamanhoSelecionado = indice;
    },
        adicionarBorda1(indice) {
        this.corSelecionada = indice;
    },
    alterarImagemPrincipal(corSelecionada) {
        if (corSelecionada === 1) {
            this.imagemPrincipal = "/img/Roupa 1.png"; 
        } else if (corSelecionada === 2) {
            this.imagemPrincipal = "/img/Roupa 1roxa.png";
        }
    },
    sacolacombolavermeia(sacolacheia) {
        this.Imgsacola = "/img/Sacola1.png"
    }
},
    components: {
        tabelaDeTamanhos,
        informacoes,
        descricao
    }
});



app.mount('#app');