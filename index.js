// Seleciona o elemento select
var select = document.getElementById("parcelas");

// Loop de 1 a 12 para adicionar as opções de parcelamento
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i + "x";
    option.textContent = i + "x de R$ " + (139 / i).toFixed(2) + " sem juros"; // Calcula o valor da parcela
    select.appendChild(option);
}
