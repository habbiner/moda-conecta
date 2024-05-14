new Vue({
    el: '#app',
    data: {
        mostrarDiv1: true,
        mostrarDiv3: true,
        mostrarDiv5: true, 
        mostrarDiv6: true, 
        mostrarDiv7: true, 
        mostrarDiv4: false,
        mostrarPix: false,
        mostrarCartaoCredito: false,
        mostrarCartaoDebito: false
        
    },
    methods: {
        trocarDiv() {
            if (this.mostrarDiv1) {
                this.mostrarDiv1 = false;
                this.mostrarDiv3 = false;
                this.mostrarDiv4 = true
                 // Você precisa redefinir mostrarDiv4 aqui, caso contrário, ele permanecerá falso
            } else {
                this.mostrarDiv3 = false;
                this.mostrarDiv1 = true;
                this.mostrarDiv4 = false // Caso contrário, a próxima vez que trocar, mostrarDiv1 nunca será verdadeira novamente
            }
        },
        trocarDivs1() {
            this.mostrarDiv3 = false;
            this.mostrarDiv5 = false;
            this.mostrarDiv4 = false
            
        },
        trocarDivs2() {
            this.mostrarDiv3 = false;
            this.mostrarDiv5 = true;
            this.mostrarDiv6 = false;
            this.mostrarDiv7 = false;
            this.mostrarDiv8 = true;
        },
        toggleMostrarInformacoesPagamento(secao) {
            // Definir qual seção deve ser mostrada com base no parâmetro
            if (secao === 'pix') {
                // Mostrar a seção do Pix
                this.mostrarPix = true;
                this.mostrarCartaoCredito = false;
                this.mostrarCartaoDebito = false;
            } else if (secao === 'credito') {
                // Mostrar a seção do Cartão de Crédito
                this.mostrarPix = false;
                this.mostrarCartaoCredito = true;
                this.mostrarCartaoDebito = false;
            } else if (secao === 'debito') {
                // Mostrar a seção do Cartão de Débito
                this.mostrarPix = false;
                this.mostrarCartaoCredito = false;
                this.mostrarCartaoDebito = true;
            }
        }
        
    }
});




